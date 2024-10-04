interface FontTenxtSize {
  width: number;
  height: number;
}

declare class Font {
  constructor(font_file_path?: string);
  print: (x: number, y: number, text: string) => void;
  getTextSize: (text: string) => FontTenxtSize;
  scale: number;
  color: IColor;
}
