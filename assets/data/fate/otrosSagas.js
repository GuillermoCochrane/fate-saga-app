import { apocrypha } from "./otrosSagas/apocrypha.js";
import { apocrypharecaps } from "./otrosSagas/apocrypharecaps.js";
import { prototype } from "./otrosSagas/prototype.js";
import { extra } from "./otrosSagas/extra.js";
import { extra2 } from "./otrosSagas/extra2.js";
import { carnivalphantasm } from "./otrosSagas/carnivalphantasm.js";
import { carnivalphantasmex } from "./otrosSagas/carnivalphantasmex.js";
import { carnivalphantasmhibichika } from "./otrosSagas/carnivalphantasmhibichika.js";

export const otrosSagas = {
  saga: "Otros Sagas",
  id: "osf",
  opened: false,
  seasons: [
    apocrypha,
    apocrypharecaps,
    prototype,
    extra,
    extra2,
    carnivalphantasm,
    carnivalphantasmex,
    carnivalphantasmhibichika
  ],
};
