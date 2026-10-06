import * as THREE from 'three';
import { CFG } from './config.js';

// Кадр рисуется в низком разрешении и растягивается без сглаживания + постеризация цвета, виньетка, зерно.
export class PostFX {
  constructor(renderer) {
    this.renderer = renderer;
    this.rt = new THREE.WebGLRenderTarget(320, 180, { minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter, depthBuffer: true });
    this.scene = new THREE.Scene();
    this.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    this.material = new THREE.ShaderMaterial({
      uniforms: {
        tDiffuse: { value: this.rt.texture }, time: { value: 0 }, hurt: { value: 0 }, fade: { value: 0 }, pulse: { value: 0 }, levels: { value: 36 },
      },
      vertexShader: `varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,
      fragmentShader: `
        uniform sampler2D tDiffuse; uniform float time, hurt, fade, pulse, levels; varying vec2 vUv;
        float rand(vec2 co){ return fract(sin(dot(co, vec2(12.9898,78.233))) * 43758.5453); }
        void main(){
          vec2 uv = vUv;
          // лёгкое искажение при пульсе (призрак рядом)
          uv += (rand(vec2(floor(uv.y*90.0), floor(time*20.0))) - 0.5) * 0.01 * pulse;
          vec3 c = texture2D(tDiffuse, uv).rgb;
          // десатурация и постеризация
          float g = dot(c, vec3(0.299, 0.587, 0.114));
          c = mix(vec3(g), c, 0.9);
          c = floor(c * levels + 0.5) / levels;
          vec2 d = uv - 0.5; float v = 1.0 - dot(d, d) * (0.55 + pulse * 1.4);
          c *= clamp(v, 0.0, 1.0);
          c += (rand(uv * vec2(1.0, 1.7) + fract(time)) - 0.5) * 0.03;
          // урон — красная кромка
          c = mix(c, vec3(0.45, 0.02, 0.02), hurt * (0.35 + dot(d,d) * 2.0));
          c = mix(c, vec3(0.0), fade);
          gl_FragColor = vec4(c, 1.0);
        }`,
      depthTest: false, depthWrite: false,
    });
    this.quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), this.material);
    this.scene.add(this.quad);
    this.resize();
  }

  resize() {
    const w = Math.max(160, Math.floor(window.innerWidth * CFG.pixelScale)), h = Math.max(90, Math.floor(window.innerHeight * CFG.pixelScale));
    this.rt.setSize(w, h);
  }

  render(scene, camera, dt) {
    this.material.uniforms.time.value += dt;
    this.renderer.setRenderTarget(this.rt);
    this.renderer.render(scene, camera);
    this.renderer.setRenderTarget(null);
    this.renderer.render(this.scene, this.camera);
  }
}
