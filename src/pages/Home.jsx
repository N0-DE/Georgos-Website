import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle2, XCircle, ShieldCheck, Heart, Store, ThumbsUp, Users, Award, MapPin } from 'lucide-react';
import AnimatedCounter from '../components/AnimatedCounter';
import logoImg from '../assets/georgos-logo.png';
import bgImg from '../assets/pala-church-bg.jpg';
import './Home.css';

const Home = () => {
  const features = [
    { icon: <ShieldCheck size={32} />, title: 'Trusted Since 1963' },
    { icon: <Heart size={32} />, title: 'Family-Owned Business' },
    { icon: <Store size={32} />, title: 'Wholesale Expertise' },
    { icon: <Award size={32} />, title: 'Quality Products' },
    { icon: <ThumbsUp size={32} />, title: 'Customer Satisfaction' },
    { icon: <Users size={32} />, title: 'Community Trust' },
  ];

  return (
    <>
      <Helmet>
        <title>Georgos | Serving Pala Since 1963</title>
        <meta name="description" content="From a humble bicycle rental shop to one of Pala's most trusted wholesale and retail brands. Family owned business since 1963." />
      </Helmet>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg">
          <img src={bgImg} className="hero-bg-img" alt="Pala Church Vintage Background" />
        </div>
        <div className="container hero-content vintage-hero-content">
          <motion.img
            src={logoImg}
            alt="Georgos Logo"
            className="hero-logo-vintage"
            initial={{ opacity: 0, scale: 0.85, y: 50, filter: 'blur(12px)' }}
            animate={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          />
          <motion.h1 
            className="hero-title vintage-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          >
            Serving Pala Since 1963
          </motion.h1>
          <motion.p 
            className="hero-subtitle vintage-sub"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            From a humble bicycle rental shop to one of Pala's most trusted wholesale and retail brands.
          </motion.p>
          <motion.p 
            className="hero-text vintage-desc"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            For over six decades, Georgos has proudly served the people of Pala, growing from a small local venture into a trusted name known for quality, reliability, and customer care.
          </motion.p>
          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <a href="#stores" className="btn btn-primary">Explore Our Stores</a>
            <Link to="/about" className="btn btn-outline vintage-btn-outline">
              Our Story
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section (Moved out of hero to prevent overlapping the sketch) */}
      <section className="section" style={{ backgroundColor: 'var(--vintage-light, #FDFBF7)', paddingTop: '2rem', paddingBottom: '4rem' }}>
        <div className="container">
          <motion.div 
            className="stats-container"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <AnimatedCounter end={1963} duration={2} label="Founded In" />
            <AnimatedCounter end={60} suffix="+" duration={2.5} label="Years of Trust" />
            <AnimatedCounter end={2} duration={1.5} label="Store Locations" />
            <AnimatedCounter end={10} suffix="k+" duration={3} label="Happy Customers" />
          </motion.div>
        </div>
      </section>

      {/* Our Stores Section */}
      <section id="stores" className="section">
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Stores
          </motion.h2>

          <div className="stores-grid">
            {/* Super Shop */}
            <motion.div 
              className="store-card"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="store-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80')" }} />
              <div className="store-content">
                <span className="store-type">Wholesale & Retail</span>
                <h3 className="store-title">Georgos Super Shop</h3>
                <p className="store-desc">Serving both wholesale buyers and individual customers with a carefully selected range of products.</p>
                
                <div className="store-features">
                  <div className="feature-item"><CheckCircle2 className="check-icon" size={20} /> Wholesale Orders</div>
                  <div className="feature-item"><CheckCircle2 className="check-icon" size={20} /> Retail Purchases</div>
                  <div className="feature-item"><CheckCircle2 className="check-icon" size={20} /> Bulk Buying</div>
                  <div className="feature-item"><CheckCircle2 className="check-icon" size={20} /> Trusted Service</div>
                </div>

                <a href="https://maps.app.goo.gl/gBPX5W6F1SKw4tbY7" target="_blank" rel="noreferrer" className="btn btn-outline" style={{ width: '100%' }}>
                  <MapPin size={18} /> View Location
                </a>
              </div>
            </motion.div>

            {/* Super Market */}
            <motion.div 
              className="store-card"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="store-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&q=80')" }} />
              <div className="store-content">
                <span className="store-type">Retail Supermarket</span>
                <h3 className="store-title">Georgos Super Market</h3>
                <p className="store-desc">A modern supermarket offering a larger selection of products for everyday shopping.</p>
                
                <div className="store-features">
                  <div className="feature-item"><CheckCircle2 className="check-icon" size={20} /> Extensive Product Variety</div>
                  <div className="feature-item"><CheckCircle2 className="check-icon" size={20} /> Grocery Essentials</div>
                  <div className="feature-item"><CheckCircle2 className="check-icon" size={20} /> Household Products</div>
                  <div className="feature-item"><CheckCircle2 className="check-icon" size={20} /> Personal Care Products</div>
                </div>

                <a href="https://share.google/HDSysJLTeJysoYMUU" target="_blank" rel="noreferrer" className="btn btn-outline" style={{ width: '100%' }}>
                  <MapPin size={18} /> View Location
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="section comparison-section">
        <div className="container">
          <h2 className="section-title" style={{ color: 'var(--white)' }}>Choose Your Store</h2>
          
          <div className="comparison-grid">
            <motion.div 
              className="compare-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="compare-title">Super Shop</h3>
              <div className="compare-list">
                <div className="compare-item"><span>Wholesale</span> <CheckCircle2 className="check-icon" /></div>
                <div className="compare-item"><span>Retail</span> <CheckCircle2 className="check-icon" /></div>
                <div className="compare-item"><span>Bulk Orders</span> <CheckCircle2 className="check-icon" /></div>
                <div className="compare-item"><span>Essential Product Range</span> <CheckCircle2 className="check-icon" /></div>
                <div className="compare-item" style={{ color: 'rgba(255,255,255,0.5)' }}><span>Wider Product Selection</span> <XCircle className="cross-icon" /></div>
              </div>
            </motion.div>

            <motion.div 
              className="compare-card highlight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="compare-title">Super Market</h3>
              <div className="compare-list">
                <div className="compare-item" style={{ color: 'rgba(255,255,255,0.5)' }}><span>Wholesale</span> <XCircle className="cross-icon" /></div>
                <div className="compare-item"><span>Retail</span> <CheckCircle2 className="check-icon" /></div>
                <div className="compare-item"><span>Family Shopping</span> <CheckCircle2 className="check-icon" /></div>
                <div className="compare-item"><span>Essential Product Range</span> <CheckCircle2 className="check-icon" /></div>
                <div className="compare-item"><span>Wider Product Selection</span> <CheckCircle2 className="check-icon" /></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section" style={{ backgroundColor: '#FAF9F7' }}>
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Why Choose Georgos
          </motion.h2>
          
          <div className="features-grid">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className="feature-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="feature-icon">{feature.icon}</div>
                <h4 style={{ fontSize: '1.25rem', fontWeight: '600' }}>{feature.title}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pala Heritage Section */}
      <section className="pala-section">
        <div className="pala-bg" />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <motion.div 
            className="pala-content"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem', color: 'var(--primary-red)' }}>
              Rooted in the Heart of Pala
            </h2>
            <p style={{ fontSize: '1.25rem', color: 'var(--text-dark)', marginBottom: '2rem', lineHeight: '1.8' }}>
              For more than six decades, Georgos has been a part of daily life in Pala. 
              Just as landmarks like Pala Kurishupally stand as symbols of faith and heritage, 
              Georgos stands as a symbol of trust, service, and commitment to the local community.
            </p>
            <Link to="/about" className="btn btn-secondary">
              Discover Our Heritage
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;
