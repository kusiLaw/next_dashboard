'use client'
import { useCallback, useEffect , useState } from "react";



export const useDashboardUserDefault = (key, initialValue) => {
 const [initialData, SetInitialData] = useState (initialValue)

  useEffect( () =>{
    let storedValue = localStorage.getItem(key)
    storedValue =   storedValue &&  JSON.parse(storedValue, (key, val) =>{ 
                                              if(val === "true"){
                                               return true
                                              }else if(val === "false")
                                              {
                                               return false 
                                              }
                                              else{
                                               return val
                                              }
                                             })

    SetInitialData(storedValue ? storedValue : initialValue);

  }, [])

  const storeUserDefaultSettings = useCallback( val =>{
    let data = `{"${key}" : "${val}"}`;
    let storage = localStorage.getItem(key) || initialValue
    data = JSON.parse(data)
    storage =  JSON.parse(storage)
    const obj =  {...storage, ...data }

    localStorage.setItem(key, JSON.stringify(obj) );
    setValue(obj);
  }, [key]);


  return [initialData, storeUserDefaultSettings]
}

 




