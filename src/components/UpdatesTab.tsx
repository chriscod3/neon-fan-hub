
import { Play, Radio, Eye } from 'lucide-react';
import { useState, useEffect } from 'react';

export function UpdatesTab() {
  const [isLive, setIsLive] = useState(true);

  return (
    <div className="space-y-6 pb-20">
      {/* Twitch Live Bar */}
      <div className={`relative overflow-hidden rounded-lg ${isLive ? 'bg-gradient-to-r from-purple-600 to-pink-600' : 'bg-gray-800'} p-4`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Radio className={`w-5 h-5 ${isLive ? 'text-white animate-pulse' : 'text-gray-400'}`} />
            <span className="font-bold text-white">
              {isLive ? '🔴 DDG is LIVE on Twitch!' : 'DDG is offline'}
            </span>
          </div>
          {isLive && (
            <button className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-full text-white font-medium transition-all">
              Watch Now
            </button>
          )}
        </div>
        {isLive && (
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/50 to-pink-600/50 animate-pulse opacity-30"></div>
        )}
      </div>

      {/* Recent Drops Carousel */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-white">Recent Drops</h2>
        <div className="flex space-x-4 overflow-x-auto pb-2">
          {[1, 2, 3].map((index) => (
            <div key={index} className="flex-none w-80 bg-gray-800/50 rounded-lg p-4 border border-purple-500/20">
              <div className="aspect-video bg-gradient-to-br from-purple-900 to-pink-900 rounded-lg mb-3 flex items-center justify-center">
                <Play className="w-12 h-12 text-white/70" />
              </div>
              <h3 className="font-semibold text-white mb-2">New Music Video #{index}</h3>
              <p className="text-gray-400 text-sm">2 days ago • 1.2M views</p>
            </div>
          ))}
        </div>
      </div>

      {/* Content Feed */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-white">Latest Updates</h2>
        {[
          { type: 'youtube', title: 'New YouTube Video', time: '2 hours ago', views: '150K' },
          { type: 'instagram', title: 'IG Reel', time: '5 hours ago', views: '89K' },
          { type: 'music', title: 'Latest Music Drop', time: '1 day ago', views: '500K' },
        ].map((post, index) => (
          <div key={index} className="bg-gray-800/50 rounded-lg p-4 border border-purple-500/20 hover:border-purple-400/40 transition-all cursor-pointer">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  {post.type === 'youtube' && '🎥'}
                  {post.type === 'instagram' && '📸'}
                  {post.type === 'music' && '🎶'}
                </div>
                <div>
                  <h3 className="font-semibold text-white">{post.title}</h3>
                  <p className="text-gray-400 text-sm">{post.time}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Eye className="w-4 h-4" />
                <span className="text-sm">{post.views}</span>
              </div>
            </div>
            <div className="aspect-video bg-gray-700 rounded-lg flex items-center justify-center">
              <Play className="w-8 h-8 text-white/50" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
