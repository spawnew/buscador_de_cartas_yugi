import React from 'react'

const Yugi = ({ nombre, img ,precio,precio2,precio3}) => {
    return (

        <div className='border-1 bg-black border-amber-300
         justify-center flex flex-col items-center p-1'><h2>{nombre}</h2>
            <img className='w-30 border-2 m-1 ' src={img} alt={nombre} />
            <div className='flex  flex-col justify-center items-center'>
                {(precio <= 0) ? <p>Sin precio</p> : <p>Precio Colstufing: {precio}</p>}
                {(precio2 <= 0) ? <p>Sin precio</p> : <p>Precio Ebay: {precio2}</p>}
                {(precio3 <= 0) ? <p>Sin precio</p> : <p>Precio TcgPlayer: {precio3}</p>}
            </div>
            
        </div>
    )
}

export default Yugi