import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
const Vistayugi = () => {
   const [dato, setDato] = useState({})
    const [yugi1, setyugi] = useState([])
 
 
    const obtener = (dato) => {
        setDato(dato)
    }
    useEffect(() => {

        const fetchData = async () => {

            if (!dato.carta)  return
            const { carta } = dato
            const yugiUrl = "https://db.ygoprodeck.com/api/v7/cardinfo.php"
            const api = helpHttp()
           
            const [, resyugi] = await Promise.all([
                api.get(yugiUrl)

            ])
           
            console.log(resyugi.data)
            setyugi(resyugi.data)
        }
        fetchData()

    }, [dato])

 
    return (
        <div>
            <FormYugi obtener={obtener} />
    </div>
  )
}

export default Vistayugi