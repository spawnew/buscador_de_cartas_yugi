import React from 'react';



const Redes = ({ nombre, link, imagen }) => {
    return (
        <div className='flex md:flex-col flex-row justify-center w-20 md:w-50   items-center md:m-4 hover:scale-105 transition-transform duration-300'>
                <a href={link} >
                <img className='rounded-lg w-5 h-5' src={imagen} alt={nombre} />
                <p className='text-amber-100 text-center'>{nombre}</p>
            </a>
        </div>
            
        
 
    
    );
};

export default Redes;