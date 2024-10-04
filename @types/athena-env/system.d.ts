declare interface Directory {
  name: string;
  size: number;
  directory: boolean;
}

declare interface MCInfo {
  type: number;
  freemem: number;
  format: number;
}

declare interface CPUInfo {
  implementation: number;
  revision: number;
  FPUimplementation: number;
  FPUrevision: number;
  ICacheSize: number;
  DCacheSize: number;
  RAMSize: number;
  MachineSize: number;
}

declare interface GPUInfo {
  id: number;
  revision: number;
}

declare interface MemoryStats {
  /**
   * @description Kernel + Native code size in RAM
   */
  core: number;

  /**
   * @description Kernel + Native stack size
   */
  nativeStack: number;

  /**
   * @description Dynamic allocated memory tracking
   */
  allocs: number;

  /**
   * @description All above, but combined
   */
  used: number;
}

declare interface FileProgress {
  current: number;
  final: number;
}

declare const System: {
  listDir(path: string): Array<Directory>;
  removeDirectory(path: string): void;
  copyFile(source: string, dest: string): void;
  moveFile(source: string, dest: string): void;
  rename(source: string, dest: string): void;
  sleep(sec: number): void;
  exitToBrowser(): void;
  setDarkMode(value: any): void;

  /**
   * @description It only works with SCPH-500XX and later models.
   * */
  getTemperature(): void;

  getMCInfo(slot: number): MCInfo;
  getCPUInfo(): CPUInfo;
  getGPUInfo(): GPUInfo;
  getMemoryStats(): MemoryStats;
  threadCopyFile(source: string, dest: string): void;
  getFileProgress(): FileProgress;
};
