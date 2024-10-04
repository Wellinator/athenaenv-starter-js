/**
 * @description Get actual video mode parameters. Returns an object.
 * @returns Available modes: NTSC, DTV_480p, PAL, DTV_576p, DTV_720p, DTV_1080i
 * */

import { RenderSettings } from "../settings/render.js";

export let SetupRender = () => {
  Render.setView(RenderSettings.WideScreen, RenderSettings.Fov);
};
