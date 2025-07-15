
import { useState } from 'react';
import { BottomNavigation } from '@/components/BottomNavigation';
import { UpdatesTab } from '@/components/UpdatesTab';
import { CommunityTab } from '@/components/CommunityTab';
import { StatsTab } from '@/components/StatsTab';
import { MemesTab } from '@/components/MemesTab';

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
    <div className="min-h-screen bg-gray-950">
      {/* Header */}
      <div className="sticky top-0 bg-gray-900/95 backdrop-blur-lg border-b border-purple-500/20 z-40">
        <div className="flex items-center justify-center h-16 px-4">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
              D
            </div>
            <h1 className="text-xl font-bold text-white">DDG Fan Hub</h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 py-6">
        {renderTab()}
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default Index;
