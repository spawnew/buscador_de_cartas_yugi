import React from 'react'
import { useContext } from 'react'
import { TemaContext } from '../../Context/TemaContext'
import { Link } from 'react-router'
const Favorito = () => {
  const { moster, magia, trampa,extra } = useContext(TemaContext)
   console.log(moster, magia, trampa )
    return (
        <div>
        <div className='flex flex-row flex-wrap bg-amber-700'>
          {moster.length === 0 &&magia.length === 0 &&trampa.length === 0 &&extra.length === 0 && <p className='text-amber-100'>No hay cartas en el deck</p>}
        
{moster.map((el, index) => (
  <Link to={`/detalle/${el.id}`}>
         <div key={index} className="flex flex-col items-center p-2">
    
    <img src={el.img} alt={el.nombre} className= "w-20 h-auto" />
  </div>
        </Link>
))}
        </div> 
            <div className='flex flex-row flex-wrap bg-emerald-700'>
{magia.map((el, index) => (
  <div key={index} className="flex flex-col flex-wrap justify-around items-center p-2">
   
    <img src={el.img} alt={el.nombre} className="w-20 h-auto" />
  </div>
))}
        </div> 
             <div className='flex flex-row bg-purple-700'>
{trampa.map((el, index) => (
   <Link to={`/detalle/${el.id}`}>
         <div key={index} className="flex flex-col items-center p-2">

    <img src={el.img} alt={el.nombre} className= "w-20 h-auto" />
  </div>
        </Link>
 
  
))}
          </div>
        <div className='flex flex-row 
          bg-blue-900'>
          {extra.map((el, index) => (
  <Link to={`/detalle/${el.id}`}>
         <div key={index} className="flex flex-col items-center p-2">
   
    <img src={el.img} alt={el.nombre} className= "w-20 h-auto" />
  </div>
        </Link>
 
))}
        </div> 
        <div>
          Moustros: {moster.length} <br />
          Magias: {magia.length} <br />
          Trampas: {trampa.length} <br />
          Extra: {extra.length} <br />
        </div>
          </div>
    )
}

export default Favorito