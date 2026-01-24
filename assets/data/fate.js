import { fateSaga } from "./fate/fateSaga.js";
import { lordElMelloiII } from "./fate/lordElMelloiII.js";
import { fateStrangeFake } from "./fate/fateStrangeFake.js";
import { fateGrandOrder } from "./fate/fateGrandOrder.js";
import { fateKaleidLinerPrismaIllya } from "./fate/fateKaleidLinerPrismaIllya.js";
import { otrosMundosAlternativosEIndependientes } from "./fate/otrosMundosAlternativosEIndependientes.js";

export const fateChecklist = {
  franchise: "Fate",
  sagas: [ fateSaga, lordElMelloiII, fateStrangeFake, fateGrandOrder, fateKaleidLinerPrismaIllya, otrosMundosAlternativosEIndependientes ]
};
