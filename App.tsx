import React from 'react';
import Hero from './components/Hero';
import Story from './components/Story';
import Transformation from './components/Transformation';
import WhatIsIt from './components/WhatIsIt';
import Process from './components/Process';
import Benefits from './components/Benefits';
import Faq from './components/Faq';
import About from './components/About';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-black min-h-screen text-white selection:bg-gold-500 selection:text-black">
      <Hero />
      <Story />
      <Transformation />
      <WhatIsIt />
      <Process />
      <Benefits />
      <Faq />
      <About />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;