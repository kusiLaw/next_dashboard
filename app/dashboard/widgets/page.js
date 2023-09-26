import TextInput from "@/components/textInput";
import React from "react";
import Login from "@/components/form/login";

const Widgets = () =>{
    return(
        <div className="flex gap-4 p-2 flex-wrap bg-inherit min-h-screen">
            {/* <div className="drop-shadow-lg "><TextInput /></div> */}
            <div className=" shadow-sm border-2 w-[15rem] md:w-[45%]  h-fit "> 
            <Login /></div>

          
        </div>
    )
}

export default Widgets;