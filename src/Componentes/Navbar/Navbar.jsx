import React from 'react'

import { Link } from 'react-router'

const Navbar = () => {
  
  return (
    <div className="flex flex-col items-center justify-center w-full">
    <div className="flex flex-col md:grid md:grid-cols-10 border-amber-300  p-1 bg-gradient-to-r from-amber-700 via-amber-800 to-amber-700 w-full">
      
      <div className="md:col-span-1 flex justify-center">
        <Link to="/">
          <button className=" m-2 cursor-pointer border-amber-800 p-2 rounded-xl hover:text-amber-100 hover:border-black hover:bg-amber-900">
            <p>Home</p>
          </button>
        </Link>
      </div>
  
      <div className="md:col-span-1 flex justify-center">
        <Link to="/contacto">
                    <button className=" m-2 cursor-pointer border-amber-800 p-2 rounded-xl hover:text-amber-100 hover:border-black hover:bg-amber-900">
            Contacto
          </button>
        </Link>
      </div>
  
      <div className="md:col-span-6 flex flex-col justify-center items-center text-center">
        <h1 className="text-amber-100 text-shadow-black font-bold text-xl md:text-3xl">Imperio YUGIOH</h1>
        <h2 className="text-white text-base md:text-lg">Buscador de cartas</h2>
      </div>
  
      <div className="md:col-span-2 flex justify-center">
        <Link to="/nosotros">
                   <button className=" m-2 cursor-pointer border-amber-800 p-2 rounded-xl hover:text-amber-100 hover:border-black hover:bg-amber-900">
            <p>Sobre Nosotros</p>
          </button>
        </Link>
      </div>
  
    </div>
  </div>
   
  )
}

export default Navbar