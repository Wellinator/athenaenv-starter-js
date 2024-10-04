/**
 * @description Get actual video mode parameters. Returns an object.
 * @returns Available modes: NTSC, DTV_480p, PAL, DTV_576p, DTV_720p, DTV_1080i
 * */

import { ScreenSettings } from "../settings/screen.js";

export let g_Canvas = Screen.getMode();

export let SetupScreen = () => {
  g_Canvas.zbuffering = ScreenSettings.zBuffering;
  g_Canvas.psmz = ScreenSettings.psmz;

  Screen.setMode(g_Canvas);
};
