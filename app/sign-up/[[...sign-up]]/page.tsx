import { SignUp } from "@clerk/nextjs";

import { Jersey_25 } from "next/font/google";

const jersey = Jersey_25({ weight: "400", subsets: ["latin"] });

export default function Page() {
  return(

    
    
    <div className="flex flex-col items-center p-1 gap-1 custom-gradient rounded-lg">

         
        <div className="flex flex-col gap-1 items-center justify-center">

          
          

        </div>
   

            <SignUp path="/sign-up"  />

    </div>
  
   
  ); 

}