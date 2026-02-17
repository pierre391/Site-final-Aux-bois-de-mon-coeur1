import { Link } from 'react-router-dom';
import { Facebook, Instagram, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#2C5F7C', color: 'white', padding: '3rem 0', marginTop: 'auto' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '2rem'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <Link
              to="/mentions-legales"
              style={{
                color: 'white',
                textDecoration: 'none',
                fontSize: '0.95rem',
                transition: 'opacity 0.3s'
              }}
              onMouseEnter={(e) => e.target.style.opacity = '0.7'}
              onMouseLeave={(e) => e.target.style.opacity = '1'}
            >
              Mentions légales
            </Link>
            <Link
              to="/politique-de-confidentialite"
              style={{
                color: 'white',
                textDecoration: 'none',
                fontSize: '0.95rem',
                transition: 'opacity 0.3s'
              }}
              onMouseEnter={(e) => e.target.style.opacity = '0.7'}
              onMouseLeave={(e) => e.target.style.opacity = '1'}
            >
              Politique de confidentialité
            </Link>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
              <a
                href="https://www.instagram.com/atelier.aux_bois_de_mon_coeur/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'white', transition: 'opacity 0.3s' }}
                aria-label="Instagram"
                onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'}
                onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
              >
                <Instagram size={32} />
              </a>
              <a
                href="https://www.facebook.com/madeinpevele"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'white', transition: 'opacity 0.3s' }}
                aria-label="Facebook"
                onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'}
                onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
              >
                <Facebook size={32} />
              </a>
              <a
                href="https://maps.app.goo.gl/THp6HfzMEaksngyN7"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'white', transition: 'opacity 0.3s' }}
                aria-label="Google Maps"
                onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'}
                onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
              >
                <MapPin size={32} />
              </a>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'white', textAlign: 'center', margin: 0 }}>
              &copy; {new Date().getFullYear()} Aux Bois De Mon Cœur. Tous droits réservés.
            </p>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Link
              to="/contact"
              style={{
                backgroundColor: 'white',
                color: 'black',
                padding: '0.75rem 2rem',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: '500',
                transition: 'transform 0.2s, box-shadow 0.2s',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.05)';
                e.target.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)';
                e.target.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
              }}
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
