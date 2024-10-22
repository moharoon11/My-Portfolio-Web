import './App.css';
import Contact from './Pages/Contact';
import Index from './Pages/Index';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Skill from './Pages/Skill';
import Project from './Pages/Project';






function App() {
  return (
    <div className="App">
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Index />}/>
            <Route path="/skill"  element={<Skill />} />
            <Route path="/project" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
         </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
