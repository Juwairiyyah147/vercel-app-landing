//import logo from './logo.svg';
//import './App.css';

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Advantages from './components/Advantages';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
function App() {
    return (
        <div className="App">
            <Navbar />
            <Hero />
            <Features />
            <Advantages />
            <Testimonials/>
            <FAQ />
            <Footer/>
        </div>
    );
}

export default App;
