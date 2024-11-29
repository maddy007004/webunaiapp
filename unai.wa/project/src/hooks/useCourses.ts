import { useState, useEffect } from 'react';
import { Course } from '../types';
import { courses as coursesData } from '../data/courses';

interface UseCoursesResult {
  courses: Course[];
  isLoading: boolean;
  error: string | null;
}

export const useCourses = (): UseCoursesResult => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        setCourses(coursesData);
        setError(null);
      } catch (err) {
        setError('Failed to load courses. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchCourses();
  }, []);

  return { courses, isLoading, error };
};