import { ReactNode } from "react";

interface HeroBannerProps {
  title: string;
  description?: string;
  children?: ReactNode;
  className?: string;
}

export function HeroBanner({ title, description, children, className = "" }: HeroBannerProps) {
  return (
    <section
      className={`relative overflow-hidden flex items-center justify-center min-h-[280px] pt-24 pb-16 px-4 ${className}`}
      style={{
        background: "linear-gradient(135deg, #020024 0%, #090979 35%, #00d4ff 100%)",
      }}
    >
      {/* Abstract Background Elements */}
      <div 
        className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full opacity-30 blur-[80px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0,212,255,1) 0%, rgba(9,9,121,1) 100%)",
        }}
      />
      <div 
        className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full opacity-20 blur-[100px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0,212,255,1) 0%, rgba(9,9,121,1) 100%)",
        }}
      />
      
      {/* Decorative Curves (SVG) */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 400"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-100 400C200 350 400 100 800 150C1200 200 1400 50 1600 0"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="2"
          />
          <path
            d="M-100 300C300 250 500 0 900 50C1300 100 1500 -50 1700 -100"
            stroke="rgba(255,255,255,0.05)"
            strokeWidth="1"
          />
        </svg>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <h1 className="font-heading font-bold text-white text-4xl md:text-6xl mb-6 tracking-tight">
          {title}
        </h1>
        {description && (
          <p className="text-blue-100/80 text-lg md:text-xl max-w-2xl mx-auto">
            {description}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
