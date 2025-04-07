
import React from 'react';

const AboutHistory = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-nsangi-maroon text-center">Our History</h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6">
              Nsangi Secondary School is a government aided secondary school founded in 1960 by the Anglican Church of Uganda as a community technical school and later converted into a Community Secondary School because of the prevailing conditions by then. It is located in Wakiso district, within Busiro county East along Kampala-Masaka highway.
            </p>
            
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4 text-nsangi-maroon">Our Vision</h3>
              <p className="italic">
                "To be at the peak of producing a competent person to serve the Church, The state and the World"
              </p>
            </div>
            
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4 text-nsangi-maroon">Our Mission</h3>
              <p className="italic">
                "To provide quality education and produce God fearing people through self-reliance and team work"
              </p>
            </div>
            
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4 text-nsangi-maroon">School Address</h3>
              <p>
                Nsangi Secondary School is located in Wakiso district, along Kampala-Masaka highway.<br />
                P. O. BOX 10, NATEETE<br />
                Email: <a href="mailto:nsangiss@yahoo.com" className="text-nsangi-maroon hover:underline">nsangiss@yahoo.com</a>
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4 text-nsangi-maroon">Contact Information</h3>
              <p>
                <strong>Head teacher:</strong> <a href="mailto:emmanalumenya@gmail.com" className="text-nsangi-maroon hover:underline">emmanalumenya@gmail.com</a><br />
                <strong>Mobile:</strong> 0772 433 313<br />
                <strong>Deputy Head teacher:</strong> 0752 501 511
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHistory;
