import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

const Search = () => {
  return (
    <div className='flex w-full rounded-lg border-2 border-[#2f4553]'>
      <div className='flex'>
        <SearchIcon/>
        <input type="text" className='w-full rounded-lg focus:outline-none text-sm' placeholder='Search Your Game'/>
      </div>
    </div>
  )
}

export default Search