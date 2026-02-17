import React from 'react';
import Layout from '../components/Layout';

const Shop = () => {
  const products = [
    {
      id: 1,
      name: "Planche à découper en Chêne",
      price: "45€",
      image: "https://images.unsplash.com/photo-1595435742656-5272d0b3fa82?w=800",
      description: "Planche artisanale en chêne massif, huilée à la main"
    },
    {
      id: 2,
      name: "Étagère murale en Noyer",
      price: "120€",
      image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800",
      description: "Étagère design en noyer avec fixations invisibles"
    },
    {
      id: 3,
      name: "Dessous de plat artisanal",
      price: "25€",
      image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=800",
      description: "Set de 3 dessous de plat en bois d'olivier"
    }
  ];

  return (
    <Layout
      title="Boutique"
      subtitle="Découvrez notre sélection d'objets artisanaux en bois"
    >
      <section className="products-section">
        <div className="container">
          <div className="products-grid">
            {products.map((product) => (
              <article key={product.id} className="product-card">
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <div className="product-footer">
                    <span className="product-price">{product.price}</span>
                    <button className="btn btn-small btn-primary">Commander</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="info-section">
        <div className="container">
          <div className="info-grid">
            <div className="info-card">
              <h3>Livraison</h3>
              <p>Livraison possible sur Lille et ses alentours. Nous contacter pour les autres destinations.</p>
            </div>
            <div className="info-card">
              <h3>Paiement</h3>
              <p>Paiement sécurisé par carte bancaire ou virement</p>
            </div>
            <div className="info-card">
              <h3>Garantie</h3>
              <p>Tous nos produits sont garantis et fabriqués avec soin</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Shop;
