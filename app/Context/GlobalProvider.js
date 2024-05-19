"use client";
import { useContext,useState, useEffect } from "react";
import { createContext } from "react";
import themes from './theme.js'
import axios from "axios";
import toast from "react-hot-toast";



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

    const DeleteTask = async (id) =>{
        try{

            const response = await axios.delete(`Api/tasks/${id}`)
            getAllTasks()
            return response

        }catch(error){
            console.log(error)
            alert('Error Deleting Task')
        }
    }

    const GetASingleTask = async(id)=>{
        try{

            const response = await axios.get(`Api/tasks/${id}`)
            console.log(response)
            return response

        }
        catch(error){
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
            getAllTasks,
            DeleteTask,
            GetASingleTask,
        }}>
            <updateGlobalContext.Provider value={{}}>
                {children}
            </updateGlobalContext.Provider>
        </GlobalContext.Provider>
    )

}

export const useGlobalContext = () =>  useContext(GlobalContext)
export const useUpdateGlobalContext = () => useContext(updateGlobalContext)
