declare const RAM: any;
declare const VRAM: any;
type ImageStorageMode = typeof RAM | typeof VRAM;

declare const LINEAR: any;
declare const NEAREST: any;
type ImageFilter = typeof LINEAR | typeof NEAREST;

type ImageArrayBuffer = Array<any>;
type ImagePaletteArrayBuffer = Array<any>;

declare class Image {
  constructor(path: string, mode?: ImageStorageMode, async_list?: ImageList);

  //Image drawing size, default value is the original image size.
  width: number;
  height: number;

  //Beginning of the area that will be drawn from the image, the default value is 0.0.
  startx: number;
  starty: number;

  //End of the area that will be drawn from the image, the default value is the original image size.
  endx: number;
  endy: number;

  //Define image rotation angle, default value is 0.0.
  angle: number;

  //Define image tinting, default value is Color.new(255, 255, 255, 128).
  color: IColor;

  //Choose between LINEAR or NEAREST, default value is NEAREST.
  filter: ImageFilter;

  //Returns image real size occupied in memory.
  size: number;

  //Returns image bits per-pixel qantity.
  bpp: number;

  //If true, your texture was loaded in RAM, else, VRAM.
  delayed: boolean;

  //The image pixel ArrayBuffer.
  pixels: ImageArrayBuffer;

  //If is a palette image, it has a palette ArrayBuffer right here.
  palette: ImagePaletteArrayBuffer;

  getR: () => number;
}
