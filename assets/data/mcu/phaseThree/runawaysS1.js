import { 
  runaways_s1e1, runaways_s1e2, runaways_s1e3, runaways_s1e4, runaways_s1e5,
  runaways_s1e6, runaways_s1e7, runaways_s1e8, runaways_s1e9, runaways_s1e10
} from "./runawaysS1/episodes.js";

export const runawaysS1 = {
  id: "mraS1",
  label: "Marvel's Runaways (S1)",
  format: "Serie",
  season: 1,
  release: {
    year: 2017,
    month: 11,
    day: 21
  },
  phase: 3,
  year_in_timeline: {
    start: 2017,
    end: 2018
  },
  completed: false,
  opened: false,
  episodes: [
    runaways_s1e1, runaways_s1e2, runaways_s1e3, runaways_s1e4, runaways_s1e5,
    runaways_s1e6, runaways_s1e7, runaways_s1e8, runaways_s1e9, runaways_s1e10
  ],
};