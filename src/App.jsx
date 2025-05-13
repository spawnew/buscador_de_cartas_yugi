import Navbar from './Componentes/Navbar/Navbar'
import './App.css'
import Vistayugi from './Componentes/Vistayugi'
import { BrowserRouter, Routes, Route } from 'react-router'
import Contacto from './Componentes/Contacto/Contacto'
import Detalle from './Componentes/Detalle/Detalle'
import Nosotros from './Componentes/Nosotros/Nosotros'


import { ThemeProvider } from './Context/TemaContext';
function App() {


  return (
    <BrowserRouter>

      <ThemeProvider>
        <Navbar />

        <Routes>
          <Route path='/' element={<Vistayugi />} />
          <Route path='/contacto' element={<Contacto />} />

          <Route path='/detalle/:id' element={<Detalle />} />

          <Route path='/nosotros' element={<Nosotros />} />

        </Routes>

      </ThemeProvider>

    </BrowserRouter>

  )
}

export default App
