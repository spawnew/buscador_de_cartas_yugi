import React from 'react';
import Redes from '../Contacto/Redes';
import facebookImg from '../../assets/facebook.png';
import youtubeImg from '../../assets/youtobe.jpeg';
import instagramImg from '../../assets/instagram.jpeg';

const Nosotros = () => {
  return (
    <div className="flex flex-col items-center justify-center p-6 gap-4 bg-gradient-to-b from-black via-zinc-900 to-black text-white">
      <p className="text-lg text-center">Es un buscador de cartas de la tienda Imperio YUGIOH.</p>
      <p className="text-lg text-center">Para ver las nuestras en stock.</p>
      <p className="text-lg text-center">Si quieres ver las cartas que tenemos en stock, puedes visitar nuestro drive.</p>

      <a
        href="https://drive.google.com/drive/u/0/folders/1QMC-FI6N5I1CN17iMVa5HbBq0O3QAyX4?fbclid=IwY2xjawJs_YtleHRuA2FlbQIxMAABHqldnBrR20KKUwc9sPmciqWPF4u5UVoSTpkSW6P5KkynggQc6q7tfODRnoUc_aem_LyUpIaHql32uX8-onSb7Og"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:scale-105 transition-transform duration-300"
      >
        <img
          className="border-4 border-amber-300 rounded-xl shadow-lg w-full max-w-md"
          src="https://www.hobbycorneregypt.com/cdn/shop/collections/yu-gi-oh-648878.jpg?v=1734332899"
          alt="Cartas Yu-Gi-Oh!"
        />
      </a>

      <ul className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-6">
        <li>
          <Redes
            nombre="Facebook"
            link="https://www.facebook.com/imperio.yugioh"
            imagen={facebookImg}
          />
        </li>
        <li>
          <Redes
            nombre="YouTube"
            link="https://www.youtube.com/@imperio_yugioh"
            imagen={youtubeImg}
          />
        </li>
        <li>
          <Redes
            nombre="Instagram"
            link="https://www.instagram.com/imperio_yugioh/"
            imagen={instagramImg}
          />
        </li>
      </ul>
    </div>
  );
};

export default Nosotros;