import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';

const Menu = () => {
  return (
        <div className='flex flex-col h-[100vh] w-1/6 p-3 gap-2 overflow-y-auto custom-scrollbar'>
        <div className='bg-[#213743] flex justify-between items-center h-10'>
            <div className='bg-[#071824] rounded-xl cursor-pointer'>
            <MenuIcon style={{background:'none'}} fontSize='medium'/>
            </div>
            <button className='bg-green-600 text-white rounded-md w-16 h-9'>Casino</button>
            <button className='bg-[#b1bad3] text-white rounded-md w-16 h-9'>Sports</button>
        </div>
        <div className='bg-[#2f4553]#2f4553 text-white font-medium'>
           <div className='bg-[] h-9 p-2'>Favourites</div>
           <div className='bg-[#2f4553] h-9 p-2'>Recent</div>
           <div className='bg-[#2f4553] h-9 p-2'>Challenges</div>
           <div className='bg-[#2f4553] h-9 p-2'>My Bets</div>
        </div>
        <div className='bg-[#2f4553]'>
            <h3 className='text-white bg-[#2f4553] font-bold px-2'>Games</h3>
            <div className='text-white bg-[#2f4553] h-9 p-2 font-medium text-sm'>Original</div>
            <div className='text-white bg-[#2f4553] h-9 p-2 font-medium text-sm'>Exclusive</div>
            <div className='text-white bg-[#2f4553] h-9 p-2 font-medium text-sm'>Slots</div>
            <div className='text-white bg-[#2f4553] h-9 p-2 font-medium text-sm'>Game Show</div>
            <div className='text-white bg-[#2f4553] h-9 p-2 font-medium text-sm'>Live Casino</div>
        </div>
        <div className='bg-[#2f4553]'>
            <h3 className='text-white bg-[#2f4553] font-bold px-2'>Games</h3>
            <div className='text-white bg-[#2f4553] h-9 p-2 font-medium text-sm'>Original</div>
            <div className='text-white bg-[#2f4553] h-9 p-2 font-medium text-sm'>Exclusive</div>
            <div className='text-white bg-[#2f4553] h-9 p-2 font-medium text-sm'>Slots</div>
            <div className='text-white bg-[#2f4553] h-9 p-2 font-medium text-sm'>Game Show</div>
            <div className='text-white bg-[#2f4553] h-9 p-2 font-medium text-sm'>Live Casino</div>
        </div>
        <div className='bg-[#2f4553]'>
            <h3 className='text-white bg-[#2f4553] font-bold px-2'>Games</h3>
            <div className='text-white bg-[#2f4553] h-9 p-2 font-medium text-sm'>Original</div>
            <div className='text-white bg-[#2f4553] h-9 p-2 font-medium text-sm'>Exclusive</div>
            <div className='text-white bg-[#2f4553] h-9 p-2 font-medium text-sm'>Slots</div>
            <div className='text-white bg-[#2f4553] h-9 p-2 font-medium text-sm'>Game Show</div>
            <div className='text-white bg-[#2f4553] h-9 p-2 font-medium text-sm'>Live Casino</div>
        </div>
    </div>
  )
}

export default Menu