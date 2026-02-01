import { strangefakespecial } from "./fateStrangeFake/strangefakespecial.js";
import { strangefakeanime } from "./fateStrangeFake/strangefakeanime.js";

export const fateStrangeFake = {
  saga: "Fate/Strange Fake",
  id: "fsf",
  opened: false,
  seasons: [
    strangefakespecial,
    strangefakeanime
  ],
};
