type AchiveFile = number;

declare interface AchiveFileList {
  name: string;
  size: number;
  mtime: number;
}

declare const Archive: {
  open: (fname: string) => AchiveFile;
  list: (fname: string) => Array<AchiveFileList>;
  extractAll: (fname: string) => void;
  close: (file: AchiveFile) => void;
  untar: (fname: string) => void;
};
