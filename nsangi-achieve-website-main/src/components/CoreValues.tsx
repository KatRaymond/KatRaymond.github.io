
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const CoreValues = () => {
  const values = [
    { title: "Godliness", description: "Maintaining a deep respect for God and spiritual values in all our activities." },
    { title: "Integrity", description: "Upholding moral and ethical principles in all actions and decisions." },
    { title: "Honesty", description: "Promoting truthfulness and sincerity in all interactions." },
    { title: "Excellence", description: "Striving for the highest standards in academic and personal growth." },
    { title: "Respect", description: "Showing consideration for self, others, and property." },
    { title: "Continuous Learning", description: "Encouraging lifelong pursuit of knowledge and skills." },
    { title: "Team Work", description: "Fostering collaboration and cooperation among all members of our community." }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-nsangi-maroon text-center">Our Core Values</h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="border-t-4 border-t-nsangi-maroon hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-2 text-nsangi-maroon">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
