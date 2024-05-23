'use client'

import React from 'react'
import styled from "styled-components";

interface Props {
    children: React.ReactNode
}

const StyledSideBar = styled.div`
    padding : 2.5rem;
    display: flex;
    gap: 2.5rem;
    height: 100%;
    transition : all 0.3s cubic-bezier(.17,.67,.83,.67);

    @media (max-width: 680px) {

      padding : 1rem;
      gap: 1rem;
      
    }

    
    


    
    `;


function SideBarStyleProvider({children} : Props) {
  return (

    <StyledSideBar>
      {children}
    </StyledSideBar>
    
  )
}



export default SideBarStyleProvider