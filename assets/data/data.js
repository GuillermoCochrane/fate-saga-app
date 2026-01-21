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
        {
          id: "fate-zero-special",
          label: "Fate/Zero: Please! Einzbern Counseling Room",
          format: "Especial",
          note: "En animeonline, aparece después de la segunda temporada de Fate/Zero",
          completed: false,
          opened: false,
          episodes: [
            {
              id: "fz-s-1",
              number: 1,
              label: "Please! Einzbern Consultation Room: Part 1",
              romaji: "Please! Einzbern Consultation Room: Part 1",
              jp: "Please! アインツベルン相談室 第1回",
              es: "¡Por favor! Sala de Consultas Einzbern: Parte 1",
              completed: false
            },
            {
              id: "fz-s-2",
              number: 2,
              label: "Please! Einzbern Consultation Room: Part 2",
              romaji: "Please! Einzbern Consultation Room: Part 2",
              jp: "Please! アインツベルン相談室 第2回",
              es: "¡Por favor! Sala de Consultas Einzbern: Parte 2",
              completed: false
            },
            {
              id: "fz-s-3",
              number: 3,
              label: "Please! Einzbern Consultation Room: Part 3",
              romaji: "Please! Einzbern Consultation Room: Part 3",
              jp: "Please! アインツベルン相談室 第3回",
              es: "¡Por favor! Sala de Consultas Einzbern: Parte 3",
              completed: false
            },
            {
              id: "fz-s-4",
              number: 4,
              label: "Please! Einzbern Consultation Room: Part 4",
              romaji: "Please! Einzbern Consultation Room: Part 4",
              jp: "Please! アインツベルン相談室 第4回",
              es: "¡Por favor! Sala de Consultas Einzbern: Parte 4",
              completed: false
            },
            {
              id: "fz-s-5",
              number: 5,
              label: "Please! Einzbern Consultation Room: Part 5",
              romaji: "Please! Einzbern Consultation Room: Part 5",
              jp: "Please! アインツベルン相談室 第5回",
              es: "¡Por favor! Sala de Consultas Einzbern: Parte 5",
              completed: false
            },
            {
              id: "fz-s-6",
              number: 6,
              label: "Please! Einzbern Consultation Room: Part 6",
              romaji: "Please! Einzbern Consultation Room: Part 6",
              jp: "Please! アインツベルン相談室 第6回",
              es: "¡Por favor! Sala de Consultas Einzbern: Parte 6",
              completed: false
            }
          ]
        },
        {
          id: "fate-zero-remix",
          label: "Fate/Zero Remix",
          format: "Especial",
          note: "Dos especiales recapitulativos de los primeros 13 episodios",
          completed: false,
          opened: false,
          episodes: [
            {
              id: "fz-rm-1",
              number: 1,
              label: "Fate/Zero Remix I",
              romaji: "Fate/Zero Remix I",
              jp: "Fate/Zero Remix I",
              es: "Fate/Zero Remix I",
              completed: false
            },
            {
              id: "fz-rm-2",
              number: 2,
              label: "Fate/Zero Remix II", 
              romaji: "Fate/Zero Remix II",
              jp: "Fate/Zero Remix II",
              es: "Fate/Zero Remix II",
              completed: false
            }
          ]
        },
        {
          id: "fate-zero-cafe",
          label: "Fate/Zero Cafe",
          format: "OVA",
          note: "Cortos de comedia/parodia en formato café",
          completed: false,
          opened: false,
          episodes: [
            {
              id: "fz-cafe-1",
              number: 1,
              label: "Fate/Zero Cafe Part 1",
              romaji: "Fate/Zero Cafe Part 1",
              jp: "Fate/ゼロカフェ Part 1",
              es: "Fate/Zero Café Parte 1",
              completed: false
            },
            {
              id: "fz-cafe-2",
              number: 2,
              label: "Fate/Zero Cafe Part 2",
              romaji: "Fate/Zero Cafe Part 2",
              jp: "Fate/ゼロカフェ Part 2",
              es: "Fate/Zero Café Parte 2",
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
          id: "fate-stay-night-curtain-raiser",
          label: "Fate/stay night: Curtain Raiser",
          format: "OVA",
          completed: false,
          opened: false,
          episodes: [
            {
              id: "fsn-cr-1",
              number: 1,
              label: "Fate/stay night: Curtain Raiser",
              romaji: "Feito/sutei naito",
              jp: "フェイト／ステイナイト",
              es: "Fate/stay night: Curtain Raiser",
              completed: false
            }
          ]
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
              label: "The First Day",
              romaji: "Hajimari no Hi",
              jp: "始まりの日",
              es: "El Primer Día",
              completed: false
            },
            {
              id: "fsns-2",
              number: 2,
              label: "Fateful Night",
              romaji: "Unmei no Yoru",
              jp: "運命の夜",
              es: "La noche fatídica",
              completed: false
            },
            {
              id: "fsns-3",
              number: 3,
              label: "Opening Act",
              romaji: "Kaimaku",
              jp: "開幕",
              es: "Se levanta el telón",
              completed: false
            },
            {
              id: "fsns-4",
              number: 4,
              label: "The Strongest Enemy",
              romaji: "Saikyou no Teki",
              jp: "最強の敵",
              es: "El más poderoso enemigo",
              completed: false
            },
            {
              id: "fsns-5",
              number: 5,
              label: "Two Magi (Part 1)",
              romaji: "Majutsushi Futari (Zenpen)",
              jp: "魔術師二人 <前編>",
              es: "Los dos magos (parte 1)",
              completed: false
            },
            {
              id: "fsns-6",
              number: 6,
              label: "Two Magi (Part 2)",
              romaji: "Majutsushi Futari (Kouhen)",
              jp: "魔術師二人 <後編>",
              es: "Los dos magos (parte 2)",
              completed: false
            },
            {
              id: "fsns-7",
              number: 7,
              label: "Despicable Act",
              romaji: "Shundou",
              jp: "蠢動",
              es: "Movimientos en las sombras",
              completed: false
            },
            {
              id: "fsns-8",
              number: 8,
              label: "Discordant Melody",
              romaji: "Fukyou no Oto",
              jp: "不協の旋律[おと]",
              es: "Melodía discordante",
              completed: false
            },
            {
              id: "fsns-9",
              number: 9,
              label: "Elegance in the Moonlight",
              romaji: "Gekka Ryuurei",
              jp: "月下流麗",
              es: "Gallardía bajo la luna",
              completed: false
            },
            {
              id: "fsns-10",
              number: 10,
              label: "The Calm Interlude",
              romaji: "Odayaka na Makuai",
              jp: "穏やかな幕間",
              es: "Intermedio pacífico",
              completed: false
            },
            {
              id: "fsns-11",
              number: 11,
              label: "Temple of Blood",
              romaji: "Senketsu Shinden",
              jp: "鮮血神殿",
              es: "Barrera de sangre Andrómeda",
              completed: false
            },
            {
              id: "fsns-12",
              number: 12,
              label: "Splitting the Sky",
              romaji: "Sora wo Saku",
              jp: "空を裂く",
              es: "Rasgando los cielos",
              completed: false
            },
            {
              id: "fsns-13",
              number: 13,
              label: "Winter Castle",
              romaji: "Fuyu no Shiro",
              jp: "冬の城",
              es: "El castillo invernal",
              completed: false
            },
            {
              id: "fsns-14",
              number: 14,
              label: "The End of the Ideal",
              romaji: "Risou no Hate",
              jp: "理想の果て",
              es: "Donde terminan los ideales",
              completed: false
            },
            {
              id: "fsns-15",
              number: 15,
              label: "The Twelve Trials",
              romaji: "Juuni no Shiren",
              jp: "十二の試煉",
              es: "Los doce trabajos",
              completed: false
            },
            {
              id: "fsns-16",
              number: 16,
              label: "The Sword of the Promised Victory",
              romaji: "Yakusoku Sareta Shouri no Ken",
              jp: "約束された勝利の剣",
              es: "La espada que trae la victoria prometida",
              completed: false
            },
            {
              id: "fsns-17",
              number: 17,
              label: "Mark of the Witch",
              romaji: "Majo no Rakuin",
              jp: "魔女の烙印",
              es: "El estigma de la hechicera",
              completed: false
            },
            {
              id: "fsns-18",
              number: 18,
              label: "Decisive Battle",
              romaji: "Kessen",
              jp: "決戦",
              es: "La batalla decisiva",
              completed: false
            },
            {
              id: "fsns-19",
              number: 19,
              label: "The Golden King",
              romaji: "Ougon no Ou",
              jp: "黄金の王",
              es: "El Rey Dorado",
              completed: false
            },
            {
              id: "fsns-20",
              number: 20,
              label: "Distant Trace of a Dream",
              romaji: "Tooi Yume Ato",
              jp: "遠い夢跡",
              es: "Tras el lejano sueño",
              completed: false
            },
            {
              id: "fsns-21",
              number: 21,
              label: "The Star of Creation That Divided Heaven and Earth",
              romaji: "Tenchi Kairi Su Kaibyaku no Hoshi",
              jp: "天地乖離す開闢の星",
              es: "La separación del cielo y la tierra, y la creación de una estrella",
              completed: false
            },
            {
              id: "fsns-22",
              number: 22,
              label: "Result of a Wish",
              romaji: "Negai no Hate",
              jp: "願いの果て",
              es: "Al final de los deseos",
              completed: false
            },
            {
              id: "fsns-23",
              number: 23,
              label: "The Holy Grail",
              romaji: "Seihai",
              jp: "聖杯",
              es: "El Santo Grial",
              completed: false
            },
            {
              id: "fsns-24",
              number: 24,
              label: "The All Too Distant Utopia",
              romaji: "Subete Tooki Risoukyou",
              jp: "全て遠き理想郷",
              es: "Las lejanas utopías. Avalon",
              completed: false
            },
            {
              id: "fsns-25",
              number: 25,
              label: "Epilogue",
              romaji: "Epilogue",
              jp: "エピローグ",
              es: "Epílogo",
              note: "OVA/Especial incluido en los Blu-rays",
              completed: false
            }
          ]
        },
        {
          id: "fate-stay-night-ova",
          label: "Fate/stay night TV Reproduction",
          format: "OVA",
          note: "Resumen de la serie 2006. Disponible en: https://vww.animeflv.one/anime/fatestay-night-tv-reproduction",
          completed: false,
          opened: false,
          episodes: [
            {
              id: "fsn-ova-1",
              number: 1,
              label: "Fate/stay night TV Reproduction Episode 1",
              romaji: "Fate/stay night TV Reproduction Episode 1",
              jp: "Fate/stay night TV Reproduction 第1話",
              es: "Fate/stay night TV Reproduction Episodio 1",
              completed: false
            },
            {
              id: "fsn-ova-2",
              number: 2,
              label: "Fate/stay night TV Reproduction Episode 2",
              romaji: "Fate/stay night TV Reproduction Episode 2",
              jp: "Fate/stay night TV Reproduction 第2話",
              es: "Fate/stay night TV Reproduction Episodio 2",
              completed: false
            }
          ]
        },
        {
          id: "fate-ubw-prologue",
          label: "Fate/stay night: Unlimited Blade Works - Prologue",
          format: "Especial",
          note: "Episodio 00 / Special de 51 min. Disponible en https://vww.animeflv.one/anime/fatestay-night-unlimited-blade-works-prologue'",
          completed: false,
          opened: false,
          episodes: [
            {
              id: "ubw-pro-1",
              number: 1,
              label: "Fate/stay night [Unlimited Blade Works] - Prologue",
              romaji: "Fate/stay night [Unlimited Blade Works] - Prologue",
              jp: "Fate/stay night [Unlimited Blade Works] プロローグ",
              es: "Fate/stay night [Unlimited Blade Works] - Prólogo",
              completed: false
            }
          ]
        },
        {
          id: "fate-ubw-1",
          label: "Fate/stay night: Unlimited Blade Works",
          format: "Anime",
          completed: false,
          opened: false,
          episodes: [
            {
              id: "ubw1-1",
              number: 1,
              label: "Winter Day, Fateful Night",
              romaji: "Fuyu no Hi, Unmei no Yoru",
              jp: "冬の日、運命の夜",
              es: "Día de invierno, noche del destino",
              completed: false
            },
            {
              id: "ubw1-2",
              number: 2,
              label: "When the Curtain Goes Up",
              romaji: "Kaimaku no Toki",
              jp: "開幕の刻",
              es: "Se levanta el telón",
              completed: false
            },
            {
              id: "ubw1-3",
              number: 3,
              label: "The First Battle",
              romaji: "Shosen",
              jp: "初戦",
              es: "La primera batalla",
              completed: false
            },
            {
              id: "ubw1-4",
              number: 4,
              label: "Finding the Will to Fight",
              romaji: "Seni no Arika",
              jp: "戦意の在処",
              es: "El paradero del espíritu de batalla",
              completed: false
            },
            {
              id: "ubw1-5",
              number: 5,
              label: "Dancing After School",
              romaji: "Houkago ni Odoru",
              jp: "放課後に踊る",
              es: "Baile después de clase",
              completed: false
            },
            {
              id: "ubw1-6",
              number: 6,
              label: "Mirage",
              romaji: "Shinkirou",
              jp: "蜃気楼",
              es: "Espejismo",
              completed: false
            },
            {
              id: "ubw1-7",
              number: 7,
              label: "Reward for the Desperate Struggle",
              romaji: "Shitou no Kotae",
              jp: "死闘の報酬",
              es: "La recompensa del combate a muerte",
              completed: false
            },
            {
              id: "ubw1-8",
              number: 8,
              label: "Winter Days, Whereabouts of Mind",
              romaji: "Fuyu no Hi, Kokoro no Shozai",
              jp: "冬の日、心の所在",
              es: "Día de invierno. El paradero del corazón",
              completed: false
            },
            {
              id: "ubw1-9",
              number: 9,
              label: "The Distance Between Them",
              romaji: "Futari no Kyori",
              jp: "二人の距離",
              es: "La distancia entre los dos",
              completed: false
            },
            {
              id: "ubw1-10",
              number: 10,
              label: "The Fifth Contractor",
              romaji: "Goninme no Keiyakusha",
              jp: "五人目の契約者",
              es: "El quinto contratista",
              completed: false
            },
            {
              id: "ubw1-11",
              number: 11,
              label: "A Visitor Approaches Lightly",
              romaji: "Raihousha wa Karoyaka ni",
              jp: "来訪者は軽やかに",
              es: "Los visitantes llegan rápidamente",
              completed: false
            },
            {
              id: "ubw1-12",
              number: 12,
              label: "The Final Choice",
              romaji: "Saigo no Sentaku",
              jp: "最後の選択",
              es: "La última elección",
              completed: false
            }
          ]
        },
        {
          id: "fate-ubw-2",
          label: "Fate/stay night: Unlimited Blade Works 2nd Season",
          format: "Anime",
          completed: false,
          opened: false,
          episodes: [
            {
              id: "ubw2-1",
              number: 13,
              label: "Time of Departure",
              romaji: "Ketsubetsu no Toki",
              jp: "決別の刻",
              es: "El momento de decidir",
              completed: false
            },
            {
              id: "ubw2-2",
              number: 14,
              label: "Princess of Colchis",
              romaji: "Colchis no Oujo",
              jp: "コルキスの王女",
              es: "La princesa de la Cólquida",
              completed: false
            },
            {
              id: "ubw2-3",
              number: 15,
              label: "A Legendary Showdown",
              romaji: "Shinwa no Taiketsu",
              jp: "神話の対決",
              es: "El duelo mítico",
              completed: false
            },
            {
              id: "ubw2-4",
              number: 16,
              label: "Winter Days, the Form Wishes Take",
              romaji: "Fuyu no Hi, Negai no Katachi",
              jp: "冬の日、願いの形",
              es: "Días de invierno. La forma de los deseos",
              completed: false
            },
            {
              id: "ubw2-5",
              number: 17,
              label: "The Dark Sword Bares Its Fangs",
              romaji: "Anken, Kiba wo Muku",
              jp: "暗剣, 牙を剥く",
              es: "La espada asesina revela sus colmillos",
              completed: false
            },
            {
              id: "ubw2-6",
              number: 18,
              label: "The Beginning of the Circle",
              romaji: "Sono En wa Hajimari ni",
              jp: "その縁は始まりに",
              es: "El inicio del círculo",
              completed: false
            },
            {
              id: "ubw2-7",
              number: 19,
              label: "Idealism's End (The Answer)",
              romaji: "Risou wo Kotae",
              jp: "理想の末路 [こたえ]",
              es: "La solución del ideal",
              completed: false
            },
            {
              id: "ubw2-8",
              number: 20,
              label: "Unlimited Blade Works.",
              romaji: "Unlimited Blade Works.",
              jp: "Unlimited Blade Works.",
              es: "Unlimited Blade Works",
              completed: false
            },
            {
              id: "ubw2-9",
              number: 21,
              label: "Answer",
              romaji: "Answer",
              jp: "Answer",
              es: "Respuesta",
              completed: false
            },
            {
              id: "ubw2-10",
              number: 22,
              label: "Winter Days, Faraway Home",
              romaji: "Fuyu no hi, Tooi Ieji",
              jp: "冬の日、遠い家路",
              es: "Día de invierno, el lejano camino a casa",
              completed: false
            },
            {
              id: "ubw2-11",
              number: 23,
              label: "Incarnation",
              romaji: "Kengen",
              jp: "顕現",
              es: "Manifestación",
              completed: false
            },
            {
              id: "ubw2-12",
              number: 24,
              label: "Unlimited Blade Works",
              romaji: "Mugen no Kensei",
              jp: "無限の剣製",
              es: "Creación de espadas infinita",
              completed: false
            },
            {
              id: "ubw2-13",
              number: 25,
              label: "Epilogue",
              romaji: "Epilogue",
              jp: "エピローグ",
              es: "Epílogo",
              completed: false
            }
          ]
        },
        {
          id: "fate-ubw-ova",
          label: "Fate/stay night: Unlimited Blade Works 2nd Season - Sunny Day",
          format: "OVA",
          completed: false,
          opened: false,
          episodes: [
            {
              id: "ubw-ova-1",
              number: 1,
              label: "Sunny Day",
              romaji: "Feito/sutei naito [Anrimiteddo Bureido Waakuusu] Nijūgo-wa: Sannī Dei",
              jp: "Fate/stay night [Unlimited Blade Works] #25「Sunny Day」",
              es: "Fate/stay night: Unlimited Blade Works - Día Soleado",
              completed: false
            }
          ]
        },
        {
          id: "fate-ubw-movie",
          label: "Fate/stay night: Unlimited Blade Works",
          format: "Película",
          completed: false,
          opened: false,
          episodes: [
            {
              id: "ubw-movie-1",
              number: 1,
              label: "Fate/stay night: Unlimited Blade Works",
              romaji: "Gekijouban Fate/Stay Night: Unlimited Blade Works",
              jp: "劇場版 Fate/stay night UNLIMITED BLADE WORKS",
              es: "Fate stay night la Película: Unlimited Blade Works",
              completed: false
            }
          ]
        },
        {
          id: "fate-heavens-feel",
          label: "Fate/stay night: Heaven's Feel",
          format: "Película",
          completed: false,
          opened: false,
          episodes: [
            {
              id: "hf-1",
              number: 1,
              label: "Fate/stay night: Heaven's Feel - I. Presage Flower",
              romaji: "Gekijouban Fate/stay night [Heaven's Feel] I. Presage Flower",
              jp: "劇場版「Fate/stay night [Heaven's Feel] Ⅰ.presage flower」",
              es: "Fate/stay night: Heaven's Feel - I. Presagio de la Flor",
              completed: false
            },
            {
              id: "hf-2",
              number: 2,
              label: "Fate/stay night: Heaven's Feel - II. Lost Butterfly",
              romaji: "Gekijouban Fate/stay night [Heaven's Feel] II. Lost Butterfly",
              jp: "劇場版「Fate/stay night [Heaven's Feel] II.lost butterfly」",
              es: "Fate/stay night: Heaven's Feel - II. Mariposa Perdida",
              completed: false
            },
            {
              id: "hf-3",
              number: 3,
              label: "Fate/stay night: Heaven's Feel - III. Spring Song",
              romaji: "Gekijouban Fate/stay night [Heaven's Feel] III. Spring Song",
              jp: "劇場版「Fate/stay night [Heaven's Feel] III.spring song」",
              es: "Fate/stay night: Heaven's Feel - III. Canción de Primavera",
              completed: false
            }
          ]
        },
        {
          id: "emiya-todays-menu",
          label: "Today's Menu for the Emiya Family",
          format: "ONA",
          completed: false,
          opened: false,
          episodes: [
            {
              id: "menu-1",
              number: 1,
              label: "Toshikoshi Soba",
              romaji: "Toshikoshi Soba",
              jp: "年越しそば",
              es: "Soba Toshikoshi",
              completed: false
            },
            {
              id: "menu-2",
              number: 2,
              label: "Salmon, Mushroom and Butter Baked in Foil",
              romaji: "Shake to Kinoko no Butter Foil Yaki",
              jp: "鮭ときのこのバターオイル焼き",
              es: "Si es salmón, cocínalo con mantequilla y aluminio",
              completed: false
            },
            {
              id: "menu-3",
              number: 3,
              label: "Spring Chirashizushi",
              romaji: "Haru no Chirashizushi",
              jp: "春のちらし寿司",
              es: "Chirashizushi de primavera",
              completed: false
            },
            {
              id: "menu-4",
              number: 4,
              label: "Spring Greens and Bacon Sandwich",
              romaji: "Haru Yasai to Bēkon no Sandoitchi",
              jp: "春野菜とベーコンのサンドイッチ",
              es: "Sándwich de vegetales de primavera y beicon",
              completed: false
            },
            {
              id: "menu-5",
              number: 5,
              label: "Bamboo Shoot Gratin",
              romaji: "Takenoko Guratan",
              jp: "たけのこグラタン",
              es: "Gratinado de brotes de bambú",
              completed: false
            },
            {
              id: "menu-6",
              number: 6,
              label: "First Hamburg Steak",
              romaji: "Hajimete no Hanbāgu",
              jp: "はじめてのハンバーグ",
              es: "La primera hamburguesa",
              completed: false
            },
            {
              id: "menu-7",
              number: 7,
              label: "Refreshing and Easy to Eat Chilled Ochazuke",
              romaji: "Sarari to Itadaku Hiyashi Chazuke",
              jp: "さらりといただく冷やし茶漬け",
              es: "Comamos ya ochazuke frío",
              completed: false
            },
            {
              id: "menu-8",
              number: 8,
              label: "Toosaka's Gomoku Fried Rice",
              romaji: "Tōsaka-san no Gomoku Chāhan",
              jp: "遠坂さんの五目炒飯",
              es: "El arroz frito de Tohsaka",
              completed: false
            },
            {
              id: "menu-9",
              number: 9,
              label: "Taste of Autumn - Caster's Training in Japanese Dish Cooking -",
              romaji: "Aki no Mikaku: Kyasutā Washoku Shugyō-hen",
              jp: "秋の味覚-キャスター和食修行編-",
              es: "El sabor del otoño: el estudio de Caster de la cocina japonesa",
              completed: false
            },
            {
              id: "menu-10",
              number: 10,
              label: "Fried Chicken: Yummy Even When It's Cold",
              romaji: "Samete mo Oishii Karaage",
              jp: "冷めても美味しいからあげ",
              es: "Pollo frito, hasta frío es delicioso",
              completed: false
            },
            {
              id: "menu-11",
              number: 11,
              label: "Special Fluffy Gooey Omelet Rice",
              romaji: "Tokusei Fuwatoro Omuraisu",
              jp: "特製ふわとろオムライス",
              es: "Special Fluffy Gooey Omelet Rice",
              completed: false
            },
            {
              id: "menu-12",
              number: 12,
              label: "One-Pan Roast Beef",
              romaji: "Furaipan dake de Tsukuru Rōsuto Bīfu",
              jp: "フライパンだけで作るローストビーフ",
              es: "One-Pan Roast Beef",
              completed: false
            },
            {
              id: "menu-13",
              number: 13,
              label: "Hot, Hot Hot Pot",
              romaji: "Attaka Yosenabe",
              jp: "あったか寄せ鍋",
              es: "Hot, Hot Hot Pot",
              completed: false
            }
          ]
        },
      ],
    },
    {
      saga: "Lord El-Melloi II",
      opened: false,
      seasons: [
        {
          id: "elmelloi-special",
          label: "Lord El-Melloi II's Case Files: Rail Zeppelin Grace Note - A Grave Keeper, a Cat, and a Mage",
          format: "Especial",
          completed: false,
          opened: false,
          episodes: [
            {
              id: "elmelloi-s-1",
              number: 0,
              label: "A Grave Keeper, a Cat, and a Mage",
              romaji: "Hakamori to Neko to Majutsushi",
              jp: "墓守と猫と魔術師",
              es: "Un enterrador, un gato y un mago",
              completed: false
            }
          ]
        },
        {
          id: "elmelloi-anime",
          label: "Lord El-Melloi II's Case Files: Rail Zeppelin Grace Note",
          format: "Anime",
          completed: false,
          opened: false,
          episodes: [
            {
              id: "elmelloi-1",
              number: 1,
              label: "Babylon, The Condemned, and the Memories of the King",
              romaji: "Babylon to Keishisha to Ou no Kioku",
              jp: "バビロンと刑死者と王の記憶",
              es: "Babilonia, el ejecutor y los recuerdos del rey",
              completed: false
            },
            {
              id: "elmelloi-2",
              number: 2,
              label: "The Seven Stars and the Eternal Cage",
              romaji: "Nanatsu no Hoshi to Eien no Ori",
              jp: "七つの星と永遠の檻",
              es: "Siete cuerpos celestes y una celda eterna",
              completed: false
            },
            {
              id: "elmelloi-3",
              number: 3,
              label: "Thunder and the Underground Labyrinth",
              romaji: "Raimei to Chika Meikyuu",
              jp: "雷鳴と地下迷宮",
              es: "Truenos y el laberinto subterráneo",
              completed: false
            },
            {
              id: "elmelloi-4",
              number: 4,
              label: "A Workshop, a Grave, and a Necromancer",
              romaji: "Koubou to Dzuka to Shiryou Majutsushi",
              jp: "工房と塚と死霊魔術師",
              es: "El taller, la tumba y el nigromante",
              completed: false
            },
            {
              id: "elmelloi-5",
              number: 5,
              label: "The Lance that Shines to the End of the World and the Fairy Eyes",
              romaji: "Saihate no Yari to Yousei Me",
              jp: "最果ての槍と妖精眼",
              es: "La lanza del fin del mundo y el Ojo Hado",
              completed: false
            },
            {
              id: "elmelloi-6",
              number: 6,
              label: "A Girl, a Department Store, and a Gift",
              romaji: "Shoujo to Department Store to Present",
              jp: "少女とデパートとプレゼント",
              es: "Chicas, centro comercial y regalos",
              completed: false
            },
            {
              id: "elmelloi-7",
              number: 7,
              label: "Rail Zeppelin (1/6) – A Train Whistle of Departure and the First Murder",
              romaji: "Magan Shuushuu Ressha 1/6 Tabidachi no Kiteki to Daiichi no Satsujin",
              jp: "魔眼蒐集列車1/6 旅立ちの汽笛と第一の殺人",
              es: "El silbato del inicio del viaje y el primer asesinato",
              completed: false
            },
            {
              id: "elmelloi-8",
              number: 8,
              label: "Rail Zeppelin 2/6 Gordius Wheel and the Memory of the King of Conquerors",
              romaji: "Magan Shuushuu Ressha 2/6 Gordeiasu Houin to Seifuku Ou no Kioku",
              jp: "魔眼蒐集列車2/6 神威の車輪と征服王の記憶",
              es: "Gordius Wheel y los recuerdos del rey conquistador",
              completed: false
            },
            {
              id: "elmelloi-9",
              number: 9,
              label: "Rail Zeppelin 3/6 A Sibyl, Decision, and Child of Einnashe",
              romaji: "Magan Shuushuu Ressha 3/6 Miko to Ketsui to Fukairin no Ko",
              jp: "魔眼蒐集列車 3/6 巫女と決意と腑海林の仔",
              es: "Sacerdotisas, determinación y el Hijo de Einnashe",
              completed: false
            },
            {
              id: "elmelloi-10",
              number: 10,
              label: "Rail Zeppelin 4/6 Mystic Eyes of Transience and an Awakening Detective",
              romaji: "Magan Shuushuu Ressha 4/6 Houei no Magan to Mezameru Tantei",
              jp: "魔眼蒐集列車 4/6 泡影の魔眼と目覚める探偵",
              es: "El Ojo Místico Transitorio y el despertar del detective",
              completed: false
            },
            {
              id: "elmelloi-11",
              number: 11,
              label: "Rail Zeppelin 5/6 The Residual Image and Auctions",
              romaji: "Magan Shuushuu Ressha 5/6 Zanzou to Auction",
              jp: "魔眼蒐集列車 5/6 残像とオークション",
              es: "Reflejo y subasta",
              completed: false
            },
            {
              id: "elmelloi-12",
              number: 12,
              label: "Rail Zeppelin 6/6 Lightning and Shooting Star",
              romaji: "Magan Shuushuu Ressha 6/6 Raikou to Ryuusei",
              jp: "魔眼蒐集列車 6/6 雷光と流星",
              es: "Rayos y estrellas fugaces",
              completed: false
            },
            {
              id: "elmelloi-13",
              number: 13,
              label: "The Clock Tower, Usual Days, and the First Step Forward to the Future",
              romaji: "Tokeitou to Nichijou to Mirai e no Daiippo",
              jp: "時計塔と日常と未来への第一歩",
              es: "Episodio final",
              completed: false
            }
          ]
        },
        {
          id: "elmelloi-extra-special",
          label: "Lord El-Melloi II's Case Files: Rail Zeppelin Grace Note - Waver, Reunion, and the Magic Lantern",
          format: "Especial",
          note: "Disponible en: https://ww3.animeonline.ninja/episodio/lord-el-melloi-ii-sei-no-jikenbo-rail-zeppelin-grace-note-tokubetsu-hen/ o en https://jkanime.net/lord-el-melloi-ii-sei-no-jikenbo-rail-zeppelin-grace-note-special/serie/",
          completed: false,
          opened: false,
          episodes: [
            {
              id: "elmelloi-extra-1",
              number: 1,
              label: "Waver, Reunion, and the Magic Lantern",
              romaji: "Waver, Saikai, to Mahou Tourou",
              jp: "ウェイバー、再会、と魔法燈籠",
              es: "Waver, Reunión, y la Linterna Mágica",
              completed: false
            }
          ]
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
              number: 0,
              label: "Fate/strange Fake: Whispers of Dawn",
              romaji: "Fate/strange Fake: Whispers of Dawn",
              jp: "Fate/strange Fake -Whispers of Dawn-",
              es: "Fate/strange Fake: Whispers of Dawn",
              completed: false
            }
          ]
        },
        {
          id: "strange-fake-anime",
          label: "Fate/strange Fake",
          format: "Anime",
          note: "Serie en emisión. Estreno: Enero 2026",
          completed: false,
          opened: true,
          episodes: [
            {
              id: "fsf-1",
              number: 1,
              label: "The Heroic Spirit Incident",
              romaji: "Eirei Jiken",
              jp: "英霊事変",
              es: "El incidente del Espíritu Heroico",
              completed: false
            },
            {
              id: "fsf-2",
              number: 2,
              label: "Ensemble VS Pretense",
              romaji: "Gunzou vs Kyozou",
              jp: "群像VS虚像",
              es: "Conjunto contra pretensión",
              completed: false
            },
            {
              id: "fsf-3",
              number: 3,
              label: "Proximamente, en emisión",
              romaji: "Proximamente, en emisión",
              jp: "Proximamente, en emisión",
              es: "Proximamente, en emisión",
              completed: false
            },
          ]
        }
      ],
    },
    {
      saga: "Fate/Grand Order",
      opened: false,
      seasons: [
        {
          id: "fgo-first-order",
          label: "Fate/Grand Order - First Order -",
          format: "Especial",
          completed: false,
          opened: false,
          episodes: [
            {
              id: "fgo-first-order-1",
              number: 1,
              label: "First Order",
              romaji: "First Order",
              jp: "First Order",
              es: "First Order",
              completed: false
            }
          ]
        },
        {
          id: "fgo-camelot-1",
          label: "Fate/Grand Order: Divine Realm of the Round Table - Camelot Wandering; Agateram",
          format: "Película",
          note: "Disponible en: https://ww3.animeonline.ninja/pelicula/fate-grand-order-camelot-1-wandering-agateram-1/",
          completed: false,
          opened: false,
          episodes: [
            {
              id: "fgo-camelot-1-1",
              number: 1,
              label: "Divine Realm of the Round Table - Camelot Wandering; Agateram",
              romaji: "Shinsei Entaku Ryouiki Camelot 1 - Wandering; Agateram",
              jp: "劇場版 - 神聖円卓領域キャメロット- Wandering; Agateram",
              es: "Camelot 1 - Wandering; Agateram",
              completed: false
            }
          ]
        },
        {
          id: "fgo-camelot-2",
          label: "Fate/Grand Order: Divine Realm of the Round Table - Camelot Paladin; Agateram",
          format: "Película",
          note: "Disponible en: https://ww3.animeonline.ninja/pelicula/fate-grand-order-shinsei-entaku-ryouiki-camelot-2-paladin-agateram-1/",
          completed: false,
          opened: false,
          episodes: [
            {
              id: "fgo-camelot-2-1",
              number: 1,
              label: "Divine Realm of the Round Table - Camelot Paladin; Agateram",
              romaji: "Shinsei Entaku Ryouiki Camelot 2 - Paladin; Agateram",
              jp: "劇場版 - 神聖円卓領域キャメロット- Paladin; Agateram",
              es: "Camelot 2 - Paladin; Agateram",
              completed: false
            }
          ]
        },
        {
          id: "fgo-babylonia-initium",
          label: "Fate/Grand Order: Absolute Demonic Front - Babylonia Initium Iter",
          format: "Especial",
          completed: false,
          opened: false,
          episodes: [
            {
              id: "fgo-bab-initium-1",
              number: 0,
              label: "Fate/Grand Order: Absolute Demonic Front - Babylonia Initium Iter",
              romaji: "Fate/Grand Order: Zettai Majuu Sensen Babylonia Initium Iter",
              jp: "Fate/Grand Order -絶対魔獣戦線バビロニア- Initium Iter",
              es: "Initium Iter",
              completed: false
            }
          ]
        },
        {
          id: "fgo-babylonia",
          label: "Fate/Grand Order: Absolute Demonic Front - Babylonia",
          format: "Anime",
          completed: false,
          opened: false,
          episodes: [
            {
              id: "fgo-bab-1",
              number: 1,
              label: "Absolute Demonic Front Babylonia",
              romaji: "Zettai Majuu Sensen Babylonia",
              jp: "絶対魔獣戦線バビロニア",
              es: "Babilonia, el Frente Demoníaco Absoluto",
              completed: false
            },
            {
              id: "fgo-bab-2",
              number: 2,
              label: "Fortress City: Uruk",
              romaji: "Jousai Toshi Uruk",
              jp: "城塞都市ウルク",
              es: "La ciudad fortaleza Uruk",
              completed: false
            },
            {
              id: "fgo-bab-3",
              number: 3,
              label: "The King and His People",
              romaji: "Ou to Tami",
              jp: "王と民",
              es: "El rey y sus súbditos",
              completed: false
            },
            {
              id: "fgo-bab-4",
              number: 4,
              label: "Welcome to the Jungle",
              romaji: "Mitsurin no Yobigoe",
              jp: "密林の呼び声",
              es: "La llamada de la jungla",
              completed: false
            },
            {
              id: "fgo-bab-5",
              number: 5,
              label: "Gilgamesh's Journey",
              romaji: "Gilgamesh Kikou",
              jp: "ギルガメッシュ紀行",
              es: "El diario de viaje de Gilgamesh",
              completed: false
            },
            {
              id: "fgo-bab-6",
              number: 6,
              label: "The Tablet of Destinies",
              romaji: "Tenmei no Nendo Ita",
              jp: "天命の粘土板",
              es: "La Tabla del Destino",
              completed: false
            },
            {
              id: "fgo-bab-7",
              number: 7,
              label: "Diversionary Operation",
              romaji: "Youdousakusen",
              jp: "陽動作戦",
              es: "Distracción",
              completed: false
            },
            {
              id: "fgo-bab-8",
              number: 8,
              label: "The Mother of Demonic Beasts",
              romaji: "Majuu Oyagami",
              jp: "魔獣母神",
              es: "La madre de las Bestias Demoníacas",
              completed: false
            },
            {
              id: "fgo-bab-9",
              number: 9,
              label: "Good Morning, Goddess of Venus",
              romaji: "Ohayou, Kinsei no Megami",
              jp: "おはよう、金星の女神",
              es: "Buenos días, diosa del planeta Venus",
              completed: false
            },
            {
              id: "fgo-bab-10",
              number: 10,
              label: "Hello, Goddess of the Sun",
              romaji: "Konnichiwa, Taiyou no Megami",
              jp: "こんにちは、太陽の女神",
              es: "Hola, diosa del sol",
              completed: false
            },
            {
              id: "fgo-bab-11",
              number: 11,
              label: "Temple of the Sun",
              romaji: "Taiyou no Shinden",
              jp: "太陽の神殿",
              es: "El Templo del Sol",
              completed: false
            },
            {
              id: "fgo-bab-12",
              number: 12,
              label: "Death of the King",
              romaji: "Ou no Shi",
              jp: "王の死",
              es: "La muerte del rey",
              completed: false
            },
            {
              id: "fgo-bab-13",
              number: 13,
              label: "Farewell, Goddess of the Underworld",
              romaji: "Sayonara, Meikai no Megami",
              jp: "さよなら、冥界の女神",
              es: "Adiós, diosa del inframundo",
              completed: false
            },
            {
              id: "fgo-bab-14",
              number: 14,
              label: "Decisive Battle",
              romaji: "Kessen",
              jp: "決戦",
              es: "Batalla final",
              completed: false
            },
            {
              id: "fgo-bab-15",
              number: 15,
              label: "The New Humanity",
              romaji: "Atarashii Hito no Katachi",
              jp: "新しいヒトのカタチ",
              es: "La forma de la nueva humanidad",
              completed: false
            },
            {
              id: "fgo-bab-16",
              number: 16,
              label: "Awakening",
              romaji: "Mezame",
              jp: "目覚め",
              es: "Despertar",
              completed: false
            },
            {
              id: "fgo-bab-17",
              number: 17,
              label: "The Congress Dances",
              romaji: "Kaigi wa Odoru",
              jp: "会議は踊る",
              es: "Bailes en la reunión",
              completed: false
            },
            {
              id: "fgo-bab-18",
              number: 18,
              label: "Primordial Star, Gazing Towards The Sky",
              romaji: "Gensho no Hoshi, Miageru Sora",
              jp: "原初の星, 見上げる空",
              es: "Estrella original, miramos hacia el cielo",
              completed: false
            },
            {
              id: "fgo-bab-19",
              number: 19,
              label: "Absolute Demonic Front Mesopotamia I",
              romaji: "Absolute Demonic Front Mesopotamia I",
              jp: "Absolute Demonic Front Mesopotamia I",
              es: "Mesopotamia, el Frente Demoníaco Absoluto - Parte 1",
              completed: false
            },
            {
              id: "fgo-bab-20",
              number: 20,
              label: "Absolute Demonic Front Mesopotamia II",
              romaji: "Absolute Demonic Front Mesopotamia II",
              jp: "Absolute Demonic Front Mesopotamia II",
              es: "Mesopotamia, el Frente Demoníaco Absoluto - Parte 2",
              completed: false
            },
            {
              id: "fgo-bab-21",
              number: 21,
              label: "Grand Order",
              romaji: "Grand Order",
              jp: "Grand Order",
              es: "Grand Order",
              completed: false
            }
          ]
        },
        {
          id: "fgo-babylonia-recaps",
          label: "Fate/Grand Order: Absolute Demonic Front - Babylonia Recaps",
          format: "Especial",
          note: "Tres episodios de recapitulación de la serie Babylonia. Emitidos entre diciembre 2019 y febrero 2020.",
          completed: false,
          opened: false,
          episodes: [
            {
              id: "fgo-bab-recap-1",
              number: 1,
              label: "Babylonia Recap Part 1",
              romaji: "Babylonia Soushuuhen Part 1",
              jp: "バビロニア総集編 第1部",
              es: "Recapitulación de Babylonia Parte 1",
              completed: false
            },
            {
              id: "fgo-bab-recap-2",
              number: 2,
              label: "Babylonia Recap Part 2",
              romaji: "Babylonia Soushuuhen Part 2",
              jp: "バビロニア総集編 第2部",
              es: "Recapitulación de Babylonia Parte 2",
              completed: false
            },
            {
              id: "fgo-bab-recap-3",
              number: 3,
              label: "Babylonia Recap Part 3",
              romaji: "Babylonia Soushuuhen Part 3",
              jp: "バビロニア総集編 第3部",
              es: "Recapitulación de Babylonia Parte 3",
              completed: false
            }
          ]
        },
        {
          id: "fgo-solomon-specials",
          label: "Fate/Grand Order: Shuukyoku Tokuiten - Kani Jikan Shinden Solomon Specials",
          format: "Especial",
          completed: false,
          opened: false,
          episodes: [
            {
              id: "fgo-solomon-special-1",
              number: 1,
              label: "Fate/Grand Order TV Special: Absolute Demonic Front Babylonia Summary",
              romaji: "Fate/Grand Order Tokubetsu Bangumi: Zettai Majuu Sensen Babylonia Soushuuhen",
              jp: "Fate/Grand Order 特別番組「絶対魔獣戦線バビロニア 総集編」",
              es: "Especial de TV: Recapitulación de El Frente Demoníaco Absoluto Babilonia",
              completed: false
            },
            {
              id: "fgo-solomon-special-2", 
              number: 2,
              label: "Fate/Grand Order TV Special: Grand Temple of Time Solomon Premiere Commemoration",
              romaji: "Fate/Grand Order Tokubetsu Bangumi: Shuukyoku Tokuiten - Kani Jikan Shinden Solomon Zenpen Jouei Kinen",
              jp: "Fate/Grand Order 特別番組「終局特異点 冠位時間神殿ソロモン 前編上映記念」",
              es: "Especial de TV: Conmemoración del Estreno de El Gran Templo del Tiempo Salomón",
              completed: false
            }
          ]
        },
        {
          id: "fgo-solomon",
          label: "Fate/Grand Order: Final Singularity - Grand Temple of Time: Solomon",
          format: "Película",
          note: "Disponible en: https://ww3.animeonline.ninja/pelicula/fate-grand-order-shuukyoku-tokuiten/",
          completed: false,
          opened: false,
          episodes: [
            {
              id: "fgo-solomon-1",
              number: 1,
              label: "Fate/Grand Order: Final Singularity - Grand Temple of Time: Solomon",
              romaji: "Fate/Grand Order: Shuukyoku Tokuiten - Kani Jikan Shinden Solomon",
              jp: "Fate/Grand Order -終局特異点 冠位時間神殿ソロモン-",
              es: "Fate/Grand Order: Singularidad Final - Gran Templo del Tiempo: Salomón",
              completed: false
            }
          ]
        },
        {
          id: "fgo-moonlight",
          label: "Fate/Grand Order: Moonlight/Lostroom",
          format: "Especial",
          completed: true,
          opened: false,
          episodes: [
            {
              id: "fgo-ml-1",
              number: 1,
              label: "Fate/Grand Order: Moonlight/Lostroom",
              romaji: "Fate/Grand Order: Moonlight/Lostroom",
              jp: "Fate/Grand Order -MOONLIGHT/LOSTROOM-",
              es: "Fate/Grand Order -MOONLIGHT/LOSTROOM-",
              completed: true
            }
          ]
        },
        {
          id: "fgo-gudaguda-2016",
          label: "Farewell to 2016 Guda Guda Order",
          format: "Especial",
          note: "Disponible en: https://www.youtube.com/watch?v=c4hPKL4v-5Y",
          completed: false,
          opened: false,
          episodes: [
            {
              id: "fgo-gudaguda-2016-1",
              number: 1,
              label: "Farewell to 2016 Guda Guda Order",
              romaji: "Toshiwasure Guda Guda Order 2016",
              jp: "年忘れぐだぐだオーダー2016",
              es: "Adiós a 2016 Guda Guda Order",
              completed: false
            }
          ]
        },
        {
          id: "fgo-himuro-tenchi",
          label: "Fate/Grand Order x Himuro's World: Seven Most Powerful Great Figures Chapter",
          format: "Especial",
          note: "Disponible en: https://vww.animeflv.one/ver/fategrand-order-himuro-no-tenchi-7-nin-no-saikyou-ijin-hen-1",
          completed: false,
          opened: false,
          episodes: [
            {
              id: "fgo-himuro-1",
              number: 1,
              label: "Fate/Grand Order x Himuro's World: Seven Most Powerful Great Figures Chapter",
              romaji: "Fate/Grand Order: Himuro no Tenchi - 7-nin no Saikyou Ijin-hen",
              jp: "Fate/Grand Order氷室の天地～7人の最強の偉人編～",
              es: "Fate/Grand Order: Himuro no Tenchi - 7-nin no Saikyou Ijin-hen",
              completed: false
            }
          ]
        },
        {
          id: "fgo-manga-wakaru",
          label: "Learning with Manga! Fate/Grand Order",
          format: "Especial",
          note: "Disponible en: https://vww.animeflv.one/ver/manga-de-wakaru-fategrand-order-1",
          completed: false,
          opened: false,
          episodes: [
            {
              id: "fgo-manga-wakaru-1",
              number: 1,
              label: "Learning with Manga! Fate/Grand Order",
              romaji: "Manga de Wakaru! Fate/Grand Order",
              jp: "マンガで分かる！Fate/Grand Order",
              es: "¡Aprende con Manga! Fate/Grand Order",
              completed: false
            }
          ]
        },
        {
          id: "fgo-carnival",
          label: "Fate/Grand Carnival",
          format: "OVA",
          completed: true,
          opened: false,
          episodes: [
            {
              id: "fgo-car-1",
              number: 1,
              label: "Eirei Genkai Taisai Olympia: The Great Transformation of the Kyouen - Volume of the Great Spirit Conversion Plan",
              romaji: "Eirei Genkai Taisai Olympia: Kyouen no Taika - Dai Reiki Henkan Keikaku",
              jp: "英霊限界大祭オリンピア: 狂宴の大火 - 大霊基返還計画",
              es: "Gran Festival de los Espíritus Heroicos Olimpo: El Gran Incendio del Banquete - Plan de Conversión de los Grandes Espíritus",
              completed: true
            },
            {
              id: "fgo-car-2",
              number: 2,
              label: "Night's Special Feature Kabukicho",
              romaji: "Yoru no Tokuiten Kabukichou",
              jp: "夜の特異点カブキチョウ",
              es: "Punto Singular Nocturno: Kabukicho",
              completed: true
            },
            {
              id: "fgo-car-3",
              number: 3,
              label: "The Documentary: Expanding the Gap of the Heroic Spirit - The Heroic Labor Standards Law",
              romaji: "The Documentary: Hirogaru Eirei Kakusa - Eirei Roudoukijunhou",
              jp: "ザ・ドキュメンタリー 拡がる英霊格差 ~英霊労働基準法~",
              es: "El Documental: La Creciente Brecha entre los Espíritus Heroicos - Ley Laboral de los Espíritus Heroicos",
              completed: true
            },
            {
              id: "fgo-car-4",
              number: 4,
              label: "Kizuna Max Channel",
              romaji: "Kizuna Max Channel",
              jp: "絆MAXチャンネル",
              es: "Canal de Lazos Máximos",
              completed: true
            }
          ]
        }
      ],
    },
    { 
      saga: "Fate/Grand Order: Fujimaru Ritsuka wa Wakaranai",
      opened: false,
      seasons: [
        {
          id: "fgo-comedy-nenmatsu",
          label: "Fate/Grand Order: Fujimaru Ritsuka wa Wakaranai - Nenmatsu Special",
          format: "Especial",
          completed: false,
          opened: false,
          episodes: [
            {
              id: "fgo-comedy-nen-1",
              number: 1,
              label: "Fate/Grand Order: You've Lost Ritsuka Fujimaru - Year-End Special",
              romaji: "Fate/Grand Order: Fujimaru Ritsuka wa Wakaranai - Nenmatsu Special",
              jp: "Fate/Grand Order 藤丸立香はわからない 年末スペシャル",
              es: "Especial de Fin de Año: No Entiendes a Ritsuka Fujimaru",
              completed: false
            }
          ]
        },
        {
          id: "fgo-comedy-season1",
          label: "Fate/Grand Order: Fujimaru Ritsuka wa Wakaranai",
          format: "ONA",
          completed: false,
          opened: false,
          episodes: [
            {
              id: "fgo-comedy-s1-1",
              number: 1,
              label: "You've Lost Ritsuka Fujimaru - Episode 1",
              romaji: "Fujimaru Ritsuka wa Wakaranai - Episode 1",
              jp: "藤丸立香はわからない 第1話",
              es: "No Entiendes a Ritsuka Fujimaru - Capítulo 1",
              completed: false
            },
            {
              id: "fgo-comedy-s1-2",
              number: 2,
              label: "You've Lost Ritsuka Fujimaru - Episode 2",
              romaji: "Fujimaru Ritsuka wa Wakaranai - Episode 2",
              jp: "藤丸立香はわからない 第2話",
              es: "No Entiendes a Ritsuka Fujimaru - Capítulo 2",
              completed: false
            },
            {
              id: "fgo-comedy-s1-3",
              number: 3,
              label: "You've Lost Ritsuka Fujimaru - Episode 3",
              romaji: "Fujimaru Ritsuka wa Wakaranai - Episode 3",
              jp: "藤丸立香はわからない 第3話",
              es: "No Entiendes a Ritsuka Fujimaru - Capítulo 3",
              completed: false
            },
            {
              id: "fgo-comedy-s1-4",
              number: 4,
              label: "You've Lost Ritsuka Fujimaru - Episode 4",
              romaji: "Fujimaru Ritsuka wa Wakaranai - Episode 4",
              jp: "藤丸立香はわからない 第4話",
              es: "No Entiendes a Ritsuka Fujimaru - Capítulo 4",
              completed: false
            },
            {
              id: "fgo-comedy-s1-5",
              number: 5,
              label: "You've Lost Ritsuka Fujimaru - Episode 5",
              romaji: "Fujimaru Ritsuka wa Wakaranai - Episode 5",
              jp: "藤丸立香はわからない 第5話",
              es: "No Entiendes a Ritsuka Fujimaru - Capítulo 5",
              completed: false
            },
            {
              id: "fgo-comedy-s1-6",
              number: 6,
              label: "You've Lost Ritsuka Fujimaru - Episode 6",
              romaji: "Fujimaru Ritsuka wa Wakaranai - Episode 6",
              jp: "藤丸立香はわからない 第6話",
              es: "No Entiendes a Ritsuka Fujimaru - Capítulo 6",
              completed: false
            },
            {
              id: "fgo-comedy-s1-7",
              number: 7,
              label: "You've Lost Ritsuka Fujimaru - Episode 7",
              romaji: "Fujimaru Ritsuka wa Wakaranai - Episode 7",
              jp: "藤丸立香はわからない 第7話",
              es: "No Entiendes a Ritsuka Fujimaru - Capítulo 7",
              completed: false
            },
            {
              id: "fgo-comedy-s1-8",
              number: 8,
              label: "You've Lost Ritsuka Fujimaru - Episode 8",
              romaji: "Fujimaru Ritsuka wa Wakaranai - Episode 8",
              jp: "藤丸立香はわからない 第8話",
              es: "No Entiendes a Ritsuka Fujimaru - Capítulo 8",
              completed: false
            },
            {
              id: "fgo-comedy-s1-9",
              number: 9,
              label: "You've Lost Ritsuka Fujimaru - Episode 9",
              romaji: "Fujimaru Ritsuka wa Wakaranai - Episode 9",
              jp: "藤丸立香はわからない 第9話",
              es: "No Entiendes a Ritsuka Fujimaru - Capítulo 9",
              completed: false
            },
            {
              id: "fgo-comedy-s1-10",
              number: 10,
              label: "You've Lost Ritsuka Fujimaru - Episode 10",
              romaji: "Fujimaru Ritsuka wa Wakaranai - Episode 10",
              jp: "藤丸立香はわからない 第10話",
              es: "No Entiendes a Ritsuka Fujimaru - Capítulo 10",
              completed: false
            },
            {
              id: "fgo-comedy-s1-11",
              number: 11,
              label: "You've Lost Ritsuka Fujimaru - Episode 11",
              romaji: "Fujimaru Ritsuka wa Wakaranai - Episode 11",
              jp: "藤丸立香はわからない 第11話",
              es: "No Entiendes a Ritsuka Fujimaru - Capítulo 11",
              completed: false
            },
            {
              id: "fgo-comedy-s1-12",
              number: 12,
              label: "You've Lost Ritsuka Fujimaru - Episode 12",
              romaji: "Fujimaru Ritsuka wa Wakaranai - Episode 12",
              jp: "藤丸立香はわからない 第12話",
              es: "No Entiendes a Ritsuka Fujimaru - Capítulo 12",
              completed: false
            },
            {
              id: "fgo-comedy-s1-13",
              number: 13,
              label: "You've Lost Ritsuka Fujimaru - Episode 13",
              romaji: "Fujimaru Ritsuka wa Wakaranai - Episode 13",
              jp: "藤丸立香はわからない 第13話",
              es: "No Entiendes a Ritsuka Fujimaru - Capítulo 13",
              completed: false
            },
            {
              id: "fgo-comedy-s1-14",
              number: 14,
              label: "You've Lost Ritsuka Fujimaru - Episode 14",
              romaji: "Fujimaru Ritsuka wa Wakaranai - Episode 14",
              jp: "藤丸立香はわからない 第14話",
              es: "No Entiendes a Ritsuka Fujimaru - Capítulo 14",
              completed: false
            },
            {
              id: "fgo-comedy-s1-15",
              number: 15,
              label: "You've Lost Ritsuka Fujimaru - Episode 15",
              romaji: "Fujimaru Ritsuka wa Wakaranai - Episode 15",
              jp: "藤丸立香はわからない 第15話",
              es: "No Entiendes a Ritsuka Fujimaru - Capítulo 15",
              completed: false
            },
            {
              id: "fgo-comedy-s1-16",
              number: 16,
              label: "You've Lost Ritsuka Fujimaru - Episode 16",
              romaji: "Fujimaru Ritsuka wa Wakaranai - Episode 16",
              jp: "藤丸立香はわからない 第16話",
              es: "No Entiendes a Ritsuka Fujimaru - Capítulo 16",
              completed: false
            },
            {
              id: "fgo-comedy-s1-17",
              number: 17,
              label: "You've Lost Ritsuka Fujimaru - Episode 17",
              romaji: "Fujimaru Ritsuka wa Wakaranai - Episode 17",
              jp: "藤丸立香はわからない 第17話",
              es: "No Entiendes a Ritsuka Fujimaru - Capítulo 17",
              completed: false
            },
            {
              id: "fgo-comedy-s1-18",
              number: 18,
              label: "You've Lost Ritsuka Fujimaru - Episode 18",
              romaji: "Fujimaru Ritsuka wa Wakaranai - Episode 18",
              jp: "藤丸立香はわからない 第18話",
              es: "No Entiendes a Ritsuka Fujimaru - Capítulo 18",
              completed: false
            },
            {
              id: "fgo-comedy-s1-19",
              number: 19,
              label: "You've Lost Ritsuka Fujimaru - Episode 19",
              romaji: "Fujimaru Ritsuka wa Wakaranai - Episode 19",
              jp: "藤丸立香はわからない 第19話",
              es: "No Entiendes a Ritsuka Fujimaru - Capítulo 19",
              completed: false
            },
            {
              id: "fgo-comedy-s1-20",
              number: 20,
              label: "You've Lost Ritsuka Fujimaru - Episode 20",
              romaji: "Fujimaru Ritsuka wa Wakaranai - Episode 20",
              jp: "藤丸立香はわからない 第20話",
              es: "No Entiendes a Ritsuka Fujimaru - Capítulo 20",
              completed: false
            },
            {
              id: "fgo-comedy-s1-21",
              number: 21,
              label: "You've Lost Ritsuka Fujimaru - Episode 21",
              romaji: "Fujimaru Ritsuka wa Wakaranai - Episode 21",
              jp: "藤丸立香はわからない 第21話",
              es: "No Entiendes a Ritsuka Fujimaru - Capítulo 21",
              completed: false
            },
            {
              id: "fgo-comedy-s1-22",
              number: 22,
              label: "You've Lost Ritsuka Fujimaru - Episode 22",
              romaji: "Fujimaru Ritsuka wa Wakaranai - Episode 22",
              jp: "藤丸立香はわからない 第22話",
              es: "No Entiendes a Ritsuka Fujimaru - Capítulo 22",
              completed: false
            },
            {
              id: "fgo-comedy-s1-23",
              number: 23,
              label: "You've Lost Ritsuka Fujimaru - Episode 23",
              romaji: "Fujimaru Ritsuka wa Wakaranai - Episode 23",
              jp: "藤丸立香はわからない 第23話",
              es: "No Entiendes a Ritsuka Fujimaru - Capítulo 23",
              completed: false
            },
            {
              id: "fgo-comedy-s1-24",
              number: 24,
              label: "You've Lost Ritsuka Fujimaru - Episode 24",
              romaji: "Fujimaru Ritsuka wa Wakaranai - Episode 24",
              jp: "藤丸立香はわからない 第24話",
              es: "No Entiendes a Ritsuka Fujimaru - Capítulo 24",
              completed: false
            },
            {
              id: "fgo-comedy-s1-25",
              number: 25,
              label: "You've Lost Ritsuka Fujimaru - Episode 25",
              romaji: "Fujimaru Ritsuka wa Wakaranai - Episode 25",
              jp: "藤丸立香はわからない 第25話",
              es: "No Entiendes a Ritsuka Fujimaru - Capítulo 25",
              completed: false
            },
            {
              id: "fgo-comedy-s1-26",
              number: 26,
              label: "You've Lost Ritsuka Fujimaru - Episode 26",
              romaji: "Fujimaru Ritsuka wa Wakaranai - Episode 26",
              jp: "藤丸立香はわからない 第26話",
              es: "No Entiendes a Ritsuka Fujimaru - Capítulo 26",
              completed: false
            },
            {
              id: "fgo-comedy-s1-27",
              number: 27,
              label: "You've Lost Ritsuka Fujimaru - Episode 27",
              romaji: "Fujimaru Ritsuka wa Wakaranai - Episode 27",
              jp: "藤丸立香はわからない 第27話",
              es: "No Entiendes a Ritsuka Fujimaru - Capítulo 27",
              completed: false
            },
            {
              id: "fgo-comedy-s1-28",
              number: 28,
              label: "You've Lost Ritsuka Fujimaru - Episode 28",
              romaji: "Fujimaru Ritsuka wa Wakaranai - Episode 28",
              jp: "藤丸立香はわからない 第28話",
              es: "No Entiendes a Ritsuka Fujimaru - Capítulo 28",
              completed: false
            },
            {
              id: "fgo-comedy-s1-29",
              number: 29,
              label: "You've Lost Ritsuka Fujimaru - Episode 29",
              romaji: "Fujimaru Ritsuka wa Wakaranai - Episode 29",
              jp: "藤丸立香はわからない 第29話",
              es: "No Entiendes a Ritsuka Fujimaru - Capítulo 29",
              completed: false
            },
            {
              id: "fgo-comedy-s1-30",
              number: 30,
              label: "You've Lost Ritsuka Fujimaru - Episode 30",
              romaji: "Fujimaru Ritsuka wa Wakaranai - Episode 30",
              jp: "藤丸立香はわからない 第30話",
              es: "No Entiendes a Ritsuka Fujimaru - Capítulo 30",
              completed: false
            },
            {
              id: "fgo-comedy-s1-31",
              number: 31,
              label: "You've Lost Ritsuka Fujimaru - Episode 31",
              romaji: "Fujimaru Ritsuka wa Wakaranai - Episode 31",
              jp: "藤丸立香はわからない 第31話",
              es: "No Entiendes a Ritsuka Fujimaru - Capítulo 31",
              completed: false
            },
            {
              id: "fgo-comedy-s1-32",
              number: 32,
              label: "You've Lost Ritsuka Fujimaru - Episode 32",
              romaji: "Fujimaru Ritsuka wa Wakaranai - Episode 32",
              jp: "藤丸立香はわからない 第32話",
              es: "No Entiendes a Ritsuka Fujimaru - Capítulo 32",
              completed: false
            },
            {
              id: "fgo-comedy-s1-33",
              number: 33,
              label: "You've Lost Ritsuka Fujimaru - Episode 33",
              romaji: "Fujimaru Ritsuka wa Wakaranai - Episode 33",
              jp: "藤丸立香はわからない 第33話",
              es: "No Entiendes a Ritsuka Fujimaru - Capítulo 33",
              completed: false
            }
          ]
        },
        {
          id: "fgo-comedy-dai-bounen-2023",
          label: "Fate/Grand Order: Fujimaru Ritsuka wa Wakaranai - Dai Bounen Otanoshimikai 2023",
          format: "Especial",
          completed: false,
          opened: false,
          episodes: [
            {
              id: "fgo-comedy-db2023-1",
              number: 1,
              label: "You've Lost Ritsuka Fujimaru - Special Episode 1",
              romaji: "Fujimaru Ritsuka wa Wakaranai - Dai Bounen Otanoshimikai 2023 Episode 1",
              jp: "藤丸立香はわからない ~大忘年お楽しみ会2023~ 第1話",
              es: "No Entiendes a Ritsuka Fujimaru - Especial 2023 Capítulo 1",
              completed: false
            },
            {
              id: "fgo-comedy-db2023-2",
              number: 2,
              label: "You've Lost Ritsuka Fujimaru - Special Episode 2",
              romaji: "Fujimaru Ritsuka wa Wakaranai - Dai Bounen Otanoshimikai 2023 Episode 2",
              jp: "藤丸立香はわからない ~大忘年お楽しみ会2023~ 第2話",
              es: "No Entiendes a Ritsuka Fujimaru - Especial 2023 Capítulo 2",
              completed: false
            },
            {
              id: "fgo-comedy-db2023-3",
              number: 3,
              label: "You've Lost Ritsuka Fujimaru - Special Episode 3",
              romaji: "Fujimaru Ritsuka wa Wakaranai - Dai Bounen Otanoshimikai 2023 Episode 3",
              jp: "藤丸立香はわからない ~大忘年お楽しみ会2023~ 第3話",
              es: "No Entiendes a Ritsuka Fujimaru - Especial 2023 Capítulo 3",
              completed: false
            },
            {
              id: "fgo-comedy-db2023-4",
              number: 4,
              label: "You've Lost Ritsuka Fujimaru - Special Episode 4",
              romaji: "Fujimaru Ritsuka wa Wakaranai - Dai Bounen Otanoshimikai 2023 Episode 4",
              jp: "藤丸立香はわからない ~大忘年お楽しみ会2023~ 第4話",
              es: "No Entiendes a Ritsuka Fujimaru - Especial 2023 Capítulo 4",
              completed: false
            },
            {
              id: "fgo-comedy-db2023-5",
              number: 5,
              label: "You've Lost Ritsuka Fujimaru - Special Episode 5",
              romaji: "Fujimaru Ritsuka wa Wakaranai - Dai Bounen Otanoshimikai 2023 Episode 5",
              jp: "藤丸立香はわからない ~大忘年お楽しみ会2023~ 第5話",
              es: "No Entiendes a Ritsuka Fujimaru - Especial 2023 Capítulo 5",
              completed: false
            },
            {
              id: "fgo-comedy-db2023-6",
              number: 6,
              label: "You've Lost Ritsuka Fujimaru - Special Episode 6",
              romaji: "Fujimaru Ritsuka wa Wakaranai - Dai Bounen Otanoshimikai 2023 Episode 6",
              jp: "藤丸立香はわからない ~大忘年お楽しみ会2023~ 第6話",
              es: "No Entiendes a Ritsuka Fujimaru - Especial 2023 Capítulo 6",
              completed: false
            },
            {
              id: "fgo-comedy-db2023-7",
              number: 7,
              label: "You've Lost Ritsuka Fujimaru - Special Episode 7",
              romaji: "Fujimaru Ritsuka wa Wakaranai - Dai Bounen Otanoshimikai 2023 Episode 7",
              jp: "藤丸立香はわからない ~大忘年お楽しみ会2023~ 第7話",
              es: "No Entiendes a Ritsuka Fujimaru - Especial 2023 Capítulo 7",
              completed: false
            }
          ]
        },
        {
          id: "fgo-comedy-season2",
          label: "Fate/Grand Order: Fujimaru Ritsuka wa Wakaranai Season 2",
          format: "ONA",
          completed: false,
          opened: false,
          episodes: [
            {
              id: "fgo-comedy-s2-1",
              number: 1,
              label: "You've Lost Ritsuka Fujimaru S2 - Episode 1",
              romaji: "Fujimaru Ritsuka wa Wakaranai Season 2 - Episode 1",
              jp: "藤丸立香はわからない Season2 第1話",
              es: "No Entiendes a Ritsuka Fujimaru T2 - Capítulo 1",
              completed: false
            },
            {
              id: "fgo-comedy-s2-2",
              number: 2,
              label: "You've Lost Ritsuka Fujimaru S2 - Episode 2",
              romaji: "Fujimaru Ritsuka wa Wakaranai Season 2 - Episode 2",
              jp: "藤丸立香はわからない Season2 第2話",
              es: "No Entiendes a Ritsuka Fujimaru T2 - Capítulo 2",
              completed: false
            },
            {
              id: "fgo-comedy-s2-3",
              number: 3,
              label: "You've Lost Ritsuka Fujimaru S2 - Episode 3",
              romaji: "Fujimaru Ritsuka wa Wakaranai Season 2 - Episode 3",
              jp: "藤丸立香はわからない Season2 第3話",
              es: "No Entiendes a Ritsuka Fujimaru T2 - Capítulo 3",
              completed: false
            },
            {
              id: "fgo-comedy-s2-4",
              number: 4,
              label: "You've Lost Ritsuka Fujimaru S2 - Episode 4",
              romaji: "Fujimaru Ritsuka wa Wakaranai Season 2 - Episode 4",
              jp: "藤丸立香はわからない Season2 第4話",
              es: "No Entiendes a Ritsuka Fujimaru T2 - Capítulo 4",
              completed: false
            },
            {
              id: "fgo-comedy-s2-5",
              number: 5,
              label: "You've Lost Ritsuka Fujimaru S2 - Episode 5",
              romaji: "Fujimaru Ritsuka wa Wakaranai Season 2 - Episode 5",
              jp: "藤丸立香はわからない Season2 第5話",
              es: "No Entiendes a Ritsuka Fujimaru T2 - Capítulo 5",
              completed: false
            },
            {
              id: "fgo-comedy-s2-6",
              number: 6,
              label: "You've Lost Ritsuka Fujimaru S2 - Episode 6",
              romaji: "Fujimaru Ritsuka wa Wakaranai Season 2 - Episode 6",
              jp: "藤丸立香はわからない Season2 第6話",
              es: "No Entiendes a Ritsuka Fujimaru T2 - Capítulo 6",
              completed: false
            },
            {
              id: "fgo-comedy-s2-7",
              number: 7,
              label: "You've Lost Ritsuka Fujimaru S2 - Episode 7",
              romaji: "Fujimaru Ritsuka wa Wakaranai Season 2 - Episode 7",
              jp: "藤丸立香はわからない Season2 第7話",
              es: "No Entiendes a Ritsuka Fujimaru T2 - Capítulo 7",
              completed: false
            },
            {
              id: "fgo-comedy-s2-8",
              number: 8,
              label: "You've Lost Ritsuka Fujimaru S2 - Episode 8",
              romaji: "Fujimaru Ritsuka wa Wakaranai Season 2 - Episode 8",
              jp: "藤丸立香はわからない Season2 第8話",
              es: "No Entiendes a Ritsuka Fujimaru T2 - Capítulo 8",
              completed: false
            },
            {
              id: "fgo-comedy-s2-9",
              number: 9,
              label: "You've Lost Ritsuka Fujimaru S2 - Episode 9",
              romaji: "Fujimaru Ritsuka wa Wakaranai Season 2 - Episode 9",
              jp: "藤丸立香はわからない Season2 第9話",
              es: "No Entiendes a Ritsuka Fujimaru T2 - Capítulo 9",
              completed: false
            },
            {
              id: "fgo-comedy-s2-10",
              number: 10,
              label: "You've Lost Ritsuka Fujimaru S2 - Episode 10",
              romaji: "Fujimaru Ritsuka wa Wakaranai Season 2 - Episode 10",
              jp: "藤丸立香はわからない Season2 第10話",
              es: "No Entiendes a Ritsuka Fujimaru T2 - Capítulo 10",
              completed: false
            },
            {
              id: "fgo-comedy-s2-11",
              number: 11,
              label: "You've Lost Ritsuka Fujimaru S2 - Episode 11",
              romaji: "Fujimaru Ritsuka wa Wakaranai Season 2 - Episode 11",
              jp: "藤丸立香はわからない Season2 第11話",
              es: "No Entiendes a Ritsuka Fujimaru T2 - Capítulo 11",
              completed: false
            },
            {
              id: "fgo-comedy-s2-12",
              number: 12,
              label: "You've Lost Ritsuka Fujimaru S2 - Episode 12",
              romaji: "Fujimaru Ritsuka wa Wakaranai Season 2 - Episode 12",
              jp: "藤丸立香はわからない Season2 第12話",
              es: "No Entiendes a Ritsuka Fujimaru T2 - Capítulo 12",
              completed: false
            },
            {
              id: "fgo-comedy-s2-13",
              number: 13,
              label: "You've Lost Ritsuka Fujimaru S2 - Episode 13",
              romaji: "Fujimaru Ritsuka wa Wakaranai Season 2 - Episode 13",
              jp: "藤丸立香はわからない Season2 第13話",
              es: "No Entiendes a Ritsuka Fujimaru T2 - Capítulo 13",
              completed: false
            },
            {
              id: "fgo-comedy-s2-14",
              number: 14,
              label: "You've Lost Ritsuka Fujimaru S2 - Episode 14",
              romaji: "Fujimaru Ritsuka wa Wakaranai Season 2 - Episode 14",
              jp: "藤丸立香はわからない Season2 第14話",
              es: "No Entiendes a Ritsuka Fujimaru T2 - Capítulo 14",
              completed: false
            },
            {
              id: "fgo-comedy-s2-15",
              number: 15,
              label: "You've Lost Ritsuka Fujimaru S2 - Episode 15",
              romaji: "Fujimaru Ritsuka wa Wakaranai Season 2 - Episode 15",
              jp: "藤丸立香はわからない Season2 第15話",
              es: "No Entiendes a Ritsuka Fujimaru T2 - Capítulo 15",
              completed: false
            },
            {
              id: "fgo-comedy-s2-16",
              number: 16,
              label: "You've Lost Ritsuka Fujimaru S2 - Episode 16",
              romaji: "Fujimaru Ritsuka wa Wakaranai Season 2 - Episode 16",
              jp: "藤丸立香はわからない Season2 第16話",
              es: "No Entiendes a Ritsuka Fujimaru T2 - Capítulo 16",
              completed: false
            },
            {
              id: "fgo-comedy-s2-17",
              number: 17,
              label: "You've Lost Ritsuka Fujimaru S2 - Episode 17",
              romaji: "Fujimaru Ritsuka wa Wakaranai Season 2 - Episode 17",
              jp: "藤丸立香はわからない Season2 第17話",
              es: "No Entiendes a Ritsuka Fujimaru T2 - Capítulo 17",
              completed: false
            },
            {
              id: "fgo-comedy-s2-18",
              number: 18,
              label: "You've Lost Ritsuka Fujimaru S2 - Episode 18",
              romaji: "Fujimaru Ritsuka wa Wakaranai Season 2 - Episode 18",
              jp: "藤丸立香はわからない Season2 第18話",
              es: "No Entiendes a Ritsuka Fujimaru T2 - Capítulo 18",
              completed: false
            },
            {
              id: "fgo-comedy-s2-19",
              number: 19,
              label: "You've Lost Ritsuka Fujimaru S2 - Episode 19",
              romaji: "Fujimaru Ritsuka wa Wakaranai Season 2 - Episode 19",
              jp: "藤丸立香はわからない Season2 第19話",
              es: "No Entiendes a Ritsuka Fujimaru T2 - Capítulo 19",
              completed: false
            },
            {
              id: "fgo-comedy-s2-20",
              number: 20,
              label: "You've Lost Ritsuka Fujimaru S2 - Episode 20",
              romaji: "Fujimaru Ritsuka wa Wakaranai Season 2 - Episode 20",
              jp: "藤丸立香はわからない Season2 第20話",
              es: "No Entiendes a Ritsuka Fujimaru T2 - Capítulo 20",
              completed: false
            },
            {
              id: "fgo-comedy-s2-21",
              number: 21,
              label: "You've Lost Ritsuka Fujimaru S2 - Episode 21",
              romaji: "Fujimaru Ritsuka wa Wakaranai Season 2 - Episode 21",
              jp: "藤丸立香はわからない Season2 第21話",
              es: "No Entiendes a Ritsuka Fujimaru T2 - Capítulo 21",
              completed: false
            },
            {
              id: "fgo-comedy-s2-22",
              number: 22,
              label: "You've Lost Ritsuka Fujimaru S2 - Episode 22",
              romaji: "Fujimaru Ritsuka wa Wakaranai Season 2 - Episode 22",
              jp: "藤丸立香はわからない Season2 第22話",
              es: "No Entiendes a Ritsuka Fujimaru T2 - Capítulo 22",
              completed: false
            },
            {
              id: "fgo-comedy-s2-23",
              number: 23,
              label: "You've Lost Ritsuka Fujimaru S2 - Episode 23",
              romaji: "Fujimaru Ritsuka wa Wakaranai Season 2 - Episode 23",
              jp: "藤丸立香はわからない Season2 第23話",
              es: "No Entiendes a Ritsuka Fujimaru T2 - Capítulo 23",
              completed: false
            },
            {
              id: "fgo-comedy-s2-24",
              number: 24,
              label: "You've Lost Ritsuka Fujimaru S2 - Episode 24",
              romaji: "Fujimaru Ritsuka wa Wakaranai Season 2 - Episode 24",
              jp: "藤丸立香はわからない Season2 第24話",
              es: "No Entiendes a Ritsuka Fujimaru T2 - Capítulo 24",
              completed: false
            },
            {
              id: "fgo-comedy-s2-25",
              number: 25,
              label: "You've Lost Ritsuka Fujimaru S2 - Episode 25",
              romaji: "Fujimaru Ritsuka wa Wakaranai Season 2 - Episode 25",
              jp: "藤丸立香はわからない Season2 第25話",
              es: "No Entiendes a Ritsuka Fujimaru T2 - Capítulo 25",
              completed: false
            },
            {
              id: "fgo-comedy-s2-26",
              number: 26,
              label: "You've Lost Ritsuka Fujimaru S2 - Episode 26",
              romaji: "Fujimaru Ritsuka wa Wakaranai Season 2 - Episode 26",
              jp: "藤丸立香はわからない Season2 第26話",
              es: "No Entiendes a Ritsuka Fujimaru T2 - Capítulo 26",
              completed: false
            }
          ]
        },
        {
          id: "fgo-comedy-season2-specials",
          label: "Fate/Grand Order: Fujimaru Ritsuka wa Wakaranai Season 2 Specials",
          format: "Especial",
          completed: false,
          opened: false,
          episodes: [
            {
              id: "fgo-comedy-s2s-1",
              number: 1,
              label: "You've Lost Ritsuka Fujimaru S2 Special - Episode 1",
              romaji: "Fujimaru Ritsuka wa Wakaranai Season 2 Specials - Episode 1",
              jp: "藤丸立香はわからない Season2 Special 第1話",
              es: "No Entiendes a Ritsuka Fujimaru T2 Especial - Capítulo 1",
              completed: false
            },
            {
              id: "fgo-comedy-s2s-2",
              number: 2,
              label: "You've Lost Ritsuka Fujimaru S2 Special - Episode 2",
              romaji: "Fujimaru Ritsuka wa Wakaranai Season 2 Specials - Episode 2",
              jp: "藤丸立香はわからない Season2 Special 第2話",
              es: "No Entiendes a Ritsuka Fujimaru T2 Especial - Capítulo 2",
              completed: false
            }
          ]
        },
        {
          id: "fgo-comedy-season3",
          label: "Fate/Grand Order: Fujimaru Ritsuka wa Wakaranai Season 3",
          format: "ONA",
          completed: false,
          opened: false,
          episodes: [
            {
              id: "fgo-comedy-s3-1",
              number: 1,
              label: "You've Lost Ritsuka Fujimaru S3 - Episode 1",
              romaji: "Fujimaru Ritsuka wa Wakaranai Season 3 - Episode 1",
              jp: "藤丸立香はわからない Season3 第1話",
              es: "No Entiendes a Ritsuka Fujimaru T3 - Capítulo 1",
              completed: false
            },
            {
              id: "fgo-comedy-s3-2",
              number: 2,
              label: "You've Lost Ritsuka Fujimaru S3 - Episode 2",
              romaji: "Fujimaru Ritsuka wa Wakaranai Season 3 - Episode 2",
              jp: "藤丸立香はわからない Season3 第2話",
              es: "No Entiendes a Ritsuka Fujimaru T3 - Capítulo 2",
              completed: false
            },
            {
              id: "fgo-comedy-s3-3",
              number: 3,
              label: "You've Lost Ritsuka Fujimaru S3 - Episode 3",
              romaji: "Fujimaru Ritsuka wa Wakaranai Season 3 - Episode 3",
              jp: "藤丸立香はわからない Season3 第3話",
              es: "No Entiendes a Ritsuka Fujimaru T3 - Capítulo 3",
              completed: false
            },
            {
              id: "fgo-comedy-s3-4",
              number: 4,
              label: "You've Lost Ritsuka Fujimaru S3 - Episode 4",
              romaji: "Fujimaru Ritsuka wa Wakaranai Season 3 - Episode 4",
              jp: "藤丸立香はわからない Season3 第4話",
              es: "No Entiendes a Ritsuka Fujimaru T3 - Capítulo 4",
              completed: false
            },
            {
              id: "fgo-comedy-s3-5",
              number: 5,
              label: "You've Lost Ritsuka Fujimaru S3 - Episode 5",
              romaji: "Fujimaru Ritsuka wa Wakaranai Season 3 - Episode 5",
              jp: "藤丸立香はわからない Season3 第5話",
              es: "No Entiendes a Ritsuka Fujimaru T3 - Capítulo 5",
              completed: false
            },
            {
              id: "fgo-comedy-s3-6",
              number: 6,
              label: "You've Lost Ritsuka Fujimaru S3 - Episode 6",
              romaji: "Fujimaru Ritsuka wa Wakaranai Season 3 - Episode 6",
              jp: "藤丸立香はわからない Season3 第6話",
              es: "No Entiendes a Ritsuka Fujimaru T3 - Capítulo 6",
              completed: false
            },
            {
              id: "fgo-comedy-s3-7",
              number: 7,
              label: "You've Lost Ritsuka Fujimaru S3 - Episode 7",
              romaji: "Fujimaru Ritsuka wa Wakaranai Season 3 - Episode 7",
              jp: "藤丸立香はわからない Season3 第7話",
              es: "No Entiendes a Ritsuka Fujimaru T3 - Capítulo 7",
              completed: false
            },
            {
              id: "fgo-comedy-s3-8",
              number: 8,
              label: "You've Lost Ritsuka Fujimaru S3 - Episode 8",
              romaji: "Fujimaru Ritsuka wa Wakaranai Season 3 - Episode 8",
              jp: "藤丸立香はわからない Season3 第8話",
              es: "No Entiendes a Ritsuka Fujimaru T3 - Capítulo 8",
              completed: false
            },
            {
              id: "fgo-comedy-s3-9",
              number: 9,
              label: "You've Lost Ritsuka Fujimaru S3 - Episode 9",
              romaji: "Fujimaru Ritsuka wa Wakaranai Season 3 - Episode 9",
              jp: "藤丸立香はわからない Season3 第9話",
              es: "No Entiendes a Ritsuka Fujimaru T3 - Capítulo 9",
              completed: false
            },
            {
              id: "fgo-comedy-s3-10",
              number: 10,
              label: "You've Lost Ritsuka Fujimaru S3 - Episode 10",
              romaji: "Fujimaru Ritsuka wa Wakaranai Season 3 - Episode 10",
              jp: "藤丸立香はわからない Season3 第10話",
              es: "No Entiendes a Ritsuka Fujimaru T3 - Capítulo 10",
              completed: false
            },
            {
              id: "fgo-comedy-s3-11",
              number: 11,
              label: "You've Lost Ritsuka Fujimaru S3 - Episode 11",
              romaji: "Fujimaru Ritsuka wa Wakaranai Season 3 - Episode 11",
              jp: "藤丸立香はわからない Season3 第11話",
              es: "No Entiendes a Ritsuka Fujimaru T3 - Capítulo 11",
              completed: false
            },
            {
              id: "fgo-comedy-s3-12",
              number: 12,
              label: "You've Lost Ritsuka Fujimaru S3 - Episode 12",
              romaji: "Fujimaru Ritsuka wa Wakaranai Season 3 - Episode 12",
              jp: "藤丸立香はわからない Season3 第12話",
              es: "No Entiendes a Ritsuka Fujimaru T3 - Capítulo 12",
              completed: false
            },
            {
              id: "fgo-comedy-s3-13",
              number: 13,
              label: "You've Lost Ritsuka Fujimaru S3 - Episode 13",
              romaji: "Fujimaru Ritsuka wa Wakaranai Season 3 - Episode 13",
              jp: "藤丸立香はわからない Season3 第13話",
              es: "No Entiendes a Ritsuka Fujimaru T3 - Capítulo 13",
              completed: false
            },
            {
              id: "fgo-comedy-s3-14",
              number: 14,
              label: "You've Lost Ritsuka Fujimaru S3 - Episode 14",
              romaji: "Fujimaru Ritsuka wa Wakaranai Season 3 - Episode 14",
              jp: "藤丸立香はわからない Season3 第14話",
              es: "No Entiendes a Ritsuka Fujimaru T3 - Capítulo 14",
              completed: false
            },
            {
              id: "fgo-comedy-s3-15",
              number: 15,
              label: "You've Lost Ritsuka Fujimaru S3 - Episode 15",
              romaji: "Fujimaru Ritsuka wa Wakaranai Season 3 - Episode 15",
              jp: "藤丸立香はわからない Season3 第15話",
              es: "No Entiendes a Ritsuka Fujimaru T3 - Capítulo 15",
              completed: false
            },
            {
              id: "fgo-comedy-s3-16",
              number: 16,
              label: "You've Lost Ritsuka Fujimaru S3 - Episode 16",
              romaji: "Fujimaru Ritsuka wa Wakaranai Season 3 - Episode 16",
              jp: "藤丸立香はわからない Season3 第16話",
              es: "No Entiendes a Ritsuka Fujimaru T3 - Capítulo 16",
              completed: false
            },
            {
              id: "fgo-comedy-s3-17",
              number: 17,
              label: "You've Lost Ritsuka Fujimaru S3 - Episode 17",
              romaji: "Fujimaru Ritsuka wa Wakaranai Season 3 - Episode 17",
              jp: "藤丸立香はわからない Season3 第17話",
              es: "No Entiendes a Ritsuka Fujimaru T3 - Capítulo 17",
              completed: false
            },
            {
              id: "fgo-comedy-s3-18",
              number: 18,
              label: "You've Lost Ritsuka Fujimaru S3 - Episode 18",
              romaji: "Fujimaru Ritsuka wa Wakaranai Season 3 - Episode 18",
              jp: "藤丸立香はわからない Season3 第18話",
              es: "No Entiendes a Ritsuka Fujimaru T3 - Capítulo 18",
              completed: false
            },
            {
              id: "fgo-comedy-s3-19",
              number: 19,
              label: "You've Lost Ritsuka Fujimaru S3 - Episode 19",
              romaji: "Fujimaru Ritsuka wa Wakaranai Season 3 - Episode 19",
              jp: "藤丸立香はわからない Season3 第19話",
              es: "No Entiendes a Ritsuka Fujimaru T3 - Capítulo 19",
              completed: false
            },
            {
              id: "fgo-comedy-s3-20",
              number: 20,
              label: "You've Lost Ritsuka Fujimaru S3 - Episode 20",
              romaji: "Fujimaru Ritsuka wa Wakaranai Season 3 - Episode 20",
              jp: "藤丸立香はわからない Season3 第20話",
              es: "No Entiendes a Ritsuka Fujimaru T3 - Capítulo 20",
              completed: false
            },
            {
              id: "fgo-comedy-s3-21",
              number: 21,
              label: "You've Lost Ritsuka Fujimaru S3 - Episode 21",
              romaji: "Fujimaru Ritsuka wa Wakaranai Season 3 - Episode 21",
              jp: "藤丸立香はわからない Season3 第21話",
              es: "No Entiendes a Ritsuka Fujimaru T3 - Capítulo 21",
              completed: false
            },
            {
              id: "fgo-comedy-s3-22",
              number: 22,
              label: "You've Lost Ritsuka Fujimaru S3 - Episode 22",
              romaji: "Fujimaru Ritsuka wa Wakaranai Season 3 - Episode 22",
              jp: "藤丸立香はわからない Season3 第22話",
              es: "No Entiendes a Ritsuka Fujimaru T3 - Capítulo 22",
              completed: false
            },
            {
              id: "fgo-comedy-s3-23",
              number: 23,
              label: "You've Lost Ritsuka Fujimaru S3 - Episode 23",
              romaji: "Fujimaru Ritsuka wa Wakaranai Season 3 - Episode 23",
              jp: "藤丸立香はわからない Season3 第23話",
              es: "No Entiendes a Ritsuka Fujimaru T3 - Capítulo 23",
              completed: false
            },
            {
              id: "fgo-comedy-s3-24",
              number: 24,
              label: "You've Lost Ritsuka Fujimaru S3 - Episode 24",
              romaji: "Fujimaru Ritsuka wa Wakaranai Season 3 - Episode 24",
              jp: "藤丸立香はわからない Season3 第24話",
              es: "No Entiendes a Ritsuka Fujimaru T3 - Capítulo 24",
              completed: false
            }
          ]
        },
      ]
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
      ],
    },
]};