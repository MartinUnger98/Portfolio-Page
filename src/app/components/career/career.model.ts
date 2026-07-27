export interface CareerSkill {
  name: string;
  icon?: string;
}

export interface CareerEntry {
  type: 'work' | 'education';
  role: string;
  place: string;
  period: string;
  location: string;
  description: string;
  skills: CareerSkill[];
}
