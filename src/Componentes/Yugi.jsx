import React from 'react'
import "./stylo.css"
const Yugi = ({ nombre, img }) => {
    return (

        <div><h2>{nombre}</h2>
            <img src={img} alt={nombre} />
        </div>
    )
}

export default Yugi