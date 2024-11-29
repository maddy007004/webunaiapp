import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Home from './pages/Home';
import Courses from './pages/Courses';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0a0a1e] text-white">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;