import React from 'react'
import { getInitials } from '../utils/helper'

const ProfileInfo = ({OnLogout}) => {
  return (
    <div className='flex items-center gap-3'>
        <div className='w-12 h-12 flex items-center justify-center rounded-full bg-slate-100 text-slate-850 font-medium'>
            {getInitials("Aditya Ozalwar")}
        </div>

        <div>
            <p className='text-sm font-medium'>Aditya</p>
            <button className='text-sm text-red-500 hover:cursor-pointer font-medium underline' onClick={OnLogout}>
                logout
            </button>
        </div>
    </div>
  )
}

export default ProfileInfo