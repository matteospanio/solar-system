import * as THREE from "three";
import { SphereGeometry } from "three";
import { CelestialObject, Movement } from "./CelestialObj";
import Application from "./Engine";
import SolarSystem from "./SolarSystem";
import Stars from "./Stars";
import Sun from "./Sun";

class ActualApp extends Application {
  constructor() {
    super();
    this.t = 0;

    this.stars = new Stars();
    this.scene.add(this.stars);

    this.solarSystem = new SolarSystem();
    this.scene.add(this.solarSystem);

    let earthMovement = new Movement(20, 0.0005, 0.005, 0.0);
    let earth = new CelestialObject(
      "Earth",
      1.0,
      "img/earth.jpg",
      null,
      earthMovement
    );

    let sun = new Sun("Sun", 3, "./img/sun.jpg");

    this.solarSystem.add(sun);
    this.solarSystem.add(earth);
  }

  update(dt) {
    this.t += dt;
    this.solarSystem.update(this.t);
  }
}

window.onload = () => {
  const app = new ActualApp();

  app.camera.position.z = 25;
  app.start();
};
