declare interface ScreenMode {}
declare const NTSC: ScreenMode;
declare const DTV_480p: ScreenMode;
declare const PAL: ScreenMode;
declare const DTV_576p: ScreenMode;
declare const DTV_720p: ScreenMode;
declare const DTV_1080i: ScreenMode;

declare interface ScreenColorMode {}
declare const CT16: ScreenColorMode;
declare const CT16S: ScreenColorMode;
declare const CT24: ScreenColorMode;
declare const CT32: ScreenColorMode;

declare interface ScreenZbufferingColorMode {}
declare const Z16: ScreenZbufferingColorMode;
declare const Z16S: ScreenZbufferingColorMode;
declare const Z24: ScreenZbufferingColorMode;
declare const Z32: ScreenZbufferingColorMode;

declare interface ScreenInterlace {}
declare const INTERLACED: ScreenInterlace;
declare const PROGRESSIVE: ScreenInterlace;

declare interface ScreenField {}
declare const FIELD: ScreenField;
declare const FRAME: ScreenField;

declare interface ScreenCanvas {
  /** @description Available modes: NTSC, DTV_480p, PAL, DTV_576p, DTV_720p, DTV_1080i. */
  mode: ScreenMode;
  /** @description Screen width. Default: 640. */
  width: number;
  /** @description Screen height. Default: 448 on NTSC consoles, 512 on PAL consoles. */
  height: number;
  /** @description Color mode. Available colormodes: CT16, CT16S, CT24, CT32. */
  psm: ScreenColorMode;
  /** @description Available interlaces: INTERLACED, PROGRESSIVE. */
  interlace: ScreenInterlace;
  /** @description Available fields: FIELD, FRAME. */
  field: ScreenField;
  /** @description Enable or disable double buffering(bool). */
  double_buffering: boolean;
  /** @description Enable or disable Z buffering (3D buffering)(bool). */
  zbuffering: boolean;
  /** @description ZBuffering color mode. Available zbuffer colormodes: Z16, Z16S, Z24, Z32. */
  psmz: ScreenZbufferingColorMode;
}

declare interface IScreen {
  /**
   * @description Makes the specified function behave like a main loop, when you don't need to clear or flip the screen because it's done automatically.
   */
  display: () => void;

  /**
   * @description Sets a constant clear color for Screen.display function.
   */
  clearColor: (color: IColor) => void;

  /**
   * @description Clears screen with the specified color. If you don't specify any argument, it will use black as default.
   */
  clear: (color: IColor) => void;

  /**
   * @description Run the render queue and jump to the next frame, i.e.: Updates your screen.
   */
  flip: () => void;

  /**
   * @description Returns the total of free Video Memory.
   */
  getFreeVRAM: () => number;

  /**
   * @description  Toggles VSync, which makes the framerate stable in 15, 30, 60(depending on the mode) on screen.
   */
  setVSync: (OnOff: boolean) => void;

  /**
   * @description  Toggles frame counting and FPS collecting.
   */
  setFrameCounter: (OnOff: boolean) => void;

  /**
   * @description  Waits for a vertical sync.
   */
  waitVblankStart: (OnOff: boolean) => void;

  /**
   * @description  Get Frames per second measure within the specified frame_interval in msec. Dependant on Screen.setFrameCounter(true) to work.
   */
  getFPS: (frame_interval: number) => number;

  /**
   * @description  Get actual video mode parameters.
   * @returns ScreenCanvas
   */
  getMode: () => ScreenCanvas;

  /**
   * @description  Set the current video mode, get an video mode object as an argument.
   */
  setMode: (canvas: ScreenCanvas) => void;
}

declare const Screen: IScreen;
