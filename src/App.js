
import './App.css';
import { MenuCube } from './components/Menu/MenuCube';
import { Cube } from './components/Cube/Cube';
import { Flexbox } from './components/Flexbox/Flexbox';
import { Contact } from './components/Contact/Contact';
import { Products } from './components/Products/Products';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import { Home } from './components/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Cube/>
        <MenuCube /> 
        <Home/>
        <Routes> 
          <Route path="/flex" element={<Flexbox />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/products" element={<Products />}/>
        </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
