import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Bike, ShoppingBag, Handshake, Truck, Store, Building2, Users } from 'lucide-react';
import './WindingJourney.css';

const milestones = [
  {
    year: '1963',
    title: 'Bicycle Rental',
    desc: 'George M V started a small bicycle rental shop in Pala.',
    icon: Bike,
    align: 'left',
    yPos: 0
  },
  {
    year: 'Early Years',
    title: 'Grocery Trading',
    desc: 'Expansion into grocery trading and daily essentials.',
    icon: ShoppingBag,
    align: 'right',
    yPos: 400
  },
  {
    year: 'Growth Phase',
    title: 'Building Trust',
    desc: 'Building strong relationships and growing into wholesale operations.',
    icon: Handshake,
    align: 'left',
    yPos: 800
  },
  {
    year: 'Expansion',
    title: 'Wholesale Operations',
    desc: 'Supplying Pala and surrounding regions with trusted goods.',
    icon: Truck,
    align: 'right',
    yPos: 1200
  },
  {
    year: 'Milestone',
    title: 'Georgos Super Shop',
    desc: 'Our first retail store serving the community with trusted quality.',
    icon: Store,
    align: 'left',
    yPos: 1600
  },
  {
    year: 'Modern Era',
    title: 'Georgos Super Market',
    desc: 'Elevating the retail experience with our flagship supermarket.',
    icon: Building2,
    align: 'right',
    yPos: 2000
  },
  {
    year: 'Present Day',
    title: 'Serving Generations',
    desc: 'Continuing the legacy with modern retail experiences while maintaining our core values.',
    icon: Users,
    align: 'left',
    yPos: 2400
  }
];

// A custom bezier path weaving down 2800px
// It starts at top-center (500, 0), weaves right, then left, etc.
const pathString = `
  M 500 0
  C 800 100, 800 300, 500 400
  C 200 500, 200 700, 500 800
  C 800 900, 800 1100, 500 1200
  C 200 1300, 200 1500, 500 1600
  C 800 1700, 800 1900, 500 2000
  C 200 2100, 200 2300, 500 2400
  C 800 2500, 800 2700, 500 2800
`;

const WindingJourney = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Smooth out the scroll to prevent jerky bicycle movements
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // For the offset-distance of the bicycle
  const distance = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);
  
  // Rotate the wheels based on scroll
  const wheelRotation = useTransform(smoothProgress, [0, 1], [0, 1080]);

  return (
    <section className="winding-journey-section" ref={containerRef}>
      
      {/* Background Pala Landmark Sketch (Subtle) */}
      <div className="landmark-sketch">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" opacity="0.05">
          <path d="M100 20 L100 180 M80 50 L120 50 M70 180 L130 180" stroke="#4E342E" strokeWidth="4" strokeLinecap="round"/>
          <path d="M100 20 L50 80 L50 180 M100 20 L150 80 L150 180" stroke="#4E342E" strokeWidth="4" strokeLinejoin="round"/>
          <circle cx="100" cy="110" r="15" stroke="#4E342E" strokeWidth="3"/>
        </svg>
      </div>

      <div className="journey-container">
        
        {/* The SVG Path Map */}
        <div className="journey-svg-wrapper">
          <svg className="journey-svg" viewBox="0 0 1000 2800" preserveAspectRatio="xMidYMin slice">
            <path 
              d={pathString} 
              className="journey-path-bg" 
            />
            <motion.path 
              d={pathString} 
              className="journey-path-drawn"
              style={{ pathLength: smoothProgress }}
            />
          </svg>
        </div>

        {/* The Moving Bicycle */}
        <motion.div 
          className="journey-bicycle-tracker"
          style={{ offsetDistance: distance }}
        >
          <div className="bicycle-wrapper">
            <motion.div style={{ rotate: wheelRotation }} className="bike-icon-spin">
              <Bike size={36} strokeWidth={1.5} />
            </motion.div>
          </div>
        </motion.div>

        {/* Milestone Cards */}
        {milestones.map((item, index) => (
          <div 
            key={index} 
            className={`milestone-row ${item.align}`}
            style={{ top: `${item.yPos}px` }}
          >
            <motion.div 
              className="milestone-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="milestone-icon-wrapper">
                <item.icon size={28} strokeWidth={1.5} />
              </div>
              <div className="milestone-content">
                <span className="milestone-year">{item.year}</span>
                <h3 className="milestone-title">{item.title}</h3>
                <p className="milestone-desc">{item.desc}</p>
              </div>
            </motion.div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default WindingJourney;
