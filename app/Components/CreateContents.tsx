"use client"

import axios from 'axios'
import React,{useState,useEffect} from 'react'
import toast, {Toaster} from 'react-hot-toast'
import styled from 'styled-components'
import { IoCloseCircleSharp } from "react-icons/io5";
import { useGlobalContext } from '../Context/GlobalProvider'

interface Props {
    isModalOpen: boolean;
    onClose : () => void;
    modalType : string;
    taskID : string;
}

function CreateContents({isModalOpen, onClose , modalType, taskID}: Props) {

    const {theme,GetASingleTask} = useGlobalContext()

    


    if(isModalOpen !== true){
        return null
    }

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [date, setDate] = useState("")
    const [completed, setCompleted] = useState(false)
    const [important, setImportant] = useState(false)

    const handleChange = (value : string)=>(e:any)=>{

       switch(value){
              case 'title':
                setTitle(e.target.value)
                break;
                case 'description':
                 setDescription(e.target.value)
                 break;
                case 'date':
                 setDate(e.target.value)
                 break;
                case 'completed':
                 setCompleted(e.target.checked)
                 break;
                case 'important':
                 setImportant(e.target.checked)
                 break;
                default:
                 break;
         }

        

    }

    const handleSubmit = async(e : React.FormEvent) =>{
        e.preventDefault()



        try{

            const response  = await axios.post('/Api/tasks',{
                title,
                description,
                date,
                completed,
                important

            })
            if(response.data.error){
                toast.error(response.data.error)
            }
            
            toast.success("Task Created Successfully ")
            
            setTitle("")
            setDescription("")
            setDate("")
            setCompleted(false)
            setImportant(false)
            onClose()

        }catch(e){
            console.log(e)
        }

        
    }

    const handleEdit = async(e : React.FormEvent) => {
        e.preventDefault()
        try{

            const response = await axios.put(`/Api/tasks/${taskID}`,{
                title,
                description,
                date,
                isCompleted:completed,
                isImportant:important
            })

            if(response){
                toast.success("Task Updated Successfully")
                onClose()
            }

            if(response.data.error){
                toast.error(response.data.error)
            }

            

        }
        catch(e){
            console.log(e)
        }
    }

    const SingleInstanceData = async()=>{
        if(modalType === 'Edit'){

            const response = await GetASingleTask(taskID)

            console.log(response.data.title)
             setTitle(response.data.title)
             setDescription(response.data.description)
             setDate(response.data.date)
             setCompleted(response.data.isCompleted)
             setImportant(response.data.isImportant)
        }
    }


    useEffect(()=>{
        SingleInstanceData()
    
    },[modalType])


    


  return (

    <StyledCreateContents>

        <div className='p-6 bg-white w-[450px] h-[460px] relative rounded-xl'>

            

        
        <h1 className='text-black font-bold text-2xl mb-8'>{modalType ==='New' ? "New Task" : "Edit Task"}</h1>

        <form onSubmit={modalType === 'New' ? handleSubmit : handleEdit} className='text-black '>
            <div className='w-full flex justify-between  items-center'>
                <label htmlFor='title'>Title : </label>
                <input
                className='border-2 border-gray-500 w-64 p-1 text-sm'
                type='text'
                id='title'
                name='title'
                value={title}
                onChange={handleChange('title')}
                placeholder='Enter Title Here...'
                
                />

            </div>

            <div className='w-full flex justify-between items-center mt-5'>

             <label htmlFor="description">Descriptioin : </label>
             <textarea 
                id='description'
                name='description'
                value={description}
                onChange={handleChange('description')}
                rows={4}
                placeholder='Enter Description Here...'
                className='border-2 border-gray-500 w-64 p-1 text-sm'
                
             
             />

            </div>

            <div className='w-full flex justify-between mt-5'>
                <label htmlFor="date">Date : </label>
                <input 
                    type='date'
                    id='date'
                    name='date'
                    value={date}
                    onChange={handleChange('date')}
                    className='border-2 border-gray-500 w-64 p-1 text-sm '
                    
                />
            </div>

            <div className='w-full flex  items-center mt-5'>
                <label htmlFor="completed">Completed : </label>

                <input
                type='checkbox'
                id='completed'
                name='completed'
                checked={completed}
                onChange={handleChange('completed')}
                className='ml-14'


                
                />

            </div>

            <div className='w-full flex  items-center mt-5 '>
                <label htmlFor="important">Important : </label>

                <input
                type='checkbox'
                id='important'
                name='important'
                checked={important}
                onChange={handleChange('important')}
                className='ml-16'

                />
            </div>
            <div className='w-full flex justify-end'>

                <button onClick={onClose} className='mt-5 border-2 border-[#D3D3D3]  py-1 px-3  mr-5'>Cancel</button>

                <button className='mt-5   bg-[#27AE60] py-1 px-3 text-white' type='submit'>{modalType === "New" ? "Create Task" : "Edit Task"}</button>

            </div>
            

            
            
            
        </form>
        <Toaster/>
        </div>

    </StyledCreateContents>
    
  
    
  )
}

const StyledCreateContents = styled.div`

position: fixed;
left: 0;
top: 0;
right: 0;
bottom: 0;
background-color: rgba(0, 0, 0, 0.7);
display: flex;
align-items: center;
justify-content: center;
z-index: 1000;

textarea,input{
    vertical-align: top;
}

input[type=checkbox] {
    transform: scale(1.5);
}






`

export default CreateContents