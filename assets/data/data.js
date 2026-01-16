// Datos iniciales de la checklist con episodios
export const fateChecklistData = {
  franchise: "Fate",
  sagas:[
    {
      saga: "Fate/Zero",
      opened: false,
      seasons: [
        {
          id: "fate-zero",
          label: "Fate/Zero",
          format: "Anime",
          completed: false,
          opened: false,
          episodes: [
            {
              id: "fz-1",
              number: 1,
              label: "Summoning Ancient Heroes",
              romaji: "Eirei Shoukan",
              jp: "英霊召喚",
              es: "La Invocación de los Espíritus Heroicos",
              completed: false
            },
            {
              id: "fz-2",
              number: 2,
              label: "False Start",
              romaji: "Itsuwari no Sentan",
              jp: "偽りの戦端",
              es: "Falso Comienzo",
              completed: false
            },
            {
              id: "fz-3",
              number: 3,
              label: "Land of Fuyuki",
              romaji: "Fuyuki no Chi",
              jp: "冬木の地",
              es: "Ciudad de Fuyuki",
              completed: false
            },
            {
              id: "fz-4",
              number: 4,
              label: "Blade of the Demonic Spear",
              romaji: "Masou no Yaiba",
              jp: "魔槍の刃",
              es: "La Punta de la Lanza Diabólica",
              completed: false
            },
            {
              id: "fz-5",
              number: 5,
              label: "The Vicious Beast Roars",
              romaji: "Kyoujuu Houkou",
              jp: "凶獣咆吼",
              es: "El rugido de una bestia enloquecida",
              completed: false
            },
            {
              id: "fz-6",
              number: 6,
              label: "Night of Schemes",
              romaji: "Bouryaku no Yoru",
              jp: "謀略の夜",
              es: "Una Noche de Conspiraciones",
              completed: false
            },
            {
              id: "fz-7",
              number: 7,
              label: "The Evil Forest",
              romaji: "Makyou no Mori",
              jp: "魔境の森",
              es: "Bosque Oscuro",
              completed: false
            },
            {
              id: "fz-8",
              number: 8,
              label: "The Magus Killer",
              romaji: "Majutsushi Koroshi",
              jp: "魔術師殺し",
              es: "Asesino de Magos",
              completed: false
            },
            {
              id: "fz-9",
              number: 9,
              label: "Master and Servant",
              romaji: "Aruji to Juusha",
              jp: "主と従者",
              es: "Maestro y Sirviente",
              completed: false
            },
            {
              id: "fz-10",
              number: 10,
              label: "Rin's Adventure",
              romaji: "Rin no Bouken",
              jp: "凛の冒険",
              es: "La Aventura de Rin",
              completed: false
            },
            {
              id: "fz-11",
              number: 11,
              label: "The Grail Dialogue",
              romaji: "Seihai Mondou",
              jp: "聖杯問答",
              es: "Discutiendo el Santo Grial",
              completed: false
            },
            {
              id: "fz-12",
              number: 12,
              label: "The Grail's Invitation",
              romaji: "Seihai no Maneki",
              jp: "聖杯の招き",
              es: "La Invitación del Santo Grial",
              completed: false
            },
            {
              id: "fz-13",
              number: 13,
              label: "Forbidden Banquet",
              romaji: "Kindan no Kyouen",
              jp: "禁断の狂宴",
              es: "El Banquete Prohibido de la Locura",
              completed: false
            }
          ]
        },
        {
          id: "fate-zero-2",
          label: "Fate/Zero 2nd Season",
          format: "Anime",
          completed: false,
          opened: false,
          episodes: [
            {
              id: "fz2-1",
              number: 14,
              label: "The Bloody Battle of Mion River",
              romaji: "Miongawa Kessen",
              jp: "未遠川血戦",
              es: "Batalla Sangrienta en el Río Mion",
              completed: false
            },
            {
              id: "fz2-2",
              number: 15,
              label: "Golden Radiance",
              romaji: "Ougon no Kagayaki",
              jp: "黄金の輝き",
              es: "Resplandor Dorado",
              completed: false
            },
            {
              id: "fz2-3",
              number: 16,
              label: "The Terminus of Honor",
              romaji: "Eiyo no Hate",
              jp: "栄誉の果て",
              es: "Los Límites del Honor",
              completed: false
            },
            {
              id: "fz2-4",
              number: 17,
              label: "The Eighth Contract",
              romaji: "Daihachi no Keiyaku",
              jp: "第八の契約",
              es: "El octavo pacto",
              completed: false
            },
            {
              id: "fz2-5",
              number: 18,
              label: "Distant Memories",
              romaji: "Tooi Kioku",
              jp: "遠い記憶",
              es: "Memorias Distantes",
              completed: false
            },
            {
              id: "fz2-6",
              number: 19,
              label: "Where Justice is Found",
              romaji: "Seigi no Arika",
              jp: "正義の在処",
              es: "El lugar donde existe la Justicia",
              completed: false
            },
            {
              id: "fz2-7",
              number: 20,
              label: "Return of the Assassin",
              romaji: "Ansatsusha no Kikan",
              jp: "暗殺者の帰還",
              es: "El Asesino Regresa",
              completed: false
            },
            {
              id: "fz2-8",
              number: 21,
              label: "Knight on Two Wheels",
              romaji: "Sourin no Kishi",
              jp: "双輪の騎士",
              es: "El Caballero del Carro de Guerra",
              completed: false
            },
            {
              id: "fz2-9",
              number: 22,
              label: "All the World's Evils",
              romaji: "Konoyo Subete no Aku",
              jp: "この世全ての悪",
              es: "Toda la maldad del mundo",
              completed: false
            },
            {
              id: "fz2-10",
              number: 23,
              label: "The Sea at the End of the World",
              romaji: "Saihate no Umi",
              jp: "最果ての海",
              es: "El Océano al Final del Mundo",
              completed: false
            },
            {
              id: "fz2-11",
              number: 24,
              label: "The Last Command Spell",
              romaji: "Saigo no Reijuu",
              jp: "最後の令呪",
              es: "El Último Hechizo de Comando",
              completed: false
            },
            {
              id: "fz2-12",
              number: 25,
              label: "Fate/Zero",
              romaji: "Fate/Zero",
              jp: "フェイト/ゼロ",
              es: "Fate Zero",
              completed: false
            }
          ]
        },
      ]
    },
    {
      saga: "Fate/stay night",
      opened: false,
      seasons: [
        {
          id: "fate-zero-2",
          label: "Fate/Zero 2",
          format: "Anime",
          completed: false,
          opened: false,
          episodes: [
            {
              id: "fz2-1",
              number: 1,
              label: "El rey del mar regresa",
              completed: false,
            },
            {
              id: "fz2-2",
              number: 2,
              label: "El plan del Rey de los Caballeros",
              completed: false,
            },
            {
              id: "fz2-3",
              number: 3,
              label: "El paso de la primavera",
              completed: false,
            },
            {
              id: "fz2-4",
              number: 4,
              label: "La magia del hechicero",
              completed: false,
            },
            {
              id: "fz2-5",
              number: 5,
              label: "La oscuridad de los santos",
              completed: false,
            },
            {
              id: "fz2-6",
              number: 6,
              label: "Sueños de antaño",
              completed: false,
            },
            {
              id: "fz2-7",
              number: 7,
              label: "El pecado de la arrogancia",
              completed: false,
            },
            {
              id: "fz2-8",
              number: 8,
              label: "El vasallo del dragón",
              completed: false,
            },
            {
              id: "fz2-9",
              number: 9,
              label: "Promesa de justicia",
              completed: false,
            },
            {
              id: "fz2-10",
              number: 10,
              label: "El cáliz dorado",
              completed: false,
            },
            {
              id: "fz2-11",
              number: 11,
              label: "Habla el Santo Grial",
              completed: false,
            },
            {
              id: "fz2-12",
              number: 12,
              label: "El fin del viaje",
              completed: false,
            },
            {
              id: "fz2-13",
              number: 13,
              label: "El contrato del Santo Grial",
              completed: false,
            },
          ],
        },
        {
          id: "fate-stay-night-saber",
          label: "Fate/stay night (Saber Route)",
          format: "Anime",
          completed: false,
          opened: false,
          episodes: [
            {
              id: "fsns-1",
              number: 1,
              label: "El día en que el sueño comenzó",
              completed: false,
            },
            {
              id: "fsns-2",
              number: 2,
              label: "El comienzo de la guerra",
              completed: false,
            },
            {
              id: "fsns-3",
              number: 3,
              label: "El primero en retroceder",
              completed: false,
            },
            {
              id: "fsns-4",
              number: 4,
              label: "La búsqueda de la verdad",
              completed: false,
            },
            {
              id: "fsns-5",
              number: 5,
              label: "Dos magos (Parte 1)",
              completed: false,
            },
            {
              id: "fsns-6",
              number: 6,
              label: "Dos magos (Parte 2)",
              completed: false,
            },
            {
              id: "fsns-7",
              number: 7,
              label: "La espada maldita",
              completed: false,
            },
            {
              id: "fsns-8",
              number: 8,
              label: "El odio que trae la espada",
              completed: false,
            },
            {
              id: "fsns-9",
              number: 9,
              label: "La luna que brilla en las montañas",
              completed: false,
            },
            {
              id: "fsns-10",
              number: 10,
              label: "Cinco grandes magias",
              completed: false,
            },
            {
              id: "fsns-11",
              number: 11,
              label: "Una luz en la distancia",
              completed: false,
            },
            {
              id: "fsns-12",
              number: 12,
              label: "El momento decisivo",
              completed: false,
            },
            {
              id: "fsns-13",
              number: 13,
              label: "El castillo de la eternidad",
              completed: false,
            },
            {
              id: "fsns-14",
              number: 14,
              label: "El fin del ideal",
              completed: false,
            },
            {
              id: "fsns-15",
              number: 15,
              label: "Los doce ensayos",
              completed: false,
            },
            {
              id: "fsns-16",
              number: 16,
              label: "La colina donde se promete la victoria",
              completed: false,
            },
            {
              id: "fsns-17",
              number: 17,
              label: "La espada del traidor",
              completed: false,
            },
            { id: "fsns-18", number: 18, label: "La decisión", completed: false },
            {
              id: "fsns-19",
              number: 19,
              label: "El oro del rey",
              completed: false,
            },
            {
              id: "fsns-20",
              number: 20,
              label: "Un lugar lejano",
              completed: false,
            },
            {
              id: "fsns-21",
              number: 21,
              label: "El puente del cielo",
              completed: false,
            },
            { id: "fsns-22", number: 22, label: "Respuesta", completed: false },
            {
              id: "fsns-23",
              number: 23,
              label: "El amanecer lejano",
              completed: false,
            },
            {
              id: "fsns-24",
              number: 24,
              label: "La respuesta a todo",
              completed: false,
            },
          ],
        },
        {
          id: "fate-ubw-1",
          label: "Fate/stay night Unlimited Blade Works 1st Season",
          format: "Anime",
          completed: false,
          opened: false,
          episodes: [
            {
              id: "ubw1-1",
              number: 1,
              label: "El comienzo del fin",
              completed: false,
            },
            {
              id: "ubw1-2",
              number: 2,
              label: "El inicio del ritual",
              completed: false,
            },
            {
              id: "ubw1-3",
              number: 3,
              label: "El primer combate",
              completed: false,
            },
            {
              id: "ubw1-4",
              number: 4,
              label: "Encuentro con el destino",
              completed: false,
            },
            { id: "ubw1-5", number: 5, label: "Dos magos", completed: false },
            { id: "ubw1-6", number: 6, label: "Nuevos retos", completed: false },
            {
              id: "ubw1-7",
              number: 7,
              label: "La espada maldita",
              completed: false,
            },
            {
              id: "ubw1-8",
              number: 8,
              label: "El deseo de un héroe",
              completed: false,
            },
            {
              id: "ubw1-9",
              number: 9,
              label: "Dos mentes, dos ideales",
              completed: false,
            },
            {
              id: "ubw1-10",
              number: 10,
              label: "Los cinco grandes magos",
              completed: false,
            },
            {
              id: "ubw1-11",
              number: 11,
              label: "Visitar el pasado",
              completed: false,
            },
            {
              id: "ubw1-12",
              number: 12,
              label: "El final del héroe",
              completed: false,
            },
          ],
        },
        {
          id: "fate-ubw-2",
          label: "Fate/stay night: Unlimited Blade Works (TV) 2nd Season",
          format: "Anime",
          completed: false,
          opened: false,
          episodes: [
            {
              id: "ubw2-1",
              number: 13,
              label: "El momento de la elección",
              completed: false,
            },
            {
              id: "ubw2-2",
              number: 14,
              label: "El fin del ideal",
              completed: false,
            },
            {
              id: "ubw2-3",
              number: 15,
              label: "Los doce ensayos",
              completed: false,
            },
            {
              id: "ubw2-4",
              number: 16,
              label: "La colina donde se promete la victoria",
              completed: false,
            },
            {
              id: "ubw2-5",
              number: 17,
              label: "La espada del traidor",
              completed: false,
            },
            { id: "ubw2-6", number: 18, label: "La decisión", completed: false },
            {
              id: "ubw2-7",
              number: 19,
              label: "El oro del rey",
              completed: false,
            },
            {
              id: "ubw2-8",
              number: 20,
              label: "Un lugar lejano",
              completed: false,
            },
            {
              id: "ubw2-9",
              number: 21,
              label: "El puente del cielo",
              completed: false,
            },
            { id: "ubw2-10", number: 22, label: "Respuesta", completed: false },
            {
              id: "ubw2-11",
              number: 23,
              label: "El amanecer lejano",
              completed: false,
            },
            {
              id: "ubw2-12",
              number: 24,
              label: "La respuesta a todo",
              completed: false,
            },
            {
              id: "ubw2-13",
              number: 25,
              label: "Unlimited Blade Works",
              completed: false,
            },
            { id: "ubw2-14", number: 26, label: "Epílogo", completed: false },
          ],
        },
        {
          id: "fate-ubw-ova",
          label:
            "Fate/stay night: Unlimited Blade Works (TV) 2nd Season - Sunny Day",
          format: "OVA",
          completed: false,
          opened: false,
          episodes: [
            { id: "ubw-ova-1", number: 1, label: "Sunny Day", completed: false },
          ],
        },
        {
          id: "fate-ubw-movie",
          label: "Fate/stay night Unlimited Blade Works",
          format: "Película",
          completed: false,
          opened: false,
          episodes: [
            {
              id: "ubw-movie-1",
              number: 1,
              label: "Película Unlimited Blade Works",
              completed: false,
            },
          ],
        },
        {
          id: "fate-heavens-feel",
          label: "Fate/stay night: Heaven's Feel",
          format: "Película",
          completed: false,
          opened: false,
          episodes: [
            { id: "hf-1", number: 1, label: "Presage Flower", completed: false },
            { id: "hf-2", number: 2, label: "Lost Butterfly", completed: false },
            { id: "hf-3", number: 3, label: "Spring Song", completed: false },
          ],
        },
      ],
    },
    {
      saga: "Lord El-Melloi II",
      opened: false,
      seasons: [
        {
          id: "elmelloi-special",
          label: "Lord El-Melloi II Sei no Jikenbo",
          format: "Especial",
          completed: false,
          opened: false,
          episodes: [
            {
              id: "elmelloi-s-1",
              number: 1,
              label: "Especial Lord El-Melloi II",
              completed: false,
            },
          ],
        },
        {
          id: "elmelloi-anime",
          label: "Lord El-Melloi II Sei no Jikenbo: Rail Zeppelin Grace Note",
          format: "Anime",
          completed: false,
          opened: false,
          episodes: [
            {
              id: "elmelloi-1",
              number: 1,
              label: "El caso del asesinato en el compartimento B4 (Parte 1)",
              completed: false,
            },
            {
              id: "elmelloi-2",
              number: 2,
              label: "El caso del asesinato en el compartimento B4 (Parte 2)",
              completed: false,
            },
            {
              id: "elmelloi-3",
              number: 3,
              label: "El caso del asesinato en el compartimento B4 (Parte 3)",
              completed: false,
            },
            {
              id: "elmelloi-4",
              number: 4,
              label: "El caso del asesinato en el compartimento B4 (Parte 4)",
              completed: false,
            },
            {
              id: "elmelloi-5",
              number: 5,
              label: "El caso del asesinato en el compartimento B4 (Parte 5)",
              completed: false,
            },
            {
              id: "elmelloi-6",
              number: 6,
              label: "El caso del asesinato en el compartimento B4 (Parte 6)",
              completed: false,
            },
            {
              id: "elmelloi-7",
              number: 7,
              label: "El caso del asesinato en el compartimento B4 (Parte 7)",
              completed: false,
            },
            {
              id: "elmelloi-8",
              number: 8,
              label: "El caso del asesinato en el compartimento B4 (Parte 8)",
              completed: false,
            },
            {
              id: "elmelloi-9",
              number: 9,
              label: "El caso del asesinato en el compartimento B4 (Parte 9)",
              completed: false,
            },
            {
              id: "elmelloi-10",
              number: 10,
              label: "El caso del asesinato en el compartimento B4 (Parte 10)",
              completed: false,
            },
            {
              id: "elmelloi-11",
              number: 11,
              label: "El caso del asesinato en el compartimento B4 (Parte 11)",
              completed: false,
            },
            {
              id: "elmelloi-12",
              number: 12,
              label: "El caso del asesinato en el compartimento B4 (Parte 12)",
              completed: false,
            },
            {
              id: "elmelloi-13",
              number: 13,
              label: "El caso del asesinato en el compartimento B4 (Parte 13)",
              completed: false,
            },
          ],
        },
      ],
    },
    {
      saga: "Fate/Strange Fake",
      opened: false,
      seasons: [
        {
          id: "strange-fake-special",
          label: "Fate/strange Fake: Whispers of Dawn",
          format: "Especial",
          completed: false,
          opened: false,
          episodes: [
            {
              id: "fsf-s-1",
              number: 1,
              label: "Whispers of Dawn",
              completed: false,
            },
          ],
        },
        {
          id: "strange-fake-anime",
          label: "Fate/strange Fake",
          format: "Anime",
          completed: false,
          opened: false,
          episodes: [
            {
              id: "fsf-1",
              number: 1,
              label: "Preludio: Falso/Amanecer",
              completed: false,
            },
            {
              id: "fsf-2",
              number: 2,
              label: "Día 1: Rey de los héroes vs Rey de los bandidos",
              completed: false,
            },
            {
              id: "fsf-3",
              number: 3,
              label: "Día 1: Rey de los héroes vs Rey de los bandidos (Parte 2)",
              completed: false,
            },
            {
              id: "fsf-4",
              number: 4,
              label: "Día 1: Rey de los héroes vs Rey de los bandidos (Parte 3)",
              completed: false,
            },
            {
              id: "fsf-5",
              number: 5,
              label: "Día 2: El asesino silencioso",
              completed: false,
            },
            {
              id: "fsf-6",
              number: 6,
              label: "Día 2: El asesino silencioso (Parte 2)",
              completed: false,
            },
            {
              id: "fsf-7",
              number: 7,
              label: "Día 3: La verdadera guerra comienza",
              completed: false,
            },
            {
              id: "fsf-8",
              number: 8,
              label: "Día 3: La verdadera guerra comienza (Parte 2)",
              completed: false,
            },
            {
              id: "fsf-9",
              number: 9,
              label: "Día 4: Confrontación de reyes",
              completed: false,
            },
            {
              id: "fsf-10",
              number: 10,
              label: "Día 4: Confrontación de reyes (Parte 2)",
              completed: false,
            },
            {
              id: "fsf-11",
              number: 11,
              label: "Día 5: El despertar de los muertos",
              completed: false,
            },
            {
              id: "fsf-12",
              number: 12,
              label: "Día 5: El despertar de los muertos (Parte 2)",
              completed: false,
            },
          ],
        },
      ],
    },
    {
      saga: "Fate/Grand Order",
      opened: false,
      seasons: [
        {
          id: "fgo-recap",
          label: "Fate/Grand Order: Zettai Majuu Sensen Babylonia - Initium Iter",
          format: "Especial",
          completed: false,
          opened: false,
          episodes: [
            {
              id: "fgo-rec-1",
              number: 1,
              label: "Initium Iter",
              completed: false,
            },
          ],
        },
        {
          id: "fgo-first-order",
          label: "Fate/Grand Order: First Order",
          format: "Película",
          completed: false,
          opened: false,
          episodes: [
            { id: "fgo-fo-1", number: 1, label: "First Order", completed: false },
          ],
        },
        {
          id: "fgo-camelot-1",
          label:
            "Fate/Grand Order: Shinsei Entaku Ryouiki Camelot - Wandering; Agateram",
          format: "Película",
          completed: false,
          opened: false,
          episodes: [
            {
              id: "fgo-cam1-1",
              number: 1,
              label: "Wandering; Agateram",
              completed: false,
            },
          ],
        },
        {
          id: "fgo-camelot-2",
          label:
            "Fate/Grand Order: Shinsei Entaku Ryouiki Camelot - Paladin; Agateram",
          format: "Película",
          completed: false,
          opened: false,
          episodes: [
            {
              id: "fgo-cam2-1",
              number: 1,
              label: "Paladin; Agateram",
              completed: false,
            },
          ],
        },
        {
          id: "fgo-babylonia",
          label: "Fate/Grand Order: Zettai Majuu Sensen Babylonia",
          format: "Anime",
          completed: false,
          opened: false,
          episodes: [
            {
              id: "fgo-bab-1",
              number: 1,
              label: "Inicio absoluto",
              completed: false,
            },
            {
              id: "fgo-bab-2",
              number: 2,
              label: "La gente de Uruk",
              completed: false,
            },
            {
              id: "fgo-bab-3",
              number: 3,
              label: "Rey de la magia tricolor",
              completed: false,
            },
            {
              id: "fgo-bab-4",
              number: 4,
              label: "La calavera que anuncia la muerte",
              completed: false,
            },
            {
              id: "fgo-bab-5",
              number: 5,
              label: "Rey de los demonios, aullando en la noche",
              completed: false,
            },
            {
              id: "fgo-bab-6",
              number: 6,
              label: "La diosa de la venganza",
              completed: false,
            },
            {
              id: "fgo-bab-7",
              number: 7,
              label: "La montaña de cedros",
              completed: false,
            },
            {
              id: "fgo-bab-8",
              number: 8,
              label: "La madre de la vida, el mar de la muerte",
              completed: false,
            },
            {
              id: "fgo-bab-9",
              number: 9,
              label: "La gigante, despierta",
              completed: false,
            },
            {
              id: "fgo-bab-10",
              number: 10,
              label: "El amanecer obligado",
              completed: false,
            },
            {
              id: "fgo-bab-11",
              number: 11,
              label: "Llamando al averno",
              completed: false,
            },
            {
              id: "fgo-bab-12",
              number: 12,
              label: "Quetzalcoatl",
              completed: false,
            },
            {
              id: "fgo-bab-13",
              number: 13,
              label: "El día en que la humanidad se extinguió",
              completed: false,
            },
            {
              id: "fgo-bab-14",
              number: 14,
              label: "La corona de la simulación de estrellas",
              completed: false,
            },
            {
              id: "fgo-bab-15",
              number: 15,
              label: "La diosa del sol",
              completed: false,
            },
            {
              id: "fgo-bab-16",
              number: 16,
              label: "El templo del tiempo, Salomón",
              completed: false,
            },
            {
              id: "fgo-bab-17",
              number: 17,
              label: "El templo del tiempo, Salomón (Parte 2)",
              completed: false,
            },
            {
              id: "fgo-bab-18",
              number: 18,
              label: "El templo del tiempo, Salomón (Parte 3)",
              completed: false,
            },
            {
              id: "fgo-bab-19",
              number: 19,
              label: "El templo del tiempo, Salomón (Parte 4)",
              completed: false,
            },
            {
              id: "fgo-bab-20",
              number: 20,
              label: "El templo del tiempo, Salomón (Parte 5)",
              completed: false,
            },
            {
              id: "fgo-bab-21",
              number: 21,
              label: "El templo del tiempo, Salomón (Parte 6)",
              completed: false,
            },
          ],
        },
        {
          id: "fgo-solomon",
          label:
            "Fate/Grand Order: Shuukyoku Tokuiten - Kani Jikan Shinden Solomon",
          format: "Película",
          completed: false,
          opened: false,
          episodes: [
            {
              id: "fgo-sol-1",
              number: 1,
              label: "El templo del tiempo, Salomón",
              completed: false,
            },
          ],
        },
        {
          id: "fgo-moonlight",
          label: "Fate/Grand Order: Moonlight/Lostroom",
          format: "Especial",
          completed: false,
          opened: false,
          episodes: [
            {
              id: "fgo-ml-1",
              number: 1,
              label: "Moonlight/Lostroom",
              completed: false,
            },
          ],
        },
        {
          id: "fgo-comedy",
          label: "Fate/Grand Order: Fujimaru Ritsuka wa Wakaranai",
          format: "OVA - Comedia",
          completed: false,
          opened: false,
          episodes: [
            { id: "fgo-com-1", number: 1, label: "Episodio 1", completed: false },
            { id: "fgo-com-2", number: 2, label: "Episodio 2", completed: false },
            { id: "fgo-com-3", number: 3, label: "Episodio 3", completed: false },
            { id: "fgo-com-4", number: 4, label: "Episodio 4", completed: false },
            { id: "fgo-com-5", number: 5, label: "Episodio 5", completed: false },
            { id: "fgo-com-6", number: 6, label: "Episodio 6", completed: false },
            { id: "fgo-com-7", number: 7, label: "Episodio 7", completed: false },
            { id: "fgo-com-8", number: 8, label: "Episodio 8", completed: false },
            { id: "fgo-com-9", number: 9, label: "Episodio 9", completed: false },
            {
              id: "fgo-com-10",
              number: 10,
              label: "Episodio 10",
              completed: false,
            },
            {
              id: "fgo-com-11",
              number: 11,
              label: "Episodio 11",
              completed: false,
            },
            {
              id: "fgo-com-12",
              number: 12,
              label: "Episodio 12",
              completed: false,
            },
            {
              id: "fgo-com-13",
              number: 13,
              label: "Episodio 13",
              completed: false,
            },
          ],
        },
        {
          id: "fgo-carnival",
          label: "Fate/Grand Carnival",
          format: "OVA",
          completed: false,
          opened: false,
          episodes: [
            { id: "fgo-car-1", number: 1, label: "1st Season", completed: false },
            { id: "fgo-car-2", number: 2, label: "2nd Season", completed: false },
          ],
        },
      ],
    },
    {
      saga: "Fate/Kaleid Liner Prisma Illya",
      opened: false,
      seasons: [
        {
          id: "prisma-illya-1",
          label: "Fate/kaleid liner Prisma☆Illya",
          format: "Anime",
          completed: false,
          opened: false,
          episodes: [
            {
              id: "prisma1-1",
              number: 1,
              label: "Birth! A Magical Girl!",
              completed: false
            },
            {
              id: "prisma1-2",
              number: 2,
              label: "Who?",
              completed: false
            },
            {
              id: "prisma1-3",
              number: 3,
              label: "Girl Meets Girl",
              completed: false
            },
            {
              id: "prisma1-4",
              number: 4,
              label: "We Lost",
              completed: false
            },
            {
              id: "prisma1-5",
              number: 5,
              label: "There Are Two Options?",
              completed: false
            },
            {
              id: "prisma1-6",
              number: 6,
              label: "A Blank, and the End of Night...",
              completed: false
            },
            {
              id: "prisma1-7",
              number: 7,
              label: "Triumph and Escape",
              completed: false
            },
            {
              id: "prisma1-8",
              number: 8,
              label: "The Normal Girl Has Returned",
              completed: false
            },
            {
              id: "prisma1-9",
              number: 9,
              label: "End It Here",
              completed: false
            },
            {
              id: "prisma1-10",
              number: 10,
              label: "Kaleidoscope",
              completed: false
            }
          ]
        },
        {
          id: "prisma-dance",
          label: "Fate/kaleid liner Prisma☆Illya: Undoukai de Dance!",
          format: "OVA",
          completed: false,
          opened: false,
          episodes: [
            {
              id: "prisma-dance-1",
              number: 1,
              label: "Undoukai de Dance!",
              completed: false
            }
          ]
        },
        {
          id: "prisma-specials",
          label: "Fate/kaleid liner Prisma Illya Specials",
          format: "Especial",
          completed: false,
          opened: false,
          episodes: [
            {
              id: "prisma-s-1",
              number: 1,
              label: "Ruby-chan no Doki Bloomers-darake no Daihanseikai",
              completed: false
            },
            {
              id: "prisma-s-2",
              number: 2,
              label: "Quiz Magical Rubyonaire",
              completed: false
            },
            {
              id: "prisma-s-3",
              number: 3,
              label: "Kilo Battle",
              completed: false
            },
            {
              id: "prisma-s-4",
              number: 4,
              label: "Kanojo-tachi no Jijou",
              completed: false
            },
            {
              id: "prisma-s-5",
              number: 5,
              label: "Undressing War",
              completed: false
            }
          ]
        },
        {
          id: "prisma-2wei",
          label: "Fate/kaleid liner Prisma☆Illya 2wei!",
          format: "Anime",
          note: "En animeFLV, son 15 capitulos, pero estan mal, ya que incluye OVA y especiales",
          completed: false,
          opened: false,
          episodes: [
            {
              id: "prisma2-1",
              number: 1,
              label: "Illya Grow Up!?",
              completed: false
            },
            {
              id: "prisma2-2",
              number: 2,
              label: "Illya x Illya",
              completed: false
            },
            {
              id: "prisma2-3",
              number: 3,
              label: "Normal Life Breaker",
              completed: false
            },
            {
              id: "prisma2-4",
              number: 4,
              label: "Wild Transfer Student",
              completed: false
            },
            {
              id: "prisma2-5",
              number: 5,
              label: "Well, in Other Words",
              completed: false
            },
            {
              id: "prisma2-6",
              number: 6,
              label: "On the Other Side of Lies and Façade",
              completed: false
            },
            {
              id: "prisma2-7",
              number: 7,
              label: "Clash! Cooking Sisters",
              completed: false
            },
            {
              id: "prisma2-8",
              number: 8,
              label: "Her Name Is",
              completed: false
            },
            {
              id: "prisma2-9",
              number: 9,
              label: "Lone Battle",
              completed: false
            },
            {
              id: "prisma2-10",
              number: 10,
              label: "The Things Those Hands Protected",
              completed: false
            }
          ]
        },
        {
          id: "prisma-2wei-ova",
          label: "Fate/kaleid liner Prisma☆Illya 2wei! OVA",
          format: "OVA",
          note: "En animeFLV, es el capitulo 11 de Fate/kaleid liner Prisma Illya 2wei",
          completed: false,
          opened: false,
          episodes: [
            {
              id: "prisma2-ova-1",
              number: 1,
              label: "OVA: Magical Girl in Hot Springs Inn",
              completed: false
            }
          ]
        },
        {
          id: "prisma-2wei-specials",
          label: "Fate/kaleid liner Prisma Illya 2wei! Specials",
          format: "Especial",
          completed: false,
          opened: false,
          episodes: [
            {
              id: "prisma2-s-1",
              number: 1,
              label: "First Bra: Illya",
              completed: false
            },
            {
              id: "prisma2-s-2",
              number: 2,
              label: "First Bra: Miyu",
              completed: false
            },
            {
              id: "prisma2-s-3",
              number: 3,
              label: "Sisters Skin Treatment",
              completed: false
            },
            {
              id: "prisma2-s-4",
              number: 4,
              label: "Elementary School Chinese Dress",
              completed: false
            },
            {
              id: "prisma2-s-5",
              number: 5,
              label: "Magical Girl Prisma XXX",
              completed: false
            }
          ]
        },
        {
          id: "prisma-herz",
          label: "Fate/kaleid liner Prisma☆Illya 2wei Herz!",
          format: "Anime",
          note: "En animeFLV, son 11 capitulos, pero estan mal, ya que el 11 es uno de los especiales",
          completed: false,
          opened: false,
          episodes: [
            {
              id: "prisma3-1",
              number: 1,
              label: "It's Like Looking in a Mirror, and I Don't Like It",
              completed: false
            },
            {
              id: "prisma3-2",
              number: 2,
              label: "Tricolore Birthday",
              completed: false
            },
            {
              id: "prisma3-3",
              number: 3,
              label: "Girls, Life is Short, So Rot Away",
              completed: false
            },
            {
              id: "prisma3-4",
              number: 4,
              label: "Theme Park Panic!",
              completed: false
            },
            {
              id: "prisma3-5",
              number: 5,
              label: "Yukatas and Fireworks",
              completed: false
            },
            {
              id: "prisma3-6",
              number: 6,
              label: "Blue Glass Moon",
              completed: false
            },
            {
              id: "prisma3-7",
              number: 7,
              label: "Enforcer",
              completed: false
            },
            {
              id: "prisma3-8",
              number: 8,
              label: "Observer",
              completed: false
            },
            {
              id: "prisma3-9",
              number: 9,
              label: "Golden Boy",
              completed: false
            },
            {
              id: "prisma3-10",
              number: 10,
              label: "Calling Your Name from a Corner of the World",
              completed: false
            }
          ]
        },
        {
          id: "prisma-herz-specials",
          label: "Fate/kaleid liner Prisma Illya 2wei Herz! Specials",
          format: "Especial",
          note: "En animeFLV, 1 capitulo se encuentra enFate/kaleid liner Prisma Illya 2wei, y los restantes en fate/kaleid liner Prisma Illya 2wei Specials",
          completed: false,
          opened: false,
          episodes: [
            {
              id: "prisma3-s-1",
              number: 1,
              label: "Beast, Futatabi!",
              note: "Especial 1 - esta como capitulo 11 de Fate/kaleid liner Prisma Illya 2wei",
              completed: false
            },
            {
              id: "prisma3-s-2",
              number: 2,
              label: "Mugen no Fukusei",
              note: "En AnimeFLV: 2wei! OVA Episodio 2",
              completed: false
            },
            {
              id: "prisma3-s-3",
              number: 3,
              label: "Otome yo Toushi wo Idake (Zenpen)",
              note: "En AnimeFLV: 2wei! OVA Episodio 3",
              completed: false
            },
            {
              id: "prisma3-s-4",
              number: 4,
              label: "Otome yo Toushi wo Idake (Kouhen)",
              note: "En AnimeFLV: 2wei! OVA Episodio 4",
              completed: false
            },
            {
              id: "prisma3-s-5",
              number: 5,
              label: "Bazett Hajimete no Arubaito",
              note: "En AnimeFLV: 2wei! OVA Episodio 5",
              completed: false
            }
          ]
        },
        {
          id: "prisma-3rei",
          label: "Fate/kaleid liner Prisma☆Illya 3rei!!",
          format: "Anime",
          completed: false,
          opened: false,
          episodes: [
            {
              id: "prisma4-1",
              number: 1,
              label: "City Fading to Silver",
              completed: false
            },
            {
              id: "prisma4-2",
              number: 2,
              label: "Encounters and Reunions",
              completed: false
            },
            {
              id: "prisma4-3",
              number: 3,
              label: "Your True Enemy",
              completed: false
            },
            {
              id: "prisma4-4",
              number: 4,
              label: "For My Weak Little Sister",
              completed: false
            },
            {
              id: "prisma4-5",
              number: 5,
              label: "The Little Lady Attacks",
              completed: false
            },
            {
              id: "prisma4-6",
              number: 6,
              label: "Chilling Hostility",
              completed: false
            },
            {
              id: "prisma4-7",
              number: 7,
              label: "Dolls and Stuffed Animals",
              completed: false
            },
            {
              id: "prisma4-8",
              number: 8,
              label: "People and Tools",
              completed: false
            },
            {
              id: "prisma4-9",
              number: 9,
              label: "Illya's Choice",
              completed: false
            },
            {
              id: "prisma4-10",
              number: 10,
              label: "To the Princess's Side",
              completed: false
            },
            {
              id: "prisma4-11",
              number: 11,
              label: "You Are Not Alone",
              completed: false
            },
            {
              id: "prisma4-12",
              number: 12,
              label: "Woven Miracles",
              completed: false
            }
          ]
        },
        {
          id: "prisma-3rei-specials",
          label: "Fate/kaleid liner Prisma Illya 3rei!! Specials",
          format: "Especial",
          completed: false,
          opened: false,
          episodes: [
            {
              id: "prisma4-s-1",
              number: 1,
              label: "Elementary School Students' Training",
              note: "Shougakusei-tachi no Marumaru Shugyou",
              completed: false
            },
            {
              id: "prisma4-s-2",
              number: 2,
              label: "Practical Survival Techniques",
              note: "Jissen Survival Jutsu",
              completed: false
            },
            {
              id: "prisma4-s-3",
              number: 3,
              label: "Change Clothes, Farewell Memories",
              note: "Kigae yo, Saraba Omoidasan",
              completed: false
            },
            {
              id: "prisma4-s-4",
              number: 4,
              label: "I Absolutely Cannot Lose!",
              note: "Zettai Makerumon desu ka!",
              completed: false
            },
            {
              id: "prisma4-s-5",
              number: 5,
              label: "Erika's Sleepwear Study",
              note: "Erika no Nemaki Kenkyuu",
              completed: false
            },
            {
              id: "prisma4-s-6",
              number: 6,
              label: "Ruby's Observation Records of Miyu-san's Baths",
              note: "Ruby no Mamoru Kyuutei Yokujou Kansatsuroku",
              completed: false
            }
          ]
        },
        {
          id: "prisma-movie",
          label: "Fate/kaleid liner Prisma☆Illya Movie: Sekka no Chikai",
          format: "Película",
          completed: false,
          opened: false,
          episodes: [
            {
              id: "prisma-mov-1",
              number: 1,
              label: "Sekka no Chikai",
              completed: false
            }
          ]
        },
        {
          id: "prisma-movie-licht",
          label: "Fate/kaleid liner Prisma☆Illya Movie: Licht - Namae no Nai Shoujo",
          format: "Película",
          note: "No se encuentra en animeFLV, la vi en ww3.animeonline.ninja",
          completed: false,
          opened: false,
          episodes: [
            {
              id: "prisma-mov-licht-1",
              number: 1,
              label: "Licht - Nameless Girl",
              note: "Licht - Namae no Nai Shoujo",
              completed: false
            }
          ]
        },
        {
          id: "prisma-phantasm",
          label: "Fate/Kaleid Liner Prisma Illya: Prisma★Phantasm",
          format: "OVA",
          note: "No se encuentra en animeFLV, la vi en ww3.animeonline.ninja",
          completed: false,
          opened: false,
          episodes: [
            {
              id: "prisma-ph-1",
              number: 1,
              label: "Prisma★Phantasm",
              completed: false
            }
          ]
        }
      ],
    },
    {
      saga: "Otros (Mundos Alternativos e Independientes)",
      opened: false,
      seasons: [
        {
          id: "fate-apocrypha",
          label: "Fate/Apocrypha",
          format: "Anime",
          completed: false,
          opened: false,
          episodes: [
            {
              id: "apoc-1",
              number: 1,
              label: "El Santo Grial de la Gran Guerra",
              completed: false,
            },
            {
              id: "apoc-2",
              number: 2,
              label: "El comienzo del fin",
              completed: false,
            },
            {
              id: "apoc-3",
              number: 3,
              label: "La primera batalla",
              completed: false,
            },
            {
              id: "apoc-4",
              number: 4,
              label: "El caballero de la tristeza",
              completed: false,
            },
            {
              id: "apoc-5",
              number: 5,
              label: "El dragón y la doncella",
              completed: false,
            },
            {
              id: "apoc-6",
              number: 6,
              label: "El sueño del héroe",
              completed: false,
            },
            {
              id: "apoc-7",
              number: 7,
              label: "El rey de los caballeros",
              completed: false,
            },
            {
              id: "apoc-8",
              number: 8,
              label: "El día en que el sueño terminó",
              completed: false,
            },
            {
              id: "apoc-9",
              number: 9,
              label: "El despertar del dragón",
              completed: false,
            },
            {
              id: "apoc-10",
              number: 10,
              label: "La batalla de los gigantes",
              completed: false,
            },
            {
              id: "apoc-11",
              number: 11,
              label: "La batalla de los gigantes (Parte 2)",
              completed: false,
            },
            {
              id: "apoc-12",
              number: 12,
              label: "La batalla de los gigantes (Parte 3)",
              completed: false,
            },
            {
              id: "apoc-13",
              number: 13,
              label: "La batalla de los gigantes (Parte 4)",
              completed: false,
            },
            {
              id: "apoc-14",
              number: 14,
              label: "La batalla de los gigantes (Parte 5)",
              completed: false,
            },
            {
              id: "apoc-15",
              number: 15,
              label: "La batalla de los gigantes (Parte 6)",
              completed: false,
            },
            {
              id: "apoc-16",
              number: 16,
              label: "La batalla de los gigantes (Parte 7)",
              completed: false,
            },
            {
              id: "apoc-17",
              number: 17,
              label: "La batalla de los gigantes (Parte 8)",
              completed: false,
            },
            {
              id: "apoc-18",
              number: 18,
              label: "La batalla de los gigantes (Parte 9)",
              completed: false,
            },
            {
              id: "apoc-19",
              number: 19,
              label: "La batalla de los gigantes (Parte 10)",
              completed: false,
            },
            {
              id: "apoc-20",
              number: 20,
              label: "La batalla de los gigantes (Parte 11)",
              completed: false,
            },
            {
              id: "apoc-21",
              number: 21,
              label: "La batalla de los gigantes (Parte 12)",
              completed: false,
            },
            {
              id: "apoc-22",
              number: 22,
              label: "La batalla de los gigantes (Parte 13)",
              completed: false,
            },
            {
              id: "apoc-23",
              number: 23,
              label: "La batalla de los gigantes (Parte 14)",
              completed: false,
            },
            {
              id: "apoc-24",
              number: 24,
              label: "La batalla de los gigantes (Parte 15)",
              completed: false,
            },
            {
              id: "apoc-25",
              number: 25,
              label: "La batalla de los gigantes (Parte 16)",
              completed: false,
            },
          ],
        },
        {
          id: "fate-prototype",
          label: "Fate Prototype",
          format: "OVA",
          completed: false,
          opened: false,
          episodes: [
            {
              id: "proto-1",
              number: 1,
              label: "Fate Prototype",
              completed: false,
            },
          ],
        },
        {
          id: "fate-extra",
          label: "Fate/Extra Last Encore",
          format: "Anime",
          completed: false,
          opened: false,
          episodes: [
            {
              id: "extra-1",
              number: 1,
              label: "El castillo de la muerte (Parte 1)",
              completed: false,
            },
            {
              id: "extra-2",
              number: 2,
              label: "El castillo de la muerte (Parte 2)",
              completed: false,
            },
            {
              id: "extra-3",
              number: 3,
              label: "El castillo de la muerte (Parte 3)",
              completed: false,
            },
            {
              id: "extra-4",
              number: 4,
              label: "El castillo de la muerte (Parte 4)",
              completed: false,
            },
            {
              id: "extra-5",
              number: 5,
              label: "El castillo de la muerte (Parte 5)",
              completed: false,
            },
            {
              id: "extra-6",
              number: 6,
              label: "El castillo de la muerte (Parte 6)",
              completed: false,
            },
            {
              id: "extra-7",
              number: 7,
              label: "El castillo de la muerte (Parte 7)",
              completed: false,
            },
            {
              id: "extra-8",
              number: 8,
              label: "El castillo de la muerte (Parte 8)",
              completed: false,
            },
            {
              id: "extra-9",
              number: 9,
              label: "El castillo de la muerte (Parte 9)",
              completed: false,
            },
            {
              id: "extra-10",
              number: 10,
              label: "El castillo de la muerte (Parte 10)",
              completed: false,
            },
            {
              id: "extra-11",
              number: 11,
              label: "El castillo de la muerte (Parte 11)",
              completed: false,
            },
            {
              id: "extra-12",
              number: 12,
              label: "El castillo de la muerte (Parte 12)",
              completed: false,
            },
            {
              id: "extra-13",
              number: 13,
              label: "El castillo de la muerte (Parte 13)",
              completed: false,
            },
          ],
        },
        {
          id: "carnival-phantasm",
          label: "Carnival Phantasm",
          format: "Serie OVA [Parodia esencial del Nasuverse]",
          completed: false,
          opened: false,
          episodes: [
            {
              id: "carnival-1",
              number: 1,
              label: "Episodio 1",
              completed: false,
            },
            {
              id: "carnival-2",
              number: 2,
              label: "Episodio 2",
              completed: false,
            },
            {
              id: "carnival-3",
              number: 3,
              label: "Episodio 3",
              completed: false,
            },
            {
              id: "carnival-4",
              number: 4,
              label: "Episodio 4",
              completed: false,
            },
            {
              id: "carnival-5",
              number: 5,
              label: "Episodio 5",
              completed: false,
            },
            {
              id: "carnival-6",
              number: 6,
              label: "Episodio 6",
              completed: false,
            },
            {
              id: "carnival-7",
              number: 7,
              label: "Episodio 7",
              completed: false,
            },
            {
              id: "carnival-8",
              number: 8,
              label: "Episodio 8",
              completed: false,
            },
            {
              id: "carnival-9",
              number: 9,
              label: "Episodio 9",
              completed: false,
            },
            {
              id: "carnival-10",
              number: 10,
              label: "Episodio 10",
              completed: false,
            },
            {
              id: "carnival-11",
              number: 11,
              label: "Episodio 11",
              completed: false,
            },
            {
              id: "carnival-12",
              number: 12,
              label: "Episodio 12",
              completed: false,
            },
          ],
        },
        {
          id: "todays-menu",
          label: "Today's Menu for the Emiya Family",
          format: "Serie OVA [Spin-off relajante de cocina]",
          completed: false,
          opened: false,
          episodes: [
            {
              id: "menu-1",
              number: 1,
              label: "Hamburguesa de tofu",
              completed: false,
            },
            {
              id: "menu-2",
              number: 2,
              label: "Sopa de miso y tempura",
              completed: false,
            },
            {
              id: "menu-3",
              number: 3,
              label: "Pasta carbonara",
              completed: false,
            },
            {
              id: "menu-4",
              number: 4,
              label: "Pescado a la sal",
              completed: false,
            },
            { id: "menu-5", number: 5, label: "Curry japonés", completed: false },
            { id: "menu-6", number: 6, label: "Sukiyaki", completed: false },
            { id: "menu-7", number: 7, label: "Pizza casera", completed: false },
            {
              id: "menu-8",
              number: 8,
              label: "Okonomiyaki y takoyaki",
              completed: false,
            },
            { id: "menu-9", number: 9, label: "Gyudon", completed: false },
            { id: "menu-10", number: 10, label: "Ramen", completed: false },
            {
              id: "menu-11",
              number: 11,
              label: "Comida para llevar",
              completed: false,
            },
            {
              id: "menu-12",
              number: 12,
              label: "Comida de año nuevo",
              completed: false,
            },
            {
              id: "menu-13",
              number: 13,
              label: "Comida de primavera",
              completed: false,
            },
          ],
        },
      ],
    },
]};