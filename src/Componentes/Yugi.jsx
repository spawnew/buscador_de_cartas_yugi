import React from 'react'
import "./stylo.css"
const Yugi = ({ nombre, img ,precio}) => {
    return (

        <div><h2>{nombre}</h2>
            <img src={img} alt={nombre} />
            {(precio <=0) ? <h3>Sin precio</h3> : <h3>Precio: {precio}</h3>}
        </div>
    )
}

export default Yugi