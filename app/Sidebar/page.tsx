"use client"
import React, { useState } from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { menu } from '@/app/Utils/Icons'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Button from '../Button/Button'
import { SignOutButton } from '../Components/SignOutButton'
import { FaSignOutAlt } from "react-icons/fa";
import { useUser } from "@clerk/clerk-react";
import { UserButton } from '@clerk/nextjs'
import { FaHamburger } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";



import { useGlobalContext,useUpdateGlobalContext } from '../Context/GlobalProvider'
import { Props } from 'next/script'



function Sidebar() {

  const router = useRouter()

  const {user} = useUser()
  
  
  
  const {theme, setCollapse, collapse} = useGlobalContext()



  const handleClick = (path:string) => {
    router.push(path)
    setCollapse(true)
    
  }

  

  
  

  //console.log(theme.sidebarWidth)

  const [selectedLi , setSelectedLi] = useState(0);

  const currentpath = usePathname()

  const userButtonAppearance = {
    elements : {
      userButtonAvatarBox: "w-16 h-16",
    }
  }

  
  

  return (
    <StyledSideBar theme={theme} collapse={collapse}>

        <div className='hamburger-menu hidden text-white text-2xl' onClick={()=> setCollapse(!collapse)}>

          {collapse ? 

              <FaHamburger  />

          :

              <FaArrowLeft />
          
          }
          
        </div>



      <div className='profile p-6 relative'>
        <div className="profile-overlay ">
          
        </div>
         <div className='flex items-center justify-center gap-3 hover:bg-black bg-[#1E1E1E] p-7 cursor-default rounded-lg'>
            <div className=''>

              <UserButton

                appearance={userButtonAppearance}
              
              />

            </div>
              
            
            <div className='flex flex-col'>

              <span>{user?.firstName}</span>
              <span>{user?.lastName}</span>

            </div>
            
         </div>
      </div>
      <ul className='mt-[45px]'>
        {menu.map((item,index)=>{
          return(
            <li key={index} className={`flex items-center justify-start gap-5 pl-10 py-2 nav-list-item ${currentpath === item.path ? 'active' : ''}`}
            onClick={()=>{handleClick(item.path)}}>
              <button className='flex items-center gap-4 '>

                <item.icon/>
                <Link href={item.path}>{item.name}</Link>
                  

              </button>
              
            </li>
          )
        }
        )}
      </ul>
      <div className='w-full absolute bottom-7 justify-center items-center font-bold cursor-pointer flex hover:scale-110 hover:text-red-500 transition ease-in-out delay-150 text-xl gap-1'>
        <FaSignOutAlt />
        <SignOutButton />
      </div>

    </StyledSideBar>
  )
}

const StyledSideBar = styled.nav<{theme : any, collapse : boolean}>`
  position: relative;
  width: ${(props)=>props.theme.sidebarWidth};
  background-color: #1A1A1A;
  border: 2px solid ${(props)=>props.theme.borderColor2};
  border-radius: 1rem;
  color: ${(props)=>props.theme.harshtext};
  height: 100%;
  transition: all 0.5s ease-in-out;

  @media (max-width: 600px) {
        
    position : fixed;
    top : 0;
    left : 0;
    z-index: 1000;
    transform : ${(props)=> props.collapse ? 'translateX(-240px)' : 'translateX(0px)'};

    .hamburger-menu{
      display:block;
      position: absolute;
      right: -48px;
      top : 16px;
      background-color : #1A1A1A;
      padding: 12px;
      border-top-right-radius: 12px;
      border-bottom-right-radius: 12px;
      cursor: pointer;
    }
    
  }
  

  .my-image{

    transition: all 0.2s ease-in-out;

  }
  .my-image:hover{
    transform: scale(1.1);
  }
  .nav-list-item{
    color: ${(props)=>props.theme.colorGrey3};
  }
  .nav-list-item{
    background: linear-gradient(to right, rgba(209, 213, 219, 0.05)  50%, transparent 50%);
    background-size: 200% 100%;
    background-position: right bottom;
    transition: all 0.5s ease-out;
    
  }
  .nav-list-item:hover{
    background-position: left bottom;
    
  }
  .active{
    position:relative;
    background-color: rgba(209, 213, 219, 0.15);
    border-right: ${(props)=>props.theme.colorGreenDark} 5px solid ;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    color:white;

    

    
    
  }
  
`

export default Sidebar