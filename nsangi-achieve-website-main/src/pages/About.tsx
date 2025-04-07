
import React from 'react';
import Navbar from '@/components/Navbar';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';
import AboutHistory from '@/components/AboutHistory';
import CoreValues from '@/components/CoreValues';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="bg-nsangi-maroon py-12">
        <div className="container mx-auto px-4 text-white">
          <h1 className="text-3xl md:text-4xl font-bold">About Us</h1>
          <p className="text-lg mt-2 italic">"Work and Achieve"</p>
        </div>
      </div>
      <main className="flex-grow">
        <AboutSection />
        <AboutHistory />
        <CoreValues />
      </main>
      <Footer />
    </div>
  );
};

export default About;
