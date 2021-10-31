import * as THREE from "three";

export default class SolarSystem extends THREE.Object3D {
  update(t) {
    this.children.forEach((elem) => {
      elem.update(t);
    });
  }
}
