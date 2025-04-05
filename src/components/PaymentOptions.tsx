
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, CreditCard } from 'lucide-react';
import { toast } from 'sonner';

type PlanType = 'Silver' | 'Gold' | 'Platinum';

interface PaymentOptionProps {
  title: PlanType;
  price: number;
  features: string[];
  recommended?: boolean;
  vehicleType: string;
}

const PaymentOption: React.FC<PaymentOptionProps> = ({ title, price, features, recommended, vehicleType }) => {
  const handlePayment = () => {
    // In a real implementation, this would connect to Stripe
    toast.success('Redirecting to payment...', {
      description: `Processing ${title} plan payment ($${price})`,
    });
    
    // Simulate payment processing
    setTimeout(() => {
      toast('Payment successful!', {
        description: 'Your report is ready to view.',
      });
    }, 2000);
  };

  return (
    <Card className={`flex flex-col ${recommended ? 'border-brand-orange shadow-lg' : 'border-gray-200'}`}>
      {recommended && (
        <div className="bg-brand-orange text-white text-center py-1 text-xs font-medium">
          RECOMMENDED
        </div>
      )}
      <CardHeader>
        <CardTitle className="text-xl font-bold flex items-center justify-between">
          {title}
          <span className="text-sm bg-gray-100 px-2 py-1 rounded text-gray-600">
            {vehicleType}
          </span>
        </CardTitle>
        <CardDescription className="text-2xl font-bold">${price}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button 
          onClick={handlePayment}
          className={`w-full ${
            recommended 
              ? 'bg-brand-orange hover:bg-brand-lightOrange' 
              : 'bg-brand-blue hover:bg-brand-lightBlue'
          } text-white`}
        >
          <CreditCard className="mr-2 h-4 w-4" /> Pay with Card
        </Button>
      </CardFooter>
    </Card>
  );
};

const PaymentOptions: React.FC = () => {
  const silverFeatures = [
    'Basic Vehicle History',
    'Title Information',
    'Odometer Records',
    'Small Car Specialized Report',
    'PDF Download',
  ];

  const goldFeatures = [
    'Everything in Silver',
    'Detailed Accident Reports',
    'Service Records',
    'Medium-Sized Vehicle Analysis',
    'Market Value Estimation',
    'Email & PDF Report',
  ];

  const platinumFeatures = [
    'Everything in Gold',
    'Complete Ownership History',
    'Warranty Information',
    'SUV & 4x4 Special Analysis',
    'Heavy-Duty Vehicle Assessment',
    'Premium Support',
    'Printable & Digital Reports',
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-6">
      <PaymentOption 
        title="Silver" 
        price={45} 
        features={silverFeatures} 
        vehicleType="Small Cars"
      />
      <PaymentOption 
        title="Gold" 
        price={60} 
        features={goldFeatures} 
        recommended={true}
        vehicleType="Standard Vehicles"
      />
      <PaymentOption 
        title="Platinum" 
        price={75} 
        features={platinumFeatures}
        vehicleType="SUVs & 4x4s"
      />
    </div>
  );
};

export default PaymentOptions;
