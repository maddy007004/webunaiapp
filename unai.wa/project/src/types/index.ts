export interface Course {
  id: string;
  title: string;
  description: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  xpReward: number;
  duration: string;
  topics: string[];
}

export interface User {
  id: string;
  username: string;
  level: number;
  xp: number;
  completedCourses: string[];
}