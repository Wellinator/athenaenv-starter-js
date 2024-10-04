declare type TimerInstance = number;

declare const Timer: {
  new: () => TimerInstance;
  getTime(timer: TimerInstance): number;
  setTime(timer: TimerInstance, value: number): void;
  destroy(timer: TimerInstance): void;
  pause(timer: TimerInstance): void;
  resume(timer: TimerInstance): void;
  reset(timer: TimerInstance): void;
  isPlaying(timer: TimerInstance): boolean;
};
