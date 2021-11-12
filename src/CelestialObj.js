import * as THREE from "three";

export class CelestialObject extends THREE.Mesh {
  constructor(name, radius, texture, material, movement) {
    let geometry = new THREE.SphereGeometry(radius, 64, 64);
    if (!material)
      material = new THREE.MeshPhongMaterial({
        map: new THREE.TextureLoader().load(texture),
      });
    super(geometry, material);

    this.movement = movement;
    this.name = name;
    this.matrixAutoUpdate = false;
  }

  update(t) {
    this.matrix = this.movement.update(t);

    this.children.forEach((sat) => {
      if (sat instanceof CelestialObject) {
        sat.update(t);
      }
    });
  }
}

export class Movement {
  constructor(distance, rotationSpeed, revolutionSpeed, rotationPhase) {
    this.distance = distance;
    this.rotationSpeed = rotationSpeed;
    this.revolutionSpeed = revolutionSpeed;
    this.rotationPhase = rotationPhase;
  }

  update(t) {
    let tr = new THREE.Matrix4().makeTranslation(this.distance, 0, 0);
    let rot = new THREE.Matrix4().makeRotationY(
      this.rotationSpeed * t + this.rotationPhase
    );
    let rev = new THREE.Matrix4().makeRotationY(this.revolutionSpeed * t);
    return new THREE.Matrix4().multiplyMatrices(rot, tr).multiply(rev);
  }
}
