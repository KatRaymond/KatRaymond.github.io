
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative">
      <div className="bg-nsangi-maroon/90 text-white">
        <div className="container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Welcome to Nsangi Secondary School
            </h1>
            <p className="text-xl md:text-2xl mb-8 italic">
              "Work and Achieve"
            </p>
            <p className="text-lg mb-8 opacity-90">
              Empowering students with knowledge, skills, and values to excel in a global society.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-white text-nsangi-maroon hover:bg-gray-100 text-lg px-6 py-3 h-auto">
                Apply Now
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-6 py-3 h-auto">
                Virtual Tour
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background image with overlay */}
      <div className="absolute inset-0 -z-10">
        <img 
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80" 
          alt="School campus" 
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
