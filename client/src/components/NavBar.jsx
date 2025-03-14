import React, { useState } from 'react'
import ProfileInfo from './ProfileInfo'
import SearchBar from './SearchBar'
import { useNavigate } from 'react-router-dom';

const NavBar = () => {

  const [searchQuery, setSearchQuery]= useState("");
  const navigate = useNavigate();

  const onLogOut = () => {
    navigate('/login')
  }

  const handleSearch = () => {

  }

  const onClearSearch = () => {
    setSearchQuery("");
  }


  return (
    <div className='bg-white flex items-center justify-between drop-shadow px-6 py-2'>
        <h2 className='text-xl font-medium text-black py-2'>Notes</h2>

        <SearchBar value={searchQuery} OnChange={({target}) => {
          setSearchQuery(target.value);
        }}
        handleSearch={handleSearch}
        onClearSearch={onClearSearch}
        />

        <ProfileInfo OnLogout={onLogOut}/>
    </div>
  )
}

export default NavBar