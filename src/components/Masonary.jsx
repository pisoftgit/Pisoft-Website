import { useState, useEffect, useMemo, useRef } from 'react';
import { useTransition, a } from '@react-spring/web';

function Masonry({ data }) {
  const [columns, setColumns] = useState(2);

  useEffect(() => {
    const updateColumns = () => {
      if (window.matchMedia('(min-width: 1500px)').matches) {
        setColumns(10);
      }
      else if (window.matchMedia('(min-width: 1200px)').matches) {
        setColumns(9);
      } else if (window.matchMedia('(min-width: 1000px)').matches) {
        setColumns(8);
      } else if (window.matchMedia('(min-width: 600px)').matches) {
        setColumns(4);
      } else {
        setColumns(4);
      }
    };

    updateColumns();
    window.addEventListener('resize', updateColumns);
    return () => window.removeEventListener('resize', updateColumns);
  }, []);

  const ref = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (ref.current) {
        setWidth(ref.current.offsetWidth);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [heights, gridItems] = useMemo(() => {
    let heights = new Array(columns).fill(0);
    let gridItems = data.map((child) => {
      const column = heights.indexOf(Math.min(...heights));
      const x = (width / columns) * column;
      const y = (heights[column] += child.height / 2) - child.height / 2;
      return { ...child, x, y, width: width / columns, height: child.height / 2 };
    });
    return [heights, gridItems];
  }, [columns, data, width]);

  const transitions = useTransition(gridItems, {
    keys: (item) => item.id,
    from: ({ x, y, width, height }) => ({ x, y, width, height, opacity: 0 }),
    enter: ({ x, y, width, height }) => ({ x, y, width, height, opacity: 1 }),
    update: ({ x, y, width, height }) => ({ x, y, width, height }),
    leave: { height: 0, opacity: 0 },
    config: { mass: 5, tension: 500, friction: 100 },
    trail: 25,
  });

  return (
    <div
      ref={ref}
      className="relative bg-transparent w-full h-full"
      style={{ height: Math.max(...heights) }}
    >
      {transitions((style, item) => (
        <a.div
          key={item.id}
          style={style}
          className="absolute [will-change:transform,width,height,opacity]"
        >
          <div
            className="relative w-full h-full overflow-hidden uppercase text-[10px] leading-[10px] rounded-[4px] transition duration-300 ease hover:scale-110"
            style={{
              backgroundColor: '#ffffff',
              backgroundImage: `url(${item.image})`,
              backgroundSize: 'contain',
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          />
        </a.div>
      ))}

    </div>
  );
}

export default Masonry;
