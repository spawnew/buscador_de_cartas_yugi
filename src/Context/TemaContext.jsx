import { createContext, useState } from "react";

export const TemaContext = createContext(null);

export const ThemeProvider = ({ children }) => {
    const [moster, setMoster] = useState([]);
     const [magia, setMagia] = useState([]);
    const [trampa, setTrampa] = useState([]);
    const [extra, setExtra] = useState([]);

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

    const carta = {
      añadir, moster, magia, trampa,extra
    };

    return (
        <TemaContext.Provider value={carta}>
            {children}
        </TemaContext.Provider>
    );
};