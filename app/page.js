"use client"

import Image from "next/image";
import Search from "./components/Search";
import { useRouter } from "next/navigation";

export default function Home() {
const router=useRouter()

  return (
    <div className="border-2 border-black h-full w-full px-7 flex flex-col gap-4 bg-[#2f4553] overflow-y-scroll custom-scrollbar">
      <Search/>
      <div className="w-full bg-[#2f4553] flex flex-col gap-4">
    <div className="flex w-[78%] rounded-lg border-2 border-[#2f4553] h-10 p-1 justify-between">
      <button className="bg-[#0f212e] hover:bg-[#2f4553]">Lobby</button>
      <button className="bg-[#0f212e] hover:bg-[#2f4553]">Lobby original</button>
      <button className="bg-[#0f212e] hover:bg-[#2f4553]">Lobby Exclusive</button>
      <button className="bg-[#0f212e] hover:bg-[#2f4553]">Lobby Releases</button>
      <button className="bg-[#0f212e] hover:bg-[#2f4553]">Lobby shows</button>
      <button className="bg-[#0f212e] hover:bg-[#2f4553]">Lobby</button>
      <button className="bg-[#0f212e] hover:bg-[#2f4553]">Lobby</button>
    </div>
    <div className="text-white bg-[#2f4553] h-[40vh] flex flex-col gap-3">
      <h1 className="bg-[#2f4553] text-white">Games Originals</h1>
      <div className="w-full h-[45vh]  flex gap-3">
        <div className="w-1/6  h-[41vh]">
      <Image src="https://mediumrare.imgix.net/30688668d7d2d48d472edd0f1e2bca0758e7ec51cbab8c04d8b7f157848640e0?w=180&amp;h=236&amp;fit=min&amp;auto=format" alt=""width={180} 
  height={236} className="cursor-pointer hover:-translate-y-2"/>
  <p className="text-white text-sm">4789 <span className="text-gray-400">Playing</span> </p>
        </div>
        <div className="w-1/6 mines h-[40vh]">
      <Image src="https://mediumrare.imgix.net/15a51a2ae2895872ae2b600fa6fe8d7f8d32c9814766b66ddea2b288d04ba89c?w=360&h=472&fit=min&auto=format" alt=""width={180} 
  height={236} className="cursor-pointer hover:-translate-y-2" onClick={()=>router.push('/mines')}/>
  <p className="text-white text-sm">4789 <span className="text-gray-400">Playing</span> </p>
        </div>
        <div className="w-1/6  h-[40vh]">
      <Image src="https://mediumrare.imgix.net/5cbb2498c956527e6584c6af216489b85bbb7a909c7d3c4e131a3be9bd1cc6bf?w=360&h=472&fit=min&auto=format" alt=""width={180} 
  height={236} className="cursor-pointer hover:-translate-y-2"/>
  <p className="text-white text-sm">4789 <span className="text-gray-400">Playing</span> </p>
        </div>
        <div className="w-1/6  h-[40vh]">
      <Image src="https://mediumrare.imgix.net/c830595cbd07b2561ac76a365c2f01869dec9a8fe5e7be30634d78c51b2cc91e?w=360&h=472&fit=min&auto=format" alt=""width={180} 
  height={236} className="cursor-pointer hover:-translate-y-2"/>
  <p className="text-white text-sm">4789 <span className="text-gray-400">Playing</span> </p>
        </div>
        <div className="w-1/6  h-[40vh]">
      <Image src="https://mediumrare.imgix.net/11caec5df20098884ae9071848e1951b8b34e5ec84a7241f2e7c5afd4b323dfd?w=360&h=472&fit=min&auto=format" alt=""width={180} 
  height={236} className="cursor-pointer hover:-translate-y-2"/>
  <p className="text-white text-sm">4789 <span className="text-gray-400">Playing</span> </p>
        </div>
        <div className="w-1/6  h-[40vh]">
      <Image src="https://mediumrare.imgix.net/2c3e16f0a3b8cd8d979265e48dd6a169937a4a4d0acb05ad532ca8345a1e6f21?w=360&h=472&fit=min&auto=format" alt=""width={180} 
  height={236} className="cursor-pointer hover:-translate-y-2"/>
  <p className="text-white text-sm">4789 <span className="text-gray-400">Playing</span> </p>
        </div>
      </div>
    </div>
      </div>
    </div>
  );
}
