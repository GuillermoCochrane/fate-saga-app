import { imaS1 } from "./marvelAnime/imaS1.js";
import { wolaS1 } from "./marvelAnime/wolaS1.js";
import { xmaS1 } from "./marvelAnime/xmaS1.js";
import { bldaS1 } from "./marvelAnime/bldaS1.js";

export const marvelAnime = {
  saga: "Marvel Anime",
  id: "marvelanime",
  opened: false,
  seasons: [
    imaS1,
    wolaS1,
    xmaS1,
    bldaS1
  ],
};
