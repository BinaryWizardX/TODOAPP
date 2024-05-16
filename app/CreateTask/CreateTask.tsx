import React from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../Context/GlobalProvider'
import { FaPlus } from "react-icons/fa";

function CreateTask() {

    const {theme} = useGlobalContext()


  return (
    <StyledCreateTask theme={theme}>

        <div className=' flex items-center justify-center gap-2'>
            <FaPlus />
            <h1>Create New Task</h1>
        </div>

    </StyledCreateTask>
    
  )
}

const StyledCreateTask = styled.div`

    width:256px;
    height: 240px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    color: ${(props) => props.theme.colorGrey2};
    font-weight: 600;
    cursor: pointer;
    border-radius: 1rem;
    border: 3px dashed ${(props) => props.theme.colorGrey5};
    transition: all 0.3s ease;



    
    `   

export default CreateTask