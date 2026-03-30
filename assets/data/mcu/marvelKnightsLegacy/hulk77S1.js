import { hkS1E1, hkS1E2, hkS1E3, hkS1E4, hkS1E5, hkS1E6, hkS1E7, hkS1E8, hkS1E9, hkS1E10, hkS1E11 } from "./hkS1/episodes.js";

export const hkS1 = {
  id: "hkS1",
  label: "The Incredible Hulk (S1)",
  format: "Serie",
  season: 1,
  release: {
    year: 1977,
    month: 11,
    day: 4
  },
  year_in_timeline: {
    start: null,
    end: null
  },
  completed: false,
  opened: false,
  episodes: [
    hkS1E1, hkS1E2, hkS1E3, hkS1E4, hkS1E5,
    hkS1E6, hkS1E7, hkS1E8, hkS1E9, hkS1E10, hkS1E11
  ],
};