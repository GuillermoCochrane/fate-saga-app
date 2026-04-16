// ==============================================
// X-MEN: THE ANIMATED SERIES (1992-1997)
// ==============================================
import { xm92S1 } from "./animacion90s/xm92S1.js";
import { xm92S2 } from "./animacion90s/xm92S2.js";
import { xm92S3 } from "./animacion90s/xm92S3.js";
import { xm92S4 } from "./animacion90s/xm92S4.js";
import { xm92S5 } from "./animacion90s/xm92S5.js";
// ==============================================
// X-MEN '97 (2024-2026) (CONTINUA LA ORIGINAL)
// ==============================================
import { xm97S1 } from "./animacion90s/xm97S1.js";
import { xm97S2 } from "./animacion90s/xm97S2.js";
// ==============================================
// SPIDER-MAN: THE ANIMATED SERIES (1994-1998)
// ==============================================
import { sp94S1 } from "./animacion90s/sp94S1.js";
import { sp94S2 } from "./animacion90s/sp94S2.js";
import { sp94S3 } from "./animacion90s/sp94S3.js";
import { sp94S4 } from "./animacion90s/sp94S4.js";
import { sp94S5 } from "./animacion90s/sp94S5.js";
// ==============================================
// FANTASTIC FOUR (1994-1996)
// ==============================================
import { ff94S1 } from "./animacion90s/ff94S1.js";
import { ff94S2 } from "./animacion90s/ff94S2.js";
// ==============================================
// IRON MAN (1994-1996)
// ==============================================
import { im94S1 } from "./animacion90s/im94S1.js";
import { im94S2 } from "./animacion90s/im94S2.js";
// ==============================================
// THE INCREDIBLE HULK (1996-1997)
// ==============================================
import { hk96S1 } from "./animacion90s/hk96S1.js";
import { hk96S2 } from "./animacion90s/hk96S2.js";
// ==============================================
// SILVER SURFER (1998)
// ==============================================
import { ss98S1 } from "./animacion90s/ss98S1.js";
// ==============================================
// SPIDER-MAN UNLIMITED (1999)
// ==============================================
import { sp99S1 } from "./animacion90s/sp99S1.js";
// ==============================================
// AVENGERS: UNITED THEY STAND (1999)
// ==============================================
import { av99S1 } from "./animacion90s/av99S1.js";

export const animacion90s = {
  saga: "Animación 90s",
  id: "anim90s",
  opened: false,
  seasons: [
    xm92S1,
    xm92S2,
    xm92S3,
    xm92S4,
    xm92S5,
    xm97S1,
    xm97S2,
    sp94S1,
    sp94S2,
    sp94S3,
    sp94S4,
    sp94S5,
    ff94S1,
    ff94S2,
    im94S1,
    im94S2,
    hk96S1,
    hk96S2,
    ss98S1,
    sp99S1,
    av99S1
  ],
};
