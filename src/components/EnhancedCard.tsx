
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface EnhancedCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: 'purple' | 'pink' | 'blue' | 'green' | 'orange';
  onClick?: () => void;
}

export function EnhancedCard({ children, className, glowColor = 'purple', onClick }: EnhancedCardProps) {
  const glowColors = {
    purple: 'hover:shadow-purple-500/25',
    pink: 'hover:shadow-pink-500/25',
    blue: 'hover:shadow-blue-500/25',
    green: 'hover:shadow-green-500/25',
    orange: 'hover:shadow-orange-500/25'
  };

  return (
    <div
      className={cn(
        "relative group cursor-pointer transform transition-all duration-500",
        "hover:scale-[1.02] hover:-translate-y-1",
        "bg-gray-800/40 backdrop-blur-xl rounded-2xl border border-gray-700/50",
        "hover:border-purple-500/50 hover:bg-gray-800/60",
        "hover:shadow-2xl",
        glowColors[glowColor],
        className
      )}
      onClick={onClick}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Border animation */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
