import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const categories = [
  { name: 'Verrière', slug: 'verriere', image: '/verriere.webp' },
  { name: 'Claustra', slug: 'claustra', image: '/claustra.webp' },
  { name: 'Tables sur mesure', slug: 'table', image: '/table.webp' },
  { name: 'Meuble', slug: 'meuble', image: '/meuble.webp' },
  { name: 'Restauration', slug: 'restauration', image: '/palette.webp' },
  { name: 'Plateau & Tablette', slug: 'plateau-tablette', image: '/palette.webp' },
];

const AllProjects = () => {
  return (
    <div className="all-projects-page">
      <section className="all-projects-section">
        <div className="container">
          <h2 className="section-title">Nos Réalisations</h2>

          <div className="carousel-track all-projects-grid">
            {categories.map((category, index) => (
              <motion.div
                key={category.slug}
                className="carousel-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Link to={`/realisations/${category.slug}`} className="category-link">
                  <div className="carousel-card-image">
                    <img src={category.image} alt={category.name} loading="lazy" />
                  </div>
                  <h3>{category.name}</h3>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllProjects;
