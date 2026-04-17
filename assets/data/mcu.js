import { phaseOne } from "./mcu/phaseOne.js";
import { phaseTwo } from "./mcu/phaseTwo.js";
import { phaseThree } from "./mcu/phaseThree.js";
import { phaseFour } from "./mcu/phaseFour.js";
import { phaseFive } from "./mcu/phaseFive.js";
import { phaseSix } from "./mcu/phaseSix.js";
import { foxverse } from "./mcu/foxverse.js";
import { sonyverse } from "./mcu/sonyverse.js";
import { marvelKnightsLegacy } from "./mcu/marvelKnightsLegacy.js";
import { animacionVintage } from "./mcu/animacionVintage.js";
import { animacion90s } from "./mcu/animacion90s.js";
import { animacion2000s } from "./mcu/animacion2000s.js";
import { animacion2010s } from "./mcu/animacion2010s.js";
import { marvelAnime } from "./mcu/marvelAnime.js";
import { pelculasAnimadasDTV } from "./mcu/pelculasAnimadasDTV.js";
import { rarezasLiveaction } from "./mcu/rarezasLiveaction.js";

export const mcuChecklist = {
  franchiseName: "Marvel Cinematic Universe",
  franchise: "Marvel",
  sagas: [ 
    phaseOne,
    phaseTwo,
    phaseThree,
    phaseFour,
    phaseFive,
    phaseSix,
    foxverse,
    sonyverse,
    marvelKnightsLegacy,
    animacionVintage,
    animacion90s,
    animacion2000s,
    animacion2010s,
    marvelAnime,
    pelculasAnimadasDTV,
    rarezasLiveaction,
  ],
};
