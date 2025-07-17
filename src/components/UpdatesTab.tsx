
import { Play, Radio, Eye, TrendingUp, Heart, Sparkles, Calendar, Clock, Star, Users, MessageCircle, Share2, Zap, Music, Video, Image, Mic, Globe, Bell, Activity, ArrowRight, ChevronDown, Dot } from 'lucide-react';
import { useState, useEffect } from 'react';
import { EnhancedCard } from '@/components/EnhancedCard';

export function UpdatesTab() {
  const [isLive, setIsLive] = useState(true);
  const [liveViewers, setLiveViewers] = useState(2300);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [expandedUpdate, setExpandedUpdate] = useState<number | null>(null);

  useEffect(() => {
    if (isLive) {
      const interval = setInterval(() => {
        setLiveViewers(prev => prev + Math.floor(Math.random() * 10 - 5));
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isLive]);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const updateFeed = [
    {
      id: 1,
      type: 'live',
      platform: 'Twitch',
      title: '🔴 DDG is LIVE on Twitch!',
      description: 'Gaming session with fans - Come hang out!',
      timestamp: '2 minutes ago',
      engagement: { views: liveViewers, likes: 432, comments: 89 },
      color: 'from-purple-500 to-pink-500',
      icon: Radio,
      priority: 'high',
      media: 'live-stream'
    },
    {
      id: 2,
      type: 'music',
      platform: 'YouTube',
      title: 'New Music Video: "Moonwalking in Calabasas"',
      description: 'The official music video is now live! Featuring some incredible cinematography and choreography.',
      timestamp: '2 hours ago',
      engagement: { views: 156000, likes: 12400, comments: 2100 },
      color: 'from-red-500 to-orange-500',
      icon: Video,
      priority: 'high',
      media: 'video',
      duration: '3:24'
    },
    {
      id: 3,
      type: 'social',
      platform: 'Instagram',
      title: 'Behind the Scenes: Studio Session',
      description: 'Working on something special 🎵 Can\'t wait for y\'all to hear this new track!',
      timestamp: '4 hours ago',
      engagement: { views: 89000, likes: 15600, comments: 892 },
      color: 'from-pink-500 to-purple-500',
      icon: Mic,
      priority: 'medium',
      media: 'photo'
    },
    {
      id: 4,
      type: 'music',
      platform: 'Spotify',
      title: 'New Single: "Fast Lane" Available Now',
      description: 'Stream the latest single on all platforms. This one hits different 🔥',
      timestamp: '1 day ago',
      engagement: { views: 234000, likes: 18900, comments: 1200 },
      color: 'from-green-500 to-teal-500',
      icon: Music,
      priority: 'high',
      media: 'music'
    },
    {
      id: 5,
      type: 'announcement',
      platform: 'Twitter',
      title: 'Tour Dates Announcement Coming Soon!',
      description: 'Something big is coming... Stay tuned for major announcements this week 👀',
      timestamp: '2 days ago',
      engagement: { views: 67000, likes: 8900, comments: 445 },
      color: 'from-blue-500 to-indigo-500',
      icon: Globe,
      priority: 'medium',
      media: 'text'
    },
    {
      id: 6,
      type: 'collaboration',
      platform: 'YouTube',
      title: 'Collab Track with Special Guest',
      description: 'Just finished recording with an amazing artist. This collaboration is going to be insane!',
      timestamp: '3 days ago',
      engagement: { views: 145000, likes: 21000, comments: 3400 },
      color: 'from-yellow-500 to-orange-500',
      icon: Users,
      priority: 'medium',
      media: 'music'
    }
  ];

  const formatNumber = (num: number) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
    return num.toString();
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'border-red-500/50 shadow-red-500/20';
      case 'medium': return 'border-yellow-500/50 shadow-yellow-500/20';
      default: return 'border-gray-500/50 shadow-gray-500/20';
    }
  };

  return (
    <div className="space-y-8 pb-24 relative">
      {/* Live Status Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm px-6 py-3 rounded-full border border-purple-500/30 mb-4">
          <Activity className="w-5 h-5 text-green-400 animate-pulse" />
          <span className="text-white font-medium">Live Updates Feed</span>
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
        </div>
        <p className="text-gray-400 text-sm">Real-time updates from all platforms • Last updated: {currentTime.toLocaleTimeString()}</p>
      </div>

      {/* Updates Timeline */}
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-pink-500 to-transparent"></div>
        
        <div className="space-y-6">
          {updateFeed.map((update, index) => {
            const Icon = update.icon;
            const isExpanded = expandedUpdate === update.id;
            
            return (
              <div key={update.id} className="relative">
                {/* Timeline Dot */}
                <div className={`absolute left-6 w-4 h-4 rounded-full bg-gradient-to-r ${update.color} border-4 border-gray-900 z-10 shadow-lg`}>
                  <div className="absolute inset-0 rounded-full animate-ping opacity-30 bg-gradient-to-r from-current to-transparent"></div>
                </div>
                
                {/* Update Card */}
                <div className="ml-16">
                  <EnhancedCard 
                    className={`p-6 hover:scale-[1.02] transition-all duration-500 cursor-pointer ${getPriorityColor(update.priority)}`}
                    onClick={() => setExpandedUpdate(isExpanded ? null : update.id)}
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start space-x-4 flex-1">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${update.color} flex items-center justify-center shadow-lg`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <span className={`text-xs px-2 py-1 rounded-full bg-gradient-to-r ${update.color} text-white font-medium`}>
                              {update.platform}
                            </span>
                            <span className="text-gray-400 text-xs">{update.timestamp}</span>
                            {update.priority === 'high' && (
                              <div className="flex items-center space-x-1">
                                <Zap className="w-3 h-3 text-yellow-400" />
                                <span className="text-xs text-yellow-400 font-medium">HOT</span>
                              </div>
                            )}
                          </div>
                          
                          <h3 className="text-white font-semibold text-lg mb-2 hover:text-purple-200 transition-colors">
                            {update.title}
                          </h3>
                          
                          <p className="text-gray-300 text-sm line-clamp-2">
                            {update.description}
                          </p>
                        </div>
                      </div>
                      
                      <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                    </div>

                    {/* Quick Stats */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-6 text-sm text-gray-400">
                        <div className="flex items-center space-x-1 hover:text-white transition-colors">
                          <Eye className="w-4 h-4" />
                          <span>{formatNumber(update.engagement.views)}</span>
                        </div>
                        <div className="flex items-center space-x-1 hover:text-red-400 transition-colors">
                          <Heart className="w-4 h-4" />
                          <span>{formatNumber(update.engagement.likes)}</span>
                        </div>
                        <div className="flex items-center space-x-1 hover:text-blue-400 transition-colors">
                          <MessageCircle className="w-4 h-4" />
                          <span>{formatNumber(update.engagement.comments)}</span>
                        </div>
                        {update.duration && (
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{update.duration}</span>
                          </div>
                        )}
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

                    {/* Expanded Content */}
                    {isExpanded && (
                      <div className="border-t border-gray-700/50 pt-4 mt-4 animate-fade-in">
                        <div className="aspect-video bg-gradient-to-br from-gray-700/50 to-gray-800/50 rounded-xl flex items-center justify-center mb-4 relative overflow-hidden group">
                          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                          <Play className="w-16 h-16 text-white/50 relative z-10 group-hover:scale-110 transition-transform duration-300" />
                          
                          {update.media === 'live-stream' && (
                            <div className="absolute top-4 left-4 flex items-center space-x-2 bg-red-500/80 backdrop-blur-sm px-3 py-1 rounded-full">
                              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                              <span className="text-white text-xs font-medium">LIVE</span>
                            </div>
                          )}
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <button className="flex items-center space-x-2 bg-red-500/20 hover:bg-red-500/30 px-4 py-2 rounded-lg transition-colors">
                              <Heart className="w-4 h-4 text-red-400" />
                              <span className="text-white text-sm">Like</span>
                            </button>
                            <button className="flex items-center space-x-2 bg-blue-500/20 hover:bg-blue-500/30 px-4 py-2 rounded-lg transition-colors">
                              <MessageCircle className="w-4 h-4 text-blue-400" />
                              <span className="text-white text-sm">Comment</span>
                            </button>
                          </div>
                          
                          <div className="flex items-center space-x-2 text-gray-400 text-sm">
                            <TrendingUp className="w-4 h-4 text-green-400" />
                            <span>+{Math.floor(Math.random() * 30 + 10)}% engagement</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Priority Indicator */}
                    {update.priority === 'high' && (
                      <div className="absolute top-2 right-2 w-3 h-3 bg-red-500 rounded-full animate-pulse shadow-lg shadow-red-500/50"></div>
                    )}
                  </EnhancedCard>
                </div>

                {/* Connecting Line to Next Update */}
                {index < updateFeed.length - 1 && (
                  <div className="absolute left-8 top-full w-0.5 h-6 bg-gradient-to-b from-gray-600 to-transparent"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Real-time Activity Footer */}
      <div className="text-center">
        <EnhancedCard className="p-6 bg-gradient-to-r from-gray-800/50 to-gray-900/50">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <div className="flex items-center space-x-2 text-green-400">
              <Dot className="w-6 h-6 animate-pulse" />
              <span className="font-medium">Live Activity</span>
            </div>
            <div className="w-px h-4 bg-gray-600"></div>
            <span className="text-gray-400 text-sm">Updated every few seconds</span>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-white">{formatNumber(liveViewers)}</div>
              <div className="text-xs text-gray-400">Live Viewers</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-400">24</div>
              <div className="text-xs text-gray-400">Updates Today</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-pink-400">1.2M</div>
              <div className="text-xs text-gray-400">Total Engagement</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-400">8</div>
              <div className="text-xs text-gray-400">Platforms Active</div>
            </div>
          </div>
        </EnhancedCard>
      </div>
    </div>
  );
}
