import React from 'react'
import "./stylo.css"
import { Link } from 'react-router'
const Navbar = () => {
  return (
    <div className='navbar'>
      <h1>Imperio YUGIOH</h1>
      <h2>Buscador de cartas</h2>
      
      
      <Link to= "/contacto">
        <button><p>Contacto</p></button>
      </Link>
      
      <button><p>Sobre nosotros</p></button>
    </div>
  )
}

export default Navbar