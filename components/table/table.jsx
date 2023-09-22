
export const UserTable = ({userdata}) =>{
 const  {table_header, users } = userdata;

  return(
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full">
    
        <table className="w-full text-sm text-left rtl:text-right  dar:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dar:bg-gray-700 dar:text-gray-400">
                <tr>
                    <th scope="col" className="p-4 ">
                        <div className="flex items-center dark:bg-white">
                            <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-light_ash_text bg-gray_bg border-gray-100
                             rounded  focus:ring-2 dark:
                              " />
                            <label for="checkbox-all-search" className="hidden">checkbox</label>
                        </div>
                    </th>
                    { table_header.map( item => (
                      <th scope="col" className="px-6 py-3 text-base">
                          {item}
                      </th>
                    ))
                    }
                </tr>
            </thead>
            <tbody>
               { users.map(user => (
                <tr className="bg-white border-b dar:bg-gray-800 dar:border-gray-700 hover:bg-gray-50 dar:hover:bg-gray-600">
                        <td className="w-4 p-4">
                            <div className="flex items-center">
                            <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-light_ash_text bg-gray_bg border-gray-100
                             rounded  focus:ring-2 dark:bg-inherit
                              " />
                            <label for="checkbox-all-search" className="sr-only">checkbox</label>
                            </div>
                        </td>
                        <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dar:text-white">
                            <img className="w-10 h-10 rounded-full" src={user.image} alt="Jese image" />
                            <div className="ps-3">
                                <div className="text-base font-semibold">{user.name}</div>
                                <div className="font-normal text-gray-500">{user.email}</div>
                            </div>  
                        </th>
                        <td className="px-6 py-4"> {user.role }
                       
                        </td>
                        <td className="px-6 py-4">
                            <div className="flex items-center">
                                <div className={`h-2.5 w-2.5 rounded-full ${user.online ? ` bg-green-500`: `bg-red-500`} me-2`}></div> {user.online ? 'online' : 'offline'}
                            </div>
                        </td>
                        <td className="px-6 py-4">
                            <a href="#" className="font-medium text-blue-600 dar:text-blue-500 hover:underline">Edit user</a>
                        </td> 
                </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}



