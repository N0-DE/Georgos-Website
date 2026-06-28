import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Shield, Heart, Store, Users, TrendingUp } from 'lucide-react';
import WindingJourney from '../components/WindingJourney';
import './About.css';

const About = () => {
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"]
  });

  const bikeY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const values = [
    { icon: <Shield size={24} />, name: 'Trust' },
    { icon: <Shield size={24} />, name: 'Integrity' },
    { icon: <Heart size={24} />, name: 'Service' },
    { icon: <Users size={24} />, name: 'Community' },
    { icon: <Store size={24} />, name: 'Quality' },
    { icon: <TrendingUp size={24} />, name: 'Growth' }
  ];

  return (
    <>
      <Helmet>
        <title>Our Story | Georgos</title>
        <meta name="description" content="Discover the history of Georgos, from a small bicycle shop in 1963 to Pala's trusted retail and wholesale destination." />
      </Helmet>

      {/* Hero */}
      <section className="about-hero">
        <div className="container">
          <motion.h1 
            className="about-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Our Story
          </motion.h1>
          <motion.p 
            className="about-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            A journey of trust, dedication, and community service that began over six decades ago.
          </motion.p>
        </div>
      </section>

      {/* Winding Heritage Map Timeline */}
      <WindingJourney />

      {/* Profiles */}
      <section className="section profile-section">
        <div className="container">
          <h2 className="section-title">Our Leadership</h2>
          
          {/* Founder */}
          <motion.div 
            className="profile-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="profile-image-placeholder">GMV</div>
            <div className="profile-info">
              <h3>George M V</h3>
              <span className="role">Founder &amp; Proprietor</span>
              <p>
                The visionary entrepreneur who established Georgos in 1963. Through dedication, 
                honesty, and hard work, he transformed a small bicycle rental business into one 
                of Pala's trusted retail names.
              </p>
            </div>
          </motion.div>

          <div className="leadership-grid">
            <motion.div 
              className="leader-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="leader-avatar">AG</div>
              <div className="profile-info">
                <h3>Anoob George</h3>
                <span className="role">Managing Director</span>
                <p>Focused on business growth while preserving the values established by the founder.</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="leader-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="leader-avatar">AG</div>
              <div className="profile-info">
                <h3>Aneesh George</h3>
                <span className="role">Managing Director</span>
                <p>Helping lead Georgos into the future while maintaining its reputation for quality and service.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Vision & Values */}
      <section className="section" style={{ backgroundColor: 'var(--bg-color)' }}>
        <div className="container">
          <div className="mission-vision">
            <motion.div 
              className="mv-card mission"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Shield className="mv-icon" />
              <h3>Our Mission</h3>
              <p>To provide quality products, fair pricing, and dependable service while maintaining the trust built through generations.</p>
            </motion.div>

            <motion.div 
              className="mv-card vision"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Store className="mv-icon" />
              <h3>Our Vision</h3>
              <p>To remain one of Pala's most trusted retail and wholesale destinations while embracing future opportunities and innovation.</p>
            </motion.div>
          </div>

          <h2 className="section-title">Core Values</h2>
          <div className="features-grid">
            {values.map((val, i) => (
              <motion.div 
                key={i}
                className="feature-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="feature-icon">{val.icon}</div>
                <h4 style={{ fontSize: '1.25rem', fontWeight: '600' }}>{val.name}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
