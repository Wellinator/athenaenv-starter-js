declare const Draw: {
  /** @description Draws a pixel on the specified color and position on the screen. */
  point(x: number, y: number, color: IColor): void;

  /** @description Draws a rectangle on the specified color, position and size on the screen. */
  rect(
    x: number,
    y: number,
    width: number,
    height: number,
    color: IColor
  ): void;

  /** @description Draws a line on the specified colors and position on the screen. */
  line(x: number, y: number, x2: number, y2: number, color: IColor): void;

  /** @description Draws a circle on the specified color, position, radius and fill on the screen. */
  circle(
    x: number,
    y: number,
    radius: number,
    color: IColor,
    filled?: boolean
  ): void;

  /** @description Draws a triangle on the specified points positions and colors on the screen. */
  triangle(
    x: number,
    y: number,
    x2: number,
    y2: number,
    x3: number,
    y3: number,
    color: IColor,
    color2: IColor,
    color3: IColor
  ): void;

  /** @description Draws a quad on the specified points positions and colors on the screen. */
  quad(
    x: number,
    y: number,
    x2: number,
    y2: number,
    x3: number,
    y3: number,
    x4: number,
    y4: number,
    color: IColor,
    color2: IColor,
    color3: IColor,
    color4: IColor
  ): void;
};
