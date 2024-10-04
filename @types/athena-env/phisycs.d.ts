declare type Point = { x: number; y: number; z: number };

declare type Box = FixedArray<Point, 8>;

declare interface Sphere {
  x: number;
  y: number;
  z: number;
  radius: number;
}

declare const Physics: {
  createBox(x: number, y: number, z: number): Box;
  createSphere(x: number, y: number, z: number, radius: number): Sphere;
  boxBoxCollide(
    boxA: Box,
    boxA_X: number,
    boxA_Y: number,
    boxA_Z: number,
    boxB: Box,
    boxB_X: number,
    boxB_Y: number,
    boxB_Z: number
  ): Point | undefined;

  sphereBoxCollide(
    sphereX: number,
    sphereY: number,
    sphereZ: number,
    sphereRariud: number,
    box: Box,
    boxX: number,
    boxY: number,
    boxZ: number
  ): Point | undefined;

  sphereSphereCollide(
    sphereA_X: number,
    sphereA_Y: number,
    sphereA_Z: number,
    sphereA_Rariud: number,
    sphereB_X: number,
    sphereB_Y: number,
    sphereB_Z: number,
    sphereB_Rariud: number
  ): Point | undefined;
};
