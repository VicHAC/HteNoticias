import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Salud from './Componentes/Pages/Salud';
import Navbar from './Componentes/Navbar/Navbar';
import Dropdown from './Componentes/Navbar/Dropdown';
import Inicio from './Componentes/Pages/Inicio';
import Cdmx from './Componentes/Pages/Cdmx';
import Nacional from './Componentes/Pages/Nacional';
import Footer from './Componentes/Footer';
import Opinion from './Componentes/Pages/Opinion';
import NotFound from './Componentes/NotFound';
import Nota from './Componentes/Nota';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
        console.log('i resized');
      }
    };

    window.addEventListener('resize', hideMenu);

    return () => {
      window.removeEventListener('resize', hideMenu);
    };
  });

  return (
    <>
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
        <Routes>
          <Route path="/" element={<Inicio />}/>
          <Route path="/Cdmx" element={<Cdmx />}/>
          <Route path="/Nacional" element={<Nacional />}/>
          <Route path="/Salud" element={<Salud />}/>
          <Route path='/Opinion' element={<Opinion />} />
          <Route path='/Nota/:id/:titulo' element={<Nota />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      <Footer />
    </>
  );
}

export default App; 
