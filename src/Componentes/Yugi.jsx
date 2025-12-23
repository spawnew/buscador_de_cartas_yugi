import React from 'react'

const Yugi = ({ nombre, img, precio, precio2, precio3, type, añadir,id }) => {
    
    const carta = { nombre, img, type,id }

    return (

          <div  data-aos="fade-up" className="  border-amber-600 border-2 w-fit h-fit sm:flex-col transition-transform duration-300 hover:scale-105 hover:opacity-80 cursor-pointer hover:bg-amber-950 hover:border-black hover:border-2 flex flex-col items-center  m-2 p-4 bg-black rounded-lg shadow-lg">
           
            <h2 className='text-amber-200 font-bold'>{nombre}</h2>
            <img className='w-30 border-1 border-black m-1 ' src={img} alt={nombre} loading="lazy" />
            <div className='flex text-amber-100 flex-col justify-center items-center'>
                {(precio <= 0) ? <p>Sin precio</p> : <p>Precio Colstufing: {precio}</p>}
                {(precio2 <= 0) ? <p>Sin precio</p> : <p>Precio Ebay: {precio2}</p>}
                {(precio3 <= 0) ? <p>Sin precio</p> : <p>Precio TcgPlayer: {precio3}</p>}
                <button
                onClick={() => añadir && añadir(carta)}
                className="mt-2 bg-amber-900 text-amber-100 font-bold px-4
                           rounded text-md  hover:bg-amber-600 leading-none p-2"
                >
                Añadir favoritos
              </button>
            </div>
            
        </div>
    )
}


export default Yugi