
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Shield, CheckCircle2, BadgeCheck } from 'lucide-react';

const PricingCard = ({ 
  title, 
  price, 
  description, 
  features, 
  icon: Icon,
  color, 
  popular = false 
}: { 
  title: string; 
  price: number;
  description: string;
  features: string[];
  icon: React.ElementType;
  color: string;
  popular?: boolean;
}) => {
  const navigate = useNavigate();
  
  return (
    <Card className={`border-2 ${popular ? 'border-brand-orange shadow-lg scale-105' : 'border-gray-200'} transition-all hover:shadow-md h-full`}>
      <CardHeader className={`text-center ${popular ? 'bg-brand-orange/10' : ''}`}>
        <div className="mx-auto bg-white p-2 rounded-full w-16 h-16 flex items-center justify-center mb-4 border">
          <Icon className={`w-8 h-8 ${color}`} />
        </div>
        <CardTitle className="text-2xl font-bold">
          {title}
          {popular && <span className="bg-brand-orange text-white text-xs py-1 px-2 rounded-full ml-2 align-middle">Popular</span>}
        </CardTitle>
        <div className="text-3xl font-bold mt-2">${price}</div>
        <p className="text-gray-500 text-sm mt-2">per vehicle</p>
      </CardHeader>
      <CardContent className="pt-6">
        <p className="text-gray-600 mb-6 text-center">{description}</p>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="pt-6">
        <Button 
          onClick={() => navigate('/services')}
          className={`w-full ${popular ? 'bg-brand-orange hover:bg-brand-lightOrange' : ''}`}
        >
          Get Started
        </Button>
      </CardFooter>
    </Card>
  );
};

