interface ButtonProps {
  variant?: 'primary' | 'outline';
  href?: string;
  children: React.ReactNode;
  className?: string;
}

export function Button({ variant = 'primary', href, children, className }: ButtonProps) {
  const baseStyles = "relative flex justify-center overflow-hidden px-6 py-3 rounded-full font-medium transition-all duration-300";
  const variants = {
    primary: "bg-primary text-white hover:border-[#172554] hover:after:opacity-100 hover:after:scale-[2.5]",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white"
  };

  const Tag = href ? 'a' : 'button';

  return (
    <Tag 
      href={href} 
      className={`${baseStyles} ${variants[variant]} ${className || ''}`}
    >
      <span className="relative z-[5]">
        {children}
      </span>
      <span className="absolute inset-0 w-full h-full bg-[#172554] opacity-0 scale-0 transition-all duration-300 rounded-full"></span>
    </Tag>
  );
}