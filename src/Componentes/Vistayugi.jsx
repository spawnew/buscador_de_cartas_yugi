import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { helpHttp } from '../assets/helpers/helpHttp'
import FormYugi from './FormYugi/FormYugi'
import Yugi from './Yugi'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { TemaContext } from '../Context/TemaContext'
const Vistayugi = () => {
    const [dato, setDato] = useState({ carta: null })
    const [yugi1, setyugi] = useState([])
     const [load, setLoad] = useState(false)

const {  añadir } = useContext(TemaContext)
    const obtener = (dato) => {
        console.log(dato)
     
        setDato(dato)
    }

    const cambiarPagina = () => { 
        if (pagAct < 0) return;
        
       

        setPaga(pag);
        setPag(pag+15)
    }
    const cambiarPagina2 = () => { 
        if (pag === 15) {
          
           return 
        }
        
       setPaga(pag-30);
 setPag(pag-15)
        
       
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
            setLoad(true);
        }
        fetchData()

    }, [dato])
    const [pag, setPag] = useState(15);
    const [pagAct, setPaga] = useState(0);
    useEffect(() => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}, [pagAct]);

    return (
        <div >
            <FormYugi obtener={obtener} />
           <div className="flex flex-row flex-wrap justify-center items-center
                bg-gradient-to-r from-amber-950 via-black to-amber-950 p-2">
 
 

  {!load && <p className="text-amber-100">Cargando...</p>}

  {load && dato.carta === null &&
            yugi1.slice(pagAct, pag).map(el => (
      <Link to={`/detalle/${el.id}`}>
      <div className="flex flex-col items-center p-2" key={el.id}>
        <Yugi
  id={el.id} 
  nombre={el.name}
  img={el.card_images[0].image_url}
  precio={el.card_prices[0].coolstuffinc_price}
  precio2={el.card_prices[0].ebay_price}
  precio3={el.card_prices[0].tcgplayer_price}
  añadir={añadir}
  type={el.type}
/>
      </div>
                 </Link>
    ))
  }

  {load && dato.carta !== null &&
  yugi1
    .filter(el =>
      (el.name === dato.carta ||
      el.archetype === dato.carta ||
        el.race === dato.carta||
        el.type === dato.type
      )
    )
    .map(el => (
      <div className="flex flex-col items-center p-2" key={el.id}>
            <Yugi
                id={el.id}
          nombre={el.name}
          img={el.card_images[0].image_url}
          precio={el.card_prices[0].coolstuffinc_price}
          precio2={el.card_prices[0].ebay_price}
                precio3={el.card_prices[0].tcgplayer_price}
                type={el.type}
          añadir={añadir}     
        />
      
      </div>
    ))
}

</div>
            <div className='flex flex-row items-center justify-center'>
              
                <button onClick={() => cambiarPagina2()}  className="m-3 p-2 rounded-xl bg-black" >
                  Anterior
                    </button>
           
                <p className='text-amber-100'>{pag}</p>
                <button onClick={() =>cambiarPagina()}  className="m-3 p-2 rounded-xl bg-black" >
                  Siguiente
                </button>
            </div>

        </div>
    )
}

export default Vistayugi