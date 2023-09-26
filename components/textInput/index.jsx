const TextInput = ({label = "", required = false})=>{
    return (
            <div class="mb-5 drop-shadow-sm">
            <label htmlFor={label} class="block mb-2 text-sm font-medium text-gray-900 capitalize">{label}</label>
            <input type={label} id={label} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
            focus:border-blue-500 block w-full p-2.5 dark:!bg-dark_color 
                " placeholder={label} required={required} />
            </div>
    )
}

export default TextInput