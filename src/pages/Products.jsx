import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ShoppingBag, Leaf, Droplet, CheckCircle, ShieldCheck, ExternalLink } from 'lucide-react';
import jaggeryImg from '../assets/jaggery-product.jpg';
import './Products.css';

const Products = () => {
  return (
    <>
      <Helmet>
        <title>Premium Jaggery | Georgos</title>
        <meta name="description" content="Discover our premium traditional jaggery." />
      </Helmet>

      <div className="product-split-container">
        
        {/* Left Side: Ingredients & Info (Dark Brown) */}
        <div className="split-left">
          
          <div className="ingredients-wrapper">
            {/* We use a central invisible anchor for the dashed lines to point to */}
            <div className="center-anchor"></div>
            
            <motion.div 
              className="floating-tag tag-top-left"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Leaf size={16} /> Fresh Sugarcane
              <svg className="dash-line line-1"><path d="M 120 20 Q 180 20, 220 80" /></svg>
            </motion.div>

            <motion.div 
              className="floating-tag tag-top-right"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Droplet size={16} /> Natural Sweetness
              <svg className="dash-line line-2"><path d="M -20 20 Q -80 20, -120 100" /></svg>
            </motion.div>

            <motion.div 
              className="floating-tag tag-bottom-left"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <CheckCircle size={16} /> No Chemicals
              <svg className="dash-line line-3"><path d="M 120 20 Q 180 20, 220 -60" /></svg>
            </motion.div>

            <motion.div 
              className="floating-tag tag-bottom-right"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
            >
              <ShieldCheck size={16} /> Traditional Boil
              <svg className="dash-line line-4"><path d="M -20 20 Q -80 20, -120 -60" /></svg>
            </motion.div>
          </div>

          <div className="nutrition-cards">
            <motion.div className="n-card" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}>
              <span className="n-label">Energy</span>
              <span className="n-value">383 kcal</span>
            </motion.div>
            <motion.div className="n-card highlight" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}>
              <span className="n-label">Iron</span>
              <span className="n-value">11 mg</span>
            </motion.div>
            <motion.div className="n-card" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.0 }}>
              <span className="n-label">Calcium</span>
              <span className="n-value">80 mg</span>
            </motion.div>
          </div>
        </div>

        {/* Right Side: Product Showcase (Light Parchment) */}
        <div className="split-right">
          
          <div className="product-header">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Pala Nadan Sarkara
            </motion.h1>
            <motion.div 
              className="product-badges"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="badge"><Leaf size={14}/> Organic</span>
              <span className="badge"><CheckCircle size={14}/> Pure</span>
              <span className="badge"><ShieldCheck size={14}/> Heritage</span>
            </motion.div>
          </div>

          <motion.div 
            className="product-image-container"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img src={jaggeryImg} alt="Georgos Fresh Jaggery" className="jaggery-jar" />
            
            <motion.div 
              className="price-tag-container"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, type: "spring" }}
            >
              <svg className="price-dash-line"><path d="M 0 50 Q -50 0, -120 40" /></svg>
              <div className="price-tag">
                ₹150.00
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="action-container"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="qty-selector">
              <button>-</button>
              <span>1 kg</span>
              <button>+</button>
            </div>
            
            <a href="https://amazon.in" target="_blank" rel="noopener noreferrer" className="amazon-btn">
              Buy from Amazon <ExternalLink size={18} />
            </a>
          </motion.div>

        </div>

      </div>
    </>
  );
};

export default Products;
