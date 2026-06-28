import { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { MapPin, Phone, Mail, Clock, Send, Users } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', phone: '', email: '', subject: '', message: '' });
      
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Georgos</title>
        <meta name="description" content="Get in touch with Georgos. Whether you are a retail customer or wholesale buyer, our team is ready to assist you." />
      </Helmet>

      <section className="contact-header">
        <div className="container">
          <motion.h1 
            style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '1rem' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Contact Us
          </motion.h1>
          <motion.p 
            style={{ fontSize: '1.25rem', color: 'var(--accent-yellow)', maxWidth: '600px', margin: '0 auto' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Whether you are a retail customer or wholesale buyer, our team is ready to assist you.
          </motion.p>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--bg-color)', paddingTop: '2rem' }}>
        <div className="container">
          <div className="contact-grid">
            
            {/* Info Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="info-card">
                <h3 className="info-title"><MapPin size={24} /> Store Locations</h3>
                <div className="info-list">
                  <div className="info-item">
                    <MapPin className="info-icon" size={20} />
                    <div>
                      <h4 style={{ fontWeight: 600 }}>Georgos Super Shop</h4>
                      <p style={{ color: 'var(--text-light)', fontSize: '0.875rem' }}>Ramapuram Rd, Opp. Town Hall, Pala</p>
                      <a href="https://share.google/OzUyK2uwcB4fGhC1i" target="_blank" rel="noreferrer" style={{ fontSize: '0.875rem', color: 'var(--primary-red)', fontWeight: 500, marginTop: '0.25rem', display: 'inline-block' }}>Get Directions</a>
                    </div>
                  </div>
                  <div className="info-item">
                    <MapPin className="info-icon" size={20} />
                    <div>
                      <h4 style={{ fontWeight: 600 }}>Georgos Super Market</h4>
                      <p style={{ color: 'var(--text-light)', fontSize: '0.875rem' }}>Pala Town, Kottayam, Kerala</p>
                      <a href="https://share.google/v2hEw5vKA6ZygkfNe" target="_blank" rel="noreferrer" style={{ fontSize: '0.875rem', color: 'var(--primary-red)', fontWeight: 500, marginTop: '0.25rem', display: 'inline-block' }}>Get Directions</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="info-card">
                <h3 className="info-title"><Phone size={24} /> Get in Touch</h3>
                <div className="info-list">
                  <div className="info-item">
                    <Phone className="info-icon" size={20} />
                    <div>
                      <h4 style={{ fontWeight: 600 }}>Phone</h4>
                      <p style={{ color: 'var(--text-light)', fontSize: '0.875rem' }}>+91 98765 43210</p>
                    </div>
                  </div>
                  <div className="info-item">
                    <Mail className="info-icon" size={20} />
                    <div>
                      <h4 style={{ fontWeight: 600 }}>Email</h4>
                      <p style={{ color: 'var(--text-light)', fontSize: '0.875rem' }}>contact@georgos.in</p>
                    </div>
                  </div>
                  <div className="info-item">
                    <Clock className="info-icon" size={20} />
                    <div>
                      <h4 style={{ fontWeight: 600 }}>Business Hours</h4>
                      <p style={{ color: 'var(--text-light)', fontSize: '0.875rem' }}>Mon - Sat: 8:00 AM - 8:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="info-card">
                <h3 className="info-title"><Users size={24} /> Leadership</h3>
                <div className="info-list">
                  <div className="info-item">
                    <div>
                      <p style={{ fontSize: '0.875rem', color: 'var(--text-light)' }}>Founder & Proprietor</p>
                      <h4 style={{ fontWeight: 600 }}>George M V</h4>
                    </div>
                  </div>
                  <div className="info-item">
                    <div>
                      <p style={{ fontSize: '0.875rem', color: 'var(--text-light)' }}>Managing Directors</p>
                      <h4 style={{ fontWeight: 600 }}>Anoob George</h4>
                      <h4 style={{ fontWeight: 600 }}>Aneesh George</h4>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form Column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="contact-form-container">
                <h2 style={{ fontSize: '2rem', color: 'var(--deep-charcoal)', marginBottom: '1.5rem' }}>Send us a Message</h2>
                
                {isSuccess && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{ background: '#ecfdf5', color: '#059669', padding: '1rem', borderRadius: '0.5rem', marginBottom: '1.5rem', border: '1px solid #a7f3d0' }}
                  >
                    Thank you! Your message has been sent successfully. We'll get back to you soon.
                  </motion.div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="form-grid">
                    <div className="form-group">
                      <label className="form-label">Full Name *</label>
                      <input type="text" name="name" required value={formData.name} onChange={handleChange} className="form-control" placeholder="John Doe" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Phone Number *</label>
                      <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} className="form-control" placeholder="+91 98765 43210" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Email Address</label>
                      <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-control" placeholder="john@example.com" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Subject *</label>
                      <input type="text" name="subject" required value={formData.subject} onChange={handleChange} className="form-control" placeholder="Wholesale Enquiry" />
                    </div>
                    <div className="form-group full-width">
                      <label className="form-label">Message *</label>
                      <textarea name="message" required value={formData.message} onChange={handleChange} className="form-control" placeholder="How can we help you?"></textarea>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary" disabled={isSubmitting} style={{ width: '100%' }}>
                    {isSubmitting ? 'Sending...' : <><Send size={18} /> Send Message</>}
                  </button>
                </form>
              </div>
            </motion.div>

          </div>

          {/* Maps Section */}
          <motion.div 
            className="maps-grid"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 style={{ marginBottom: '1rem', color: 'var(--deep-charcoal)' }}>Georgos Super Shop</h3>
              <div className="map-container">
                <iframe 
                  title="Super Shop Location"
                  src="https://maps.google.com/maps?q=Georgos%20Super%20Shop%20Pala&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <div>
              <h3 style={{ marginBottom: '1rem', color: 'var(--deep-charcoal)' }}>Georgos Super Market</h3>
              <div className="map-container">
                <iframe 
                  title="Super Market Location"
                  src="https://maps.google.com/maps?q=Georgos%20Super%20Market%20Pala&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </motion.div>

        </div>
      </section>
    </>
  );
};

export default Contact;
