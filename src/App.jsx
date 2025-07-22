import { useEffect, useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import About from './components/UI/About';
import Hero from './components/UI/Hero';
import Services from './components/UI/Services';
import Portfolio from './components/UI/Portfolio';
import Contact from './components/UI/Contact';

function App() {

  useEffect(() => {
    AOS.init(); // Initialize AOS library
  }, []);
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About/>
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>)
}
export default App