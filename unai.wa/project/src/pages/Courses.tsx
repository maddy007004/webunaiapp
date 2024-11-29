import { useState } from 'react';
import { motion } from 'framer-motion';
import { useCourses } from '../hooks/useCourses';
import CourseList from '../components/courses/CourseList';
import SearchBar from '../components/courses/SearchBar';
import CourseFilters from '../components/courses/CourseFilters';
import Background from '../components/Background';

const Courses = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
  const { courses, isLoading, error } = useCourses();

  return (
    <div className="min-h-screen bg-[#0a0a1e] text-white pt-24 pb-12">
      <Background />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Explore Courses</h1>
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
        </motion.div>

        <CourseFilters
          selectedLevel={selectedLevel}
          onLevelChange={setSelectedLevel}
        />

        <CourseList
          courses={courses}
          isLoading={isLoading}
          error={error}
          searchQuery={searchQuery}
          selectedLevel={selectedLevel}
        />
      </div>
    </div>
  );
};

export default Courses;