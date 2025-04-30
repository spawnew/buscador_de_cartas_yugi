import React from 'react'
import { useParams } from 'react-router'
import { useState } from 'react'
import { useEffect } from 'react'
import { helpHttp } from '../../helpers/helpHttp'
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
        <div>
            <h1>Detalle</h1>
            <h2>{id}</h2>
            {yugi1.map((el) => (
                <div className='carta' key={el.id}>
                    <h2>{el.name}</h2>
                    <img src={el.card_images[0].image_url} alt="" />
                   
                </div>
            ))}
        </div>
   
  )
}

export default Detalle