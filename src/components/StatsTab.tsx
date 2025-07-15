import { TrendingUp, Users, Radio, Music, Zap } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useTwitchSubscribers } from '@/hooks/useTwitchSubscribers';

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

  const { subscribers, isLoading: subsLoading } = useTwitchSubscribers();

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
    <div className="space-y-8 pb-24">
      {/* DDG Profile Header */}
      <div className="text-center space-y-6 relative">
        <div className="relative inline-block">
          <div className="w-32 h-32 bg-gradient-to-br from-purple-500 via-pink-500 to-purple-600 rounded-full mx-auto flex items-center justify-center text-white text-3xl font-bold shadow-2xl border-4 border-purple-400/30">
            DDG
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/50 to-pink-500/50 rounded-full blur-xl opacity-60 animate-pulse"></div>
        </div>
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">DDG</h1>
          <p className="text-gray-400 text-lg">Multi-Platform Creator</p>
          <div className="flex items-center justify-center space-x-2 mt-2">
            <Zap className="w-4 h-4 text-yellow-400" />
            <span className="text-yellow-400 text-sm font-medium">Verified Creator</span>
          </div>
        </div>
      </div>

      {/* Live Status */}
      <div className={`rounded-2xl p-6 text-center border transition-all duration-500 ${stats.isLive ? 'bg-gradient-to-r from-green-600/20 via-green-500/20 to-emerald-600/20 border-green-500/30 shadow-green-500/20 shadow-2xl' : 'bg-gray-800/50 border-gray-600/30'}`}>
        <div className="flex items-center justify-center space-x-3 mb-3">
          <div className="relative">
            <Radio className={`w-6 h-6 ${stats.isLive ? 'text-green-400' : 'text-gray-400'}`} />
            {stats.isLive && (
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse border-2 border-white"></div>
            )}
          </div>
          <span className={`font-bold text-xl ${stats.isLive ? 'text-green-400' : 'text-gray-400'}`}>
            {stats.isLive ? '🟢 LIVE NOW' : '🔴 OFFLINE'}
          </span>
        </div>
        {stats.isLive && (
          <div className="space-y-2">
            <p className="text-green-300 text-lg font-medium">Streaming on Twitch</p>
            <p className="text-green-200 text-sm">2.3K viewers • Gaming</p>
          </div>
        )}
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-6">
        {/* YouTube */}
        <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-red-500/20 hover:border-red-400/40 transition-all duration-500 group hover:shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="flex items-center justify-between mb-6 relative z-10">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-red-500/25 transition-all duration-300">
                <span className="text-white font-bold text-xl">YT</span>
              </div>
              <div>
                <h3 className="font-bold text-white text-xl">YouTube</h3>
                <p className="text-gray-400">Subscribers</p>
              </div>
            </div>
            <TrendingUp className="w-8 h-8 text-green-400" />
          </div>
          <div className="text-4xl font-bold text-white mb-3 relative z-10">
            {formatNumber(animatedStats.youtube)}
          </div>
          <div className="flex items-center space-x-2 text-green-400 relative z-10">
            <TrendingUp className="w-4 h-4" />
            <span className="font-medium">+12K this week</span>
          </div>
        </div>

        {/* Twitch */}
        <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-500 group hover:shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="flex items-center justify-between mb-6 relative z-10">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-purple-500/25 transition-all duration-300">
                <Radio className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-white text-xl">Twitch</h3>
                <p className="text-gray-400">Followers</p>
              </div>
            </div>
            <TrendingUp className="w-8 h-8 text-green-400" />
          </div>
          <div className="text-4xl font-bold text-white mb-3 relative z-10">
            {formatNumber(animatedStats.twitch)}
          </div>
          
          {/* Subscriber Count */}
          <div className="mb-3 relative z-10">
            <div className="flex items-center space-x-2 text-purple-300">
              <Users className="w-4 h-4" />
              <span className="font-medium">
                {subsLoading ? (
                  <span className="animate-pulse">Loading...</span>
                ) : (
                  `${formatNumber(subscribers)} subscribers`
                )}
              </span>
            </div>
          </div>
          
          <div className="flex items-center space-x-2 text-green-400 relative z-10">
            <TrendingUp className="w-4 h-4" />
            <span className="font-medium">+5K this week</span>
          </div>
        </div>

        {/* Spotify */}
        <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-500 group hover:shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="flex items-center justify-between mb-6 relative z-10">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-green-500/25 transition-all duration-300">
                <Music className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-white text-xl">Spotify</h3>
                <p className="text-gray-400">Monthly Listeners</p>
              </div>
            </div>
            <TrendingUp className="w-8 h-8 text-green-400" />
          </div>
          <div className="text-4xl font-bold text-white mb-3 relative z-10">
            {formatNumber(animatedStats.spotify)}
          </div>
          <div className="flex items-center space-x-2 text-green-400 relative z-10">
            <TrendingUp className="w-4 h-4" />
            <span className="font-medium">+200K this month</span>
          </div>
        </div>
      </div>

      {/* Growth Chart */}
      <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-500 group">
        <h3 className="font-bold text-white text-xl mb-6">Growth Overview</h3>
        <div className="h-40 bg-gradient-to-br from-purple-900/30 via-pink-900/30 to-purple-800/30 rounded-xl flex items-center justify-center relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-300">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-purple-500/10 animate-pulse"></div>
          <span className="text-gray-400 text-lg relative z-10">Chart visualization coming soon</span>
        </div>
      </div>
    </div>
  );
}
