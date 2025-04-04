
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Shield, Award, UserCheck, Wrench, Clock, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-gradient text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              About <span className="text-brand-orange">VehicleSavvy</span>Check
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Helping you make confident vehicle decisions with expert inspections since 2015.
            </p>
          </div>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <div className="bg-gray-200 h-[300px] rounded-lg flex items-center justify-center">
                  <span className="text-gray-500">Company Founder Image</span>
                </div>
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold text-brand-blue mb-6">Our Story</h2>
                <p className="text-gray-700 mb-4">
                  VehicleSavvyCheck was founded in 2015 by automotive expert Michael Roberts, who saw firsthand how many 
                  people were making costly vehicle purchase mistakes due to hidden issues and inadequate pre-purchase inspections.
                </p>
                <p className="text-gray-700 mb-4">
                  After 15 years working as a master mechanic and vehicle inspector for major dealerships, Michael decided to 
                  create a service that truly put the buyer's interests first, providing honest, thorough assessments of vehicles 
                  before purchase.
                </p>
                <p className="text-gray-700">
                  What started as a one-man operation has grown into a nationwide network of certified inspectors, all committed to 
                  our founding principle: helping people make confident, informed vehicle decisions through expert inspection services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Mission & Values Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-blue mb-4">Our Mission & Values</h2>
            <p className="text-gray-700">
              At VehicleSavvyCheck, we're committed to transparency, expertise, and customer satisfaction in everything we do.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-brand-blue/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-brand-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Integrity</h3>
              <p className="text-gray-600">
                We provide honest, unbiased assessments of every vehicle we inspect, with no hidden agendas or affiliations with sellers.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-brand-blue/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-brand-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Excellence</h3>
              <p className="text-gray-600">
                Our certified inspectors follow the most comprehensive inspection protocols in the industry, leaving no system unchecked.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-brand-blue/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <UserCheck className="h-8 w-8 text-brand-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Empowerment</h3>
              <p className="text-gray-600">
                We believe in educating our customers, explaining our findings in clear terms, and helping you make informed decisions.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Team Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-blue mb-4">Our Expert Team</h2>
            <p className="text-gray-700">
              Meet the certified professionals who make VehicleSavvyCheck the trusted name in vehicle inspections.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {/* Team Member 1 */}
            <div className="text-center">
              <div className="bg-gray-200 h-[200px] w-[200px] rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-gray-500">Team Member Photo</span>
              </div>
              <h3 className="text-xl font-semibold">Michael Roberts</h3>
              <p className="text-brand-blue">Founder & Lead Inspector</p>
              <p className="text-gray-600 mt-2">ASE Master Technician with 20+ years experience</p>
            </div>
            
            {/* Team Member 2 */}
            <div className="text-center">
              <div className="bg-gray-200 h-[200px] w-[200px] rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-gray-500">Team Member Photo</span>
              </div>
              <h3 className="text-xl font-semibold">Sarah Johnson</h3>
              <p className="text-brand-blue">SUV & 4x4 Specialist</p>
              <p className="text-gray-600 mt-2">Specialized in off-road and heavy-duty vehicles</p>
            </div>
            
            {/* Team Member 3 */}
            <div className="text-center">
              <div className="bg-gray-200 h-[200px] w-[200px] rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-gray-500">Team Member Photo</span>
              </div>
              <h3 className="text-xl font-semibold">David Chen</h3>
              <p className="text-brand-blue">Electric Vehicle Expert</p>
              <p className="text-gray-600 mt-2">Certified in EV and hybrid vehicle systems</p>
            </div>
            
            {/* Team Member 4 */}
            <div className="text-center">
              <div className="bg-gray-200 h-[200px] w-[200px] rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-gray-500">Team Member Photo</span>
              </div>
              <h3 className="text-xl font-semibold">Maria Rodriguez</h3>
              <p className="text-brand-blue">Customer Service Director</p>
              <p className="text-gray-600 mt-2">Ensuring exceptional client experiences since 2017</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Process Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-blue mb-4">Our Inspection Process</h2>
            <p className="text-gray-700">
              We follow a rigorous, standardized process to ensure every vehicle receives a thorough evaluation.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start">
                  <div className="bg-brand-orange/10 p-2 rounded-full mr-4 flex-shrink-0">
                    <span className="text-brand-orange font-bold text-xl">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Initial Assessment</h3>
                    <p className="text-gray-600">
                      We begin with a comprehensive exterior and interior evaluation, documenting the vehicle's condition with detailed photos.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start">
                  <div className="bg-brand-orange/10 p-2 rounded-full mr-4 flex-shrink-0">
                    <span className="text-brand-orange font-bold text-xl">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Mechanical Inspection</h3>
                    <p className="text-gray-600">
                      Our experts thoroughly examine all mechanical systems, including the engine, transmission, steering, and braking systems.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start">
                  <div className="bg-brand-orange/10 p-2 rounded-full mr-4 flex-shrink-0">
                    <span className="text-brand-orange font-bold text-xl">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Electrical & Electronic Systems</h3>
                    <p className="text-gray-600">
                      We test all electrical components, electronics, and run advanced diagnostic scans to identify any stored error codes.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start">
                  <div className="bg-brand-orange/10 p-2 rounded-full mr-4 flex-shrink-0">
                    <span className="text-brand-orange font-bold text-xl">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Road Test & Final Report</h3>
                    <p className="text-gray-600">
                      Every inspection includes a road test to evaluate performance, followed by a comprehensive report with findings and recommendations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-blue mb-4">What Our Clients Say</h2>
            <p className="text-gray-700">
              Thousands of satisfied customers have trusted us with their vehicle inspection needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-gray-200 h-12 w-12 rounded-full mr-4 flex items-center justify-center">
                  <span className="text-gray-500 text-xs">Photo</span>
                </div>
                <div>
                  <h4 className="font-semibold">Robert Thompson</h4>
                  <p className="text-gray-600 text-sm">SUV Owner - Platinum Package</p>
                </div>
              </div>
              <p className="text-gray-700">
                "The Platinum inspection for my Range Rover was incredibly thorough. The inspector identified several issues 
                that would have cost thousands to fix. I used this information to negotiate $4,500 off the asking price. 
                Best $75 I've ever spent!"
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-gray-200 h-12 w-12 rounded-full mr-4 flex items-center justify-center">
                  <span className="text-gray-500 text-xs">Photo</span>
                </div>
                <div>
                  <h4 className="font-semibold">Jennifer Kim</h4>
                  <p className="text-gray-600 text-sm">Sedan Owner - Gold Package</p>
                </div>
              </div>
              <p className="text-gray-700">
                "As a first-time car buyer, I was nervous about getting ripped off. VehicleSavvyCheck's Gold inspection 
                gave me complete confidence in my purchase. Their inspector explained everything in simple terms and even advised 
                me on maintenance priorities. Highly recommend!"
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section-padding bg-brand-lightBlue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Don't take chances with your next vehicle purchase. Our expert team is ready to provide the insights you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-brand-orange hover:bg-brand-lightOrange text-white"
              onClick={() => navigate('/services')}
            >
              View Our Services
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/10"
              onClick={() => navigate('/pricing')}
            >
              Check Our Pricing
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
