
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
          onClick={() => navigate('/contact')}
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
              Choose the perfect vehicle inspection package to fit your needs and budget. No hidden fees!
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
                description="Basic inspection package with essential vehicle checks"
                color="text-gray-500"
                icon={Shield}
                features={[
                  "Vehicle history report",
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
                description="Comprehensive inspection with detailed analysis"
                color="text-yellow-500"
                icon={BadgeCheck}
                popular
                features={[
                  "Everything in Silver",
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
                description="Premium inspection with expert analysis & recommendations"
                color="text-brand-blue"
                icon={Shield}
                features={[
                  "Everything in Gold",
                  "Expert mechanical inspection",
                  "Detailed photo documentation",
                  "Market value assessment",
                  "Priority 6-hour report delivery",
                  "24/7 dedicated support"
                ]}
              />
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border max-w-3xl mx-auto">
              <h3 className="text-xl font-semibold mb-4 text-center">Need a Custom Inspection?</h3>
              <p className="text-gray-600 text-center mb-6">
                We offer tailored inspection services for dealerships, fleets, and unique vehicles.
                Contact our team to discuss your specific requirements.
              </p>
              <div className="text-center">
                <Button 
                  onClick={() => window.location.href = '/contact'}
                  variant="outline"
                  className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white"
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-brand-blue mb-8">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div className="border-b pb-6">
                <h3 className="text-xl font-semibold mb-2">How long does an inspection take?</h3>
                <p className="text-gray-600">
                  Most inspections take between 1-2 hours to complete. After the inspection, our team prepares a detailed report which is delivered within the timeframe specified in your chosen package.
                </p>
              </div>
              
              <div className="border-b pb-6">
                <h3 className="text-xl font-semibold mb-2">Can I be present during the inspection?</h3>
                <p className="text-gray-600">
                  Yes, you are welcome to be present during the inspection. In fact, we encourage it as it allows you to ask questions and learn more about the vehicle's condition directly from our inspector.
                </p>
              </div>
              
              <div className="border-b pb-6">
                <h3 className="text-xl font-semibold mb-2">What if issues are found during the inspection?</h3>
                <p className="text-gray-600">
                  Our inspectors document all issues found during the inspection. These are compiled in your report along with estimates for repairs and recommendations. This information can be valuable for negotiating the purchase price.
                </p>
              </div>
              
              <div className="pb-6">
                <h3 className="text-xl font-semibold mb-2">Do you offer refunds?</h3>
                <p className="text-gray-600">
                  If we are unable to complete an inspection due to circumstances within our control, we offer a full refund. Please refer to our terms of service for more details on our refund policy.
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
