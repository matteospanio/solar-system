import * as THREE from "three";
import { CelestialObject, Movement } from "./CelestialObj";

export default class Sun extends CelestialObject {
  constructor(name, radius, texture) {
    let material = new THREE.MeshPhongMaterial({
      map: new THREE.TextureLoader().load(texture),
      emissive: 0xffffff,
    });
    super(name, radius, texture, material, new Movement(0, 0, 0.01, 0));
    this.light = new THREE.PointLight(0xa2ffae, 0.8, 100);
    this.light.castShadow = true;
    this.castShadow = false;
    this.receiveShadow = false;
    this.add(this.light);
  }
}
