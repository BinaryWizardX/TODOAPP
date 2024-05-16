import React from 'react'
import { useGlobalContext } from '../Context/GlobalProvider';
import styled from 'styled-components'
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

interface Task {
  id: string;
  title: string;
  description: string;
  date: string;
  isCompleted: boolean;
  isImportant: boolean;
  createdAt: string;
  updatedAt: string;
  userId: string;

}


interface Props {
    
    task : Task
}

function TaskItem({ task} : Props) {

  const {theme} = useGlobalContext()
   
    
  return (
    <StyledTaskItem theme={theme} className='rounded-xl p-3 w-64 h-60 '>
      <div className='flex flex-col  '>
        <div className='upper-part h-36'>
          <h1 className='font-bold'>{task.title}</h1>
          <p className='mt-2'>{task.description}</p>
        </div>
        <div className='lower-part flex flex-col gap-2'>

            <p>{task.date}</p>
          <div className='flex items-center justify-between'>
            <button className={`${task.isCompleted ? 'completed' : 'incompleted'} py-1 px-2 rounded-3xl }`}>{task.isCompleted ? 'Completed' : 'Incomplete'}</button>

            <div className='w-3/12 flex justify-between'>
              <FaEdit className='cursor-pointer' />
              <FaTrash className='cursor-pointer' />
            </div>
          </div>
        </div>
        

      </div>
    </StyledTaskItem>
  )
}

const StyledTaskItem = styled.div`

  background-color : ${(props) => props.theme.borderColor2};

  .completed{
    background-color : ${(props)=> props.theme.colorGreenDark}
    
    
  }
  .completed:hover{
    background-color:#1B7F4E;
  }
  .incompleted{
    background-color : ${(props)=> props.theme.colorDanger}
    
  }
  .incompleted:hover{
    background-color:#C84C3A;
  }

  }
  
  `

export default TaskItem