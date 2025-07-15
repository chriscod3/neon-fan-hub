
import { Home, Users, BarChart3, Image } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BottomNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const tabs = [
  { id: 'updates', label: 'Updates', icon: Home },
  { id: 'community', label: 'Community', icon: Users },
  { id: 'stats', label: 'Stats', icon: BarChart3 },
  { id: 'memes', label: 'Meme Wall', icon: Image },
];

export function BottomNavigation({ activeTab, onTabChange }: BottomNavigationProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900/90 backdrop-blur-xl border-t border-purple-500/20 z-50 shadow-2xl">
      {/* Gradient line at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
      
      <div className="flex items-center justify-around h-20 px-4 relative">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={cn(
                "flex flex-col items-center justify-center p-3 rounded-2xl transition-all duration-500 transform relative group",
                isActive 
                  ? "text-white scale-110" 
                  : "text-gray-400 hover:text-purple-300 hover:scale-105"
              )}
            >
              {/* Active background with glow */}
              {isActive && (
                <>
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 via-pink-500/20 to-purple-600/30 rounded-2xl blur-sm"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl border border-purple-400/30"></div>
                </>
              )}
              
              {/* Hover glow */}
              {!isActive && (
                <div className="absolute inset-0 bg-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              )}
              
              <div className="relative z-10 flex flex-col items-center space-y-1">
                <Icon className={cn(
                  "w-6 h-6 transition-all duration-300",
                  isActive && "drop-shadow-lg"
                )} />
                <span className={cn(
                  "text-xs font-medium transition-all duration-300",
                  isActive ? "text-white drop-shadow-sm" : "text-gray-400"
                )}>
                  {tab.label}
                </span>
              </div>
              
              {/* Active indicator dot */}
              {isActive && (
                <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse"></div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
