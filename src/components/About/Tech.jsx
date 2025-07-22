import React from 'react';
import Masonry from '../Masonary';

function Tech() {
  const data = [
    { id: 1, image: '1.png', height: 300 },
    { id: 2, image: '2.png', height: 300 },
    { id: 3, image: '3.png', height: 300 },
    { id: 4, image: '4.png', height: 300 },
    { id: 5, image: '5.png', height: 300 },
    { id: 6, image: '6.png', height: 300 },
    { id: 7, image: '7.png', height: 300 },
    { id: 8, image: '8.png', height: 300 },
    { id: 9, image: '9.png', height: 300 },
    { id: 10, image: '10.png', height: 300 },
    { id: 11, image: '11.png', height: 300 },
    { id: 12, image: '12.png', height: 300 },
    { id: 13, image: '1.png', height: 300 },
    { id: 14, image: '2.png', height: 300 },
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

      <section className="flex flex-col items-center min-h-auto w-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 w-auto px-4">

          {/* Category Cards */}
          {[
            {
              title: 'Frontend Development',
              images: ['17.png', '18.png', '19.png', '20.png'],
            },
            {
              title: 'Backend Development',
              images: ['17.png', '18.png', '19.png', '20.png'],
            },
            {
              title: 'Databases',
              images: ['8.png', '9.png', '10.png', '11.png'],
            },
            {
              title: 'Mobile Development',
              images: ['15.png', '16.png', '17.png', '18.png'],
            },
            {
              title: 'Digital Marketing',
              images: ['1.png', '2.png', '3.png', '4.png'],
            },
            {
              title: 'DevOps',
              images: ['17.png', '18.png', '19.png', '20.png'],
            },
            {
              title: 'UI/UX Design',
              images: ['17.png', '18.png', '19.png', '20.png'],
            },
            {
              title: 'Cloud Platforms',
              images: ['17.png', '18.png', '19.png', '20.png'],
            }
            ,
            {
              title: 'Cloud Platforms',
              images: ['17.png', '18.png', '19.png', '20.png'],
            }
            ,
            {
              title: 'Cloud Platforms',
              images: ['17.png', '18.png', '19.png', '20.png'],
            }
          ].map((category, index) => (
            <div
              key={index}
              className="rounded-xl p-4 text-center transition transform hover:scale-[1.05] hover:shadow-lg duration-300 ease-in-out"
            >
              <h3 className="text-xl font-jSB mb-5 text-blue-950">{category.title}</h3>
              <div className="grid grid-cols-2 items-center justify-center">
                {category.images.map((img, i) => (
                  <img
                    key={i}
                    src={`/${img}`}
                    alt={img.split('.')[0]}
                    className="w-full h-22 object-contain bg-no-repeat rounded-md hover:scale-105 transition duration-200 ease-in-out flex items-center justify-center"
                  />
                ))}
              </div>
            </div>
          ))}

        </div>
      </section>
    </div>
  );
}

export default Tech;
