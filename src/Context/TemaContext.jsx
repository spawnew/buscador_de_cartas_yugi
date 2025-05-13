import { createContext, useState } from "react";

export const TemaContext = createContext(null);

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");

    const cambiarTema = () => {
        if (theme === "light") {
            setTheme("dark")
        }
        else {
            setTheme("light")
        }

    };

    const tema = {
        theme,
        cambiarTema,
    };

    return (
        <TemaContext.Provider value={tema}>
            {children}
        </TemaContext.Provider>
    );
};