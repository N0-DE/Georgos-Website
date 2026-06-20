import { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';

const AnimatedCounter = ({ end, duration = 2, prefix = '', suffix = '', label }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / (duration * 1000), 1);
      
      // Smooth easeOutExpo for premium feel
      const easeOutExpo = percentage === 1 ? 1 : 1 - Math.pow(2, -10 * percentage);
      
      setCount(Math.floor(easeOutExpo * end));

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    if (isInView) {
      animationFrame = requestAnimationFrame(animate);
    }

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, isInView]);

  return (
    <div ref={ref} className="counter-item" style={{ textAlign: 'center', padding: '1.5rem 1rem' }}>
      <div style={{ 
        fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', 
        fontWeight: '900', 
        background: 'linear-gradient(135deg, var(--accent-yellow), #ffaa00)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        lineHeight: '1',
        letterSpacing: '-1px',
        filter: 'drop-shadow(0 2px 4px rgba(255, 215, 0, 0.3))'
      }}>
        {prefix}{count}{suffix}
      </div>
      <div style={{ 
        fontSize: '0.9rem', 
        color: 'rgba(255, 255, 255, 0.85)',
        fontWeight: '500',
        marginTop: '0.75rem',
        letterSpacing: '1px',
        textTransform: 'uppercase'
      }}>
        {label}
      </div>
    </div>
  );
};

export default AnimatedCounter;
