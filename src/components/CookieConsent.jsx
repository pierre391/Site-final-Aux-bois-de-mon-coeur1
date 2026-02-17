import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    const consentData = {
      necessary: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem('cookieConsent', JSON.stringify(consentData));
    setIsVisible(false);
  };

  const handleRefuseAll = () => {
    const consentData = {
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem('cookieConsent', JSON.stringify(consentData));
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    const consentData = {
      ...preferences,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem('cookieConsent', JSON.stringify(consentData));
    setIsVisible(false);
    setShowPreferences(false);
  };

  const handleTogglePreference = (key) => {
    if (key === 'necessary') return;
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  if (!isVisible) return null;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'var(--color-primary)',
        color: 'white',
        padding: '1.5rem',
        boxShadow: '0 -4px 12px rgba(0, 0, 0, 0.15)',
        zIndex: 9999,
        animation: 'slideUp 0.3s ease-out',
      }}
    >
      <style>
        {`
          @keyframes slideUp {
            from {
              transform: translateY(100%);
            }
            to {
              transform: translateY(0);
            }
          }

          .cookie-consent-container {
            max-width: 1200px;
            margin: 0 auto;
          }

          .cookie-consent-btn {
            padding: 0.75rem 1.5rem;
            border: none;
            border-radius: 4px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s;
            font-size: 0.95rem;
          }

          .cookie-consent-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          }

          .cookie-consent-btn-accept {
            background-color: var(--color-accent);
            color: var(--color-primary);
          }

          .cookie-consent-btn-refuse {
            background-color: transparent;
            color: white;
            border: 2px solid white;
          }

          .cookie-consent-btn-customize {
            background-color: rgba(255, 255, 255, 0.2);
            color: white;
          }

          .cookie-consent-link {
            color: var(--color-accent);
            text-decoration: underline;
          }

          .cookie-consent-link:hover {
            color: var(--color-text-light);
          }

          .preference-item {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 1rem;
            background-color: rgba(255, 255, 255, 0.1);
            border-radius: 8px;
            margin-bottom: 0.75rem;
          }

          .toggle-switch {
            position: relative;
            width: 50px;
            height: 26px;
            background-color: rgba(255, 255, 255, 0.3);
            border-radius: 13px;
            cursor: pointer;
            transition: background-color 0.3s;
          }

          .toggle-switch.active {
            background-color: var(--color-accent);
          }

          .toggle-switch.disabled {
            opacity: 0.5;
            cursor: not-allowed;
          }

          .toggle-slider {
            position: absolute;
            top: 3px;
            left: 3px;
            width: 20px;
            height: 20px;
            background-color: white;
            border-radius: 50%;
            transition: transform 0.3s;
          }

          .toggle-switch.active .toggle-slider {
            transform: translateX(24px);
          }

          @media (max-width: 768px) {
            .cookie-consent-buttons {
              flex-direction: column;
              gap: 0.75rem;
            }

            .cookie-consent-btn {
              width: 100%;
            }
          }
        `}
      </style>

      <div className="cookie-consent-container">
        {!showPreferences ? (
          <>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1.25rem' }}>
              <p style={{ flex: 1, margin: 0, fontSize: '1rem', lineHeight: '1.6', color: 'white' }}>
                Nous utilisons des cookies pour améliorer votre expérience d'artisanat numérique sur notre site.{' '}
                <Link to="/politique-de-confidentialite" className="cookie-consent-link">
                  En savoir plus
                </Link>
              </p>
            </div>

            <div
              className="cookie-consent-buttons"
              style={{
                display: 'flex',
                gap: '1rem',
                flexWrap: 'wrap',
                alignItems: 'center',
              }}
            >
              <button
                onClick={handleAcceptAll}
                className="cookie-consent-btn cookie-consent-btn-accept"
              >
                Accepter
              </button>
              <button
                onClick={handleRefuseAll}
                className="cookie-consent-btn cookie-consent-btn-refuse"
              >
                Refuser
              </button>
              <button
                onClick={() => setShowPreferences(true)}
                className="cookie-consent-btn cookie-consent-btn-customize"
              >
                Personnaliser
              </button>
            </div>
          </>
        ) : (
          <>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
              <h3 style={{ margin: 0, fontSize: '1.25rem' }}>Préférences de cookies</h3>
              <button
                onClick={() => setShowPreferences(false)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'white',
                  cursor: 'pointer',
                  padding: '0.5rem',
                }}
              >
                <X size={24} />
              </button>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <div className="preference-item">
                <div>
                  <strong>Cookies nécessaires</strong>
                  <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.9rem', opacity: 0.9 }}>
                    Requis pour le fonctionnement du site
                  </p>
                </div>
                <div
                  className="toggle-switch active disabled"
                  style={{ pointerEvents: 'none' }}
                >
                  <div className="toggle-slider" />
                </div>
              </div>

              <div className="preference-item">
                <div>
                  <strong>Cookies analytiques</strong>
                  <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.9rem', opacity: 0.9 }}>
                    Nous aident à comprendre comment vous utilisez notre site
                  </p>
                </div>
                <div
                  className={`toggle-switch ${preferences.analytics ? 'active' : ''}`}
                  onClick={() => handleTogglePreference('analytics')}
                >
                  <div className="toggle-slider" />
                </div>
              </div>

              <div className="preference-item">
                <div>
                  <strong>Cookies marketing</strong>
                  <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.9rem', opacity: 0.9 }}>
                    Utilisés pour personnaliser les publicités
                  </p>
                </div>
                <div
                  className={`toggle-switch ${preferences.marketing ? 'active' : ''}`}
                  onClick={() => handleTogglePreference('marketing')}
                >
                  <div className="toggle-slider" />
                </div>
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                gap: '1rem',
                justifyContent: 'flex-end',
              }}
            >
              <button
                onClick={handleSavePreferences}
                className="cookie-consent-btn cookie-consent-btn-accept"
              >
                Enregistrer mes préférences
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CookieConsent;
