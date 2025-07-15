
import { Play, Radio, Eye, TrendingUp, Heart, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';
import { EnhancedCard } from '@/components/EnhancedCard';

export function UpdatesTab() {
  const [isLive, setIsLive] = useState(true);
  const [liveViewers, setLiveViewers] = useState(2300);

  useEffect(() => {
    if (isLive) {
      const interval = setInterval(() => {
        setLiveViewers(prev => prev + Math.floor(Math.random() * 10 - 5));
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isLive]);

  return (
    <div className="space-y-8 pb-24">
      {/* Enhanced Twitch Live Bar */}
      <EnhancedCard 
        glowColor={isLive ? 'purple' : undefined}
        className={`relative overflow-hidden ${isLive ? 'bg-gradient-to-r from-purple-600/30 via-pink-600/30 to-purple-700/30' : 'bg-gray-800/50'} p-6 shadow-2xl border-purple-500/30`}
      >
        <div className="flex items-center justify-between relative z-10">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Radio className={`w-6 h-6 ${isLive ? 'text-white' : 'text-gray-400'}`} />
              {isLive && (
                <>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse border-2 border-white"></div>
                  <div className="absolute -top-2 -right-2 w-5 h-5 bg-red-500/30 rounded-full animate-ping"></div>
                </>
              )}
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-bold text-white text-lg">
                  {isLive ? '🔴 DDG is LIVE on Twitch!' : 'DDG is offline'}
                </span>
                {isLive && <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />}
              </div>
              {isLive && (
                <p className="text-purple-100 text-sm mt-1 flex items-center space-x-1">
                  <Eye className="w-3 h-3" />
                  <span className="animate-pulse">{liveViewers.toLocaleString()} viewers watching</span>
                </p>
              )}
            </div>
          </div>
          {isLive && (
            <button className="relative bg-white/20 hover:bg-white/30 backdrop-blur-sm px-6 py-3 rounded-xl text-white font-medium transition-all duration-300 transform hover:scale-105 shadow-lg border border-white/20 group overflow-hidden">
              <span className="relative z-10">Watch Now</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            </button>
          )}
        </div>
        {isLive && (
          <>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 animate-pulse"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse"></div>
          </>
        )}
      </EnhancedCard>

      {/* Enhanced Recent Drops Carousel */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent flex items-center space-x-2">
            <Sparkles className="w-6 h-6 text-purple-400" />
            <span>Recent Drops</span>
          </h2>
          <button className="text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors hover:scale-105 transform duration-200">
            View All
          </button>
        </div>
        <div className="flex space-x-6 overflow-x-auto pb-4 scrollbar-hide">
          {[1, 2, 3].map((index) => (
            <EnhancedCard key={index} className="flex-none w-80 p-6">
              <div className="aspect-video bg-gradient-to-br from-purple-900/50 via-pink-900/50 to-purple-800/50 rounded-xl mb-4 flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <Play className="w-16 h-16 text-white/70 relative z-10 group-hover:scale-125 transition-transform duration-500 drop-shadow-lg" />
                {/* Floating play button animation */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 border-2 border-white/30 rounded-full animate-ping opacity-0 group-hover:opacity-100"></div>
                </div>
              </div>
              <h3 className="font-semibold text-white mb-2 text-lg group-hover:text-purple-200 transition-colors">New Music Video #{index}</h3>
              <div className="flex items-center justify-between text-gray-400 text-sm">
                <span className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>2 days ago</span>
                </span>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1 hover:text-white transition-colors">
                    <Eye className="w-4 h-4" />
                    <span>1.2M</span>
                  </div>
                  <div className="flex items-center space-x-1 hover:text-red-400 transition-colors">
                    <Heart className="w-4 h-4" />
                    <span>89K</span>
                  </div>
                </div>
              </div>
            </EnhancedCard>
          ))}
        </div>
      </div>

      {/* Enhanced Content Feed */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent flex items-center space-x-2">
          <TrendingUp className="w-6 h-6 text-green-400" />
          <span>Latest Updates</span>
        </h2>
        {[
          { type: 'youtube', title: 'New YouTube Video', time: '2 hours ago', views: '150K', engagement: '+12%', color: 'red' },
          { type: 'instagram', title: 'IG Reel', time: '5 hours ago', views: '89K', engagement: '+8%', color: 'pink' },
          { type: 'music', title: 'Latest Music Drop', time: '1 day ago', views: '500K', engagement: '+25%', color: 'green' },
        ].map((post, index) => (
          <EnhancedCard key={index} glowColor={post.color as any} className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-4">
                <div className="relative w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-white text-xl shadow-lg group-hover:shadow-purple-500/50 transition-all duration-300 group-hover:rotate-6">
                  {post.type === 'youtube' && '🎥'}
                  {post.type === 'instagram' && '📸'}
                  {post.type === 'music' && '🎶'}
                  {/* Floating particles */}
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-bounce opacity-0 group-hover:opacity-100 transition-opacity delay-200"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-white text-lg group-hover:text-purple-200 transition-colors">{post.title}</h3>
                  <p className="text-gray-400 text-sm flex items-center space-x-1">
                    <div className="w-1 h-1 bg-purple-400 rounded-full animate-pulse"></div>
                    <span>{post.time}</span>
                  </p>
                </div>
              </div>
              <div className="text-right">
                <div className="flex items-center space-x-2 text-gray-400 mb-1 group-hover:text-white transition-colors">
                  <Eye className="w-4 h-4" />
                  <span className="text-sm font-medium">{post.views}</span>
                </div>
                <div className="flex items-center space-x-1 text-green-400 text-xs">
                  <TrendingUp className="w-3 h-3 animate-pulse" />
                  <span>{post.engagement}</span>
                </div>
              </div>
            </div>
            <div className="aspect-video bg-gradient-to-br from-gray-700/50 to-gray-800/50 rounded-xl flex items-center justify-center group-hover:scale-[1.02] transition-transform duration-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Play className="w-12 h-12 text-white/50 relative z-10 group-hover:scale-110 transition-transform duration-300" />
              {/* Video preview overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </EnhancedCard>
        ))}
      </div>
    </div>
  );
}
