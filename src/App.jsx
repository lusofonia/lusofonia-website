import React from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import LibraryShowcase from './components/LibraryShowcase';
import DonationBanner from './components/DonationBanner';
import FidalgoPromo from './components/FidalgoPromo';
import About from './components/About';
import AdPopup from './components/AdPopup';

function App() {
  return (
    <Layout>
      <Hero />
      <DonationBanner />
      <About />
      <LibraryShowcase />
      <FidalgoPromo />
      <AdPopup />
    </Layout>
  );
}

export default App;
