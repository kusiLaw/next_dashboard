const TextInput = ({label = "", required = false})=>{
    return (
            <div class="mb-5">
            <label htmlFor="email" class="block mb-2 text-sm font-medium text-gray-900">{label}</label>
            <input type="email" id={label} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
            focus:border-blue-500 block w-full p-2.5 dark:bg-dark_color 
                " placeholder="input here" required={required} />
            </div>
    )
}

export default TextInput