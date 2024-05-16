"use client";
import { useContext,useState, useEffect } from "react";
import { createContext } from "react";
import themes from './theme.js'
import axios from "axios";


const GlobalContext = createContext()
const updateGlobalContext = createContext()






export function GlobalProvider({children}) {

    const [tasks, setTasks] = useState([])
    
    const [selectedTheme, setSelectedTheme] = useState(0)

    const theme = themes[selectedTheme]

    const getAllTasks = async () => {
        try{

            const allTasks = await axios.get('Api/tasks')
            console.log(allTasks.data)
            setTasks(allTasks.data)
            

        }catch(error){
            console.log(error)
        }
    }

    useEffect(() => {
        getAllTasks()
    }, [])



    return (
        <GlobalContext.Provider value={{
            theme,
            tasks,
        }}>
            <updateGlobalContext.Provider value={{}}>
                {children}
            </updateGlobalContext.Provider>
        </GlobalContext.Provider>
    )

}

export const useGlobalContext = () =>  useContext(GlobalContext)
export const useUpdateGlobalContext = () => useContext(updateGlobalContext)
