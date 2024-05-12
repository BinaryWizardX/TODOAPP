"use client";
import { useContext,useState } from "react";
import { createContext } from "react";
import themes from './theme.js'


const GlobalContext = createContext()
const updateGlobalContext = createContext()






export function GlobalProvider({children}) {
    
    const [selectedTheme, setSelectedTheme] = useState(0)

    const theme = themes[selectedTheme]



    return (
        <GlobalContext.Provider value={{
            theme,
        }}>
            <updateGlobalContext.Provider value={{}}>
                {children}
            </updateGlobalContext.Provider>
        </GlobalContext.Provider>
    )

}

export const useGlobalContext = () =>  useContext(GlobalContext)
export const useUpdateGlobalContext = () => useContext(updateGlobalContext)
