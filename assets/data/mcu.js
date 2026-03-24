import { phaseOne } from "./mcu/phaseOne.js";
import { phaseTwo } from "./mcu/phaseTwo.js";
import { phaseThree } from "./mcu/phaseThree.js";
import { phaseFour } from "./mcu/phaseFour.js";
import { phaseFive } from "./mcu/phaseFive.js";
import { phaseSix } from "./mcu/phaseSix.js";
import { foxverse } from "./mcu/foxverse.js";

export const mcuChecklist = {
  franchiseName: "Marvel Cinematic Universe",
  franchise: "mcu",
  sagas: [ 
    phaseOne,
    phaseTwo,
    phaseThree,
    phaseFour,
    phaseFive,
    phaseSix,
    foxverse,
  ],
};
