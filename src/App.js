import {useState} from 'react';
import Topbar from './Components/TopBar/Topbar';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Experience from './Components/Experience/Experience';
import Portfolio from './Components/Portfolio/Portfolio';
import Skills from './Components/Skills/Skills';
import Menu from './Components/Menu/Menu';
import './app.scss';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className='sections'>
        <About/>
        <Portfolio/>
        <Experience/>
        <Skills/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
