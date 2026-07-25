export interface ProjectTech {
  name: string;
  icon: string;
}

export interface Project {
  number: string;
  name: string;
  image: string;
  description: string;
  techs: ProjectTech[];
  github: string;
  live: string;
}
