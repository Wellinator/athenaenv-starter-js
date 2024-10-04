declare const Keyboard: {
  /**
   * @description Initialize keyboard routines.
   */
  init: () => void;

  /**
   * @description Get keyboard current char.
   */
  get: () => number;

  /**
   * @description Set keyboard repeat rate.
   */
  setRepeatRate: (msec: number) => void;

  /**
   * @description Sets keyboard to block(or not) the thread waiting for the next key to be pressed.
   */
  setBlockingMode: (mode: number) => number;

  /**
   * @description Destroy keyboard routines.
   */
  deinit: () => void;
};
