import * as THREE from 'three';
import { CFG } from './config.js';

// Низкое разрешение + Bayer dither, как в Return of the Obra Dinn.
// mood: 0 обычный, 1 охота (красный), 2 полёт (бледно-голубой).
export class PostFX {
  constructor(renderer) {
    this.renderer = renderer;
    this.rt = new THREE.WebGLRenderTarget(320, 180, {
      minFilter: THREE.NearestFilter,
      magFilter: THREE.NearestFilter,
      generateMipmaps: false,
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
        mood: { value: 0 },
        res: { value: new THREE.Vector2(320, 180) },
      },
      vertexShader: `varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,
      fragmentShader: `
        uniform sampler2D tDiffuse;
        uniform float time, hurt, fade, pulse, mood;
        uniform vec2 res;
        varying vec2 vUv;

        float bayer8(vec2 p) {
          float x = mod(floor(p.x), 8.0);
          float y = mod(floor(p.y), 8.0);
          float d = 0.0;
          d += mod(x, 2.0) * 32.0;
          d += mod(y, 2.0) * 16.0;
          d += mod(floor(x * 0.5), 2.0) * 8.0;
          d += mod(floor(y * 0.5), 2.0) * 4.0;
          d += mod(floor(x * 0.25), 2.0) * 2.0;
          d += mod(floor(y * 0.25), 2.0) * 1.0;
          return (d + 0.5) / 64.0;
        }

        void main(){
          vec2 uv = vUv;
          uv += (bayer8(vec2(floor(uv.y * 90.0), floor(time * 18.0))) - 0.5) * 0.008 * pulse;
          vec3 src = texture2D(tDiffuse, uv).rgb;
          float g = dot(src, vec3(0.299, 0.587, 0.114));
          g = pow(clamp(g, 0.0, 1.0), 0.78);
          g = smoothstep(0.02, 0.90, g);

          float levels = 6.0;
          float q = g * (levels - 1.0);
          float lo = floor(q);
          float f = fract(q);
          float band = (f > bayer8(vUv * res)) ? lo + 1.0 : lo;
          float t = clamp(band / (levels - 1.0), 0.0, 1.0);

          vec3 dark = vec3(0.035, 0.034, 0.032);
          vec3 light = vec3(0.90, 0.87, 0.78);
          if (mood > 1.5) {
            dark = vec3(0.04, 0.07, 0.12);
            light = vec3(0.78, 0.90, 0.98);
          } else if (mood > 0.5) {
            dark = vec3(0.18, 0.04, 0.05);
            light = vec3(0.98, 0.86, 0.82);
          }

          vec3 c = mix(dark, light, t);
          float mx = max(src.r, max(src.g, src.b));
          float mn = min(src.r, min(src.g, src.b));
          float sat = mx - mn;
          float warmGlow = smoothstep(0.32, 0.58, mx) * smoothstep(0.14, 0.36, src.r - src.b);
          float redSign = smoothstep(0.20, 0.42, src.r) * smoothstep(0.07, 0.20, src.r - max(src.g, src.b));
          float keep = clamp(max(warmGlow, redSign), 0.0, 1.0);
          vec3 accent = mix(dark * src / max(g, 0.06), src, t);
          c = mix(c, clamp(accent, 0.0, 1.0), keep);
          vec2 dlt = uv - 0.5;
          float vig = 1.0 - dot(dlt, dlt) * (0.35 + pulse * 0.9);
          c *= clamp(vig, 0.55, 1.0);
          c = mix(c, vec3(0.42, 0.04, 0.04), hurt * (0.28 + dot(dlt, dlt) * 1.6));
          c = mix(c, dark, fade);
          gl_FragColor = vec4(c, 1.0);
        }`,
      depthTest: false, depthWrite: false,
    });
    this.quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), this.material);
    this.scene.add(this.quad);
    this.mood = 0;
    this.resize();
  }

  resize() {
    const w = Math.max(160, Math.floor(window.innerWidth * CFG.pixelScale));
    const h = Math.max(90, Math.floor(window.innerHeight * CFG.pixelScale));
    this.rt.setSize(w, h);
    this.rt.texture.minFilter = THREE.NearestFilter;
    this.rt.texture.magFilter = THREE.NearestFilter;
    this.rt.texture.generateMipmaps = false;
    this.material.uniforms.res.value.set(w, h);
  }

  render(scene, camera, dt) {
    this.material.uniforms.time.value += dt;
    const want = this.mood;
    const cur = this.material.uniforms.mood.value;
    this.material.uniforms.mood.value += (want - cur) * Math.min(1, dt * 3.2);
    this.renderer.setRenderTarget(this.rt);
    this.renderer.render(scene, camera);
    this.renderer.setRenderTarget(null);
    this.renderer.render(this.scene, this.camera);
  }
}
