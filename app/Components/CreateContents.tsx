"use client"

import axios from 'axios'
import React,{useState} from 'react'
import toast, {Toaster} from 'react-hot-toast'

function CreateContents() {

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
            console.log(response)
            toast.success("Task Created Successfully")
            setTitle("")
            setDescription("")
            setDate("")
            setCompleted(false)
            setImportant(false)


        }catch(e){
            console.log(e)
        }

        
    }



    


  return (

    <>
        <h1>Create a Task</h1>

        <form onSubmit={handleSubmit} className='text-black'>
            <div>
                <label htmlFor='title'>Title : </label>
                <input

                type='text'
                id='title'
                name='title'
                value={title}
                onChange={handleChange('title')}
                
                />

            </div>

            <div>

             <label htmlFor="description">Descriptioin : </label>
             <textarea 
                id='description'
                name='description'
                value={description}
                onChange={handleChange('description')}
                rows={4}
                placeholder='Enter Description Here...'
                
             
             />

            </div>

            <div>
                <label htmlFor="date"></label>
                <input 
                    type='date'
                    id='date'
                    name='date'
                    value={date}
                    onChange={handleChange('date')}
                />
            </div>

            <div>
                <label htmlFor="completed">Completed : </label>

                <input
                type='checkbox'
                id='completed'
                name='completed'
                checked={completed}
                onChange={handleChange('completed')}


                
                />

            </div>

            <div>
                <label htmlFor="important">Important : </label>

                <input
                type='checkbox'
                id='important'
                name='important'
                checked={important}
                onChange={handleChange('important')}

                />
            </div>

            <button type='submit'>Create Task</button>

            
            
            
        </form>
        <Toaster/>
    
    </>
    
  )
}

export default CreateContents