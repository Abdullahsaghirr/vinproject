
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from 'sonner';
import { Search } from 'lucide-react';

const VehicleLookupForm: React.FC = () => {
  const [vinValue, setVinValue] = useState('');
  const [licensePlate, setLicensePlate] = useState('');
  const [state, setState] = useState('');
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const handleVinSearch = (event: React.FormEvent) => {
    event.preventDefault();
    if (!vinValue || vinValue.length < 17) {
      toast.error('Please enter a valid 17-character VIN number');
      return;
    }
    
    toast.success('Vehicle found!', {
      description: 'Please select a plan to view the complete report',
    });
    
    setShowPaymentModal(true);
    // In a real app, this would initiate an API call
    console.log('VIN search for:', vinValue);
  };

  const handleLicenseSearch = (event: React.FormEvent) => {
    event.preventDefault();
    if (!licensePlate) {
      toast.error('Please enter a license plate number');
      return;
    }
    
    if (!state) {
      toast.error('Please select a state');
      return;
    }
    
    toast.success('Vehicle found!', {
      description: 'Please select a plan to view the complete report',
    });
    
    setShowPaymentModal(true);
    // In a real app, this would initiate an API call
    console.log('License search for:', { licensePlate, state });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <Tabs defaultValue="vin" className="w-full">
        <TabsList className="grid grid-cols-2 mb-4">
          <TabsTrigger value="vin" className="text-sm md:text-base">Search by VIN</TabsTrigger>
          <TabsTrigger value="license" className="text-sm md:text-base">Search by License Plate</TabsTrigger>
        </TabsList>
        
        <TabsContent value="vin">
          <form onSubmit={handleVinSearch} className="space-y-4">
            <div>
              <label htmlFor="vin" className="block text-sm font-medium text-gray-700 mb-1 truncate">
                Vehicle Identification Number (VIN)
              </label>
              <Input
                id="vin"
                placeholder="Enter 17-character VIN number"
                value={vinValue}
                onChange={(e) => setVinValue(e.target.value.toUpperCase())}
                maxLength={17}
                className="w-full"
              />
              <p className="text-xs text-gray-500 mt-1">
                The VIN is typically located on the driver's side dashboard or door jamb.
              </p>
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-brand-blue hover:bg-brand-lightBlue text-white"
            >
              <Search className="mr-2 h-4 w-4" />
              Look Up Vehicle History
            </Button>
          </form>
        </TabsContent>
        
        <TabsContent value="license">
          <form onSubmit={handleLicenseSearch} className="space-y-4">
            <div>
              <label htmlFor="license-plate" className="block text-sm font-medium text-gray-700 mb-1 truncate">
                License Plate Number
              </label>
              <Input
                id="license-plate"
                placeholder="Enter license plate number"
                value={licensePlate}
                onChange={(e) => setLicensePlate(e.target.value.toUpperCase())}
                className="w-full"
              />
            </div>
            
            <div>
              <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1 truncate">
                State
              </label>
              <select
                id="state"
                value={state}
                onChange={(e) => setState(e.target.value)}
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
              >
                <option value="">Select State</option>
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="FL">Florida</option>
                <option value="NY">New York</option>
                <option value="TX">Texas</option>
                {/* More states would be added in a real application */}
              </select>
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-brand-blue hover:bg-brand-lightBlue text-white"
            >
              <Search className="mr-2 h-4 w-4" />
              Look Up Vehicle History
            </Button>
          </form>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default VehicleLookupForm;
