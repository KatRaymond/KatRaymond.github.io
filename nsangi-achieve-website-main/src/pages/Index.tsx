
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import AcademicsSection from '@/components/AcademicsSection';
import ELearningSection from '@/components/ELearningSection';
import NewsSection from '@/components/NewsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import SchoolPhotoCarousel from '@/components/SchoolPhotoCarousel';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <SchoolPhotoCarousel />
        <AcademicsSection />
        <ELearningSection />
        <NewsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
