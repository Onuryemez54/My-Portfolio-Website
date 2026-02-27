export type ProjectId =
  | 'paradiseHotel'
  | 'travelRoute'
  | 'movieApp'
  | 'recipeApp'
  | 'quizApp'
  | 'portfolio';

export interface Project {
  id: ProjectId;
  techStack: string[];
  githubUrl: string;
  image: string;
  liveUrl?: string;
}
