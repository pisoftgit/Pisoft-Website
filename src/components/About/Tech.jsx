import React from 'react';
import Masonry from '../Masonary';

function Tech() {
  const data = [
    { id: 1, image: 'frontend2.png', height: 700 },
    { id: 2, image: 'backend.png', height: 700 },
    { id: 3, image: 'dev.png', height: 700 },
    { id: 4, image: 'ui.png', height: 700 },
    { id: 5, image: '1000057384.png', height: 650 },
    { id: 6, image: '1000057380.png', height: 650 },
    { id: 7, image: '1000057383.png', height: 650 },
    { id: 8, image: '1000057375.png', height: 650 },
  ];

  return (
    <div className="w-full bg-transparent flex flex-col items-center justify-center px-4 py-12">
      {/* Text Section */}
      <div className="text-center space-y-4 mb-10 max-w-4xl">
        <div className="font-jr text-gray-500 text-[18px] sm:text-[20px] leading-tight">
          Tech And Tools We Use
        </div>
        <div className="font-jSB text-gray-900 text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
          Robust Technologies Behind
        </div>
        <div className="font-jSB text-gray-900 text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
          Every Product We Design and Deliver
        </div>
        <div className="font-jl text-gray-900 text-[18px] sm:text-[20px] leading-tight">
          We Use Top Technologies to Build Your Dream Products
        </div>
      </div>

      {/* Masonry Grid */}
      <div className="w-full max-w-[1600px]">
        <Masonry data={data} />
      </div>
    </div>
  );
}

export default Tech;
