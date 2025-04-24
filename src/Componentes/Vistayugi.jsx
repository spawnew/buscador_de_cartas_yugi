import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { helpHttp } from '../../helpers/helpHttp'
import FormYugi from './FormYugi'
const Vistayugi = () => {
   const [dato, setDato] = useState({})
    const [yugi1, setyugi] = useState([])
 
 
    const obtener = (dato) => {
        setDato(dato)
    }
    useEffect(() => {
                  console.log(dato)
        const fetchData = async () => {

           
           
            const yugiUrl = "https://db.ygoprodeck.com/api/v7/cardinfo.php"
            const api = helpHttp()
           
            const [ resyugi] = await Promise.all([
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

            {     yugi1.filter((el) => el.name === dato.carta).map((el) => (
                <div key={el.id}>
                    <h2>{el.name}</h2>
                    <img src={el.card_images[0].image_url} alt={el.name} />
                   
                </div>
            ))}
    </div>
  )
}

export default Vistayugi