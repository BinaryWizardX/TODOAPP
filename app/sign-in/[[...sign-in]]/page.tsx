import { SignIn } from "@clerk/nextjs";
import { Sedan } from "next/font/google";
import Image from 'next/image'
import Link from 'next/link'


const sedan = Sedan({ weight: "400", subsets: ["latin"] });



export default function Page() {

  



  return (

   

    <div className="flex  items-center justify-center p-1 gap-1  absolute top-0 left-0 h-full w-full rounded-lg sign-in-cover">

         
        
   

          <SignIn path="/sign-in"    />

      <div className="flex flex-col gap-1  bg-red-600  sign-in-div hidden">
        <div className="opacity-25 fixed top-[100px]  right-0  -z-20">

            <Image

            src='/signin.svg'
            width={350}
            height={350}
            alt='signup'
            />
          </div>

          <div className="mx-auto z-20 flex flex-col gap-5 items-center mt-32">

            <h1 className="text-4xl text-white font-bold text-center">Welcom Back!</h1>
            <p className="w-[240px] text-center">Please sign-in with your personal info to embrk the journey!</p>
            <Link href="/sign-up"><button className="bg-white text-black p-2 rounded-lg w-[150px]">Sign up</button></Link>
            
            

          </div>
        

        
        

      </div>

      </div>

            

          
    

  
  

);
}