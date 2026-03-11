import { ac_s1e1, ac_s1e2, ac_s1e3, ac_s1e4, ac_s1e5, ac_s1e6, ac_s1e7, ac_s1e8 } from "./agentcarterS1/episodes.js";

export const agentcarterS1 = {
  id: "agcS1",
  label: "Agent Carter (S1)",
  format: "Serie",
  season: 1,
  release: {
    year: 2015,
    month: 1,
    day: 6
  },
  phase: 2,
  year_in_timeline: {
    start: 1946,
    end: 1946
  },
  completed: false,
  opened: false,
  episodes: [
    ac_s1e1,
    ac_s1e2,
    ac_s1e3,
    ac_s1e4,
    ac_s1e5,
    ac_s1e6,
    ac_s1e7,
    ac_s1e8
  ],
};