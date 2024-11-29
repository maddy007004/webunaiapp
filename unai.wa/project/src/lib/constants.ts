export const COURSE_LEVELS = {
  BEGINNER: 'beginner',
  INTERMEDIATE: 'intermediate',
  ADVANCED: 'advanced',
} as const;

export const LEVEL_COLORS = {
  [COURSE_LEVELS.BEGINNER]: 'text-green-400',
  [COURSE_LEVELS.INTERMEDIATE]: 'text-yellow-400',
  [COURSE_LEVELS.ADVANCED]: 'text-red-400',
} as const;

export const ANIMATION_DURATION = 0.5;