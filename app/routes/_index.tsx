import { Routes, Route } from 'react-router-dom';

import Home from './Home';
import Quiz from './Quiz';
import Results from './Results';

import './Styles/index.css';

export default function Index() {
  return (
    <div className="flex items-center justify-center h-screen transition-opacity duration-300 ease-in-out">
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/results" element={<Results />} />
        </Routes>
      </main>
    </div>
  );
};