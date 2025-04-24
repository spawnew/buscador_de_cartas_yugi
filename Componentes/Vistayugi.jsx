import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
const Vistayugi = () => {
 
    const [yugi1, setyugi] = useState([])
 
    useEffect(() => {

        const fetchData = async () => {

            if (!dato.artista)  return
            const { artista, cancion } = dato
            const yugiUrl = "https://db.ygoprodeck.com/api/v7/cardinfo.php"
            const api = helpHttp()
           
            const [resbusqueda, resyugi] = await Promise.all([
                api.get(yugiUrl)

            ])
           
            console.log(resyugi.data)
            setyugi(resyugi.data)
        }
        fetchData()

    }, [dato])

 
    return (
    <div></div>
  )
}

export default Vistayugi