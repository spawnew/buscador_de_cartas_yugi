import Navbar from './Componentes/Navbar/Navbar'
import './App.css'
import Vistayugi from './Componentes/Vistayugi'
import { BrowserRouter, Routes, Route } from 'react-router'
import Contacto from './Componentes/Contacto/Contacto'
import Detalle from './Componentes/Detalle/Detalle'
function App() {


  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path='/' element={<Vistayugi />} />
        <Route path='/contacto' element={<Contacto />} />
        <Route path='/detalle/:id' element={<Detalle />} />

      </Routes>



    </BrowserRouter>

  )
}

export default App
