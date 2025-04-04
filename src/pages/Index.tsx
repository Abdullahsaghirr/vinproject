
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import VehicleLookupForm from '@/components/VehicleLookupForm';
import ServiceCard from '@/components/ServiceCard';
import ProcessStep from '@/components/ProcessStep';
import TestimonialCard from '@/components/TestimonialCard';
import { Button } from '@/components/ui/button';
import { 
  FileText, 
  Shield, 
  Car, 
  DollarSign, 
  HeadlampsFilled,
  CheckCircle2 
} from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-gradient text-white">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
                Know Your Vehicle's <span className="text-brand-orange">Complete History</span>
              </h1>
              <p className="text-lg md:text-xl mb-8 max-w-lg">
                Get detailed vehicle history reports, professional inspections, and expert advice before making your next vehicle purchase.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-brand-orange hover:bg-brand-lightOrange text-white"
                  onClick={() => navigate('/services')}
                >
                  Our Services
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white/10"
                  onClick={() => navigate('/how-it-works')}
                >
                  How It Works
                </Button>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="bg-white p-2 rounded-lg shadow-lg">
                <VehicleLookupForm />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer comprehensive vehicle inspection services to help you make informed decisions about your next vehicle purchase.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Vehicle History Reports"
              description="Get a detailed report of the vehicle's history including accidents, title information, service records, and more."
              icon={FileText}
            />
            <ServiceCard
              title="Pre-Purchase Inspections"
              description="Our certified mechanics will perform a comprehensive inspection before you commit to buying a vehicle."
              icon={Shield}
            />
            <ServiceCard
              title="Safety Assessments"
              description="Ensure your vehicle meets safety standards with our thorough safety inspection and assessment."
              icon={Car}
            />
            <ServiceCard
              title="Vehicle Valuation"
              description="Get an accurate market value assessment for any vehicle based on condition, history, and market trends."
              icon={DollarSign}
            />
            <ServiceCard
              title="Mechanical Inspections"
              description="Detailed examination of all mechanical components to identify potential issues and maintenance needs."
              icon={HeadlampsFilled}
            />
            <ServiceCard
              title="Expert Consultation"
              description="Speak with our automotive experts to get advice on vehicle purchases, maintenance, and more."
              icon={CheckCircle2}
            />
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="section-padding">
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
              title="Review Information"
              description="We'll provide you with detailed information and insights about the vehicle."
            />
            <ProcessStep
              number={4}
              title="Make Informed Decisions"
              description="Use our comprehensive reports to make confident vehicle purchasing decisions."
            />
          </div>
        </div>
      </section>
      
      {/* Sample Report Preview Section */}
      <section className="section-padding bg-brand-blue text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Comprehensive Vehicle Reports</h2>
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
                onClick={() => navigate('/sample-report')}
              >
                View Sample Report
              </Button>
            </div>
            
            <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 transform rotate-1">
              <div className="bg-gray-100 p-4 rounded-md mb-4">
                <h3 className="font-bold text-xl mb-2">Vehicle Report Summary</h3>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="font-medium">Make:</div>
                  <div>Toyota</div>
                  <div className="font-medium">Model:</div>
                  <div>Camry</div>
                  <div className="font-medium">Year:</div>
                  <div>2020</div>
                  <div className="font-medium">VIN:</div>
                  <div>4T1BF1FK7CU123456</div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="p-3 bg-green-50 border-l-4 border-green-500 rounded">
                  <div className="font-semibold text-green-700">No accidents reported</div>
                </div>
                <div className="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded">
                  <div className="font-semibold text-yellow-700">2 previous owners</div>
                </div>
                <div className="p-3 bg-gray-50 border-l-4 border-gray-500 rounded">
                  <div className="font-semibold">Service records: 6 entries</div>
                </div>
                <div className="p-3 bg-gray-50 border-l-4 border-gray-500 rounded">
                  <div className="font-semibold">Last reported odometer: 35,420 miles</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">What Our Customers Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our satisfied customers have to say about our services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              name="Sarah Johnson"
              role="First-time Car Buyer"
              rating={5}
              testimonial="VehicleSavvyCheck saved me from buying a car with hidden damage. Their detailed report revealed issues the seller never mentioned. Worth every penny!"
            />
            <TestimonialCard
              name="Michael Rodriguez"
              role="Car Enthusiast"
              rating={5}
              testimonial="As someone who buys and sells cars frequently, I rely on VehicleSavvyCheck for every transaction. Their reports are comprehensive and have never let me down."
            />
            <TestimonialCard
              name="Jennifer Williams"
              role="Family SUV Owner"
              rating={4}
              testimonial="The pre-purchase inspection gave me peace of mind when buying our family SUV. The inspector found minor issues we were able to negotiate into the final price."
            />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section-padding bg-brand-lightBlue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Don't take chances with your next vehicle purchase. Get the information you need to make a confident decision.
          </p>
          <Button 
            size="lg" 
            className="bg-brand-orange hover:bg-brand-lightOrange text-white"
          >
            Check Your Vehicle Now
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
