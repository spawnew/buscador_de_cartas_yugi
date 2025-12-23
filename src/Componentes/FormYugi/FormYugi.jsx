
import { useState } from 'react'

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
            if (form.carta.trim() === "") {
                alert("Por favor, ingrese el nombre de la carta.");
                return;
            }
          
            
            const capitalizada = form.carta
              .trim()
              .split(" ")
              .map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase())
              .join(" ");
          
            obtener({ carta: capitalizada });
          
            setForm({ carta: "" });
    }
    return (
       <div className="flex flex-col items-center m-2 bg-black p-2  rounded-md">

  <h2 className="text-amber-100 font-bold">
    Buscador de cartas
  </h2>

  <p className="text-amber-100 text-sm mb-2">
    Ingrese el nombre de la carta
  </p>
<form onSubmit={handleSubmit}  className="flex  items-center ">
  <input
    type="text"
    name="carta"
    value={form.carta}
    onChange={handleChange}
    placeholder="Ingrese la carta"
    className="h-9 border border-amber-800 rounded-l px-2 
               bg-black text-amber-100"
  />

  <button
    type="submit"


  className="h-9 inline-flex m-5 items-center justify-center
             bg-amber-900 text-amber-100 font-bold px-4
             rounded text-xl  hover:bg-amber-600 leading-none"
>

  
    Buscar
  </button>
</form>

</div>
    )
}

export default FormYugi;