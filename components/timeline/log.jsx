


const LogTimeLine = ({data}) =>{
    return (
        
<ol className="relative border-s border-gray-500 dark:border-gray-700">                  

    { data.map( (data, index) =>(
        <li key={data.user + index} className="mb-10 ms-6 border-4">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white
            dark:ring-gray-900 dark:bg-blue-900 ">
                <img className="rounded-full shadow-lg" src={data.image} alt={data.user}/>
            </span>
            <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-700 dark:border-gray-600">
                <div className="items-center justify-between mb-3 sm:flex">
                    <time className="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">{data.duration} ago</time>
                    <div className="text-sm font-normal text-gray-500 lex dark:text-gray-300">{data.user} {data.task}
                    <a href="#" className=" text-blue-600 dark:text-white hover:underline">{" "}{data.object}{"'s "}</a>
                    {" "}{data.object_obj}
                    </div>
                </div>
                {data.comments && <div className="p-3 text-xs italic font-normal text-gray-500 border border-gray-200
                rounded-lg bg-gray-50 dark:bg-gray-600 dark:border-gray-500
                dark:text-gray-300">{data.comments}.</div>}
            </div>
        </li>
    ))

    }
</ol>


    )
}

export default LogTimeLine