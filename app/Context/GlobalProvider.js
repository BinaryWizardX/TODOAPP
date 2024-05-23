"use client";
import { useContext,useState, useEffect } from "react";
import { createContext } from "react";
import themes from './theme.js'
import axios from "axios";
import { useUser } from "@clerk/nextjs";






const GlobalContext = createContext()
const updateGlobalContext = createContext()








export function GlobalProvider({children}) {

    const {user} = useUser()

    const [tasks, setTasks] = useState([])

    const [collapse, setCollapse] = useState(true)

    let GetImportantTask = []
    let GetCompletedTask = [] 
    let GetIncompletedTask = []

    
    
    const [selectedTheme, setSelectedTheme] = useState(0)

    const [isLoading, setIsLoading] = useState(true)

    const theme = themes[selectedTheme]


    const SortTasks = (Tasks)=>{

        return Tasks.sort((a,b)=> new Date(a.date) - new Date(b.date))
    }



    const getAllTasks = async () => {
        try{
            
            const allTasks = await axios.get('Api/tasks')
            console.log(allTasks.data.tasks)
            setTasks(SortTasks(allTasks.data.tasks))
            setIsLoading(false)
            

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
            
            return response

        }
        catch(error){
            console.log(error)
        }
    }

    if(!isLoading){
        GetImportantTask =  tasks.filter((task) => task.isImportant === true) ;
        GetCompletedTask = tasks.filter((task) => task.isCompleted === true) ;
        GetIncompletedTask = tasks.filter((task)=>task.isCompleted === false);

        
    }

    const statusHandler = async (status, taskId)=>{
        try{

            const response = await axios.put(`Api/tasks/task/${taskId}`, {status: status})
            getAllTasks()

        }
        catch(error){
            console.log(error)
        }
    }




    useEffect(() => {
        if (user) getAllTasks();
    }, [user])



    return (
        <GlobalContext.Provider value={{
            theme,
            tasks,
            getAllTasks,
            DeleteTask,
            GetASingleTask,
            isLoading,
            GetImportantTask,
            GetCompletedTask,
            GetIncompletedTask,
            statusHandler,
            collapse,
            setCollapse,
            
        }}>
            <updateGlobalContext.Provider value={{}}>
                {children}
            </updateGlobalContext.Provider>
        </GlobalContext.Provider>
    )

}

export const useGlobalContext = () =>  useContext(GlobalContext)
export const useUpdateGlobalContext = () => useContext(updateGlobalContext)
