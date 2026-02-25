import { phaseOne } from "./mcu/phaseOne.js";
import { phaseTwo } from "./mcu/phaseTwo.js";
import { phaseThree } from "./mcu/phaseThree.js";
import { phaseFour } from "./mcu/phaseFour.js";

export const mcuChecklist = {
  franchiseName: "Marvel Cinematic Universe",
  franchise: "mcu",
  sagas: [ 
    phaseOne,
    phaseTwo,
    phaseThree,
    phaseFour
  ],
};
