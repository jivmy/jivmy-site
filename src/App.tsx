import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import SelfCustody from './pages/self-custody';
import DappWorkflow from './pages/dapp-workflow';
import ParticleBackground from './components/ParticleBackground';

const ScrollToTop = () => {
  const location = useLocation();
  
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};

const ParticleWrapper = () => {
  const location = useLocation();
  const showParticles = location.pathname === '/' || location.pathname === '/about';
  
  return showParticles ? <ParticleBackground /> : null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <ParticleWrapper />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/self-custody" element={<SelfCustody />} />
        <Route path="/dapp-workflow" element={<DappWorkflow />} />
      </Routes>
    </Router>
  );
}

export default App;
