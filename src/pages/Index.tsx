
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import VehicleLookupForm from '@/components/VehicleLookupForm';
import ServiceCard from '@/components/ServiceCard';
import ProcessStep from '@/components/ProcessStep';
import TestimonialCard from '@/components/TestimonialCard';
import PaymentOptions from '@/components/PaymentOptions';
import { Button } from '@/components/ui/button';
import { 
  FileText, 
  Shield, 
  Car, 
  DollarSign, 
  Wrench,
  CheckCircle2,
  AlertTriangle,
  X
} from 'lucide-react';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  const navigate = useNavigate();
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-gradient text-white">
        <div className="container mx-auto px-4 py-20 md:py-28">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
                Get Your Vehicle's <span className="text-brand-orange">Full History Report</span>
              </h1>
              <p className="text-lg md:text-xl mb-8 max-w-lg">
                VIN Inspector provides comprehensive reports on accidents, title status, mileage verification, and more. Get all the information you need before buying your next vehicle.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-brand-orange hover:bg-brand-lightOrange text-white"
                  onClick={() => navigate('/pricing')}
                >
                  View Pricing Plans
                </Button>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-brand-blue mb-4 text-center">Get Your Report Now</h2>
                <VehicleLookupForm />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* What's in Our Reports Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">What's In Our Reports</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our comprehensive reports provide crucial information about the vehicle's history to help you make informed decisions.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <div className="bg-red-50 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                <AlertTriangle className="h-8 w-8 text-red-500" />
              </div>
              <h3 className="font-semibold">Accident History</h3>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <div className="bg-blue-50 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                <Car className="h-8 w-8 text-blue-500" />
              </div>
              <h3 className="font-semibold">Ownership Records</h3>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <div className="bg-green-50 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                <CheckCircle2 className="h-8 w-8 text-green-500" />
              </div>
              <h3 className="font-semibold">Title Status</h3>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <div className="bg-orange-50 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                <Wrench className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="font-semibold">Service History</h3>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <div className="bg-purple-50 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                <FileText className="h-8 w-8 text-purple-500" />
              </div>
              <h3 className="font-semibold">Odometer Records</h3>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <div className="bg-gray-50 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                <Shield className="h-8 w-8 text-gray-500" />
              </div>
              <h3 className="font-semibold">Recall Notices</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle Types Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">Our Plans By Vehicle Type</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer specialized reports tailored to different vehicle types, ensuring you get the most relevant information.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="overflow-hidden">
              <div className="h-48 bg-gray-100 overflow-hidden">
                <img 
                  src="/lovable-uploads/372bd5cc-3442-4b86-9950-81b9ede507b7.png" 
                  alt="Small Car" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Small Cars</h3>
                <p className="text-gray-600 mb-4">Compact cars, hatchbacks, and economy vehicles with our Silver plan.</p>
                <Button 
                  variant="outline" 
                  className="w-full border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white"
                  onClick={() => setShowPaymentModal(true)}
                >
                  Get Silver Plan
                </Button>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden">
              <div className="h-48 bg-gray-100 overflow-hidden">
                <img 
                  src="/lovable-uploads/372bd5cc-3442-4b86-9950-81b9ede507b7.png" 
                  alt="Standard Vehicle" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Standard Vehicles</h3>
                <p className="text-gray-600 mb-4">Sedans, coupes, and mid-size vehicles with our Gold plan.</p>
                <Button 
                  variant="outline" 
                  className="w-full border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white"
                  onClick={() => setShowPaymentModal(true)}
                >
                  Get Gold Plan
                </Button>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden">
              <div className="h-48 bg-gray-100 overflow-hidden">
                <img 
                  src="/lovable-uploads/372bd5cc-3442-4b86-9950-81b9ede507b7.png" 
                  alt="SUV & 4x4" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">SUVs & 4x4s</h3>
                <p className="text-gray-600 mb-4">Large vehicles, trucks, and heavy-duty with our Platinum plan.</p>
                <Button 
                  variant="outline" 
                  className="w-full border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white"
                  onClick={() => setShowPaymentModal(true)}
                >
                  Get Platinum Plan
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">How It Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our simple 4-step process helps you get the information you need quickly and easily.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ProcessStep
              number={1}
              title="Enter Vehicle Details"
              description="Input the VIN or license plate number of the vehicle you want to check."
            />
            <ProcessStep
              number={2}
              title="Select Service"
              description="Choose from our range of services including history reports, inspections, and valuations."
            />
            <ProcessStep
              number={3}
              title="Purchase a Plan"
              description="Select the plan that best fits your needs - Silver, Gold, or Platinum."
            />
            <ProcessStep
              number={4}
              title="Access Your Report"
              description="Receive your comprehensive report instantly and make informed decisions."
            />
          </div>
        </div>
      </section>
      
      {/* Sample Report Preview Section */}
      <section className="section-padding bg-brand-blue text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">What You'll Get in Your Report</h2>
              <p className="text-lg mb-8">
                Our detailed reports provide you with all the information you need to make an informed decision about your vehicle purchase.
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle2 className="mr-3 text-brand-orange mt-1 flex-shrink-0" />
                  <span>Complete accident history and damage reports</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="mr-3 text-brand-orange mt-1 flex-shrink-0" />
                  <span>Verify mileage accuracy and odometer readings</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="mr-3 text-brand-orange mt-1 flex-shrink-0" />
                  <span>Title problems and registration history</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="mr-3 text-brand-orange mt-1 flex-shrink-0" />
                  <span>Service and maintenance records</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="mr-3 text-brand-orange mt-1 flex-shrink-0" />
                  <span>Previous ownership and usage history</span>
                </li>
              </ul>
              
              <Button 
                className="bg-brand-orange hover:bg-brand-lightOrange text-white"
                onClick={() => setShowPaymentModal(true)}
              >
                Get Your Report Now
              </Button>
            </div>
            
            <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 transform md:rotate-1">
              <div className="bg-gray-100 p-4 rounded-md mb-4">
                <h3 className="font-bold text-xl mb-2">Vehicle Report Summary</h3>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="font-medium">Make:</div>
                  <div>Honda</div>
                  <div className="font-medium">Model:</div>
                  <div>Civic</div>
                  <div className="font-medium">Year:</div>
                  <div>2019</div>
                  <div className="font-medium">VIN:</div>
                  <div>2HGFC2F69KH123456</div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="p-3 bg-green-50 border-l-4 border-green-500 rounded">
                  <div className="font-semibold text-green-700">No accidents reported</div>
                </div>
                <div className="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded">
                  <div className="font-semibold text-yellow-700">1 previous owner</div>
                </div>
                <div className="p-3 bg-gray-50 border-l-4 border-gray-500 rounded">
                  <div className="font-semibold">Service records: 8 entries</div>
                </div>
                <div className="p-3 bg-gray-50 border-l-4 border-gray-500 rounded">
                  <div className="font-semibold">Last reported odometer: 28,450 miles</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">Customer Reviews</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              See what our satisfied customers have to say about our vehicle history reports.
            </p>
          </div>
          
          <Carousel className="mx-auto max-w-5xl">
            <CarouselContent>
              <CarouselItem className="md:basis-1/2">
                <div className="p-4">
                  <TestimonialCard
                    name="Sarah Johnson"
                    role="First-time Car Buyer"
                    rating={5}
                    testimonial="VIN Inspector saved me from buying a car with hidden damage. Their detailed report revealed issues the seller never mentioned. Worth every penny!"
                  />
                </div>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2">
                <div className="p-4">
                  <TestimonialCard
                    name="Michael Rodriguez"
                    role="Car Enthusiast"
                    rating={5}
                    testimonial="As someone who buys and sells cars frequently, I rely on VIN Inspector for every transaction. Their reports are comprehensive and have never let me down."
                  />
                </div>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2">
                <div className="p-4">
                  <TestimonialCard
                    name="Jennifer Williams"
                    role="Family SUV Owner"
                    rating={4}
                    testimonial="The pre-purchase inspection gave me peace of mind when buying our family SUV. The inspector found minor issues we were able to negotiate into the final price."
                  />
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section-padding bg-brand-lightBlue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Don't take chances with your next vehicle purchase. Get the information you need to make a confident decision.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-brand-orange hover:bg-brand-lightOrange text-white"
              onClick={() => setShowPaymentModal(true)}
            >
              Check Your Vehicle Now
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white/10"
              onClick={() => navigate('/pricing')}
            >
              View Pricing Plans
            </Button>
          </div>
        </div>
      </section>
      
      {/* Payment Modal */}
      <Dialog open={showPaymentModal} onOpenChange={setShowPaymentModal}>
        <DialogContent className="sm:max-w-3xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center mb-2">Choose Your Plan</DialogTitle>
            <DialogDescription className="text-center max-w-md mx-auto">
              Select the plan that best fits your vehicle type and information needs
            </DialogDescription>
          </DialogHeader>
          
          <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </DialogClose>
          
          <PaymentOptions />
        </DialogContent>
      </Dialog>
      
      <Footer />
    </div>
  );
};

export default Index;
