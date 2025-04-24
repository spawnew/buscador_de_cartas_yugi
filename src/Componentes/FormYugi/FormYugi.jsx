import React from 'react'
import { useState } from 'react'
import "./stylo.css"
const FormYugi = ({ obtener }) => {

    const [form, setForm] = useState({ carta:"" })
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(form)
        obtener(form)
        setForm({ carta: ""})
    }
    return (
        <div className='formulario'>
            <h2>Buscar carta</h2>






            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} name="carta" value={form.carta} placeholder='ingrese la carta'>
                </input>

               

                <input type="submit" ></input>

            </form>


        </div>
    )
}

export default FormYugi;