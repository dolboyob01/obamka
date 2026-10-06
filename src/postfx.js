import * as THREE from 'three';
import { CFG } from './config.js';

// Полный кадр: ACES уже на рендере. Здесь виньетка, зерно, bloom окон, hurt.
export class PostFX {
  constructor(renderer) {
    this.renderer = renderer;
    this.rt = new THREE.WebGLRenderTarget(320, 180, {
      minFilter: THREE.LinearFilter,
      magFilter: THREE.LinearFilter,
      depthBuffer: true,
    });
    this.scene = new THREE.Scene();
    this.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    this.material = new THREE.ShaderMaterial({
      uniforms: {
        tDiffuse: { value: this.rt.texture },
        time: { value: 0 },
        hurt: { value: 0 },
        fade: { value: 0 },
        pulse: { value: 0 },
        res: { value: new THREE.Vector2(1, 1) },
      },
      vertexShader: `varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,
      fragmentShader: `
        uniform sampler2D tDiffuse; uniform float time, hurt, fade, pulse; uniform vec2 res; varying vec2 vUv;
        float rand(vec2 co){ return fract(sin(dot(co, vec2(12.9898,78.233))) * 43758.5453); }
        vec3 bloom(vec2 uv){
          vec2 px = 1.0 / max(res, vec2(1.0));
          vec3 a = vec3(0.0);
          a += max(texture2D(tDiffuse, uv + px * vec2( 2.0, 0.0)).rgb - 0.78, 0.0);
          a += max(texture2D(tDiffuse, uv + px * vec2(-2.0, 0.0)).rgb - 0.78, 0.0);
          a += max(texture2D(tDiffuse, uv + px * vec2( 0.0, 2.0)).rgb - 0.78, 0.0);
          a += max(texture2D(tDiffuse, uv + px * vec2( 0.0,-2.0)).rgb - 0.78, 0.0);
          a += max(texture2D(tDiffuse, uv + px * vec2( 3.5, 3.5)).rgb - 0.78, 0.0) * 0.6;
          a += max(texture2D(tDiffuse, uv + px * vec2(-3.5, 3.5)).rgb - 0.78, 0.0) * 0.6;
          a += max(texture2D(tDiffuse, uv + px * vec2( 3.5,-3.5)).rgb - 0.78, 0.0) * 0.6;
          a += max(texture2D(tDiffuse, uv + px * vec2(-3.5,-3.5)).rgb - 0.78, 0.0) * 0.6;
          return a * 0.18;
        }
        void main(){
          vec2 uv = vUv;
          uv += (rand(vec2(floor(uv.y*90.0), floor(time*20.0))) - 0.5) * 0.008 * pulse;
          vec3 c = texture2D(tDiffuse, uv).rgb + bloom(uv);
          vec2 d = uv - 0.5;
          float v = 1.0 - dot(d, d) * (0.38 + pulse * 1.1);
          c *= clamp(v, 0.0, 1.0);
          c += (rand(uv * vec2(1.0, 1.7) + fract(time)) - 0.5) * 0.018;
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
    const w = Math.max(160, Math.floor(window.innerWidth * CFG.pixelScale));
    const h = Math.max(90, Math.floor(window.innerHeight * CFG.pixelScale));
    this.rt.setSize(w, h);
    this.material.uniforms.res.value.set(w, h);
  }

  render(scene, camera, dt) {
    this.material.uniforms.time.value += dt;
    this.renderer.setRenderTarget(this.rt);
    this.renderer.render(scene, camera);
    this.renderer.setRenderTarget(null);
    this.renderer.render(this.scene, this.camera);
  }
}
