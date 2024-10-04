// {"name": "Athena develop environment", "author": "Wellinator", "version": "04072023", "icon": "render_icon.png", "file": "3dcollision.js"}

import { font } from "./scripts/init/init-font.js";
import { SetupScreen } from "./scripts/init/init-screen.js";
import { SetupRender } from "./scripts/init/init-render.js";

// Init screen configuration
SetupScreen();

// Init render configuration
SetupRender();

Screen.setFrameCounter(true);
Screen.setVSync(false);

// Change your root folder to "render" so we can work with file path magic :p
// os.chdir("../assets");

console.log(`### Loading .obj...`);
let christTheRedeemer = new RenderObject("./assets/Christ the Redeemer-bl.obj");
christTheRedeemer.setPipeline(Render.PL_DEFAULT);

Camera.position(0.0, 0.0, 100.0);
Camera.type(Camera.LOOKAT);

let pad = Pads.get();

Lights.set(0, Lights.DIRECTION, 0.0, 1.0, -1.0);
Lights.set(0, Lights.DIFFUSE, 0.8, 0.8, 0.8);

Lights.set(1, Lights.DIRECTION, 0.0, -1.0, 0.0);
Lights.set(1, Lights.DIFFUSE, 0, 1, 0);

let lx = null;
let ly = null;
let rx = null;
let ry = null;

let savedlx = 0.0;
let savedly = 0.0;
let savedrx = 0.0;
let savedry = 0.0;

const gray = Color.new(40, 40, 40, 128);

let rot = 0.0;

while (true) {
  Screen.clear(gray);
  Camera.update();
  pad.update();

  rot += 0.002;
  if (rot > 360) rot = rot - 360;

  lx = (pad.lx > 25 || pad.lx < -25 ? pad.lx : 0) / 1024.0;
  ly = (pad.ly > 25 || pad.ly < -25 ? pad.ly : 0) / 1024.0;
  savedlx = savedlx - lx;
  savedly = savedly - ly;

  rx = (pad.rx > 25 || pad.rx < -25 ? pad.rx : 0) / 10240.0;
  ry = (pad.ry > 25 || pad.ry < -25 ? pad.ry : 0) / 10240.0;
  savedrx = savedrx - rx;
  savedry = savedry - ry;

  Camera.target(savedrx, savedry, 25.0);

  christTheRedeemer.draw(0.0, 8.0, 0.0, 135.0, rot, 0.0);

  font.print(
    10,
    10,
    'Teste'
  );

  Screen.flip();
}
