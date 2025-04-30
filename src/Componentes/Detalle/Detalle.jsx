import React from 'react'
import { useParams } from 'react-router'
import { useState } from 'react'
import { useEffect } from 'react'
import { helpHttp } from '../../../helpers/helpHttp'
import "./stylo.css"
const Detalle = () => {

    const { id } = useParams()

    const [yugi1, setyugi] = useState([])

    console.log(id)

    useEffect(() => {

        const fetchData = async () => {

            const yugiUrl = `https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${id}`
            const api = helpHttp()

            const [resyugi] = await Promise.all([
                api.get(yugiUrl)

            ])

            console.log(resyugi.data)
            setyugi(resyugi.data)
        }
        fetchData()

    }, [id])

    return (
        <div className='detalleCarta'>
            
            <h2>Detalles de la carta</h2>
            {yugi1.map((el) => (
                <div  key={el.id}>
                    <div className='detalleCarta1'>
                    <h2>{el.name}</h2>
                    
                        <img src={el.card_images[0].image_url} alt="" />
                       
                        <p>{el.desc}</p>
                        
                         </div>
                </div>
            ))}
        </div>

    )
}

export default Detalle