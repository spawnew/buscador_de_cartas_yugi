import React from 'react'
import "./stylo.css"
import { Link } from 'react-router'
const Navbar = () => {
  return (
    <div className='navbar'>
      <h1>Imperio YUGIOH</h1>
      <h3>Buscador de cartas</h3>
      
      
      <Link to= "/contacto">
        <button>Contacto</button>
      </Link>
      
      <button>Sobre nosotros</button>
    </div>
  )
}

export default Navbar