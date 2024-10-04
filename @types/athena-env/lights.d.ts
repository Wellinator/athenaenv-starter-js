declare interface LightType {}

declare const Lights: {
  /** @description You have 4 lights to use in 3D scenes, use set to configure them */
  set(id: number, type: LightType, x: number, y: number, z: number): void;

  AMBIENT: LightType;
  DIFFUSE: LightType;
  SPECULAR: LightType;
  DIRECTION: LightType;
};
