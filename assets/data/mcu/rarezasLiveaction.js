// ==============================================
// NIGHT MAN (1997-1999)
// ==============================================
import { nmS1 } from "./rarezasLiveaction/nmS1.js";
import { nmS2 } from "./rarezasLiveaction/nmS2.js";
// ==============================================
// MUTANT X (2001-2004)
// ==============================================
import { mxS1 } from "./rarezasLiveaction/mxS1.js";
import { mxS2 } from "./rarezasLiveaction/mxS2.js";
import { mxS3 } from "./rarezasLiveaction/mxS3.js";

export const rarezasLiveaction = {
  saga: "Rarezas Live-action",
  id: "rarezas",
  opened: false,
  seasons: [
    nmS1,
    nmS2,
    mxS1,
    mxS2,
    mxS3
  ],
};
