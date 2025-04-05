
import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

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
  const isMobile = useIsMobile();
  
  return (
    <div className={cn(
      "bg-white p-4 md:p-6 rounded-lg shadow-md border border-gray-100 transition-all duration-300",
      !isMobile && "hover:shadow-xl transform hover:scale-105",
      className
    )}>
      <div className="flex flex-col items-center text-center">
        <div className={cn(
          "p-3 rounded-full bg-brand-blue/10 text-brand-blue mb-4 transition-all duration-300",
          !isMobile && "hover:bg-brand-blue/20",
          iconClassName
        )}>
          <Icon size={isMobile ? 24 : 28} strokeWidth={1.5} className="animate-pulse" />
        </div>
        <h3 className="text-lg md:text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-xs md:text-sm">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
