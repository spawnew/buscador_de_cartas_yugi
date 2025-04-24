import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { helpHttp } from '../../helpers/helpHttp'
import FormYugi from './FormYugi'
import Yugi from './Yugi'
const Vistayugi = () => {
   const [dato, setDato] = useState({ carta: null })
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
            <div className="contenedor-cartas">
            {(dato.carta===null) ? 
               ( yugi1.map((el) => (
                    <div className='carta' key={el.id}>
                       <Yugi nombre={el.name}
                           img={el.card_images[0].image_url } /> 
                       
                    </div>
                )))
            :(yugi1.filter((el) => el.name === dato.carta).map((el) => (
                <div className='carta' key={el.id}>
                    <Yugi nombre={el.name}
                           img={el.card_images[0].image_url } /> 
                </div>
            )))}
    
            </div>
            </div>
  )
}

export default Vistayugi