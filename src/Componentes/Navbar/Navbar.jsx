import React from 'react'

import { Link } from 'react-router'

const Navbar = () => {
  
  return (
    <div className=" flex flex-col items-center justify-center p-2">
      <h1 className='text-amber-100 text-shadow-black font-bold '>Imperio YUGIOH</h1>
      <h2>Buscador de cartas</h2>
      
      <div className='flex flex-row justify-between border-amber-300 border-3  p-2 bg-linear-to-r/oklab from-blue-700 to-green-900 w-full'>
      <Link to= "/contacto">
        <button className='rounded-xl border-2 border-amber-400 bg-black p-1'><p>Contacto</p></button>
        </Link>
        <Link to="/">
          <button className='rounded-xl border-2 border-amber-400 bg-black p-1'><p>Home</p></button>
        </Link>
        <Link to="/nosotros">
          <button className='rounded-xl border-2 border-amber-400 bg-black p-1'><p>Sobre Nosotro</p></button>
        </Link>
        <Link to="/nuevo">
          <button className='rounded-xl border-2 border-amber-400 bg-black p-1'><p>nuevo</p></button>
        </Link>
      
      </div>
      </div>
   
  )
}

export default Navbar