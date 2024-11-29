import { Course } from '../types';

export const courses: Course[] = [
  {
    id: '1',
    title: 'Python Fundamentals: Journey to the Core',
    description: 'Master Python basics through interactive space-themed challenges and real-world projects.',
    level: 'beginner',
    xpReward: 1000,
    duration: '6 weeks',
    topics: ['Variables', 'Control Flow', 'Functions', 'OOP'],
  },
  {
    id: '2',
    title: 'Web Development Galaxy',
    description: 'Build modern web applications with HTML, CSS, and JavaScript in this comprehensive course.',
    level: 'intermediate',
    xpReward: 2000,
    duration: '8 weeks',
    topics: ['HTML5', 'CSS3', 'JavaScript', 'React'],
  },
  {
    id: '3',
    title: 'AI & Machine Learning Odyssey',
    description: 'Explore the frontiers of artificial intelligence and machine learning algorithms.',
    level: 'advanced',
    xpReward: 3000,
    duration: '12 weeks',
    topics: ['Neural Networks', 'Deep Learning', 'Computer Vision', 'NLP'],
  },
];