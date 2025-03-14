import { FaMagnifyingGlass } from "react-icons/fa6"
import { IoMdClose } from "react-icons/io"

const SearchBar = ({value, OnChange, handleSearch, onClearSearch}) => {
  return (
    <div className='w-80 bg-slate-100 flex items-center px-4 rounded-md'>
        <input 
        type="text"
        value={value}
        onChange={OnChange}
        className='w-full bg-transparent text-xs py-[11px] outline-none'
        placeholder='Search Notes'
        />

        {value && <IoMdClose className="text-slate-400 hover:text-black cursor-pointer mr-3" onClick={onClearSearch} />}

        <FaMagnifyingGlass className="text-slate-400 hover:text-black cursor-pointer" onClick={handleSearch}/>
    </div>
  )
}

export default SearchBar