import { motion } from 'framer-motion';
import { Sparkles, Rocket, Brain } from 'lucide-react';
import Button from './ui/Button';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 mb-4">
            Level Up Your Skills
          </h1>
          <p className="text-2xl text-gray-300">Learn. Play. Achieve.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex justify-center gap-8 mb-12"
        >
          <div className="flex flex-col items-center space-y-2">
            <div className="p-4 bg-blue-500/10 rounded-full">
              <Rocket className="w-8 h-8 text-blue-400" />
            </div>
            <p className="text-gray-300">Interactive Learning</p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <div className="p-4 bg-purple-500/10 rounded-full">
              <Brain className="w-8 h-8 text-purple-400" />
            </div>
            <p className="text-gray-300">AI-Powered</p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <div className="p-4 bg-pink-500/10 rounded-full">
              <Sparkles className="w-8 h-8 text-pink-400" />
            </div>
            <p className="text-gray-300">Earn Rewards</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="space-x-4"
        >
          <Button variant="primary">Start Your Journey</Button>
          <Button variant="secondary">Try Demo</Button>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;