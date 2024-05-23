import { SignUp } from "@clerk/nextjs";





export default function Page() {
  return(

    
    
    <div className="flex flex-col items-center p-1 gap-1 custom-gradient rounded-lg">

         
        <div className="flex flex-col gap-1 items-center justify-center">

          
          

        </div>
   

            <SignUp path="/sign-up"  />

    </div>
  
   
  ); 

}