
import { TrendingUp, Users, Radio, Music } from 'lucide-react';
import { useState, useEffect } from 'react';

export function StatsTab() {
  const [stats, setStats] = useState({
    youtube: 2150000,
    twitch: 890000,
    spotify: 5200000,
    isLive: true
  });

  const [animatedStats, setAnimatedStats] = useState({
    youtube: 0,
    twitch: 0,
    spotify: 0
  });

  useEffect(() => {
    // Animate counter on mount
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setAnimatedStats({
        youtube: Math.floor(stats.youtube * progress),
        twitch: Math.floor(stats.twitch * progress),
        spotify: Math.floor(stats.spotify * progress)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setAnimatedStats(stats);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [stats]);

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(0) + 'K';
    }
    return num.toString();
  };

  return (
    <div className="space-y-6 pb-20">
      {/* DDG Profile Header */}
      <div className="text-center space-y-4">
        <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mx-auto flex items-center justify-center text-white text-2xl font-bold">
          DDG
        </div>
        <div>
          <h1 className="text-2xl font-bold text-white">DDG</h1>
          <p className="text-gray-400">Multi-Platform Creator</p>
        </div>
      </div>

      {/* Live Status */}
      <div className={`rounded-lg p-4 text-center ${stats.isLive ? 'bg-gradient-to-r from-green-600/20 to-green-400/20 border border-green-500/30' : 'bg-gray-800/50 border border-gray-600/30'}`}>
        <div className="flex items-center justify-center space-x-2 mb-2">
          <Radio className={`w-5 h-5 ${stats.isLive ? 'text-green-400 animate-pulse' : 'text-gray-400'}`} />
          <span className={`font-bold ${stats.isLive ? 'text-green-400' : 'text-gray-400'}`}>
            {stats.isLive ? '🟢 LIVE NOW' : '🔴 OFFLINE'}
          </span>
        </div>
        {stats.isLive && (
          <p className="text-green-300 text-sm">Streaming on Twitch</p>
        )}
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-4">
        {/* YouTube */}
        <div className="bg-gray-800/50 rounded-lg p-6 border border-red-500/20 hover:border-red-400/40 transition-all">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">YT</span>
              </div>
              <div>
                <h3 className="font-bold text-white">YouTube</h3>
                <p className="text-gray-400 text-sm">Subscribers</p>
              </div>
            </div>
            <TrendingUp className="w-6 h-6 text-green-400" />
          </div>
          <div className="text-3xl font-bold text-white mb-2">
            {formatNumber(animatedStats.youtube)}
          </div>
          <div className="flex items-center space-x-2 text-green-400 text-sm">
            <span>+12K this week</span>
          </div>
        </div>

        {/* Twitch */}
        <div className="bg-gray-800/50 rounded-lg p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                <Radio className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-white">Twitch</h3>
                <p className="text-gray-400 text-sm">Followers</p>
              </div>
            </div>
            <TrendingUp className="w-6 h-6 text-green-400" />
          </div>
          <div className="text-3xl font-bold text-white mb-2">
            {formatNumber(animatedStats.twitch)}
          </div>
          <div className="flex items-center space-x-2 text-green-400 text-sm">
            <span>+5K this week</span>
          </div>
        </div>

        {/* Spotify */}
        <div className="bg-gray-800/50 rounded-lg p-6 border border-green-500/20 hover:border-green-400/40 transition-all">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                <Music className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-white">Spotify</h3>
                <p className="text-gray-400 text-sm">Monthly Listeners</p>
              </div>
            </div>
            <TrendingUp className="w-6 h-6 text-green-400" />
          </div>
          <div className="text-3xl font-bold text-white mb-2">
            {formatNumber(animatedStats.spotify)}
          </div>
          <div className="flex items-center space-x-2 text-green-400 text-sm">
            <span>+200K this month</span>
          </div>
        </div>
      </div>

      {/* Growth Chart Placeholder */}
      <div className="bg-gray-800/50 rounded-lg p-6 border border-purple-500/20">
        <h3 className="font-bold text-white mb-4">Growth Overview</h3>
        <div className="h-32 bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-lg flex items-center justify-center">
          <span className="text-gray-400">Chart visualization coming soon</span>
        </div>
      </div>
    </div>
  );
}
