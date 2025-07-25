import React from 'react';
import Masonry from '../Masonary';
import { motion } from 'framer-motion';

function Tech() {

  return (
    <div className="w-full bg-transparent flex flex-col items-center justify-center px-4 py-12">
      {/* Text Section */}
      <div className="text-center space-y-4 mb-10 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-jr text-[#F07C22]  text-[18px] sm:text-[20px] leading-tight"
        >
          Tech And Tools We Use
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="font-jSB text-blue-950 text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight"
        >
          Robust Technologies Behind
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="font-jSB text-blue-950 text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight"
        >
          Every Product We Design and Deliver
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="font-jSB text-orange-600 text-[18px] sm:text-[20px] leading-tight"
        >
          We Use Top Technologies to Build Your Dream Products
        </motion.div>
      </div>


      <section className="flex flex-col items-center min-h-auto w-auto">
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 w-auto px-4">
          {[
            {
              title: 'Frontend Development',
              images: ['17.png', '18.png', '19.png', '20.png'],
            },
            {
              title: 'Cyber Security',
              images: ['44.png', '45.png', '46.png', '47.png'],
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
              title: 'Graphic Designing',
              images: ['40.png', '41.png', '42.png', '43.png'],
            },
            {
              title: 'UI/UX Design',
              images: ['17.png', '18.png', '19.png', '20.png'],
            },
            {
              title: 'Cloud Platforms',
              images: ['17.png', '18.png', '19.png', '20.png'],
            },
            {
              title: 'Cyber Security',
              images: ['17.png', '18.png', '19.png', '20.png'],
            },
            {
              title: 'Cloud Computing',
              images: ['33.png', '34.png', '35.png', '36.png'],
            },
            {
              title: 'Datascience',
              images: ['29.png', '22.png', '23.png', '24.png'],
            },
            {
              title: 'Databases',
              images: ['8.png', '9.png', '10.png', '11.png'],
            },
            {
              title: 'AI & ML',
              images: ['17.png', '18.png', '19.png', '20.png'],
            },
          ].map((category, index, arr) => (
            <motion.div
              key={index}
              className="rounded-xl p-4 text-center transition transform hover:scale-[1.05] hover:shadow-lg hover:shadow-orange-600 duration-300 ease-in-out"
              initial={{ opacity: 0, x: index < arr.length / 2 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, type: "spring", stiffness: 100 }}
            >
              <h3 className="text-base lg:text-xl font-jSB mb-5 text-blue-950">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 items-center gap-0 lg:gap-4 justify-center">
                {category.images.map((img, i) => (
                  <motion.img
                    key={i}
                    src={`/${img}`}
                    alt={img.split('.')[0]}
                    className="w-auto lg:w-full lg:h-25 h-auto object-contain bg-no-repeat rounded-md hover:scale-105 transition duration-200 ease-in-out flex items-center justify-center"
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}

export default Tech;
