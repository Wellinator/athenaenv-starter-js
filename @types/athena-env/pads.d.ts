declare interface PadTypes {
  DIGITAL: any;
  ANALOG: any;
  DUALSHOCK: any;
}

declare interface PadEventTypes {
  PRESSED: any;
  JUST_PRESSED: any;
  NON_PRESSED: any;
}

declare interface Pad {
  /** @description Updates all pads pressed and stick positions data. */
  update(): void;
  /** @description Checks if a button is being pressed (continuously). */
  pressed(button: PadsButtons): boolean;
  /** @description Checks if a button was pressed only once. */
  justPressed(button: PadsButtons): boolean;
  /** @description Sets the pad object to listen events defined by Pads.newEvent, so it doesn't need to be updated. */
  setEventHandler(): void;

  /** @description Button state on the current check. */
  btns: any;
  /** @description Button state on the last check. */
  old_btns: any;

  /** @description Left analog horizontal position (left = -127, default = 0, right = 128). */
  lx: number;
  /** @description Left analog vertical position (up = -127, default = 0, down = 128). */
  ly: number;
  /** @description Right analog horizontal position (left = -127, default = 0, right = 128). */
  rx: number;
  /** @description Right analog vertical position (up = -127, default = 0, down = 128). */
  ry: number;
}

declare interface PadsButtons {
  SELECT: any;
  START: any;
  UP: any;
  RIGHT: any;
  DOWN: any;
  LEFT: any;
  TRIANGLE: any;
  CIRCLE: any;
  CROSS: any;
  SQUARE: any;
  L1: any;
  R1: any;
  L2: any;
  R2: any;
  L3: any;
  R3: any;
}

declare interface PadsMethods {
  /**
   * @description Returns a pad object
   * @param {number} port number 0 or 1
   *  */
  get(port?: number): Pad;

  /**
   * @description Gets gamepad type in the specified port.
   * @param {number} port number 0 or 1
   *  */
  getType(port: number): PadTypes;

  getState(port: number): number;

  /**
   * @description Get button pressure level.
   * @param {number} port number 0 or 1
   * @param {button} button Pads button
   *
   *  */
  getPressure(port: number, button: PadsButtons): number;

  /**
   * @description Rumble your gamepad.
   * @param {number} port number 0 or 1
   * @param {number} big number between 1 and 255
   * @param {number} small number between 1 and 255
   *  */
  rumble(port: number, big: number, small: number): void;

  setLED(r: number, g: number, b: number, a?: number): void;

  /**
   * @description Creates an asynchronous pad event, returns the event id. Remember to set the pad object event handler first!
   * @returns {number} event_id - id of event
   *  */
  newEvent(button: PadsButtons, kind: PadEventTypes, fn: () => any): number;

  /**
   * @description Creates an asynchronous pad event, returns the event id. Remember to set the pad object event handler first!
   * @returns {number} event_id - id of event
   *  */
  deleteEvent(event_id: number): void;
}

declare type IPad = PadTypes & PadEventTypes & PadsButtons & PadsMethods;

declare const Pads: IPad;
