import { motion } from 'framer-motion';
import { Course } from '../../types';
import CourseCard from './CourseCard';

interface CourseGridProps {
  courses: Course[];
}

const CourseGrid = ({ courses }: CourseGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.map((course, index) => (
        <motion.div
          key={course.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <CourseCard course={course} />
        </motion.div>
      ))}
    </div>
  );
};

export default CourseGrid;