import React from 'react'
import CreateContents from '../Components/CreateContents'
import styled from 'styled-components'
import TaskItem from '../TaskItem/TaskItem'
import { auth } from '@clerk/nextjs/server';
import { useGlobalContext } from '../Context/GlobalProvider';
import CreateTask from '../CreateTask/CreateTask';





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
    title: string
    tasksarr: Task[]
}

function Tasks({title, tasksarr}: Props) {

 
  const {theme} = useGlobalContext()
 
  return (
    

    <StyledTasks theme={theme}>
      <h1 className='capitalize text-2xl p-2 title-h1 relative mb-5'>{title}</h1>
      
      <div className='identify gap-10 grid  lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 justify-center lg:justify-center'>

        {tasksarr !== undefined && tasksarr.map((task) => {
          
          return(
            <TaskItem key={task.userId} task={task} />
          )
        })}
        <CreateTask />

      </div>
      
    </StyledTasks>
    
  )
}

const StyledTasks = styled.main`

  padding: 1rem;
  height: 100%;
  overflow-y: auto;

  .title-h1::after {
    content: '';
    position: absolute;
    margin: auto;
    right: 5;
    bottom: 0;
    left: 0;
    width: 120px;
    height: 5px;
    background-color: ${(props)=>props.theme.colorGreenDark};

    
    `

export default Tasks