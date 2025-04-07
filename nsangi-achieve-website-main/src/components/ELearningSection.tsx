
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TabsContent, Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

const ELearningSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-nsangi-maroon">E-Learning Platform</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Access quality education anywhere, anytime with our comprehensive e-learning resources and tools.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80" 
              alt="E-Learning Platform" 
              className="rounded-lg shadow-lg"
            />
          </div>
          
          <div>
            <Tabs defaultValue="features" className="w-full">
              <TabsList className="grid grid-cols-2 w-full mb-6">
                <TabsTrigger value="features">Platform Features</TabsTrigger>
                <TabsTrigger value="resources">Learning Resources</TabsTrigger>
              </TabsList>
              
              <TabsContent value="features" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-nsangi-maroon">Interactive Learning</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 text-base">
                      Engage with interactive lessons, quizzes, and simulations designed to enhance understanding and retention.
                    </CardDescription>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-nsangi-maroon">Virtual Classrooms</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 text-base">
                      Participate in live sessions with teachers and classmates through our secure video conferencing tools.
                    </CardDescription>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-nsangi-maroon">Progress Tracking</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 text-base">
                      Monitor your academic progress with detailed analytics and personalized feedback from teachers.
                    </CardDescription>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="resources" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-nsangi-maroon">Digital Library</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 text-base">
                      Access a vast collection of e-books, research papers, and educational materials to support your studies.
                    </CardDescription>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-nsangi-maroon">Video Tutorials</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 text-base">
                      Watch comprehensive video lessons explaining complex topics across all subjects in our curriculum.
                    </CardDescription>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-nsangi-maroon">Practice Tests</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 text-base">
                      Prepare for examinations with our extensive collection of practice questions and past papers.
                    </CardDescription>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
            
            <div className="mt-8">
              <Button className="bg-nsangi-maroon hover:bg-nsangi-dark text-white">
                Access E-Learning Platform
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ELearningSection;