const Pricing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-gradient text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Transparent <span className="text-brand-orange">Pricing</span> Plans
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Choose the perfect vehicle inspection package based on your vehicle type. No hidden fees!
            </p>
          </div>
        </div>
      </section>
      
      {/* Pricing Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 mb-12">
              <PricingCard
                title="Silver"
                price={45}
                description="Perfect for compact and small vehicles"
                color="text-gray-500"
                icon={Shield}
                features={[
                  "Small cars & compact vehicles",
                  "Basic safety inspection",
                  "Odometer verification",
                  "Title check",
                  "24-hour report delivery",
                  "Email support"
                ]}
              />
              
              <PricingCard
                title="Gold"
                price={60}
                description="Ideal for sedans, wagons, and medium-sized vehicles"
                color="text-yellow-500"
                icon={BadgeCheck}
                popular
                features={[
                  "Regular-sized vehicles",
                  "Mechanical systems check",
                  "Electrical systems inspection",
                  "Interior & exterior condition assessment",
                  "Express 12-hour report delivery",
                  "Email & phone support"
                ]}
              />
              
              <PricingCard
                title="Platinum"
                price={75}
                description="Specialized for SUVs, 4x4s, and larger vehicles"
                color="text-brand-blue"
                icon={Shield}
                features={[
                  "SUVs, 4x4s & large vehicles",
                  "Expert mechanical inspection",
                  "Detailed photo documentation",
                  "Off-road capability assessment",
                  "Priority 6-hour report delivery",
                  "24/7 dedicated support"
                ]}
              />
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border max-w-3xl mx-auto">
              <h3 className="text-xl font-semibold mb-4 text-center">Vehicle Type Comparison</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full border-separate border-spacing-y-2">
                  <thead>
                    <tr>
                      <th className="text-left pb-4">Package</th>
                      <th className="text-left pb-4">Vehicle Types</th>
                      <th className="text-left pb-4">Best For</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-gray-50">
                      <td className="py-3 px-4 font-medium">Silver</td>
                      <td className="py-3 px-4">Hatchbacks, Compact Cars, Small Sedans</td>
                      <td className="py-3 px-4">City driving, commuters, first-time buyers</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="py-3 px-4 font-medium">Gold</td>
                      <td className="py-3 px-4">Mid-size Sedans, Wagons, Crossovers</td>
                      <td className="py-3 px-4">Family vehicles, daily drivers</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="py-3 px-4 font-medium">Platinum</td>
                      <td className="py-3 px-4">Large SUVs, 4x4s, Trucks, Luxury Vehicles</td>
                      <td className="py-3 px-4">Off-roading, towing, premium vehicles</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Blog Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-brand-blue mb-8">Latest from Our Blog</h2>
            
            <div className="space-y-8">
              <div className="border-b pb-8">
                <h3 className="text-xl font-semibold mb-2">Why Vehicle Inspection Costs Vary by Size</h3>
                <p className="text-gray-600 mb-4">
                  Larger vehicles like SUVs and 4x4s require more extensive inspections due to their complex systems and additional components. 
                  Our platinum package is specially designed to thoroughly evaluate these vehicles, including their off-road capabilities, 
                  towing capacity, and specialized suspension systems.
                </p>
                <p className="text-gray-600">
                  The inspection process for larger vehicles typically takes 30-45 minutes longer than compact cars, 
                  requiring specialized equipment and expertise from our certified mechanics.
                </p>
              </div>
              
              <div className="border-b pb-8">
                <h3 className="text-xl font-semibold mb-2">Common Issues Found in Different Vehicle Categories</h3>
                <p className="text-gray-600 mb-4">
                  <strong>Small Cars (Silver):</strong> Our inspectors frequently identify issues with wear on city-driven compact cars, 
                  including premature brake wear, suspension component fatigue from speed bumps and potholes, and minor electrical problems.
                </p>
                <p className="text-gray-600 mb-4">
                  <strong>Medium Vehicles (Gold):</strong> Family vehicles often show signs of interior wear, climate control system issues, 
                  and maintenance-related concerns that our gold package thoroughly examines.
                </p>
                <p className="text-gray-600">
                  <strong>Large Vehicles (Platinum):</strong> SUVs and 4x4s frequently have unique issues including transfer case problems, 
                  differential wear, suspension system damage from off-roading, and higher-than-average oil consumption that our platinum 
                  inspection is designed to detect.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">How to Choose the Right Inspection Package</h3>
                <p className="text-gray-600 mb-4">
                  When selecting an inspection package, consider not just the current size of your vehicle, but its age, 
                  usage patterns, and your purchasing goals. For example, even if you have a compact car, the Gold package 
                  might be more appropriate if the vehicle has high mileage or has been used in harsh conditions.
                </p>
                <p className="text-gray-600">
                  Our experts are always available to help you determine which package will provide the most value based on your 
                  specific vehicle and needs. Contact us for a personalized recommendation before booking your inspection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-brand-blue mb-8">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div className="border-b pb-6">
                <h3 className="text-xl font-semibold mb-2">How long does an inspection take?</h3>
                <p className="text-gray-600">
                  Silver package inspections typically take 1-1.5 hours. Gold package inspections take 1.5-2 hours. 
                  Platinum package inspections for larger vehicles take 2-3 hours to complete thoroughly.
                </p>
              </div>
              
              <div className="border-b pb-6">
                <h3 className="text-xl font-semibold mb-2">What if my vehicle is a crossover or between sizes?</h3>
                <p className="text-gray-600">
                  For vehicles that fall between categories (like larger crossovers or compact SUVs), we recommend selecting 
                  the higher-tier package to ensure all systems are properly inspected. Our team can help you determine the 
                  most appropriate package for your specific vehicle model.
                </p>
              </div>
              
              <div className="border-b pb-6">
                <h3 className="text-xl font-semibold mb-2">Do you offer mobile inspection services?</h3>
                <p className="text-gray-600">
                  Yes, we offer mobile inspection services for all packages. Our certified inspectors can come to your home, 
                  work, or the seller's location to conduct the inspection. There is a small additional fee for locations 
                  outside our standard service area.
                </p>
              </div>
              
              <div className="pb-6">
                <h3 className="text-xl font-semibold mb-2">How do I get started with an inspection?</h3>
                <p className="text-gray-600">
                  Simply click the "Get Started" button on your preferred package, or contact us directly to schedule your 
                  inspection. We'll need some basic information about the vehicle (make, model, year, VIN if available) and 
                  your preferred inspection location and time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Pricing;
