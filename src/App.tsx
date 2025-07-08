import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import VegetableGarden from './pages/Projects/VegetableGarden';
import TipsyBlocks from './pages/Projects/TipsyBlocks';
import AboutMe from './pages/AboutMe/AboutMe';
import Homelands from './pages/Homelands/Homelands';
import TopNav from './components/TopNav';
import WikipediaMuseum from './pages/Projects/WikipediaMuseum';

function App() {
  return (
    <Router>
      <TopNav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vegetable-garden" element={<VegetableGarden />} />
          <Route path="/tipsy-blocks" element={<TipsyBlocks />} />
          <Route path="/wikipedia-museum" element={<WikipediaMuseum />} />
          <Route path="/homelands" element={<Homelands />} />
          <Route path="/about" element={<AboutMe />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
