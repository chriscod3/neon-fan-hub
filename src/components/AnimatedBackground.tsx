
import { useEffect, useState } from 'react';

export function AnimatedBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden" style={{ zIndex: 2 }}>
      {/* Mesh gradient that follows mouse */}
      <div 
        className="absolute inset-0 opacity-30 transition-all duration-1000 ease-out"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
            rgba(147, 51, 234, 0.3) 0%, 
            rgba(236, 72, 153, 0.2) 25%, 
            rgba(59, 130, 246, 0.1) 50%, 
            transparent 70%)`
        }}
      />

      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 rotate-45 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-3xl animate-float blur-sm" 
           style={{ animationDelay: '0s', animationDuration: '8s' }} />
      
      <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full animate-float blur-sm" 
           style={{ animationDelay: '2s', animationDuration: '6s' }} />
      
      <div className="absolute bottom-40 left-20 w-20 h-20 rotate-12 bg-gradient-to-br from-pink-500/10 to-yellow-500/10 rounded-2xl animate-float blur-sm" 
           style={{ animationDelay: '4s', animationDuration: '7s' }} />
      
      <div className="absolute bottom-32 right-32 w-28 h-28 bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-full animate-float blur-sm" 
           style={{ animationDelay: '1s', animationDuration: '9s' }} />

      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" 
             style={{
               backgroundImage: `
                 linear-gradient(rgba(147, 51, 234, 0.3) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(147, 51, 234, 0.3) 1px, transparent 1px)
               `,
               backgroundSize: '50px 50px',
               animation: 'grid-move 20s linear infinite'
             }} />
      </div>

      {/* Pulsing orbs */}
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-full blur-3xl animate-pulse" 
           style={{ animationDuration: '4s' }} />
      
      <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-gradient-to-br from-blue-500/5 to-green-500/5 rounded-full blur-3xl animate-pulse" 
           style={{ animationDuration: '6s', animationDelay: '2s' }} />

      {/* Scanning line effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent animate-scan" />
      </div>
    </div>
  );
}
