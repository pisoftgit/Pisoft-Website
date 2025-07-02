import React from 'react'
import Masonry from '../Masonary';
import BlurText from '../BlurText';
import TrueFocus from '../FocusText';

function Tech() {

    const data = [
  { id: 1, image: 'frontend2.png', height: 700 },
  { id: 2, image: 'backend.png', height:700 },
  { id: 3, image: 'dev.png', height: 700 },
  { id: 4, image: 'ui.png', height: 700 },
  { id: 5, image: 'Aii.png', height: 350 },
  { id: 6, image: 'data.png', height: 350 },
  { id: 7, image: 'MD.png', height: 350 },
  { id: 8, image: 'DM.png', height: 350 },
//   { id: 9, image: '', height: 800 },
//   { id: 10, image: '', height: 400 }
];
  return (
    <div className=" bg-white h-screen w-full">


<div className=' bg-white mb-10'>
    <div className=' justify-center font-jr text-gray-500 text-center text-[20px]'>Tech And Tools We Use</div>
    <div className=' justify-center font-jSB text-gray-900 text-center text-[50px]'>Robust Technologies Behind</div>
      <div className=' justify-center font-jSB text-gray-900 text-center text-[50px]'>Every Product We Design and Deliver</div>
    

        <div className=' justify-center font-jl text-gray-900 text-center text-[20px]'>We Use Top Technologies to Build Your Dream Products</div>
  
</div>
       


<Masonry data={data} />
    </div>
  )
}

export default Tech