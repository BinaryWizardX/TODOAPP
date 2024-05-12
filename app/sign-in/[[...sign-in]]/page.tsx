import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

import { Josefin_Sans } from "next/font/google";
import { Permanent_Marker } from "next/font/google";
import { Jersey_25 } from "next/font/google";
import { Sedan } from "next/font/google";

const marker = Permanent_Marker({ weight: "400", subsets: ["latin"] });

const jersey = Jersey_25({ weight: "400", subsets: ["latin"] });
const sedan = Sedan({ weight: "400", subsets: ["latin"] });



export default function Page() {
  return (

   

      <div className="flex flex-col items-center p-5 gap-7 custom-gradient rounded-lg">

         
        <div className="flex flex-col gap-3 items-center justify-center">

          <h1 className={`text-6xl italic text-slate-200 ${sedan.className}`} >TODOAPP</h1>
          <h3 className="text-xl">Good to see you again !</h3>

        </div>
       

        <SignIn path="/sign-in"  />

      </div>

      

    
    

  
  

);
}