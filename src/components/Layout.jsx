import React from 'react';

const Layout = ({ title, subtitle, children }) => {
  return (
    <div className="page-layout">
      <section className="page-header">
        <div className="container">
          <h1>{title}</h1>
          {subtitle && <p className="page-subtitle">{subtitle}</p>}
        </div>
      </section>

      <div className="page-content">
        {children}
      </div>
    </div>
  );
};

export default Layout;
