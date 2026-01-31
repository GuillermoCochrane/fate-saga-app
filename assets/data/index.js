import { fateChecklistData } from './data.js';
import { asistenceChecklistData } from "./assistance.js";
import { fateChecklist } from './fate.js';
import { mcuChecklist } from './mcu.js';

export const checklistData = {
    mcu: mcuChecklist,
    fate: fateChecklistData,
    assistence: asistenceChecklistData,
    fate2: fateChecklist
};