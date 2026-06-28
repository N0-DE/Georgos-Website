import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Quote, Star, ChevronLeft, ChevronRight, CheckCircle2, ExternalLink } from 'lucide-react';
import './Testimonials.css';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      id: 1,
      text: "Georgos Super Market has been our go-to for daily needs. The location opposite the Town Hall is incredibly convenient, and you can always count on finding fresh groceries and household items.",
      author: "Joseph Kurian",
      role: "Customer Review",
      link: "https://share.google/v2hEw5vKA6ZygkfNe"
    },
    {
      id: 2,
      text: "The staff here is exceptionally courteous and always ready to help. It's rare to find such personalized service in a supermarket these days. Highly recommended!",
      author: "Sneha Thomas",
      role: "Customer Review",
      link: "https://share.google/OzUyK2uwcB4fGhC1i"
    },
    {
      id: 3,
      text: "A true Pala institution. They have been serving the community for decades with the same dedication to quality. Their prices are unbeatable for bulk purchases.",
      author: "Mathew Varghese",
      role: "Customer Review",
      link: "https://share.google/OzUyK2uwcB4fGhC1i"
    },
    {
      id: 4,
      text: "Excellent place to shop. They have a very wide range of consumer goods under one roof, and they even offer prompt home delivery.",
      author: "Anju P.",
      role: "Customer Review",
      link: "https://share.google/v2hEw5vKA6ZygkfNe"
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
                <div style={{ marginTop: '2rem' }}>
                  <a 
                    href={reviews[currentIndex].link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="google-review-link"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      color: 'var(--primary-red)',
                      fontWeight: 600,
                      textDecoration: 'none'
                    }}
                  >
                    View on Google Maps <ExternalLink size={16} />
                  </a>
                </div>
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
              4.0★ Google Maps Rating
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
