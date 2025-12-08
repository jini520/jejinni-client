import { IconNames } from "@/constants/iconRegistry";

export interface Project {
  id: string;
  title: string;
  description: string;
  skills: IconNames[];
}

