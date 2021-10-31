import * as THREE from "three";

export default class Stars extends THREE.Points {
  constructor() {
    let geometry = new THREE.BufferGeometry();
    let vertices = [];
    for (let i = 0; i < 10000; i++) {
      vertices.push(THREE.MathUtils.randFloatSpread(2000)); // x
      vertices.push(THREE.MathUtils.randFloatSpread(2000)); // y
      vertices.push(THREE.MathUtils.randFloatSpread(2000)); // z
    }
    geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(vertices, 3)
    );
    super(geometry, new THREE.PointsMaterial({ color: 0x888888 }));
  }
}
