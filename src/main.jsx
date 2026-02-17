import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/style.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';
import Hero from './components/Hero';
import Carousel from './components/Carousel';

import About from './pages/About';
import Contact from './pages/Contact';
import AllProjects from './pages/AllProjects';
import ProjectGallery from './pages/ProjectGallery';
import Shop from './pages/Shop';
import LegalNotice from './pages/LegalNotice';
import PrivacyPolicy from './pages/PrivacyPolicy';

const HomePage = () => (
  <>
    <Hero />
    <Carousel />
  </>
);

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/a-propos" element={<About />} />
            <Route path="/realisations" element={<AllProjects />} />
            <Route path="/realisations/:categorySlug" element={<ProjectGallery />} />
            <Route path="/boutique" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/mentions-legales" element={<LegalNotice />} />
            <Route path="/politique-de-confidentialite" element={<PrivacyPolicy />} />
          </Routes>
        </main>
        <Footer />
        <CookieConsent />
      </div>
    </BrowserRouter>
  );
};

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<App />);
}
