import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="page-layout">
      <section className="page-header" style={{ padding: '0.3em 0 0.2em 0' }}>
        <div className="container">
          <h1 style={{ marginBottom: '0.15em', fontSize: '1.75rem' }}>Contact</h1>
          <p className="page-subtitle" style={{ marginBottom: '0', fontSize: '1rem' }}>Parlons de votre projet</p>
        </div>
      </section>

      <div className="page-content">
        <section className="construction-section" style={{ paddingTop: '0.5rem', paddingBottom: '0.5rem' }}>
        <div className="container">
          <div className="construction-content">
            <p style={{ fontSize: '1rem', marginBottom: '0.5em', lineHeight: '1.4' }}>
              Vous avez un projet en tête ? Une question sur nos créations ?
              N'hésitez pas à nous contacter, nous serons ravis d'échanger avec vous.
            </p>

            <div className="contact-info" style={{ marginBottom: '0.5em' }}>
              <h3 style={{ marginBottom: '0.4em', fontSize: '1.1rem' }}>Coordonnées</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', maxWidth: '600px', margin: '0 auto' }}>
                <a href="mailto:contact@auxboisdemoncoeur.fr" className="social-link-card" style={{ width: '100%', padding: '0.5rem 1rem' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.25rem' }}>
                    <span style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--color-primary)' }}>Mail :</span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Mail size={20} />
                      <span style={{ fontSize: '0.95rem' }}>contact@auxboisdemoncoeur.fr</span>
                    </div>
                  </div>
                </a>
                <a href="tel:+33634663968" className="social-link-card" style={{ width: '100%', padding: '0.5rem 1rem' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.25rem' }}>
                    <span style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--color-primary)' }}>Téléphone :</span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Phone size={20} />
                      <span style={{ fontSize: '0.95rem' }}>+33 6 34 66 39 68</span>
                    </div>
                  </div>
                </a>
                <a href="https://maps.app.goo.gl/THp6HfzMEaksngyN7" target="_blank" rel="noopener noreferrer" className="social-link-card" style={{ width: '100%', padding: '0.5rem 1rem' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.25rem' }}>
                    <span style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--color-primary)' }}>Adresse :</span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <MapPin size={20} />
                      <span style={{ fontSize: '0.95rem' }}>64 Rue de l'Égalité, 59830 Bachy</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div style={{ marginTop: '0.5em', padding: '0.75em 1em', backgroundColor: 'var(--color-surface)', borderRadius: 'var(--border-radius-md)', maxWidth: '600px', margin: '0.5em auto 0' }}>
              <h3 style={{ color: 'var(--color-primary)', marginBottom: '0.4em', fontSize: '1.1rem' }}>Horaires d'ouverture</h3>
              <p style={{ marginBottom: '0.25em', fontSize: '0.95rem', lineHeight: '1.4' }}><strong>Lundi - Vendredi :</strong> 9h00 - 18h00</p>
              <p style={{ marginBottom: '0.25em', fontSize: '0.95rem', lineHeight: '1.4' }}><strong>Samedi :</strong> Sur rendez-vous</p>
              <p style={{ marginBottom: 0, fontSize: '0.95rem', lineHeight: '1.4' }}><strong>Dimanche :</strong> Fermé</p>
            </div>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
};

export default Contact;
