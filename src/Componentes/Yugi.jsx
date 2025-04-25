import React from 'react'
import "./stylo.css"
const Yugi = ({ nombre, img ,precio,precio2,precio3}) => {
    return (

        <div><h2>{nombre}</h2>
            <img src={img} alt={nombre} />
            <div className='precio'>
                {(precio <= 0) ? <h3>Sin precio</h3> : <h3>Precio Colstufing: {precio}</h3>}
                {(precio2 <= 0) ? <h3>Sin precio</h3> : <h3>Precio Ebay: {precio2}</h3>}
                {(precio3 <= 0) ? <h3>Sin precio</h3> : <h3>Precio TcgPlayer: {precio3}</h3>}
            </div>
            
        </div>
    )
}

export default Yugi