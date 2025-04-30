import React from 'react'
import "./stylo.css"
import { Link } from 'react-router'
const Navbar = () => {
  return (
    <div className='navbar'>
      <h1>Imperio YUGIOH</h1>
      <h2>Buscador de cartas</h2>
      
      <div className='botones'>
      <Link to= "/contacto">
        <button className='boton'><p>Contacto</p></button>
      </Link>
      
        <button className='boton'><p>Sobre nosotros</p></button>
      </div>
      </div>
   
  )
}

export default Navbar