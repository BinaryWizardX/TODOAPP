import { SignUp } from "@clerk/nextjs";





export default function Page() {
  return(

    
    
    <div className="flex flex-col items-center justify-center p-1 gap-1 bg-red-200 absolute top-0 left-0 h-full w-full rounded-lg">

         
        <div className="flex flex-col gap-1 items-center justify-center">

          
          

        </div>
   

            <SignUp path="/sign-up"  />

    </div>
  
   
  ); 

}