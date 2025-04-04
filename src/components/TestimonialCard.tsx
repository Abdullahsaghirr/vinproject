
import React from 'react';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TestimonialCardProps {
  name: string;
  role?: string;
  rating: number;
  testimonial: string;
  className?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  role,
  rating,
  testimonial,
  className,
}) => {
  return (
    <div className={cn("bg-white p-6 rounded-lg shadow-md border border-gray-100", className)}>
      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className={cn(
              i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300",
              "mr-1"
            )}
          />
        ))}
      </div>
      <p className="text-gray-700 mb-4 italic">"{testimonial}"</p>
      <div>
        <p className="font-semibold">{name}</p>
        {role && <p className="text-sm text-gray-500">{role}</p>}
      </div>
    </div>
  );
};

export default TestimonialCard;
