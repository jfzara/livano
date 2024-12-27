export interface StatItem {
    number: string;
    label: string;
  }
  
  export interface Solution {
    title: string;
    subtitle: string;
    description: string;
    impact: string;
    imageSrc: string;
    reverse?: boolean;
    bgClass?: string;
  }
  
  export interface Service {
    title: string;
    description: string;
    icon: string;
  }
  
  export interface ButtonProps {
    variant?: 'primary' | 'outline';
    href?: string;
    children: React.ReactNode;
    className?: string;
  }