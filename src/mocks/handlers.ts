import { projectHandlers } from "./projects";
import { skillHandlers } from "./skills";
import { careerHandlers } from "./careers";

export const handlers = [
  ...projectHandlers,
  ...skillHandlers,
  ...careerHandlers,
];
