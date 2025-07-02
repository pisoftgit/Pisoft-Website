// import { projects } from '../assets/data';
// import Card from './CardItem';
// import { useScroll } from 'framer-motion';
// import { useRef } from 'react';
// // import Tsparticles from './Tsparticles';

// export default function ScrollT() {
//   const container = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: container,
//     offset: ['start start', 'end end'],
//   });

//   return (
//     <main ref={container} className="min-h-[250vh] sm:min-h-[300vh] mt-8 sm:mt-12 md:mt-16 bg-gradient-to-r from-orange-100 via-orange-100 to-sky-100 relative w-full">
//       {/* Container for Tsparticles, scoped to ScrollT */}
//       {/* <Tsparticles /> */}
//       <div className="flex flex-col items-center">
//         {projects.map((project, i) => {
//           const targetScale = 1 - (projects.length - i) * 0.05;
//           return (
//             <Card
//               key={`p_${i}`}
//               i={i}
//               {...project}
//               progress={scrollYProgress}
//               range={[i * 0.25, 1]}
//               targetScale={targetScale}
//             />
//           );
//         })}
//       </div>
//     </main>
//   );
// }


import { projects } from '../assets/data';
import Card from './CardItem';
import { useScroll } from 'framer-motion';
import { useRef } from 'react';
// import Tsparticles from './Tsparticles';

export default function ScrollT() {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start 0.3', 'end end'], // Start tracking when container is 30% into viewport
  });

  return (
    <main
      ref={container}
      className="min-h-[250vh] sm:min-h-[400vh] lg:mt-15 sm:mt-4 md:mt-10 bg-white relative w-full"
    >
      {/* Optional particle background */}
      {/* <Tsparticles /> */}

      <div className="flex flex-col items-center">
        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - i) * 0.05;

          // Make cards appear earlier as user scrolls
          const start = i * 0.06;
          const end = start + 0.6; 

          return (
            <Card
              key={`p_${i}`}
              i={i}
              {...project}
              progress={scrollYProgress}
              range={[start, end]}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </main>
  );
}
