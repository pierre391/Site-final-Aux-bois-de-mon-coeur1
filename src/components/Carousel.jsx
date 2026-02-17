import React, { useRef, useEffect, useState } from 'react';
// import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Les catégories définies avec le client
const categories = [
  { name: 'Verrière', slug: 'verriere', image: '/verriere.webp' },
  { name: 'Claustra', slug: 'claustra', image: '/claustra.webp' },
  { name: 'Table', slug: 'table', image: '/table.webp' },
  { name: 'Meuble', slug: 'meuble', image: '/meuble.webp' },
  { name: 'Restauration', slug: 'restauration', image: '/palette.webp' },
  { name: 'Plateau & Tablette', slug: 'plateau-tablette', image: '/palette.webp' },
];

const Carousel = () => {
  const scrollRef = useRef(null);
  const carouselRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // const { scrollYProgress } = useScroll({
  //   target: carouselRef,
  //   offset: ["start start", "end start"]
  // });

  // const shapeDividerY = useTransform(scrollYProgress, [0, 1], [0, -20]);

  // Génération du path adaptatif (20 triangles sur mobile, 60 sur desktop)
  const generateTrianglePath = () => {
    const triangleCount = isMobile ? 20 : 60;
    let path = 'M0,50 ';
    const triangleWidth = 1000 / triangleCount;
    for (let i = 0; i < triangleCount; i++) {
      const peak = i * triangleWidth + triangleWidth / 2;
      const base = (i + 1) * triangleWidth;
      path += `L${peak},0 L${base},50 `;
    }
    path += 'Z';
    return path;
  };

  // Gestion de la visibilité des flèches
  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.8;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    checkScroll();

    const handleResize = () => {
      checkMobile();
      checkScroll();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="realisations-carousel-section" ref={carouselRef}>
      <div
        className="carousel-shape-divider"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 50"
          preserveAspectRatio="none"
          className="shape-divider-svg"
        >
          <path
            d={generateTrianglePath()}
            fill="var(--color-background)"
          />
        </svg>
      </div>

      <div className="container">
        <h2 className="section-title">Découvrez nos Réalisations</h2>
        
        <div className="carousel-wrapper" style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
          {/* Flèche Gauche */}
          <button 
            className="carousel-arrow carousel-arrow-left"
            onClick={() => scroll('left')}
            style={{ opacity: canScrollLeft ? 1 : 0.3, pointerEvents: canScrollLeft ? 'auto' : 'none' }}
          >
            <ChevronLeft size={24} />
          </button>

          {/* Conteneur de défilement (Scroll Snap) */}
          <div 
            className="carousel-container" 
            ref={scrollRef}
            onScroll={checkScroll}
          >
            <div className="carousel-track" style={{ display: 'flex', gap: '2rem' }}>
              {categories.map((cat, index) => (
                <div
                  key={cat.slug}
                  className="carousel-card"
                >
                  <Link to={`/realisations/${cat.slug}`} className="category-link">
                    <div className="carousel-card-image">
                      <img src={cat.image} alt={cat.name} loading="lazy" />
                    </div>
                    <h3>{cat.name}</h3>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Flèche Droite */}
          <button 
            className="carousel-arrow carousel-arrow-right"
            onClick={() => scroll('right')}
            style={{ opacity: canScrollRight ? 1 : 0.3, pointerEvents: canScrollRight ? 'auto' : 'none' }}
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
