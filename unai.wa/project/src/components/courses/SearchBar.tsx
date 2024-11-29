import { Search } from 'lucide-react';
import { motion } from 'framer-motion';
import { useDebounce } from '../../hooks/useDebounce';
import { fadeInUp } from '../../lib/framer-animations';
import { ANIMATION_DURATION } from '../../lib/constants';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchBar = ({ value, onChange }: SearchBarProps) => {
  const debouncedOnChange = useDebounce((newValue: string) => {
    onChange(newValue);
  }, 300);

  return (
    <motion.div
      variants={fadeInUp}
      initial="initial"
      animate="animate"
      transition={{ duration: ANIMATION_DURATION }}
      className="relative max-w-xl"
    >
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
      <input
        type="text"
        placeholder="Search courses..."
        defaultValue={value}
        onChange={(e) => debouncedOnChange(e.target.value)}
        className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
      />
    </motion.div>
  );
};

export default SearchBar;