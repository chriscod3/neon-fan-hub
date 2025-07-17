
import { Play, Radio, Eye, TrendingUp, Heart, Sparkles, Calendar, Clock, Star, Users, MessageCircle, Share2, Zap, Music, Video, Image, Mic, Globe, Bell, Activity, ArrowRight, ChevronDown, Dot, Plus, Filter, Search, Rss, Wifi, Signal, Terminal, Database, Cpu, HardDrive, NetworkIcon as Network, MonitorSpeaker, Radar, Waves, BarChart3, LineChart, PieChart, AlertTriangle, CheckCircle, XCircle, Loader, Gauge } from 'lucide-react';
import { useState, useEffect } from 'react';
import { EnhancedCard } from '@/components/EnhancedCard';

export function UpdatesTab() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [activeTab, setActiveTab] = useState('all');

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const updates = [
    {
      id: 1,
      type: 'stream',
      platform: 'Twitch',
      title: 'Going live with new music production!',
      time: '2 minutes ago',
      engagement: { likes: 234, comments: 45, shares: 12 },
      status: 'live',
      viewers: 1247
    },
    {
      id: 2,
      type: 'upload',
      platform: 'YouTube',
      title: 'New beat drop - "Midnight Vibes"',
      time: '1 hour ago',
      engagement: { likes: 1567, comments: 234, shares: 89 },
      status: 'published'
    },
    {
      id: 3,
      type: 'post',
      platform: 'Instagram',
      title: 'Behind the scenes of latest track',
      time: '3 hours ago',
      engagement: { likes: 892, comments: 67, shares: 23 },
      status: 'published'
    },
    {
      id: 4,
      type: 'release',
      platform: 'Spotify',
      title: 'New single "Electric Dreams" now available',
      time: '6 hours ago',
      engagement: { likes: 2340, comments: 156, shares: 445 },
      status: 'published'
    }
  ];

  const platformIcons = {
    Twitch: Video,
    YouTube: Play,
    Instagram: Image,
    Spotify: Music,
    Twitter: MessageCircle,
    TikTok: Zap
  };

  const statusColors = {
    live: 'bg-red-500 animate-pulse',
    published: 'bg-green-500',
    scheduled: 'bg-yellow-500'
  };

  const filteredUpdates = activeTab === 'all' ? updates : updates.filter(update => update.type === activeTab);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-purple-950/20 text-white p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Live Updates
            </h1>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-400">
            <Clock className="w-4 h-4" />
            <span>{currentTime.toLocaleTimeString()}</span>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex space-x-2 mb-6">
          {['all', 'stream', 'upload', 'post', 'release'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === tab
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Updates Feed */}
      <div className="space-y-4">
        {filteredUpdates.map((update, index) => {
          const PlatformIcon = platformIcons[update.platform as keyof typeof platformIcons];
          
          return (
            <EnhancedCard key={update.id} className="p-6 hover:scale-[1.01] transition-all">
              <div className="flex items-start space-x-4">
                {/* Platform Icon */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <PlatformIcon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <span className="text-lg font-semibold text-purple-400">{update.platform}</span>
                      <div className={`w-2 h-2 rounded-full ${statusColors[update.status as keyof typeof statusColors]}`}></div>
                      {update.status === 'live' && (
                        <span className="text-xs text-red-400 font-bold">LIVE</span>
                      )}
                      {update.viewers && (
                        <span className="text-xs text-gray-400 flex items-center space-x-1">
                          <Eye className="w-3 h-3" />
                          <span>{update.viewers.toLocaleString()}</span>
                        </span>
                      )}
                    </div>
                    <span className="text-sm text-gray-400">{update.time}</span>
                  </div>

                  <h3 className="text-lg font-medium text-white mb-3 line-clamp-2">
                    {update.title}
                  </h3>

                  {/* Engagement Stats */}
                  <div className="flex items-center space-x-6 text-sm text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Heart className="w-4 h-4" />
                      <span>{update.engagement.likes.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MessageCircle className="w-4 h-4" />
                      <span>{update.engagement.comments}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Share2 className="w-4 h-4" />
                      <span>{update.engagement.shares}</span>
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <div className="flex-shrink-0">
                  <button className="w-8 h-8 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg flex items-center justify-center transition-colors">
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                  </button>
                </div>
              </div>
            </EnhancedCard>
          );
        })}
      </div>

      {/* Quick Stats */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gray-800/50 rounded-xl p-4 backdrop-blur-sm border border-gray-700/50">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-green-400" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Total Engagement</p>
              <p className="text-xl font-bold text-white">5.2K</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-800/50 rounded-xl p-4 backdrop-blur-sm border border-gray-700/50">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
              <Users className="w-5 h-5 text-purple-400" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Active Viewers</p>
              <p className="text-xl font-bold text-white">1.2K</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-800/50 rounded-xl p-4 backdrop-blur-sm border border-gray-700/50">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
              <Activity className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Updates Today</p>
              <p className="text-xl font-bold text-white">8</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
