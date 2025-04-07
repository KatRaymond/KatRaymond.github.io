
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  const features = [
    {
      title: "Academic Excellence",
      description: "Comprehensive curriculum designed to foster critical thinking and academic achievement."
    },
    {
      title: "Skilled Educators",
      description: "Dedicated teachers committed to inspiring and nurturing each student's potential."
    },
    {
      title: "Modern Facilities",
      description: "Well-equipped laboratories, library, and sports facilities to support holistic development."
    },
    {
      title: "Character Development",
      description: "Programs focused on building integrity, responsibility, and leadership skills."
    }
  ];
  
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-nsangi-maroon">About Our School</h2>
            <p className="text-lg mb-6 text-gray-700">
              Founded in 1960 by the Anglican Church of Uganda, Nsangi Secondary School has established itself as a center of academic excellence and character development. Originally started as a community technical school, it was later converted into a Community Secondary School.
            </p>
            <p className="text-lg mb-8 text-gray-700">
              Located in Wakiso district, within Busiro county East along the Kampala-Masaka highway, our school focuses on nurturing young minds to become responsible citizens and future leaders who serve the Church, the State, and the World.
            </p>
            <Link to="/about">
              <Button className="bg-nsangi-maroon hover:bg-nsangi-dark text-white">
                Learn More About Us
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-t-4 border-t-nsangi-maroon">
                <CardHeader>
                  <CardTitle className="text-nsangi-maroon">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
