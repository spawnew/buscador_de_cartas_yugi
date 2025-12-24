import React from 'react'
import { useContext } from 'react'
import { TemaContext } from '../../Context/TemaContext'
import { Link } from 'react-router-dom'
import { FiX } from "react-icons/fi";
const Favorito = () => {
  const { moster, magia, trampa,extra ,borrar,borrarCarta } = useContext(TemaContext)
   console.log(moster, magia, trampa )
    return (
        <div>
        <div className='flex flex-row flex-wrap bg-amber-700'>
          {moster.length === 0 &&magia.length === 0 &&trampa.length === 0 &&extra.length === 0 && <p className='text-amber-100'>No hay cartas en el deck</p>}
         
          {moster.map((el, index) => {
            return (
              <div data-aos="fade-up" key={index} className="flex flex-col items-center p-2">
                <Link key={el.id} to={`/detalle/${el.id}`}>
                  <img src={el.img} alt={el.nombre} className="w-20 h-20 md:h-auto" />
                </Link>
    
                <button className='bg-red-800 rounded' onClick={() => borrarCarta(el.id)}> <FiX /></button>
              </div>
            )
          })}
        </div> 
            <div className='flex flex-row flex-wrap bg-emerald-700'>
          {magia.map((el, index) => (
      <Link key={el.id} to={`/detalle/${el.id}`}>
  <div data-aos="fade-up" key={index} className="flex flex-col flex-wrap justify-around items-center p-2">
   
                <img src={el.img} alt={el.nombre} className="w-20 h-20 md:h-auto" />
                <button className='bg-red-800 rounded' onClick={() => borrar && borrarCarta(el.id)}>Borrar Deck</button>
  </div>
</Link>
))}
        </div> 
             <div className='flex flex-row  flex-wrap bg-purple-700'>
{trampa.map((el, index) => (
     <Link key={el.id} to={`/detalle/${el.id}`}>
         <div data-aos="fade-up" key={index} className="flex flex-col items-center p-2">

      <img src={el.img} alt={el.nombre} className="w-20 h-20 md:h-auto" />
      <button className='bg-red-800 rounded' onClick={() => borrar && borrarCarta(el.id)}>Borrar Deck</button>
  </div>
        </Link>
 
  
))}
          </div>
        <div className='flex flex-row  flex-wrap
          bg-blue-900'>
          {extra.map((el, index) => (
    <Link key={el.id} to={`/detalle/${el.id}`}>
         <div data-aos="fade-up" key={index} className="flex flex-col items-center p-2">
   
                <img src={el.img} alt={el.nombre} className="w-20 h-20 md:h-auto" />
                
              </div>
              <button className='bg-red-800 rounded' onClick={() => borrar && borrarCarta(el.id)}>Borrar Deck</button>
        </Link>
 
))}
        </div> 
        <div>
          Moustros: {moster.length} <br />
          Magias: {magia.length} <br />
          Trampas: {trampa.length} <br />
          Extra: {extra.length} <br />
        </div>
        <button className='bg-red-800 rounded' onClick={() => borrar && borrar()}>Borrar Deck</button>
          </div>
    )
}

export default Favorito