"use client"
import React from 'react'
import { useGlobalContext } from '../Context/GlobalProvider'
import TaskItem from '../TaskItem/TaskItem';
import styled from 'styled-components';


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

function page() {

  const {GetIncompletedTask, isLoading, theme} = useGlobalContext();


  return (
    <StyledDoitnow theme={theme}>

      <h1 className='capitalize text-2xl p-2 title-h1 relative mb-5 z-10 ml-5'>Do It Now</h1>

      <div className='identify gap-10 grid  lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 justify-center lg:justify-center'>

        {!isLoading ?   

          <>
            {GetIncompletedTask !== undefined && GetIncompletedTask.map((task:Task)=>{
              return(
                <TaskItem key={task.userId} task={task} />
              )
            })}
          
          </>

          :

          <div className='loader-cover'>
            <div className='loader'></div>
          </div>
        
      
      }

      </div>

    </StyledDoitnow>
    
  )
}

const StyledDoitnow = styled.main`

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
  margin-left: 10px;

}

.loader-cover {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

  
  `

export default page