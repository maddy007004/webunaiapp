import { Clock, Star, Users } from 'lucide-react';
import { Course } from '../../types';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import Button from '../ui/Button';

interface CourseCardProps {
  course: Course;
}

const CourseCard = ({ course }: CourseCardProps) => {
  const getLevelColor = (level: Course['level']) => {
    switch (level) {
      case 'beginner':
        return 'text-green-400';
      case 'intermediate':
        return 'text-yellow-400';
      case 'advanced':
        return 'text-red-400';
      default:
        return 'text-white';
    }
  };

  return (
    <Card variant="hover" className="flex flex-col h-full">
      <Card.Header>
        <div className="flex justify-between items-start mb-4">
          <Badge variant="default" className="capitalize">
            {course.level}
          </Badge>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-400" />
            <span className="text-sm">4.8</span>
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
        <p className="text-gray-400 text-sm">{course.description}</p>
      </Card.Header>
      <Card.Content className="flex-grow">
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Clock className="w-4 h-4" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Users className="w-4 h-4" />
            <span>1.2k students enrolled</span>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            {course.topics.map((topic) => (
              <Badge key={topic} variant="default" className="bg-white/5">
                {topic}
              </Badge>
            ))}
          </div>
        </div>
      </Card.Content>
      <Card.Footer className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="text-sm">
            <span className="text-purple-400">+{course.xpReward}</span> XP
          </div>
        </div>
        <Button variant="primary" size="sm">
          Start Learning
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default CourseCard;