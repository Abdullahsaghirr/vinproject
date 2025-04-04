
import React from 'react';
import { cn } from '@/lib/utils';

interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  className?: string;
}

const ProcessStep: React.FC<ProcessStepProps> = ({
  number,
  title,
  description,
  className,
}) => {
  return (
    <div className={cn("relative flex flex-col items-center md:items-start", className)}>
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-brand-blue text-white font-bold text-lg mb-4">
        {number}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-center md:text-left">{title}</h3>
      <p className="text-gray-600 text-center md:text-left">{description}</p>
    </div>
  );
};

export default ProcessStep;
