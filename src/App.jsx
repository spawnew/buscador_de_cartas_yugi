import Navbar from './Componentes/Navbar/Navbar'
import './App.css'
import Vistayugi from './Componentes/Vistayugi'
import {  Routes, Route } from 'react-router-dom'
import Contacto from './Componentes/Contacto/Contacto'
import Detalle from './Componentes/Detalle/Detalle'
import Nosotros from './Componentes/Nosotros/Nosotros'
import { ThemeProvider } from './Context/TemaContext';
import Deck from './Componentes/Fav/Deck';
import AOS from "aos";
import { useEffect } from 'react';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
   

    AOS.init({
      duration:  1000,
      once: true,
    });
  }, []);



  return (
    

      <ThemeProvider>
        <Navbar />

        <Routes>
          <Route path='/' element={<Vistayugi />} />
          <Route path='/deck' element={<Deck />} />
          <Route path='/contacto' element={<Contacto />} />

          <Route path='/detalle/:id' element={<Detalle />} />

          <Route path='/nosotros' element={<Nosotros />} />

        </Routes>

      </ThemeProvider>

  

  )
}

export default App
