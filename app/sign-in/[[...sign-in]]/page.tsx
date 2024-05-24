import { SignIn } from "@clerk/nextjs";
import { Sedan } from "next/font/google";


const sedan = Sedan({ weight: "400", subsets: ["latin"] });



export default function Page() {
  return (

   

      <div className="flex flex-col items-center justify-center p-1 gap-1 custom-gradient absolute top-0 left-0 h-full w-full rounded-lg">

         
        <div className="flex flex-col gap-3 items-center justify-center">

          <h1 className={`text-6xl italic text-slate-200 ${sedan.className}`} >TODOAPP</h1>
          <h3 className="text-xl">Good to see you again !</h3>

        </div>
       

        <SignIn path="/sign-in"  />

      </div>

      

    
    

  
  

);
}