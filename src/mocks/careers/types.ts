import { IconNames } from "@/constants/iconRegistry";

export interface Careers {
  businesses: Business[];
  projects: Project[];
}

export interface Career {
  id: string;
  startDate: string;
  endDate: string;
  company: string;
  department: string;
  position: string;
  skills: IconNames[];
}

export interface Business extends Career {
  details: string[];
}

export interface Project extends Career {
}