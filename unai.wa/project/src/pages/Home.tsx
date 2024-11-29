import Background from '../components/Background';
import HeroSection from '../components/HeroSection';

const Home = () => {
  return (
    <div className="min-h-screen bg-[#0a0a1e] text-white overflow-hidden">
      <Background />
      <HeroSection />
    </div>
  );
};

export default Home;