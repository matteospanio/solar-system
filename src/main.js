import { CelestialObject, Movement } from "./CelestialObj";
import Application from "./Engine";
import SolarSystem from "./SolarSystem";
import Stars from "./Stars";
import Sun from "./Sun";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

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

    let moonMovement = new Movement(3, 0.0, 0.0, 0.0);
    let moon = new CelestialObject(
      "Moon",
      1.0 / 2.0,
      "img/moon.jpg",
      null,
      moonMovement
    );
    earth.add(moon);

    let marsMovement = new Movement(35, 0.0003, 0.001, 0.5);
    let mars = new CelestialObject(
      "Mars",
      0.9,
      "img/mars.jpg",
      null,
      marsMovement
    );
    this.solarSystem.add(mars);

    let jupiterMovement = new Movement(50, 0.0001, 0.0005, 1.0);
    let jupiter = new CelestialObject(
      "Jupiter",
      1.5,
      "img/jupiter.jpg",
      null,
      jupiterMovement
    );
    this.solarSystem.add(jupiter);

    let ganymedeMovement = new Movement(5, 0.0, 0.0, 0.0);
    let ganymede = new CelestialObject(
      "Ganymede",
      0.7,
      "img/ganymede.jpg",
      null,
      ganymedeMovement
    );
    jupiter.add(ganymede);

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
