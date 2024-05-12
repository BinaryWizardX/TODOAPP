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
    
    `;


function SideBarStyleProvider({children} : Props) {
  return (

    <StyledSideBar>
      {children}
    </StyledSideBar>
    
  )
}



export default SideBarStyleProvider