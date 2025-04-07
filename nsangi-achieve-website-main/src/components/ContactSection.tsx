
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, Phone } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-nsangi-maroon">Contact Us</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Have questions? We're here to help. Reach out to us through any of the channels below.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="flex justify-center mb-4">
              <MapPin className="h-8 w-8 text-nsangi-maroon" />
            </div>
            <h3 className="text-xl font-bold mb-2">Our Location</h3>
            <p className="text-gray-700">Wakiso district, Busiro county East</p>
            <p className="text-gray-700">Along Kampala-Masaka highway</p>
            <p className="text-gray-700 mt-2">P.O. BOX 10, NATEETE</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="flex justify-center mb-4">
              <Phone className="h-8 w-8 text-nsangi-maroon" />
            </div>
            <h3 className="text-xl font-bold mb-2">Phone Numbers</h3>
            <p className="text-gray-700">Head teacher: 0772 433 313</p>
            <p className="text-gray-700">Deputy Head teacher: 0752 501 511</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="flex justify-center mb-4">
              <Mail className="h-8 w-8 text-nsangi-maroon" />
            </div>
            <h3 className="text-xl font-bold mb-2">Email Address</h3>
            <p className="text-gray-700">School: nsangiss@yahoo.com</p>
            <p className="text-gray-700">Head teacher: emmanalumenya@gmail.com</p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-bold mb-6 text-nsangi-maroon">Send Us a Message</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-1">Full Name</label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-1">Email Address</label>
                  <Input id="email" type="email" placeholder="Your email" />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-gray-700 mb-1">Subject</label>
                <Input id="subject" placeholder="Message subject" />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-1">Message</label>
                <Textarea id="message" placeholder="Your message" rows={4} />
              </div>
              <Button className="bg-nsangi-maroon hover:bg-nsangi-dark text-white">
                Send Message
              </Button>
            </form>
          </div>
          
          <div>
            <div className="h-full rounded-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31916.089517963787!2d32.4950377!3d0.3411244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177db9a87780b3ad%3A0xafd1dc7434e667e2!2sNsangi%2C%20Uganda!5e0!3m2!1sen!2sus!4v1712354345671!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0, minHeight: "400px" }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
