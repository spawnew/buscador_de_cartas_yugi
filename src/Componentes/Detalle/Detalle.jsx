import React from 'react'
import { useParams } from 'react-router'
import { useState } from 'react'
import { useEffect } from 'react'
import { helpHttp } from '../../assets/helpers/helpHttp'

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
        <div className='flex flex-col justify-center items-center
         border-2 border-amber-400 bg-black p-2'>

            <h2>Detalles de la carta</h2>
            {yugi1.map((el) => (
                <div key={el.id}>
                    <div className='flex flex-row p-3 m-2 justify-center items-center
                     border-2 border-amber-400 bg-black '>
                       <div className='flex flex-col justify-center'>
                        <h2>{el.name}</h2>
                     
                    
                            
                        {el.card_sets?.map((set) => (
  <div key={set.set_code} className="flex flex-col pr-0.5">
    <div className='flex flex-row '>
    <p className='mr-3'>{set.set_name}</p>
                                    <p className='mr-3'>{set.set_rarity}</p>
                                    <p className='mr-3'> {set.set_price > 0?set.set_price:<p>no hay precio</p> }</p>  
     </div>
                            </div>
                            
                        ))}
                            </div>
                        <img className='w-50 rounded-xl m-4  border-amber-50 border-1'loading="lazy" src={el.card_images[0].image_url} alt="" />

                      

                    </div>
                </div>
            ))}
        </div>

    )
}

export default Detalle