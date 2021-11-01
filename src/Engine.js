import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export default class Application {
  constructor() {
    this.scene = new THREE.Scene();
    this.light = new THREE.AmbientLight(0xffffff, 0.15);
    this.camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000000
    );

    this.renderer = new THREE.WebGL1Renderer({ antialias: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    this.light.position.set(-1, 2, 4);
    this.camera.position.set(0, 0, 3);

    this.scene.add(this.light);
    this.scene.add(this.camera);

    document.body.appendChild(this.renderer.domElement);
    new OrbitControls(this.camera, this.renderer.domElement);
    window.addEventListener(
      "resize",
      () => {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();

        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      },
      false
    );

    //this.composer = new EffectComposer(this.renderer);
    //this.renderPass = new RenderPass(this.scene, this.camera);
    //this.renderPass.renderToScreen = false;
    //this.composer.addPass(this.renderPass);
  }

  get dt() {
    let now = new Date().getTime();
    let dt = now - this.time;
    this.time = now;
    return dt;
  }

  renderLoop = () => {
    requestAnimationFrame(this.renderLoop);
    this.update(this.dt);
    this.renderer.render(this.scene, this.camera);
    //this.composer.render(this.dt);
  };

  start() {
    this.time = new Date().getTime();
    this.renderLoop();
  }

  update(dt) {
    throw new Error("Not implemented");
  }
}
