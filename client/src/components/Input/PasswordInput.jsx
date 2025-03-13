import React, { useState } from 'react'
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";


const PasswordInput = ({value, OnChange, placeholder}) => {

    const [isShowPassword, setIsShowPassword] = useState(false)

    const toogleShowPassword = () => {
        setIsShowPassword(!isShowPassword);   
    }


  return (
    <div className='flex items-center bg-transparent border-[1.5px] px-5 rounded mb-3'>
        
        <input
        value={value}
        onChange={OnChange}
        type={isShowPassword? "text" : "Password"}
        placeholder={placeholder || "Password"}
        className='w-full text-sm bg-transparent py-3 mr-3 rounded outline-none'
        />

        {isShowPassword ? 
            <FaRegEye size={22} className="text-blue-600 cursor-pointer text-2xl" onClick={toogleShowPassword} /> : 
            <FaRegEyeSlash size={22} className="text-gray-400 cursor-pointer text-2xl" onClick={toogleShowPassword} /> 
        }

    </div>
  )
}

export default PasswordInput