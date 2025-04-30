import React from 'react';

import "./stylo.css"

const Redes = ({ nombre, link, imagen }) => {
    return (
        <div className='listafoto'>
                <a href={link} >
                <img src={imagen} alt={nombre} />
                <p>{nombre}</p>
            </a>
        </div>
            
        
 
    
    );
};

export default Redes;