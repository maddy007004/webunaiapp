import { motion, AnimatePresence } from 'framer-motion';
import { Course } from '../../types';
import CourseGrid from './CourseGrid';
import LoadingSpinner from '../ui/LoadingSpinner';

interface CourseListProps {
  courses: Course[];
  isLoading: boolean;
  error: string | null;
  searchQuery: string;
  selectedLevel: string | null;
}

const CourseList = ({
  courses,
  isLoading,
  error,
  searchQuery,
  selectedLevel,
}: CourseListProps) => {
  const filteredCourses = courses.filter(course => {
    const matchesSearch = 
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesLevel = selectedLevel ? course.level === selectedLevel : true;

    return matchesSearch && matchesLevel;
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <LoadingSpinner size="lg" className="text-purple-500" />
      </div>
    );
  }

  if (error) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center py-12"
      >
        <p className="text-red-400 text-lg">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 text-purple-400 hover:text-purple-300 underline"
        >
          Try again
        </button>
      </motion.div>
    );
  }

  return (
    <AnimatePresence mode="wait">
      {filteredCourses.length > 0 ? (
        <CourseGrid courses={filteredCourses} />
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="text-center py-12"
        >
          <p className="text-gray-400 text-lg">
            No courses found matching your criteria.
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CourseList;