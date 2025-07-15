
import { Play, Radio, Eye, TrendingUp, Heart } from 'lucide-react';
import { useState, useEffect } from 'react';

export function UpdatesTab() {
  const [isLive, setIsLive] = useState(true);

  return (
    <div className="space-y-8 pb-24">
      {/* Twitch Live Bar */}
      <div className={`relative overflow-hidden rounded-2xl ${isLive ? 'bg-gradient-to-r from-purple-600 via-pink-600 to-purple-700' : 'bg-gray-800/50'} p-6 shadow-2xl border border-purple-500/20`}>
        <div className="flex items-center justify-between relative z-10">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Radio className={`w-6 h-6 ${isLive ? 'text-white' : 'text-gray-400'}`} />
              {isLive && (
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse border-2 border-white"></div>
              )}
            </div>
            <div>
              <span className="font-bold text-white text-lg">
                {isLive ? '🔴 DDG is LIVE on Twitch!' : 'DDG is offline'}
              </span>
              {isLive && (
                <p className="text-purple-100 text-sm mt-1">2.3K viewers watching</p>
              )}
            </div>
          </div>
          {isLive && (
            <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm px-6 py-3 rounded-xl text-white font-medium transition-all duration-300 transform hover:scale-105 shadow-lg border border-white/20">
              Watch Now
            </button>
          )}
        </div>
        {isLive && (
          <>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-pink-600/30 animate-pulse"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse"></div>
          </>
        )}
      </div>

      {/* Recent Drops Carousel */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">Recent Drops</h2>
          <button className="text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors">
            View All
          </button>
        </div>
        <div className="flex space-x-6 overflow-x-auto pb-4 scrollbar-hide">
          {[1, 2, 3].map((index) => (
            <div key={index} className="flex-none w-80 bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl group">
              <div className="aspect-video bg-gradient-to-br from-purple-900/50 via-pink-900/50 to-purple-800/50 rounded-xl mb-4 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Play className="w-16 h-16 text-white/70 relative z-10 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="font-semibold text-white mb-2 text-lg">New Music Video #{index}</h3>
              <div className="flex items-center justify-between text-gray-400 text-sm">
                <span>2 days ago</span>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <Eye className="w-4 h-4" />
                    <span>1.2M</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Heart className="w-4 h-4" />
                    <span>89K</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Content Feed */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">Latest Updates</h2>
        {[
          { type: 'youtube', title: 'New YouTube Video', time: '2 hours ago', views: '150K', engagement: '+12%' },
          { type: 'instagram', title: 'IG Reel', time: '5 hours ago', views: '89K', engagement: '+8%' },
          { type: 'music', title: 'Latest Music Drop', time: '1 day ago', views: '500K', engagement: '+25%' },
        ].map((post, index) => (
          <div key={index} className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-500 cursor-pointer group hover:shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-white text-xl shadow-lg group-hover:shadow-purple-500/25 transition-all duration-300">
                  {post.type === 'youtube' && '🎥'}
                  {post.type === 'instagram' && '📸'}
                  {post.type === 'music' && '🎶'}
                </div>
                <div>
                  <h3 className="font-semibold text-white text-lg">{post.title}</h3>
                  <p className="text-gray-400 text-sm">{post.time}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="flex items-center space-x-2 text-gray-400 mb-1">
                  <Eye className="w-4 h-4" />
                  <span className="text-sm font-medium">{post.views}</span>
                </div>
                <div className="flex items-center space-x-1 text-green-400 text-xs">
                  <TrendingUp className="w-3 h-3" />
                  <span>{post.engagement}</span>
                </div>
              </div>
            </div>
            <div className="aspect-video bg-gradient-to-br from-gray-700/50 to-gray-800/50 rounded-xl flex items-center justify-center group-hover:scale-[1.02] transition-transform duration-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Play className="w-12 h-12 text-white/50 relative z-10" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
