
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Clock, CheckCircle2 } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    toast({
      title: "Message sent",
      description: "We've received your message and will get back to you soon.",
      duration: 5000,
    });
    
    // Reset the form
    e.currentTarget.reset();
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-gradient text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Get In <span className="text-brand-orange">Touch</span> With Us
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Have questions about our vehicle inspection services? Need a custom quote? We're here to help!
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-brand-blue mb-6">Send Us a Message</h2>
              <Card>
                <CardContent className="pt-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="firstName" className="text-sm font-medium mb-2 block">
                          First Name
                        </label>
                        <Input 
                          id="firstName"
                          placeholder="Enter your first name"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="text-sm font-medium mb-2 block">
                          Last Name
                        </label>
                        <Input 
                          id="lastName"
                          placeholder="Enter your last name"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="text-sm font-medium mb-2 block">
                        Email Address
                      </label>
                      <Input 
                        id="email"
                        type="email"
                        placeholder="Enter your email address"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="text-sm font-medium mb-2 block">
                        Phone Number
                      </label>
                      <Input 
                        id="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="text-sm font-medium mb-2 block">
                        Subject
                      </label>
                      <Input 
                        id="subject"
                        placeholder="How can we help you?"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="text-sm font-medium mb-2 block">
                        Message
                      </label>
                      <Textarea 
                        id="message"
                        placeholder="Write your message here..."
                        className="min-h-[120px]"
                        required
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-brand-orange hover:bg-brand-lightOrange"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
            
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-brand-blue mb-6">Contact Information</h2>
              
              <div className="bg-white shadow-md rounded-lg p-6 mb-8">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-brand-blue/10 p-3 rounded-full mr-4">
                      <Mail className="h-6 w-6 text-brand-blue" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Email Us</h3>
                      <p className="text-gray-600 mt-1">info@vehiclesavvycheck.com</p>
                      <p className="text-gray-600">support@vehiclesavvycheck.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-brand-blue/10 p-3 rounded-full mr-4">
                      <Phone className="h-6 w-6 text-brand-blue" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Call Us</h3>
                      <p className="text-gray-600 mt-1">(555) 123-4567</p>
                      <p className="text-gray-600">Mon-Fri: 8:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-brand-blue/10 p-3 rounded-full mr-4">
                      <MapPin className="h-6 w-6 text-brand-blue" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Visit Us</h3>
                      <p className="text-gray-600 mt-1">123 Inspection Avenue</p>
                      <p className="text-gray-600">Auto City, AC 12345</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-brand-blue/10 p-3 rounded-full mr-4">
                      <Clock className="h-6 w-6 text-brand-blue" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Business Hours</h3>
                      <p className="text-gray-600 mt-1">Monday - Friday: 8:00 AM - 6:00 PM</p>
                      <p className="text-gray-600">Saturday: 9:00 AM - 3:00 PM</p>
                      <p className="text-gray-600">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-brand-lightBlue text-white rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Why Choose VehicleSavvyCheck?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-brand-orange mr-2 flex-shrink-0 mt-0.5" />
                    <span>Certified mechanics with 10+ years of experience</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-brand-orange mr-2 flex-shrink-0 mt-0.5" />
                    <span>Comprehensive vehicle inspection reports</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-brand-orange mr-2 flex-shrink-0 mt-0.5" />
                    <span>Fast turnaround times for urgent inspections</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-brand-orange mr-2 flex-shrink-0 mt-0.5" />
                    <span>Transparent pricing with no hidden fees</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-brand-orange mr-2 flex-shrink-0 mt-0.5" />
                    <span>Service available 7 days a week (by appointment)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-brand-orange mr-2 flex-shrink-0 mt-0.5" />
                    <span>Satisfaction guaranteed or your money back</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section - Replace with an actual map in a real implementation */}
      <section className="bg-gray-200 h-[400px] flex items-center justify-center">
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-2">Interactive Map</h3>
          <p className="text-gray-600">Map would be displayed here in a real implementation</p>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
