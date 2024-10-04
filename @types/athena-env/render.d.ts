declare interface IRenderPipeline {}

declare interface IVertex {
  // position
  x: number;
  y: number;
  z: number;

  // normal
  n1: number;
  n2: number;
  n3: number;

  // ST
  s: number;
  t: number;

  // RGBA Color
  r: number;
  g: number;
  b: number;
  a: number;
}

declare interface IRender {
  vertex: (
    // position
    x: number,
    y: number,
    z: number,

    // normal
    n1: number,
    n2: number,
    n3: number,

    // ST
    s: number,
    t: number,

    // RGBA Color
    r: number,
    g: number,
    b: number,
    a: number
  ) => IVertex;

  setView: (aspect: number, fov: number) => void;

  /** @description Colors and lights disabled. */
  PL_NO_LIGHTS_COLORS: IRenderPipeline;

  /** @description Colors, lights and textures disabled. */
  PL_NO_LIGHTS_COLORS_TEX: IRenderPipeline;

  /** @description Lights disabled, colors still working. */
  PL_NO_LIGHTS: IRenderPipeline;

  /** @description Textures and lights disabled, colors still working. */
  PL_NO_LIGHTS_TEX: IRenderPipeline;

  /** @description Default for textured models. Lights and colors enabled. */
  PL_DEFAULT: IRenderPipeline;

  /** @description Default for non-textured models. Lights and colors enabled. */
  PL_DEFAULT_NO_TEX: IRenderPipeline;
}

declare const Render: IRender;

declare class RenderObject {
  /**
   * @description Load simple WaveFront OBJ files or vertex arrays.
   * MTL is supported on OBJs (including per-vertex colors and multi-texturing).
   * If you don't have a MTL file but you want to bind a texture on it,
   * just pass the image as a second argument if you want to use it.
   * */
  constructor(path: string, texture?: Image);
  constructor(vertex_array: Array<IVertex>, texture?: Image);

  /**
   * @description Draws the object on screen.
   * */
  draw(
    pos_x: number,
    pos_y: number,
    pos_z: number,
    rot_x: number,
    rot_y: number,
    rot_z: number
  ): void;

  /**
   * @description Draws object bounding box.
   * */
  drawBounds(
    pos_x: number,
    pos_y: number,
    pos_z: number,
    rot_x: number,
    rot_y: number,
    rot_z: number
  ): void;

  /**
   * @description Gets the nth texture object from the model.
   * */
  getTexture(id: number): Image;

  /**
   * @description Changes or sets the nth texture on models.
   * */
  setTexture(id: number, texture: Image, range: number): void;

  /**
   * @description Returns the current rendering pipeline loaded for the model.
   * */
  getPipeline(): IRenderPipeline;

  /**
   * @description Sets the current pipeline for the model
   * */
  setPipeline(pipeline: IRenderPipeline): void;
}
