import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Info } from 'lucide-react';
import './Products.css';

const Products = () => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Rice & Grains', 'Spices', 'Pulses', 'Cooking Oils', 'Beverages', 'Snacks', 'Dairy Products', 'Household Essentials', 'Personal Care'];

  const products = [
    { id: 1, name: 'Premium Rice Varieties', category: 'Rice & Grains', img: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80' },
    { id: 2, name: 'Authentic Spices', category: 'Spices', img: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80' },
    { id: 3, name: 'Fresh Pulses', category: 'Pulses', img: 'https://images.unsplash.com/photo-1515543904379-3d757afe72e4?auto=format&fit=crop&q=80' },
    { id: 4, name: 'Pure Cooking Oils', category: 'Cooking Oils', img: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&q=80' },
    { id: 5, name: 'Refreshing Beverages', category: 'Beverages', img: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80' },
    { id: 6, name: 'Local & Branded Snacks', category: 'Snacks', img: 'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?auto=format&fit=crop&q=80' },
    { id: 7, name: 'Dairy & Farm Fresh', category: 'Dairy Products', img: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&q=80' },
    { id: 8, name: 'Cleaning & Household', category: 'Household Essentials', img: 'https://images.unsplash.com/photo-1585421514738-01798e348b17?auto=format&fit=crop&q=80' },
    { id: 9, name: 'Personal Care items', category: 'Personal Care', img: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80' },
  ];

  const filteredProducts = filter === 'All' 
    ? products 
    : products.filter(p => p.category === filter);

  return (
    <>
      <Helmet>
        <title>Our Products | Georgos</title>
        <meta name="description" content="Explore our wide range of wholesale and retail product categories." />
      </Helmet>

      <section className="products-header">
        <div className="container">
          <motion.h1 
            style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '1rem' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Product Categories
          </motion.h1>
          <motion.p 
            style={{ fontSize: '1.25rem', color: 'var(--accent-yellow)', maxWidth: '600px', margin: '0 auto' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Discover our extensive selection of high-quality products.
          </motion.p>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--bg-color)' }}>
        <div className="container">
          
          <motion.div 
            className="notice-banner"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Info color="var(--primary-red)" size={24} style={{ flexShrink: 0 }} />
            <div>
              <h4 style={{ fontWeight: 600, color: 'var(--text-dark)', marginBottom: '0.25rem' }}>Notice</h4>
              <p style={{ color: 'var(--text-light)', fontSize: '0.875rem' }}>
                Product availability may vary. Please contact us directly for wholesale enquiries and stock information. 
                (This is a showcase only; online ordering is not available.)
              </p>
            </div>
          </motion.div>

          {/* Filters */}
          <div className="filter-container">
            {categories.map((cat, i) => (
              <motion.button
                key={cat}
                className={`filter-btn ${filter === cat ? 'active' : ''}`}
                onClick={() => setFilter(cat)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + (i * 0.05) }}
              >
                {cat}
              </motion.button>
            ))}
          </div>

          {/* Masonry Grid */}
          <motion.div layout className="masonry-grid">
            <AnimatePresence>
              {filteredProducts.map((product) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={product.id}
                  className="product-card"
                >
                  <img src={product.img} alt={product.name} className="product-img" loading="lazy" />
                  <div className="product-overlay">
                    <div className="product-category">{product.category}</div>
                    <h3 className="product-title">{product.name}</h3>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

        </div>
      </section>
    </>
  );
};

export default Products;
