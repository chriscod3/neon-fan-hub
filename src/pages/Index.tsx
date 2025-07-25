
import { useState } from 'react';
import { BottomNavigation } from '@/components/BottomNavigation';
import { UpdatesTab } from '@/components/UpdatesTab';
import { CommunityTab } from '@/components/CommunityTab';
import { StatsTab } from '@/components/StatsTab';
import { MemesTab } from '@/components/MemesTab';
import { ParticleBackground } from '@/components/ParticleBackground';
import { AnimatedBackground } from '@/components/AnimatedBackground';

const Index = () => {
  const [activeTab, setActiveTab] = useState('updates');

  const renderTab = () => {
    switch (activeTab) {
      case 'updates':
        return <UpdatesTab />;
      case 'community':
        return <CommunityTab />;
      case 'stats':
        return <StatsTab />;
      case 'memes':
        return <MemesTab />;
      default:
        return <UpdatesTab />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-purple-950/20 relative overflow-hidden">
      {/* Layered Background Effects */}
      <ParticleBackground />
      <AnimatedBackground />

      {/* Enhanced floating elements with better layering */}
      <div className="absolute inset-0 opacity-30" style={{ zIndex: 3 }}>
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-purple-500/15 to-pink-500/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-10 w-96 h-96 bg-gradient-to-br from-pink-500/15 to-purple-600/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Enhanced floating elements with rotation */}
        <div className="absolute top-32 right-32 w-24 h-24 bg-gradient-to-br from-yellow-400/15 to-orange-500/15 rounded-full blur-2xl animate-bounce rotate-45" 
             style={{ animationDuration: '4s' }}></div>
        <div className="absolute bottom-48 left-32 w-32 h-32 bg-gradient-to-br from-green-400/15 to-blue-500/15 rounded-full blur-2xl animate-bounce delay-2000 -rotate-12" 
             style={{ animationDuration: '5s' }}></div>
      </div>

      {/* Enhanced Header with even better depth */}
      <div className="sticky top-0 bg-gray-900/80 backdrop-blur-3xl border-b border-purple-500/20 z-40 shadow-2xl" style={{ zIndex: 40 }}>
        <div className="flex items-center justify-center h-16 px-4 relative">
          <div className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 via-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:shadow-purple-500/50 transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-12">
                D
              </div>
              {/* Multiple spinning rings */}
              <div className="absolute inset-0 rounded-full border-2 border-purple-400/30 animate-spin" style={{ animationDuration: '8s' }}></div>
              <div className="absolute inset-1 rounded-full border border-pink-400/20 animate-spin" style={{ animationDuration: '6s', animationDirection: 'reverse' }}></div>
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent tracking-tight group-hover:scale-105 transition-transform duration-300">
              DDG Fan Hub
            </h1>
            {/* Enhanced pulse indicator */}
            <div className="relative">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
              <div className="absolute inset-0 w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
            </div>
          </div>
          {/* Enhanced glow effect with animation */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/15 via-pink-500/15 to-purple-500/15 blur-xl opacity-60 animate-pulse"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 py-6 relative" style={{ zIndex: 10 }}>
        <div className="animate-fade-in">
          {renderTab()}
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default Index;
