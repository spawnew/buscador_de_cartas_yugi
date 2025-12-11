import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { helpHttp } from '../assets/helpers/helpHttp'
import FormYugi from './FormYugi/FormYugi'
import Yugi from './Yugi'
import { Link } from 'react-router'

const Vistayugi = () => {
    const [dato, setDato] = useState({ carta: null })
    const [yugi1, setyugi] = useState([])


    const obtener = (dato) => {
        console.log(dato)
     
        setDato(dato)
    }
    useEffect(() => {
        console.log(dato)
        const fetchData = async () => {

            const yugiUrl = "https://db.ygoprodeck.com/api/v7/cardinfo.php/"
            const api = helpHttp()

            const [resyugi] = await Promise.all([
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
            <div className="flex flex-row flex-wrap justify-center items-center  border-amber-400 bg-gradient-to-r from-black via-amber-800 to-black p-2 ">
                {(dato.carta === null) ?
                    (yugi1.slice(0, 40).map((el) => (
                        <div className='flex flex-col items-center p-2 'key={el.id}>
                            <Yugi nombre={el.name}
                                img={el.card_images[0].image_url}
                                precio={el.card_prices[0].coolstuffinc_price}
                                precio2={el.card_prices[0].ebay_price}
                                precio3={el.card_prices[0].tcgplayer_price}
                            />
                            <Link to={`/detalle/${el.id}`}  >
                                <button className='border-1 m-3 cursor-pointer border-amber-300 p-2 rounded-xl hover:text-black hover:border-black  hover:bg-amber-300 '>Detalle</button>
                            </Link>
                        </div>
                    )))
                    : (yugi1.filter((el) => el.name === dato.carta  || el.archetype==dato.carta || el.race==dato.carta).map((el) => (
                        <div  key={el.id}>
                            <Yugi nombre={el.name}
                                img={el.card_images[0].image_url}
                                precio={el.card_prices[0].coolstuffinc_price} 
                              precio2={el.card_prices[0].ebay_price}
                              precio3={el.card_prices[0].tcgplayer_price}/>
                            <Link to={`/detalle/${el.id}`}  >
                                <button className='border-1 m-3 border-amber-300 p-2 rounded-xl hover:border-amber-600  '>Detalle</button>
                            </Link>

                        </div>
                    )))}

            </div>
        </div>
    )
}

export default Vistayugi