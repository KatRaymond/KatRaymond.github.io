
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';

const NewsSection = () => {
  const newsItems = [
    {
      title: "Annual Science Fair Winners",
      date: "April 2, 2025",
      excerpt: "Congratulations to our students who excelled in the district science fair, bringing home top honors in multiple categories.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80"
    },
    {
      title: "Sports Day Celebrations",
      date: "March 15, 2025",
      excerpt: "Students showcased their athletic prowess during our annual sports day, featuring track events, team games, and more.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80"
    },
    {
      title: "New Computer Lab Inauguration",
      date: "February 28, 2025",
      excerpt: "We're proud to announce the opening of our state-of-the-art computer lab equipped with the latest technology.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80"
    }
  ];
  
  const upcomingEvents = [
    {
      title: "Parent-Teacher Conference",
      date: "April 15, 2025",
      time: "2:00 PM - 6:00 PM"
    },
    {
      title: "Cultural Day Celebration",
      date: "April 25, 2025",
      time: "9:00 AM - 3:00 PM"
    },
    {
      title: "Career Guidance Workshop",
      date: "May 5, 2025",
      time: "10:00 AM - 12:00 PM"
    }
  ];
  
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-nsangi-maroon">News & Events</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Stay updated with the latest happenings and upcoming events at Nsangi Secondary School.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {newsItems.map((item, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="h-48">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardDescription>{item.date}</CardDescription>
                <CardTitle className="text-nsangi-maroon">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{item.excerpt}</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="border-nsangi-maroon text-nsangi-maroon hover:bg-nsangi-maroon hover:text-white">
                  Read More
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="bg-gray-100 rounded-lg p-6 md:p-8">
          <h3 className="text-2xl font-bold mb-6 text-nsangi-maroon">Upcoming Events</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="flex items-start space-x-3">
                <Calendar className="text-nsangi-maroon mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">{event.title}</h4>
                  <p className="text-gray-700">{event.date}</p>
                  <p className="text-gray-600">{event.time}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button className="bg-nsangi-maroon hover:bg-nsangi-dark text-white">
              View All Events
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
