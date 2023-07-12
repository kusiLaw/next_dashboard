import { CiSearch } from 'react-icons/ci';

const SearchInput = () => {
  return (
    <div className='flex items-center gap-2 p-1 rounded-2xl shadow-sm
    bg-gray_bg dark:bg-dark_white_bg dark:text-dark_color'>
      <span className='font-bold ml-1'><CiSearch/></span>
      <input type='text' name='search' placeholder='Search' className='border-0 focus:border-0 bg-inherit' />
    </div>
  )
}

export default SearchInput
