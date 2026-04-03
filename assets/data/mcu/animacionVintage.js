// ==============================================
// ANIMACIÓN VINTAGE (1966-1989)
// Bloque A: Series animadas de los 60s, 70s y 80s
// Orden: Cronológico ascendente
// ==============================================

// ==============================================
// AÑOS 60 (1966-1970)
// ==============================================
import { mshS1 } from "./animacionVintage/mshS1.js";
import { ff67S1 } from "./animacionVintage/ff67S1.js";
import { sp67S1 } from "./animacionVintage/sp67S1.js";
import { sp67S2 } from "./animacionVintage/sp67S2.js";
import { sp67S3 } from "./animacionVintage/sp67S3.js";

// ==============================================
// AÑOS 70 (1978-1979)
// ==============================================
import { nff78S1 } from "./animacionVintage/nff78S1.js";
import { fbmtt79S1 } from "./animacionVintage/fbmtt79S1.js";
import { spw79S1 } from "./animacionVintage/spw79S1.js";

// ==============================================
// AÑOS 80 (1981-1989)
// ==============================================
import { sp81S1 } from "./animacionVintage/sp81S1.js";
import { spaf81S1 } from "./animacionVintage/spaf81S1.js";
import { spaf81S2 } from "./animacionVintage/spaf81S2.js";
import { spaf81S3 } from "./animacionVintage/spaf81S3.js";
import { hk82S1 } from "./animacionVintage/hk82S1.js";
import { xpotm89S1 } from "./animacionVintage/xpotm89S1.js";

export const animacionVintage = {
  saga: "Animación Vintage (1966-1989)",
  id: "animvintage",
  opened: false,
  seasons: [
    mshS1,
    ff67S1,
    sp67S1,
    sp67S2,
    sp67S3,
    nff78S1,
    fbmtt79S1,
    spw79S1,
    sp81S1,
    spaf81S1,
    spaf81S2,
    spaf81S3,
    hk82S1,
    xpotm89S1
  ],
};