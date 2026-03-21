import { 
  ecE1, ecE2, ecE3, ecE4, ecE5
} from "./echo2024/episodes.js";

export const echo2024 = {
  id: "echS1",
  label: "Echo",
  format: "Serie",
  season: 1,
  release: {
    year: 2024,
    month: 1,
    day: 9
  },
  phase: 5,
  year_in_timeline: {
    start: 2025,
    end: 2025
  },
  completed: false,
  opened: false,
  episodes: [
    ecE1, ecE2, ecE3, ecE4, ecE5
  ],
};