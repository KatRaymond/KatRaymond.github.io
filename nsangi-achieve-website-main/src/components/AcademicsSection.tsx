
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Book, GraduationCap } from 'lucide-react';

const AcademicsSection = () => {
  const programs = [
    {
      title: "O-Level Program",
      description: "Comprehensive curriculum covering core subjects required by the national curriculum.",
      icon: <Book className="h-8 w-8 text-nsangi-maroon" />,
      years: "4 years"
    },
    {
      title: "A-Level Program",
      description: "Specialized study paths preparing students for university education.",
      icon: <GraduationCap className="h-8 w-8 text-nsangi-maroon" />,
      years: "2 years"
    }
  ];
  
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-nsangi-maroon">Academic Programs</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Our academic programs are designed to challenge students intellectually and prepare them for future success. We offer both O-Level and A-Level curricula.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {programs.map((program, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  {program.icon}
                </div>
                <CardTitle className="text-2xl text-nsangi-maroon">{program.title}</CardTitle>
                <CardDescription className="text-gray-500">{program.years}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  {program.description}
                </p>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button variant="outline" className="border-nsangi-maroon text-nsangi-maroon hover:bg-nsangi-maroon hover:text-white">
                  Learn More
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4 text-nsangi-maroon">Subject Offerings</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "Mathematics", "English", "Physics", "Chemistry", 
              "Biology", "Geography", "History", "Literature",
              "Computer Studies", "Fine Art", "Agriculture", "Economics"
            ].map((subject, index) => (
              <div key={index} className="bg-gray-100 rounded py-3 px-4 text-gray-800">
                {subject}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademicsSection;
