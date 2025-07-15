
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
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900/95 backdrop-blur-lg border-t border-purple-500/20 z-50">
      <div className="flex items-center justify-around h-16 px-4">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={cn(
                "flex flex-col items-center justify-center p-2 rounded-lg transition-all duration-300",
                isActive 
                  ? "text-purple-400 bg-purple-500/20 scale-110" 
                  : "text-gray-400 hover:text-purple-300"
              )}
            >
              <Icon className={cn("w-6 h-6 mb-1", isActive && "animate-pulse")} />
              <span className="text-xs font-medium">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
