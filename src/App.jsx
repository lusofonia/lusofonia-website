import React from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import LibraryShowcase from './components/LibraryShowcase';
import FidalgoPromo from './components/FidalgoPromo';
import About from './components/About';

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <LibraryShowcase />
      <FidalgoPromo />
    </Layout>
  );
}

export default App;
