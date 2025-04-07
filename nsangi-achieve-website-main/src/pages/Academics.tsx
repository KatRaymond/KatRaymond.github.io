
import React from 'react';
import Navbar from '@/components/Navbar';
import AcademicsSection from '@/components/AcademicsSection';
import Footer from '@/components/Footer';

const Academics = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="bg-nsangi-maroon py-12">
        <div className="container mx-auto px-4 text-white">
          <h1 className="text-3xl md:text-4xl font-bold">Academics</h1>
          <p className="text-lg mt-2 italic">"Work and Achieve"</p>
        </div>
      </div>
      <main className="flex-grow">
        <AcademicsSection />
        {/* Additional content can go here */}
      </main>
      <Footer />
    </div>
  );
};

export default Academics;
