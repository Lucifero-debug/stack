'use client'
import React, { useState } from 'react'

const images = {
    bomb:'https://stake.com/_app/immutable/assets/mine.BrdEJX0T.svg', // Replace with actual bomb image URL
    gem:'https://stake.com/_app/immutable/assets/gem-none.Bcv6X_BH.svg'  // Replace with actual mine image URL
};

const page = () => {
    const [gameOver, setGameOver] = useState(false);
    const [amount,setAmount]=useState(0)
    const [profit,setProfit]=useState('0.0000000')
    const [mine,setMine]=useState(0)
    const [grid, setGrid] = useState(Array(25).fill({ image: images.gem, revealed: false }));
    const [gameStarted, setGameStarted] = useState(false);
    const [countReveal,setCountReveal]=useState(0)
    const [mul,setMul]=useState('')

    const initializeGrid = () => {
        const tempGrid = Array(25).fill({ image: images.gem, revealed: false });
        let mineCount = 0;
        while (mineCount < mine) {
          const randIndex = Math.floor(Math.random() * 25);
          if (tempGrid[randIndex].image !== images.bomb) {
            tempGrid[randIndex] = { image: images.bomb, revealed: false };
            mineCount++;
          }
        }
        setGrid(tempGrid);
        setGameOver(false);
        setGameStarted(true);
      };
  
      const handleClick = (index) => {
        if (!gameStarted || gameOver || grid[index].revealed) return;
        
        const newGrid = [...grid];
        newGrid[index] = { ...newGrid[index], revealed: true };
        setCountReveal((prevCount) => {
            const newCount = prevCount + 1;
            
            // Correct multiplier formula
            const newMul = ((25 - mine) / (25 - mine - newCount)).toFixed(2);
            setMul(newMul);
            const newAmount = Number(amount) + Number(amount) * Number(newMul);
            setProfit(newAmount.toFixed(7)); 
            return newCount;
        });
        setGrid(newGrid);
        
        if (newGrid[index].image === images.bomb) {
          setGameOver(true);
          setGrid(newGrid.map(cell => ({ ...cell, revealed: true })));
          setMul('0')
          setCountReveal(0)
          setProfit('0')
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
                <input type="number" name="" id="" className='' onChange={(e)=>setAmount(e.target.value)}/>
            </div>
            <div className='flex flex-col gap-2 bg-[#213743]'>
                <h3 className='text-gray-400 bg-[#213743] text-sm'>Mines</h3>
                <input type="number" onChange={(e) => setMine(Math.min(24, Math.max(1, parseInt(e.target.value) || 1)))} />
            </div>

            <div className={`${gameStarted && !gameOver?'flex':'hidden'} flex-col gap-2 bg-[#213743]`}>
                <h3 className='text-gray-400 bg-[#213743] text-sm'>Total Profit {mul}X</h3>
                <input type="text" value={profit}/>
            </div>

            <button className='w-full h-8 bg-green-500 text-black font-semibold text-sm' onClick={initializeGrid}>
                {gameStarted&&!gameOver?'Cashout':'Bet'}
            </button>
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