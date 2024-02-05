import TextInput from "@/components/textInput";
import React from "react";
import Login from "@/components/form/login";
import { Loading } from "@/components/loading";
import LogTimeLine from "@/components/timeline/log";
import { time_line } from "@/mockdata";

const Widgets = () =>{
    return(
        <div className="flex gap-4 md:gap-8 p-2 mt-5 flex-wrap justify-center bg-inherit min-h-screen">
          
           <div className="p-4 shadow-lg mb-5  w-[100%] md:w-[80%]">
           
             <LogTimeLine  data={time_line}/>
           </div>
            <div className="shadow-lg p-2 border-2 mb-5 w-[100%] md:w-[80%]  h-fit">
                <Login />
            </div>
            
            
               <div className=" shadow-lg p-6 mb-5 border-2 w-[100%] md:w-[80%] min-w-fit h-fit bg-white">
                 <Loading/>
               </div> 
          
        </div>
    )
}

export default Widgets;