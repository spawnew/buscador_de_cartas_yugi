import React from 'react'

import { Link } from 'react-router'

const Navbar = () => {
  
  return (
    <div className="flex flex-col items-center  w-full">
    <div className="flex flex-row justify-between border-amber-300  p-1 bg-gradient-to-r from-amber-950 via-black to-amber-950 w-full">
      
      <div className="md:col-span-1 flex justify-center">
        <Link to="/">
          <button className=" m-2 cursor-pointer border-amber-800 p-2 rounded-xl hover:text-amber-100 hover:border-black hover:bg-amber-900">
            <p className="text-sm">Home</p>
          </button>
        </Link>
        </div>
        <div className=" flex justify-center">
        <Link to="/deck">
          <button className=" m-2 cursor-pointer border-amber-800 p-2 rounded-xl hover:text-amber-100 hover:border-black hover:bg-amber-900">
            <p className="text-sm">Mi Deck</p>
          </button>
        </Link>
      </div>
   <div className="md:col-span-6 flex flex-col justify-center items-center text-center">
        <h1 className="text-amber-100 text-shadow-black font-bold text-sm md:text-3xl">Imperio YUGIOH</h1>
        <h2 className="text-white text-sm md:text-lg">Buscador de cartas</h2>
      </div>
      <div className=" flex justify-center">
        <Link to="/contacto">
                    <button className=" m-2 cursor-pointer border-amber-800 p-2 rounded-xl hover:text-amber-100 hover:border-black hover:bg-amber-900">
            Contacto
          </button>
        </Link>
      </div>
  
     
  
      <div className="md:col-span-2 flex justify-center">
        <Link to="/nosotros">
                   <button className=" m-2 cursor-pointer border-amber-800 p-2 rounded-xl hover:text-amber-100 hover:border-black hover:bg-amber-900">
            <p className="text-sm">Sobre Nosotros</p>
          </button>
        </Link>
      </div>
  
    </div>
  </div>
   
  )
}

export default Navbar