export const Loading = ()=>{
    return (
        <div  className=" animate-pulse">
            <table className="w-100%">
                <tr className="flex gap-3">
                    <th className="p-3">
                       <div className="h-2.5 p bg-gray-300 rounded-full dark:bg-gray-700 w-[3rem] mb-4"></div>
                    </th>
                    <th className="p-3">
                       <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-[4rem] mb-4"></div>
                    </th>
                    <th className="p-3">
                       <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-[2rem] mb-4"></div>
                    </th>
                    <th className="p-3">
                       <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-[5rem] mb-4"></div>
                    </th>
                </tr>
          
            </table>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
            <div className="h-2 bg-gray-300 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
            <div className="h-2 bg-gray-300 rounded-full dark:bg-gray-700 mb-2.5"></div>
            <div className="h-2 bg-gray-300 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
            <div className="h-2 bg-gray-300 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
            <div className="h-2 bg-gray-300 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
            <br/>
            <div className="h-2 bg-gray-300 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
            <div className="h-2 bg-gray-300 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
            <div className="h-2 bg-gray-300 rounded-full dark:bg-gray-700 mb-2.5"></div>
            <div className="h-2 bg-gray-300 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
           
            <div className="h-2 bg-gray-300 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
             {/* <span className="sr-only">Loading...</span> */}
        </div>
    )
}