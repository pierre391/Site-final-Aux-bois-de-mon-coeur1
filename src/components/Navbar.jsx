import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = [
  { name: 'Verrière', slug: 'verriere' },
  { name: 'Claustra', slug: 'claustra' },
  { name: 'Table', slug: 'table' },
  { name: 'Meuble', slug: 'meuble' },
  { name: 'Restauration', slug: 'restauration' },
  { name: 'Plateau & Tablette', slug: 'plateau-tablette' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  // Détecte si on est sur mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Ferme le menu mobile lors d'un changement de page
  useEffect(() => {
    setIsOpen(false);
    setIsMobileDropdownOpen(false);
  }, [location]);

  // Gère le scroll du body quand le menu est ouvert
  useEffect(() => {
    if (isOpen && isMobile) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [isOpen, isMobile]);

  return (
    <header className="site-header">
      <div className="container header-content">
        <Link to="/" className="logo">
          <img src="/abdmc.svg" alt="Aux bois de mon cœur" />
        </Link>

        {/* Bouton Hamburger Mobile */}
        <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X color="white" size={24} /> : <Menu color="white" size={24} />}
        </button>

        {/* Overlay pour fermer le menu */}
        <AnimatePresence>
          {isOpen && isMobile && (
            <motion.div
              className="menu-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsOpen(false)}
            />
          )}
        </AnimatePresence>

        <nav className="main-nav">
          {isMobile ? (
            <motion.ul
              className={`nav-list ${isOpen ? 'active' : ''}`}
              initial={false}
              animate={isOpen ? { x: 0 } : { x: '100%' }}
              transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
            >
              <li><Link to="/">Accueil</Link></li>
              <li><Link to="/a-propos">À propos</Link></li>

              <li className={`nav-item-dropdown ${isMobileDropdownOpen ? 'mobile-active' : ''}`}>
                <Link
                  to="/realisations"
                  className="nav-link-dropdown"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsMobileDropdownOpen(!isMobileDropdownOpen);
                  }}
                >
                  Nos réalisations
                  <ChevronDown size={14} className="dropdown-arrow" />
                </Link>

                <ul className="dropdown-menu">
                  {categories.map((cat) => (
                    <li key={cat.slug}>
                      <Link to={`/realisations/${cat.slug}`}>{cat.name}</Link>
                    </li>
                  ))}
                </ul>
              </li>

              <li><Link to="/boutique">Boutique</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </motion.ul>
          ) : (
            <ul className="nav-list">
              <li><Link to="/">Accueil</Link></li>
              <li><Link to="/a-propos">À propos</Link></li>

              <li className="nav-item-dropdown">
                <Link to="/realisations" className="nav-link-dropdown">
                  Nos réalisations
                  <ChevronDown size={14} className="dropdown-arrow" />
                </Link>

                <ul className="dropdown-menu">
                  {categories.map((cat) => (
                    <li key={cat.slug}>
                      <Link to={`/realisations/${cat.slug}`}>{cat.name}</Link>
                    </li>
                  ))}
                </ul>
              </li>

              <li><Link to="/boutique">Boutique</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
