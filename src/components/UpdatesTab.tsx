
import { Play, Radio, Eye, TrendingUp, Heart, Sparkles, Calendar, Clock, Star, Users, MessageCircle, Share2, Zap, Music, Video, Image, Mic, Globe, Bell, Activity, ArrowRight, ChevronDown, Dot, Plus, Filter, Search, Rss, Wifi, Signal } from 'lucide-react';
import { useState, useEffect } from 'react';
import { EnhancedCard } from '@/components/EnhancedCard';

export function UpdatesTab() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [liveViewers, setLiveViewers] = useState(2300);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [notifications, setNotifications] = useState(3);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveViewers(prev => prev + Math.floor(Math.random() * 10 - 5));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const categories = [
    { id: 'all', name: 'All Updates', icon: Rss, count: 24 },
    { id: 'live', name: 'Live', icon: Radio, count: 1 },
    { id: 'music', name: 'Music', icon: Music, count: 8 },
    { id: 'social', name: 'Social', icon: Globe, count: 12 },
    { id: 'announcements', name: 'News', icon: Bell, count: 3 }
  ];

  const liveStreams = [
    {
      id: 1,
      platform: 'Twitch',
      title: 'Gaming with the Squad',
      game: 'Call of Duty: Warzone',
      viewers: liveViewers,
      duration: '2:34:12',
      thumbnail: 'gaming-stream',
      status: 'live'
    },
    {
      id: 2,
      platform: 'Instagram',
      title: 'Studio Session Preview',
      viewers: 890,
      duration: '0:15:30',
      thumbnail: 'studio-session',
      status: 'live'
    }
  ];

  const recentUpdates = [
    {
      id: 1,
      type: 'music-release',
      platform: 'Spotify',
      title: 'New Single: "Midnight Drive"',
      description: 'The latest track from DDG is now streaming everywhere',
      timestamp: new Date(Date.now() - 1000 * 60 * 30),
      engagement: { plays: 45000, likes: 3200, shares: 890 },
      priority: 'high',
      media: 'audio'
    },
    {
      id: 2,
      type: 'collaboration',
      platform: 'YouTube',
      title: 'Collab Video with KSI',
      description: 'Epic collaboration just dropped! Check out this crazy challenge video',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2),
      engagement: { views: 234000, likes: 18500, comments: 4200 },
      priority: 'high',
      media: 'video'
    },
    {
      id: 3,
      type: 'announcement',
      platform: 'Twitter',
      title: 'Tour Dates Revealed!',
      description: 'The wait is over! Tour dates for 2024 are finally here. Tickets go live Friday!',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 6),
      engagement: { retweets: 12000, likes: 45000, replies: 8900 },
      priority: 'high',
      media: 'text'
    },
    {
      id: 4,
      type: 'social',
      platform: 'Instagram',
      title: 'Behind the Scenes',
      description: 'Exclusive look at the music video shoot 📸',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 12),
      engagement: { likes: 89000, comments: 2300, shares: 1200 },
      priority: 'medium',
      media: 'photo'
    }
  ];

  const formatNumber = (num: number) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
    return num.toString();
  };

  const formatTimeAgo = (date: Date) => {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(minutes / 60);
    
    if (hours > 0) return `${hours}h ago`;
    return `${minutes}m ago`;
  };

  const getPlatformColor = (platform: string) => {
    const colors = {
      'Twitch': 'from-purple-500 to-purple-600',
      'YouTube': 'from-red-500 to-red-600',
      'Instagram': 'from-pink-500 to-purple-500',
      'Spotify': 'from-green-500 to-green-600',
      'Twitter': 'from-blue-500 to-blue-600'
    };
    return colors[platform] || 'from-gray-500 to-gray-600';
  };

  return (
    <div className="space-y-6 pb-24">
      {/* Dashboard Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Live Dashboard</h1>
          <p className="text-gray-400">Real-time updates across all platforms</p>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 bg-gray-800/60 backdrop-blur-sm px-4 py-2 rounded-lg border border-gray-700/50">
            <Clock className="w-4 h-4 text-blue-400" />
            <span className="text-white font-mono text-sm">
              {currentTime.toLocaleTimeString()}
            </span>
          </div>
          
          <EnhancedCard className="p-3">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Bell className="w-5 h-5 text-yellow-400" />
                {notifications > 0 && (
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full flex items-center justify-center">
                    <span className="text-xs text-white font-bold">{notifications}</span>
                  </div>
                )}
              </div>
              <span className="text-white text-sm">Notifications</span>
            </div>
          </EnhancedCard>
        </div>
      </div>

      {/* Category Filters */}
      <div className="flex space-x-3 overflow-x-auto scrollbar-hide pb-2">
        {categories.map((category) => {
          const Icon = category.icon;
          const isActive = selectedCategory === category.id;
          
          return (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 whitespace-nowrap ${
                isActive 
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25' 
                  : 'bg-gray-800/60 text-gray-300 hover:bg-gray-700/60 hover:text-white'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span className="font-medium">{category.name}</span>
              <span className={`px-2 py-0.5 rounded-full text-xs ${
                isActive ? 'bg-white/20' : 'bg-gray-600/50'
              }`}>
                {category.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Live Streams Section */}
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
          <h2 className="text-xl font-bold text-white">Currently Live</h2>
          <div className="flex items-center space-x-1 bg-red-500/20 px-2 py-1 rounded-full">
            <Signal className="w-3 h-3 text-red-400" />
            <span className="text-xs text-red-400 font-medium">STREAMING</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {liveStreams.map((stream) => (
            <EnhancedCard key={stream.id} className="p-0 overflow-hidden group">
              <div className="relative aspect-video bg-gradient-to-br from-purple-900/50 to-pink-900/50">
                {/* Live indicator */}
                <div className="absolute top-3 left-3 flex items-center space-x-2 bg-red-500/90 backdrop-blur-sm px-3 py-1 rounded-full z-10">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  <span className="text-white text-xs font-bold">LIVE</span>
                </div>

                {/* Viewer count */}
                <div className="absolute top-3 right-3 flex items-center space-x-1 bg-black/60 backdrop-blur-sm px-2 py-1 rounded-full">
                  <Eye className="w-3 h-3 text-white" />
                  <span className="text-white text-xs font-medium">{formatNumber(stream.viewers)}</span>
                </div>

                {/* Duration */}
                <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm px-2 py-1 rounded">
                  <span className="text-white text-xs font-mono">{stream.duration}</span>
                </div>

                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Play className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>

              <div className="p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <div className={`px-2 py-1 rounded text-xs font-medium text-white bg-gradient-to-r ${getPlatformColor(stream.platform)}`}>
                    {stream.platform}
                  </div>
                  {stream.game && (
                    <span className="text-gray-400 text-xs">{stream.game}</span>
                  )}
                </div>
                
                <h3 className="text-white font-semibold mb-2 group-hover:text-purple-200 transition-colors">
                  {stream.title}
                </h3>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3 text-sm text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{formatNumber(stream.viewers)} watching</span>
                    </div>
                  </div>
                  
                  <button className="flex items-center space-x-1 bg-purple-500/20 hover:bg-purple-500/30 px-3 py-1 rounded-lg transition-colors text-sm text-purple-300">
                    <span>Watch</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </EnhancedCard>
          ))}
        </div>
      </div>

      {/* Recent Updates Feed */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-white">Recent Updates</h2>
          <div className="flex items-center space-x-2">
            <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
              <Search className="w-4 h-4 text-gray-400 hover:text-white" />
            </button>
            <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
              <Filter className="w-4 h-4 text-gray-400 hover:text-white" />
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {recentUpdates.map((update) => (
            <EnhancedCard key={update.id} className="p-6 hover:scale-[1.01] transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${getPlatformColor(update.platform)} flex items-center justify-center flex-shrink-0`}>
                  {update.media === 'audio' && <Music className="w-6 h-6 text-white" />}
                  {update.media === 'video' && <Video className="w-6 h-6 text-white" />}
                  {update.media === 'photo' && <Image className="w-6 h-6 text-white" />}
                  {update.media === 'text' && <MessageCircle className="w-6 h-6 text-white" />}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className={`text-xs px-2 py-1 rounded-full bg-gradient-to-r ${getPlatformColor(update.platform)} text-white font-medium`}>
                      {update.platform}
                    </span>
                    <span className="text-gray-400 text-xs">{formatTimeAgo(update.timestamp)}</span>
                    {update.priority === 'high' && (
                      <div className="flex items-center space-x-1">
                        <Zap className="w-3 h-3 text-yellow-400" />
                        <span className="text-xs text-yellow-400 font-medium">TRENDING</span>
                      </div>
                    )}
                  </div>

                  <h3 className="text-white font-semibold text-lg mb-2 hover:text-purple-200 transition-colors cursor-pointer">
                    {update.title}
                  </h3>

                  <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                    {update.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      {update.engagement.views && (
                        <div className="flex items-center space-x-1 hover:text-white transition-colors cursor-pointer">
                          <Eye className="w-4 h-4" />
                          <span>{formatNumber(update.engagement.views)}</span>
                        </div>
                      )}
                      {update.engagement.plays && (
                        <div className="flex items-center space-x-1 hover:text-white transition-colors cursor-pointer">
                          <Play className="w-4 h-4" />
                          <span>{formatNumber(update.engagement.plays)}</span>
                        </div>
                      )}
                      <div className="flex items-center space-x-1 hover:text-red-400 transition-colors cursor-pointer">
                        <Heart className="w-4 h-4" />
                        <span>{formatNumber(update.engagement.likes)}</span>
                      </div>
                      <div className="flex items-center space-x-1 hover:text-blue-400 transition-colors cursor-pointer">
                        <MessageCircle className="w-4 h-4" />
                        <span>{formatNumber(update.engagement.comments || update.engagement.replies || 0)}</span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                        <Share2 className="w-4 h-4 text-gray-400 hover:text-white" />
                      </button>
                      <button className="flex items-center space-x-1 bg-white/10 hover:bg-white/20 px-3 py-1 rounded-lg transition-colors text-sm">
                        <span>View</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </EnhancedCard>
          ))}
        </div>
      </div>

      {/* Activity Summary */}
      <EnhancedCard className="p-6 bg-gradient-to-r from-gray-800/80 to-gray-900/80">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-white">Today's Activity</h3>
          <div className="flex items-center space-x-2 text-green-400">
            <Activity className="w-4 h-4" />
            <span className="text-sm font-medium">All Systems Active</span>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-400">24</div>
            <div className="text-xs text-gray-400">Total Updates</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-pink-400">1.2M</div>
            <div className="text-xs text-gray-400">Total Reach</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400">8</div>
            <div className="text-xs text-gray-400">Platforms</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400">95%</div>
            <div className="text-xs text-gray-400">Engagement Rate</div>
          </div>
        </div>
      </EnhancedCard>
    </div>
  );
}
