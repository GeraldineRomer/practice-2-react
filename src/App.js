
import './App.css';
import { MenuCube } from './components/Menu/MenuCube';
import { Cube } from './components/Cube/Cube';
import { Flexbox } from './pages/Flexbox/Flexbox';
import { Contact } from './pages/Contact/Contact';
import { Products } from './pages/Products/Products';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import * as Scroll from 'react-scroll';

function App() {
  
  return (
    <BrowserRouter>
      <div>
        <Cube />
        <MenuCube/>
        <Flexbox/>
        <Contact/>
        <Products/>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
