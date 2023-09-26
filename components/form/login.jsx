const { default: TextInput } = require("../textInput")

const Login = () =>{
    return (
        

<form className="  border p-4 ">
 <TextInput label="username" required={true} />
 <TextInput label="Password" required={true} />
  <div className="flex items-start mb-5">
    <div className="flex items-center h-5">
      <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded
       bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-white" required />
    </div>
    <label htmlFor="remember"       className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
  </div>
  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>

    )

    
}

export default Login