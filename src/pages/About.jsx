import React from 'react';
import Layout from '../components/Layout';

const About = () => {
  return (
    <Layout title="À Propos">
      <section className="about-content">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <h2>Histoire</h2>
              <p>
                Je m'appelle Pierre, et mon atelier, « Aux Bois de mon Cœur », est installé à Bachy, au cœur de la Pévèle, à seulement 15 kilomètres de Lille. Ce nom, inspiré par la poésie de Brassens, reflète toute la passion que je porte au bois.
              </p>
              <p>
                Mon histoire avec ce matériau a commencé dès l'enfance, mais c'est à Liverpool, au contact d'un luthier, qu'elle s'est véritablement révélée. Aujourd'hui, dans un atelier où quatre générations d'ébénistes ont travaillé avant moi, je perpétue cet art tout en y apportant ma sensibilité et mon expérience.
              </p>
              <p>
                Chaque projet est pour moi l'occasion d'un échange avec vous, pour créer ensemble des pièces uniques, sur mesure, qui répondent à vos envies et à vos besoins. Que ce soit pour un meuble, une restauration ou une création originale, je mets tout mon savoir-faire et mon amour du bois à votre service.
              </p>
              <p>
                N'hésitez pas à pousser la porte de l'atelier pour en discuter autour d'un café !
              </p>
            </div>
            <div className="about-image">
              <img src="/Photo_Pierre_aproposlow.webp" alt="Pierre dans son atelier" loading="lazy" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
