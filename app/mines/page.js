'use client'
import React, { useState } from 'react'

const images = [
    'https://stake.com/_app/immutable/assets/mine.BrdEJX0T.svg', // Replace with actual bomb image URL
    'https://stake.com/_app/immutable/assets/gem-none.Bcv6X_BH.svg'  // Replace with actual mine image URL
  ];

const page = () => {
    const [gameOver, setGameOver] = useState(false);
    const [grid, setGrid] = useState(
      Array.from({ length: 25 }, () => ({ image: images[Math.floor(Math.random() * images.length)], revealed: false }))
    );
  
    const handleClick = (index) => {
      if (gameOver || grid[index].revealed) return;
      
      const newGrid = [...grid];
      newGrid[index].revealed = true;
      setGrid(newGrid);
      
      if (newGrid[index].image === 'https://stake.com/_app/immutable/assets/mine.BrdEJX0T.svg') {
        setGameOver(true);
        setGrid(newGrid.map(cell => ({ ...cell, revealed: true })));
      }
    };

  return (
    <div className='bg-[#2f4553] w-[82vw] h-[92vh] ml-2 flex p-5 overflow-y-scroll custom-scrollbar'>
        <div className='bg-[#071824] w-[94%] min-h-full flex pb-3'>
            <div className='bg-[#213743] w-1/4 flex flex-col gap-4 p-3'>
            <div className='rounded-xl h-8 w-[95%] bg-[#071824] flex justify-around'>
<button className='hover:bg-[#2f4553] active:bg-[#2f4553] w-[8vw] rounded-xl text-sm'>Manual</button>
<button className='hover:bg-[#2f4553] active:bg-[#2f4553] w-[6vw] rounded-xl text-sm'>Auto</button>
            </div>
            <div className='flex flex-col gap-2 bg-[#213743]'>
                <h3 className='text-gray-400 bg-[#213743] text-sm'>Bet Amount</h3>
                <input type="number" name="" id="" className=''/>
            </div>
            <div className='flex flex-col gap-2 bg-[#213743]'>
                <h3 className='text-gray-400 bg-[#213743] text-sm'>Mines</h3>
                <input type="number" />
            </div>
            <button className='w-full h-8 bg-green-500 text-black font-semibold text-sm'>Bet</button>
            </div>
            <div className='bg-[#071824] w-3/4 flex justify-center'>
            <div className='h-full w-[40vw] grid grid-cols-5 gap-2 pt-3'>
            {grid.map((cell, index) => (
              <div
                key={index}
                className='bg-[#213743] cursor-pointer hover:-translate-y-1 hover:bg-[#557086] flex items-center justify-center'
                onClick={() => handleClick(index)}
              >
                {cell.revealed && <img src={cell.image} alt='icon' className='w-14 h-14' />}
              </div>
            ))}
            </div>
            </div>
        </div>
    </div>
  )
}

export default page