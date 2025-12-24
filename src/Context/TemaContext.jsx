import { createContext, useState } from "react";
import { useEffect } from "react";
export const TemaContext = createContext(null);

export const ThemeProvider = ({ children }) => {
   
    const [moster, setMoster] = useState(() =>
  JSON.parse(localStorage.getItem("moster")) || []
);

const [magia, setMagia] = useState(() =>
  JSON.parse(localStorage.getItem("magia")) || []
);

const [trampa, setTrampa] = useState(() =>
  JSON.parse(localStorage.getItem("trampa")) || []
);

const [extra, setExtra] = useState(() =>
  JSON.parse(localStorage.getItem("extra")) || []
);
useEffect(() => {
  localStorage.setItem("moster", JSON.stringify(moster));
}, [moster]);

useEffect(() => {
  localStorage.setItem("magia", JSON.stringify(magia));
}, [magia]);

useEffect(() => {
  localStorage.setItem("trampa", JSON.stringify(trampa));
}, [trampa]);

useEffect(() => {
  localStorage.setItem("extra", JSON.stringify(extra));
}, [extra]);
    const añadir = (carta) => {
        if (magia.length + trampa.length + moster.length <= 40) {
            {
                switch (carta.type) {
                    case "Effect Monster":
                        setMoster((prevMoster) => [...prevMoster, carta]);
                        break;
                    case "Normal Monster":
                        setMoster((prevMoster) => [...prevMoster, carta]);
                        break;
                    case "Flip Effect Monster":
                        setMoster((prevMoster) => [...prevMoster, carta]);
                        break;
                    case "Spell Card":
                        setMagia((prevMagia) => [...prevMagia, carta]);
                        break;
                    case "Trap Card":
                        setTrampa((prevTrampa) => [...prevTrampa, carta]);
                        break;
                }
            }
        }
            else {
            alert("No puedes añadir más de 40 cartas a tu baraja");
        }
             if (extra.length <= 15) { 
        switch (carta.type) {
            case "XYZ Monster":
                        setExtra((prevMoster) => [...prevMoster, carta]);
                        break;
                    case "Synchro Monster":
                        setExtra((prevMoster) => [...prevMoster, carta]);
                        break;
                    case "Fusion Monster":
                        setExtra((prevMoster) => [...prevMoster, carta]);
                break;
            case "Link Monster":
                        setExtra((prevMoster) => [...prevMoster, carta]);
                break;
           
                 }
                } else {alert("No puedes añadir más de 15 cartas a tu extra deck")}         
    };

    const borrar = () => {
    setExtra([]);
    setMoster([]);
    setMagia([]);
    setTrampa([]);
    
    
    }
    const borrarCarta = (id) => {
    setMoster(moster.filter((carta) => carta.id !== id));
    setMagia(magia.filter((carta) => carta.id !== id));
    setTrampa(trampa.filter((carta) => carta.id !== id));
    setExtra(extra.filter((carta) => carta.id !== id));
    }

    const carta = {
      añadir, moster, magia, trampa,extra,borrar ,borrarCarta
    };
    

    return (
        <TemaContext.Provider value={carta}>
            {children}
        </TemaContext.Provider>
    );
};