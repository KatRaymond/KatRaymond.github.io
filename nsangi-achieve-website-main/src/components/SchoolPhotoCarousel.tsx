
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const SchoolPhotoCarousel = () => {
  const photos = [
    {
      url: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
      alt: "School main building",
      caption: "Our modern campus facility"
    },
    {
      url: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d",
      alt: "Students in classroom",
      caption: "Engaging classroom environments"
    },
    {
      url: "https://images.unsplash.com/photo-1592303637753-ce1e6b57e160",
      alt: "School library",
      caption: "Our well-stocked library"
    },
    {
      url: "https://images.unsplash.com/photo-1564981797816-1043664bf78d",
      alt: "Sports field",
      caption: "Athletics and sports facilities"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-nsangi-maroon text-center">Campus Gallery</h2>
        
        <div className="max-w-4xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {photos.map((photo, index) => (
                <CarouselItem key={index}>
                  <div className="relative">
                    <img 
                      src={photo.url} 
                      alt={photo.alt} 
                      className="w-full h-[500px] object-cover rounded-lg"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-4 rounded-b-lg">
                      <p className="text-lg font-medium">{photo.caption}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default SchoolPhotoCarousel;
