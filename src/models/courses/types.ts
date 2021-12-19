export enum difficultyTypes {
  hard = 1,
  medium = 2,
  easy = 3,
}

export interface Difficulty {
  id: number;
  difficulty: keyof typeof difficultyTypes;
}
export interface Exercise {
  id: number;
  name: string;
  description: string;
  image: string;
}

export interface Course {
  id: number;
  name: string;
  description: string;
  difficulty: Difficulty;
  exercises: Exercise[];
}
