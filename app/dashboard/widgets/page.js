import TextInput from "@/components/textInput";
import React from "react";
import Login from "@/components/form/login";
import { Loading } from "@/components/loading";

const Widgets = () =>{
    return(
        <div className="flex gap-2 md:gap-4 p-2 mt-5 flex-wrap bg-inherit min-h-screen">
           
           <div className="  md:gap-4 w-[100%]  flex flex-col md:flex-row gap-[10%] "> 
              <div className="shadow-lg p-2 border-2 w-[100%] md:w-[45%]  h-fit">
                <Login />
               </div>
                
               <div className=" shadow-lg p-6 border-2 w-[100%] md:w-[45%] min-w-fit h-fit">
                 <Loading/>
               </div>
          
            </div>
           
          
        </div>
    )
}

export default Widgets;