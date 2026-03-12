import { 
  ac_s2e1, ac_s2e2, ac_s2e3, ac_s2e4, ac_s2e5,
  ac_s2e6, ac_s2e7, ac_s2e8, ac_s2e9, ac_s2e10
} from "./agentcarterS2/episodes.js";

export const agentcarterS2 = {
  id: "agcS2",
  label: "Agent Carter (S2)",
  format: "Serie",
  season: 2,
  release: {
    year: 2016,
    month: 1,
    day: 19
  },
  phase: 3,
  year_in_timeline: {
    start: 1947,
    end: 1947
  },
  completed: false,
  opened: false,
  episodes: [
    ac_s2e1, ac_s2e2, ac_s2e3, ac_s2e4, ac_s2e5,
    ac_s2e6, ac_s2e7, ac_s2e8, ac_s2e9, ac_s2e10
  ],
};