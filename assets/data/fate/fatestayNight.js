import { staynightcurtainraiser } from "./fatestayNight/staynightcurtainraiser.js";
import { staynightsaber } from "./fatestayNight/staynightsaber.js";
import { staynightova } from "./fatestayNight/staynightova.js";
import { ubwprologue } from "./fatestayNight/ubwprologue.js";
import { ubw1 } from "./fatestayNight/ubw1.js";
import { ubw2 } from "./fatestayNight/ubw2.js";
import { ubwova } from "./fatestayNight/ubwova.js";
import { ubwmovie } from "./fatestayNight/ubwmovie.js";
import { heavensfeel } from "./fatestayNight/heavensfeel.js";
import { emiyatodaysmenu } from "./fatestayNight/emiyatodaysmenu.js";

export const fatestayNight = {
  saga: "Fate/stay night",
  id: "fsn",
  opened: false,
  seasons: [
    staynightcurtainraiser,
    staynightsaber,
    staynightova,
    ubwprologue,
    ubw1,
    ubw2,
    ubwova,
    ubwmovie,
    heavensfeel,
    emiyatodaysmenu
  ],
};
