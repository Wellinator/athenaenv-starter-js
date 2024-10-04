declare interface IColor {
  new: (r: number, g: number, b: number, a: number) => IColor;
  getR: () => number;
  getG: () => number;
  getB: () => number;
  getA: () => number;
  setR: (R: number) => void;
  setG: (G: number) => void;
  setB: (B: number) => void;
  setA: (A: number) => void;
}
declare const Color: IColor;

