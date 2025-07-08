import { projects } from '../assets/data';
import Card from './CardItem';
import { useScroll } from 'framer-motion';
import { useRef } from 'react';
import { useState, useEffect } from 'react';


export default function ScrollT() {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start 0.3', 'end end'], // Start tracking when container is 30% into viewport
  });

  const [portfolio, setPortfolio] = useState([]);
  
    useEffect(() => {
      const FetchPortfolios = async () => {
        try {
          const res = await fetch("https://project.pisofterp.com/pipl/restworld/portfolio");
          const data = await res.json();
  
          const formattedData = data
            .map((item) => ({
              title: item.projectName,
              description: item.projectDescription,
              url:item.url,
              src: item.dp
                ? item.dp.startsWith("data:")
                  ? item.dp
                  : `data:image/gif;base64,${item.dp}`
                : item.tempDp,
            }));
  
  
          setPortfolio(formattedData);
        } catch (err) {
          console.error("Failed to fetch portfolios:", err);
        }
      };
  
      FetchPortfolios();
    }, []);

  return (
    <main
      ref={container}
      className="min-h-[250vh] sm:min-h-auto sm:mt-4 md:mt-5 bg-white relative w-full h-auto"
    >

      <div className="flex flex-col items-center">
        {portfolio.map((project, i) => {
          const targetScale = 1 - (projects.length - i) * 0.05;

          
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
