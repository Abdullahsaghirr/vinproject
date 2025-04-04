
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Shield, FileText, Wrench, Car, CheckCircle2, DollarSign } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ServiceCard from '@/components/ServiceCard';

const Services = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-gradient text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Our <span className="text-brand-orange">Comprehensive</span> Services
            </h1>
            <p className="text-lg md:text-xl mb-8">
              From basic inspections to detailed mechanical assessments, we offer a wide range of services tailored to your vehicle type.
            </p>
          </div>
        </div>
      </section>
      
      {/* Services Overview Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">What We Offer</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our expert team provides comprehensive vehicle inspection services customized for every vehicle type.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Small Vehicle Inspections"
              description="Comprehensive inspections tailored for compact cars, hatchbacks, and small sedans."
              icon={Car}
              iconClassName="bg-green-50 text-green-600"
            />
            <ServiceCard
              title="Regular Vehicle Inspections"
              description="Detailed assessments for medium-sized vehicles including sedans, wagons, and small crossovers."
              icon={Shield}
              iconClassName="bg-yellow-50 text-yellow-600"
            />
            <ServiceCard
              title="Large Vehicle Inspections"
              description="Specialized inspections for SUVs, 4x4s, trucks, and other large vehicles."
              icon={Wrench}
              iconClassName="bg-blue-50 text-blue-600"
            />
            <ServiceCard
              title="Pre-Purchase Reports"
              description="Comprehensive reports with detailed findings and recommendations before you buy."
              icon={FileText}
            />
            <ServiceCard
              title="Vehicle Valuation"
              description="Get accurate market value assessments for any vehicle based on condition and history."
              icon={DollarSign}
            />
            <ServiceCard
              title="Expert Consultation"
              description="One-on-one consultations with our automotive experts for specialized advice."
              icon={CheckCircle2}
            />
          </div>
        </div>
      </section>
      
      {/* Vehicle Categories Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-blue mb-4">Vehicle Categories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer specialized inspection services based on the size and type of your vehicle.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Small Vehicles */}
            <Card className="p-6">
              <h3 className="text-2xl font-bold mb-4 text-brand-blue">Small Vehicles</h3>
              <div className="bg-gray-200 h-[180px] rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-500">Compact Car Image</span>
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Hatchbacks</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Compact Cars</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Small Sedans</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>City Cars</span>
                </li>
              </ul>
              <p className="text-gray-600 mb-4">
                Our Silver package provides comprehensive inspection for these smaller vehicles, 
                focusing on city driving concerns, fuel efficiency, and common compact car issues.
              </p>
              <Button 
                className="w-full"
                onClick={() => navigate('/pricing')}
              >
                View Silver Package
              </Button>
            </Card>
            
            {/* Medium Vehicles */}
            <Card className="p-6">
              <h3 className="text-2xl font-bold mb-4 text-brand-blue">Medium Vehicles</h3>
              <div className="bg-gray-200 h-[180px] rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-500">Sedan Image</span>
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Mid-size Sedans</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Wagons</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Small Crossovers</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Family Cars</span>
                </li>
              </ul>
              <p className="text-gray-600 mb-4">
                Our Gold package is designed for these regular-sized vehicles, with comprehensive mechanical 
                and safety checks ideal for family vehicles and daily drivers.
              </p>
              <Button 
                className="w-full bg-brand-orange hover:bg-brand-lightOrange"
                onClick={() => navigate('/pricing')}
              >
                View Gold Package
              </Button>
            </Card>
            
            {/* Large Vehicles */}
            <Card className="p-6">
              <h3 className="text-2xl font-bold mb-4 text-brand-blue">Large Vehicles</h3>
              <div className="bg-gray-200 h-[180px] rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-500">SUV Image</span>
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Large SUVs</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>4x4 Vehicles</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Trucks</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Large Luxury Vehicles</span>
                </li>
              </ul>
              <p className="text-gray-600 mb-4">
                Our Platinum package offers specialized inspection for larger vehicles, with additional focus on 
                off-road capabilities, towing systems, and specialized components.
              </p>
              <Button 
                className="w-full"
                onClick={() => navigate('/pricing')}
              >
                View Platinum Package
              </Button>
            </Card>
          </div>
        </div>
      </section>
      
      {/* What We Check Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-blue mb-4">What We Check</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our comprehensive inspection process covers all critical areas of your vehicle.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Shield className="mr-2 text-brand-blue" size={20} />
                <span>Safety Systems</span>
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Braking system condition and performance</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Tire condition, wear patterns, and age</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Suspension components and shock absorbers</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Airbag system diagnostic check</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Wrench className="mr-2 text-brand-blue" size={20} />
                <span>Mechanical Systems</span>
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Engine condition and performance</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Transmission operation and fluid condition</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Cooling system integrity and condition</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Exhaust system check</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <FileText className="mr-2 text-brand-blue" size={20} />
                <span>Documentation & History</span>
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>VIN verification and history report</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Title status and registration verification</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Odometer verification and history</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Service records review (when available)</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Car className="mr-2 text-brand-blue" size={20} />
                <span>Body & Interior</span>
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Paint condition and signs of previous repairs</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Frame/structural integrity inspection</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Interior condition and functionality</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Signs of water or fire damage</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Vehicle Type Specific Checks */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-blue mb-4">Vehicle-Specific Inspections</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We tailor our inspection process to address the unique concerns for each vehicle type.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Small Vehicle Checks */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-brand-blue mb-4">Small Vehicle Focus Areas</h3>
              <p className="text-gray-700 mb-4">
                For small and compact vehicles, our Silver package includes specialized checks for:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>City driving wear patterns</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Fuel efficiency performance</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Frequent start-stop driving impacts</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Urban parking damage assessment</span>
                </li>
              </ul>
            </div>
            
            {/* Medium Vehicle Checks */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-brand-blue mb-4">Medium Vehicle Focus Areas</h3>
              <p className="text-gray-700 mb-4">
                For mid-sized and family vehicles, our Gold package includes specialized checks for:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Family safety features</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Cargo capacity integrity</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Highway driving condition assessment</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Interior durability and wear</span>
                </li>
              </ul>
            </div>
            
            {/* Large Vehicle Checks */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-brand-blue mb-4">Large Vehicle Focus Areas</h3>
              <p className="text-gray-700 mb-4">
                For SUVs, 4x4s and larger vehicles, our Platinum package includes specialized checks for:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>4x4 and AWD systems</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Transfer case and differential condition</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Towing system assessment</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Off-road usage evaluation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Heavy-duty suspension components</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Undercarriage protection</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section-padding bg-brand-lightBlue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Inspect Your Vehicle?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Choose the right inspection package based on your vehicle type and get peace of mind with your next purchase.
          </p>
          <Button 
            size="lg" 
            className="bg-brand-orange hover:bg-brand-lightOrange text-white"
            onClick={() => navigate('/pricing')}
          >
            View Pricing Packages
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Services;
