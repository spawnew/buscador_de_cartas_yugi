import React from 'react'

import { Link } from 'react-router'

const Navbar = () => {
  
  return (
    <div className=" flex flex-col items-center justify-center ">
     
      
      <div className=' flex-row grid grid-cols-10 border-amber-300 border-2  p-1 bg-gradient-to-r from-black via-amber-300 to-black w-full'>
        <div className='col-span-1'>
          <Link to="/">
            <button className='border-2 m-2  cursor-pointer border-amber-300 p-1 rounded-xl hover:text-black hover:border-black  hover:bg-amber-300 '><p>Home</p></button>
          </Link>
       </div>
        <div className='col-span-1'>

        
      <Link to= "/contacto">
            <button className='border-2 m-2   cursor-pointer border-amber-300 p-1 rounded-xl hover:text-black hover:border-black  hover:bg-amber-300 '>Contacto</button>
        </Link>
       </div>
        <div className='flex flex-col justify-center items-center col-span-6 '> 
          <h1 className='text-amber-100  text-shadow-black font-bold '>Imperio YUGIOH</h1>
          <h2>Buscador de cartas</h2>
        </div>
        <div className='col-span-2'> 
        <Link to="/nosotros">
            <button className='border-2  m-2 cursor-pointer border-amber-300 p-1 rounded-xl hover:text-black hover:border-black  hover:bg-amber-300 '><p>Sobre Nosotro</p></button>
        </Link>
        </div>
      
      </div>
      </div>
   
  )
}

export default Navbar