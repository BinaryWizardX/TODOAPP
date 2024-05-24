import { SignUp } from "@clerk/nextjs";
import Image from 'next/image'
import Link from 'next/link'





export default function Page() {
  return(

    
    
    <div className="flex  items-center justify-center p-1 gap-1  absolute top-0 left-0 h-full w-full rounded-lg sign-up-cover">

         
        
   

            <SignUp path="/sign-up"  />

        <div className="flex flex-col gap-1  bg-red-600  sign-up-div hidden">
          <div className="opacity-50 fixed top-[350px]  -right-0   -z-20">

              <Image

              src='/signup.svg'
              width={350}
              height={350}
              alt='signup'
              />
            </div>

            <div className="mx-auto z-20 flex flex-col gap-5 items-center mt-40">

              <h1 className="text-4xl text-white font-bold text-center">Hello, Friend!</h1>
              <p className="w-[240px] text-center">Enter you Credentials and start the journey !</p>
              <Link href="/sign-in"><button className="bg-white text-black p-2 rounded-lg w-[150px]">Sign In</button></Link>
              
              

            </div>
          

          
          

        </div>

    </div>
  
   
  ); 

}