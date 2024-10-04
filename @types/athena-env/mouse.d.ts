declare interface MouseState {
  x: number;
  y: number;
  wheel: number;
  buttons: number;
}

declare const Mouse: {
  /**
   * @description Initialize mouse routines.
   */
  init: () => void;

  /**
   * @description Returns mouse actual state
   */
  get: () => MouseState;

  /**
   * @description Set mouse x and y bounds.
   */
  setBoundary: (minx: number, maxx: number, miny: number, maxy: number) => void;

  /**
   * @description  Get mouse mode(absolute or relative).
   */
  getMode: () => number;

  /**
   * @description  Set mouse mode.
   */
  setMode: (mode: number) => void;

  /**
   * @description  Get mouse acceleration.
   */
  getAccel: () => number;

  /**
   * @description  Get mouse acceleration.
   */
  setAccel: (acceleration: number) => void;

  /**
   * @description Set mouse pointer position.
   */
  setPosition: (x: number, y: number) => void;
};
