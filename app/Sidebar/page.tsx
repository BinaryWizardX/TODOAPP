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


import { useGlobalContext,useUpdateGlobalContext } from '../Context/GlobalProvider'



function Sidebar() {

  const router = useRouter()

  const handleClick = (path:string) => {
    router.push(path)
    
  }

  

  const {theme}:any = useGlobalContext()
  

  //console.log(theme.sidebarWidth)

  const [selectedLi , setSelectedLi] = useState(0);

  const currentpath = usePathname()
  

  return (
    <StyledSideBar theme={theme}>
      <div className='profile p-6 '>
        <div className="profile-overlay hover:bg-white"></div>
         <div className='flex items-center justify-center gap-3 hover:bg-black p-7 cursor-default rounded-lg'>
            <Image src="/myimage.jpg" alt='profile-photo' width={50} height={50} className='rounded-full my-image' />
            <div className='flex flex-col'>

              <span>Harshana</span>
              <span>Prabhath</span>

            </div>
            
         </div>
      </div>
      <ul>
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

const StyledSideBar = styled.nav`
  position: relative;
  width: ${(props)=>props.theme.sidebarWidth};
  background-color: ${(props) => props.theme.colorBg2};
  border: 2px solid ${(props)=>props.theme.borderColor2};
  border-radius: 1rem;
  color: ${(props)=>props.theme.harshtext};
  height: 100%;
  

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