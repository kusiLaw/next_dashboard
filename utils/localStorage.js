'use client'

export const getDashboardLocalSettings = () => {
 //return default settings if no user data

 return localStorage.getItem("dashboardDefaultSettings") || 
 `{"navMount" : "true",
 "displayToggleBtn" : "false",
 "displayNavControllerButton" : "false",
 "navCollapse" : "false"}`;
}

export const storeUserDefaultSettings = (key,val) => {
   let data = `{"${key}" : "${val}"}`;
   let storage = getDashboardLocalSettings()
   data = JSON.parse(data)
   storage =  JSON.parse(storage)
   const obj =  {...storage, ...data }

   localStorage.setItem('dashboardDefaultSettings', JSON.stringify(obj) );
   return true
}

 

export const getUserDefaultSettings = () => {
 let settings  = getDashboardLocalSettings() 

 settings = JSON.parse(settings, (key, val) =>{ 
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
   
  return settings
}



