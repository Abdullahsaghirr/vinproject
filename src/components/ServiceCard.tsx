
import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
  iconClassName?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon: Icon,
  className,
  iconClassName,
}) => {
  return (
    <div className={cn("bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow", className)}>
      <div className="flex flex-col items-center text-center">
        <div className={cn("p-3 rounded-full bg-brand-blue/10 text-brand-blue mb-4", iconClassName)}>
          <Icon size={28} strokeWidth={1.5} />
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
