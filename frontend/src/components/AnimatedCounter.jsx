import React from 'react';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

const AnimatedCounter = ({ 
  number, 
  display, 
  suffix = '', 
  precision = 0, 
  duration = 2.5,
  className = "" 
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const formatNumber = (value) => {
    if (display && display.includes('K')) {
      return `${(value / 1000).toFixed(precision)}K${suffix}`;
    }
    if (display && display.includes('<')) {
      return `<${value}${suffix}`;
    }
    if (display && display.includes('/')) {
      return `${Math.floor(value)}${suffix}`;
    }
    if (precision > 0) {
      return `${value.toFixed(precision)}${suffix}`;
    }
    return `${Math.floor(value).toLocaleString()}${suffix}`;
  };

  return (
    <div ref={ref} className={className}>
      {inView ? (
        <CountUp
          start={0}
          end={number}
          duration={duration}
          separator=","
          decimals={precision}
          formattingFn={formatNumber}
        />
      ) : (
        <span>0{suffix}</span>
      )}
    </div>
  );
};

export default AnimatedCounter;