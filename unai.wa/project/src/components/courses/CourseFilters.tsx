import { motion } from 'framer-motion';
import Badge from '../ui/Badge';
import { fadeInUp, staggerChildren } from '../../lib/framer-animations';
import { COURSE_LEVELS, LEVEL_COLORS, ANIMATION_DURATION } from '../../lib/constants';

interface CourseFiltersProps {
  selectedLevel: string | null;
  onLevelChange: (level: string | null) => void;
}

const levels = [
  { id: COURSE_LEVELS.BEGINNER, label: 'Beginner', color: LEVEL_COLORS[COURSE_LEVELS.BEGINNER] },
  { id: COURSE_LEVELS.INTERMEDIATE, label: 'Intermediate', color: LEVEL_COLORS[COURSE_LEVELS.INTERMEDIATE] },
  { id: COURSE_LEVELS.ADVANCED, label: 'Advanced', color: LEVEL_COLORS[COURSE_LEVELS.ADVANCED] },
];

const CourseFilters = ({ selectedLevel, onLevelChange }: CourseFiltersProps) => {
  return (
    <motion.div
      variants={staggerChildren}
      initial="initial"
      animate="animate"
      className="flex flex-wrap gap-3 mb-6"
    >
      <motion.div variants={fadeInUp} transition={{ duration: ANIMATION_DURATION }}>
        <Badge
          variant={selectedLevel === null ? 'success' : 'default'}
          className="cursor-pointer text-sm px-4 py-1"
          onClick={() => onLevelChange(null)}
        >
          All Levels
        </Badge>
      </motion.div>
      {levels.map((level) => (
        <motion.div
          key={level.id}
          variants={fadeInUp}
          transition={{ duration: ANIMATION_DURATION }}
        >
          <Badge
            variant={selectedLevel === level.id ? 'success' : 'default'}
            className={`cursor-pointer text-sm px-4 py-1 ${
              selectedLevel === level.id ? level.color : ''
            }`}
            onClick={() => onLevelChange(level.id)}
          >
            {level.label}
          </Badge>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default CourseFilters;