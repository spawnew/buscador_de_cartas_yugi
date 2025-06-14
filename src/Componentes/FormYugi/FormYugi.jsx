import React from 'react'
import { useState } from 'react'
import './stylo.css'
const FormYugi = ({ obtener }) => {

    const [form, setForm] = useState({ carta:"" })
    const handleChange = (e) => {
        
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

        const handleSubmit = (e) => {
            e.preventDefault();
          
            
            const capitalizada = form.carta
              .trim()
              .split(" ")
              .map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase())
              .join(" ");
          
            obtener({ carta: capitalizada });
          
            setForm({ carta: "" });
    }
    return (
        <div className='flex flex-col m-2 justify-center items-center border-2 border-amber-400 bg-black p-2'>
            <h2 className='text-amber-100 text-shadow-black font-bold'>Buscador de cartas</h2>




            <p className='text-amber-100 text-shadow-black font-bold '>Ingrese el nombre de la carta</p>

            <form className='border-2 border-amber-300   ' onSubmit={handleSubmit}>
                <input className='input '  type="text" onChange={handleChange} name="carta" value={form.carta} placeholder='ingrese la carta'>
                </input>

               

                <input className='bg-amber-300 p-1 ml-3 border-amber-600 hover:bg-amber-600  ' type="submit" ></input>

            </form>


        </div>
    )
}

export default FormYugi;