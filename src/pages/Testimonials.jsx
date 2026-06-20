import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Quote, Star, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import './Testimonials.css';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      id: 1,
      text: "Excellent service and competitive pricing.",
      author: "Pala Resident",
      role: "Retail Customer"
    },
    {
      id: 2,
      text: "One of the most trusted names in Pala.",
      author: "Local Business Owner",
      role: "Wholesale Client"
    },
    {
      id: 3,
      text: "Our family has been shopping here for generations.",
      author: "Long-time Customer",
      role: "Retail Customer"
    },
    {
      id: 4,
      text: "Reliable wholesale support and quality products.",
      author: "Catering Service",
      role: "Wholesale Client"
    }
  ];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <>
      <Helmet>
        <title>Customer Reviews | Georgos</title>
        <meta name="description" content="Read what our customers have to say about Georgos' quality, service, and commitment to the Pala community." />
      </Helmet>

      <section className="testimonials-header">
        <div className="container">
          <motion.h1 
            style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '1rem' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Customer Testimonials
          </motion.h1>
          <motion.p 
            style={{ fontSize: '1.25rem', color: 'var(--accent-yellow)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Hear from the families and businesses we serve in Pala.
          </motion.p>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--bg-color)' }}>
        <div className="container">
          
          <div className="carousel-container">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="testimonial-card"
              >
                <Quote size={48} className="quote-icon" />
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={24} fill="currentColor" />
                  ))}
                </div>
                <p className="review-text">"{reviews[currentIndex].text}"</p>
                <div className="reviewer-name">{reviews[currentIndex].author}</div>
                <div className="reviewer-role">{reviews[currentIndex].role}</div>
              </motion.div>
            </AnimatePresence>

            <div className="carousel-controls">
              <button className="control-btn" onClick={handlePrev}>
                <ChevronLeft size={24} />
              </button>
              <button className="control-btn" onClick={handleNext}>
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          <div className="trust-indicators">
            <div className="trust-badge">
              <CheckCircle2 color="var(--primary-red)" />
              Google Reviews Integration Ready
            </div>
            <div className="trust-badge">
              <CheckCircle2 color="var(--primary-red)" />
              10,000+ Happy Customers
            </div>
            <div className="trust-badge">
              <CheckCircle2 color="var(--primary-red)" />
              60+ Years of Trust
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Testimonials;
