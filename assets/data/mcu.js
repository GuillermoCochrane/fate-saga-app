import { phaseOne } from "./mcu/phaseOne.js";
import { phaseTwo } from "./mcu/phaseTwo.js";
import { phaseThree } from "./mcu/phaseThree.js";

export const mcuChecklist = {
  franchiseName: "Marvel Cinematic Universe",
  franchise: "mcu",
  sagas: [ 
    phaseOne,
    phaseTwo,
    phaseThree,
  ],
};
