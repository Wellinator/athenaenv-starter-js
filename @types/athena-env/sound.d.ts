declare type Audio = number;

declare const Sound: {
  /**
   * @description Set sound volume (If slot is specified, it will change ADPCM slot volume, else it will change master volume)
   */
  setVolume(volume: number, slot: number): void;

  load(path: string): Audio;

  /**
   * @description Play loaded audio (ADPCM: If slot isn't specified, it will use 0.)
   */
  play(audio: Audio, slot: number): void;

  free(audio: Audio): void;

  /**
   * @description Is audio playing? (*Doesn't apply for ADPCM)
   */
  isPlaying(): boolean;

  getDuration(audio: Audio): number;

  /**
   * @description *Doesn't apply for ADPCM
   */
  repeat(onOff: boolean): void;

  /**
   * @description *Doesn't apply for ADPCM
   */
  pause(audio: Audio): void;

  /**
   * @description *Doesn't apply for ADPCM
   */
  resume(audio: Audio): void;

  restart(): void;

  setPosition(audio: Audio, position: number): void;

  getPosition(audio: Audio): number;

  deinit(): void;
};
