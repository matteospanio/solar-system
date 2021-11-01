import * as THREE from "three";
import { CelestialObject, Movement } from "./CelestialObj";
import vertexShader from "./shaders/vertex.glsl";
import fragmentShader from "./shaders/fragment.glsl";
import glowFragment from "./shaders/glowFragment.glsl";
import glowVertex from "./shaders/glowVertex.glsl";

export default class Sun extends CelestialObject {
  constructor(name, radius, texture) {
    let material = new THREE.ShaderMaterial({
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
      uniforms: {
        sunTexture: {
          value: new THREE.TextureLoader().load(texture),
        },
      },
    });
    //let material = new THREE.MeshPhongMaterial({
    //  map: new THREE.TextureLoader().load(texture),
    //  emissive: 0xffffff,
    //});
    super(name, radius, texture, material, new Movement(0, 0, 0.0001, 0));

    this.light = new THREE.PointLight(0xffffaa, 0.8, 100);
    this.light.castShadow = true;
    this.castShadow = false;
    this.receiveShadow = false;
    this.add(this.light);
    this.add(new SunGlow());
  }
}

class SunGlow extends THREE.Mesh {
  constructor() {
    const geometry = new THREE.SphereGeometry(6, 64, 64);
    const material = new THREE.ShaderMaterial({
      vertexShader: glowVertex,
      fragmentShader: glowFragment,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
    });
    super(geometry, material);
  }
}
