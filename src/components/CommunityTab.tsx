
import { MessageCircle, Heart, Trophy, Pin, Users, Flame, Zap, Crown, Star, TrendingUp, Award, Target } from 'lucide-react';
import { useState } from 'react';

export function CommunityTab() {
  const [activeFilter, setActiveFilter] = useState('trending');
  const [discussions] = useState([
    { 
      id: 1, 
      title: "What's your favorite DDG bar from the new track?", 
      replies: 23, 
      likes: 45, 
      time: '2h ago', 
      pinned: true,
      author: 'DDGSuperfan',
      category: 'music',
      isHot: true
    },
    { 
      id: 2, 
      title: "DDG's best music video countdown", 
      replies: 67, 
      likes: 112, 
      time: '4h ago', 
      pinned: false,
      author: 'VideoVibes',
      category: 'videos',
      isHot: true
    },
    { 
      id: 3, 
      title: "Weekly Poll: Next collab prediction?", 
      replies: 34, 
      likes: 78, 
      time: '6h ago', 
      pinned: false,
      author: 'FutureHits',
      category: 'polls',
      isHot: false
    },
    { 
      id: 4, 
      title: "Fan art showcase thread", 
      replies: 89, 
      likes: 203, 
      time: '1d ago', 
      pinned: false,
      author: 'ArtisticSoul',
      category: 'creative',
      isHot: false
    },
  ]);

  const [topFans] = useState([
    { id: 1, name: 'DDGMegaFan', avatar: '👑', posts: 127, level: 'Diamond', streak: 45 },
    { id: 2, name: 'MusicLover99', avatar: '🎵', posts: 89, level: 'Gold', streak: 23 },
    { id: 3, name: 'DDGDaily', avatar: '⭐', posts: 76, level: 'Silver', streak: 12 },
  ]);

  const filters = [
    { id: 'trending', label: 'Trending', icon: TrendingUp, color: 'text-orange-400' },
    { id: 'hot', label: 'Hot', icon: Flame, color: 'text-red-400' },
    { id: 'new', label: 'New', icon: Zap, color: 'text-blue-400' },
    { id: 'polls', label: 'Polls', icon: Target, color: 'text-green-400' },
  ];

  return (
    <div className="space-y-6 pb-20">
      {/* Interactive Community Header */}
      <div className="relative overflow-hidden bg-gradient-to-br from-purple-600/30 via-pink-600/20 to-blue-600/30 rounded-2xl p-6 border border-purple-500/30">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-pink-500/10 animate-pulse"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Community Hub</h2>
                <p className="text-purple-300 text-sm">12.3K active fans online</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 text-sm font-medium">Live</span>
            </div>
          </div>
          
          <div className="bg-black/20 backdrop-blur-sm rounded-xl p-4 border border-white/10">
            <div className="flex items-center space-x-2 mb-2">
              <Pin className="w-4 h-4 text-yellow-400" />
              <span className="text-yellow-400 font-semibold text-sm">Daily Challenge</span>
            </div>
            <h3 className="text-lg font-bold text-white mb-3">
              "If you could collab with DDG on any track, what would it be about?"
            </h3>
            <div className="flex items-center space-x-3">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-6 py-2 rounded-full text-white font-medium transition-all transform hover:scale-105">
                Share Your Answer
              </button>
              <span className="text-gray-300 text-sm">234 responses today</span>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex space-x-2 overflow-x-auto pb-2">
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => setActiveFilter(filter.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-full font-medium transition-all whitespace-nowrap ${
              activeFilter === filter.id
                ? 'bg-purple-600 text-white'
                : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
            }`}
          >
            <filter.icon className={`w-4 h-4 ${activeFilter === filter.id ? 'text-white' : filter.color}`} />
            <span>{filter.label}</span>
          </button>
        ))}
      </div>

      {/* Discussion Cards */}
      <div className="space-y-3">
        {discussions.map((discussion) => (
          <div 
            key={discussion.id} 
            className="group relative bg-gray-800/40 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50 hover:border-purple-500/50 transition-all cursor-pointer hover:transform hover:scale-[1.02]"
          >
            {discussion.isHot && (
              <div className="absolute -top-2 -right-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full p-1">
                <Flame className="w-3 h-3 text-white" />
              </div>
            )}
            
            <div className="flex items-start space-x-3">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white font-bold">
                  {discussion.pinned ? <Pin className="w-5 h-5" /> : discussion.id}
                </div>
                {discussion.pinned && (
                  <div className="absolute -top-1 -right-1 bg-yellow-500 rounded-full p-1">
                    <Crown className="w-3 h-3 text-white" />
                  </div>
                )}
              </div>
              
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-purple-400 font-medium text-sm">{discussion.author}</span>
                  <span className="text-gray-500">•</span>
                  <span className="text-gray-400 text-sm">{discussion.time}</span>
                  <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                    discussion.category === 'music' ? 'bg-purple-600/20 text-purple-300' :
                    discussion.category === 'videos' ? 'bg-blue-600/20 text-blue-300' :
                    discussion.category === 'polls' ? 'bg-green-600/20 text-green-300' :
                    'bg-orange-600/20 text-orange-300'
                  }`}>
                    {discussion.category}
                  </div>
                </div>
                
                <h3 className="font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {discussion.title}
                </h3>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-gray-400 text-sm">
                    <div className="flex items-center space-x-1 hover:text-purple-400 transition-colors">
                      <MessageCircle className="w-4 h-4" />
                      <span>{discussion.replies}</span>
                    </div>
                    <div className="flex items-center space-x-1 hover:text-red-400 transition-colors">
                      <Heart className="w-4 h-4" />
                      <span>{discussion.likes}</span>
                    </div>
                  </div>
                  <button className="text-purple-400 hover:text-purple-300 text-sm font-medium opacity-0 group-hover:opacity-100 transition-all">
                    Join Discussion →
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Enhanced Leaderboard */}
      <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-5 border border-gray-700/50">
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center">
              <Trophy className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-white">Hall of Fame</h3>
              <p className="text-gray-400 text-sm">Top contributors this week</p>
            </div>
          </div>
          <button className="text-purple-400 hover:text-purple-300 text-sm font-medium">
            View All Rankings →
          </button>
        </div>
        
        <div className="space-y-3">
          {topFans.map((fan, index) => (
            <div key={fan.id} className="flex items-center space-x-4 p-3 bg-gray-800/30 rounded-lg hover:bg-gray-800/50 transition-all">
              <div className="flex items-center space-x-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                  index === 0 ? 'bg-gradient-to-br from-yellow-500 to-orange-500 text-white' :
                  index === 1 ? 'bg-gradient-to-br from-gray-400 to-gray-600 text-white' :
                  'bg-gradient-to-br from-orange-600 to-red-600 text-white'
                }`}>
                  {index + 1}
                </div>
                <div className="text-2xl">{fan.avatar}</div>
                <div>
                  <div className="font-medium text-white">{fan.name}</div>
                  <div className="flex items-center space-x-2 text-xs">
                    <span className={`px-2 py-1 rounded-full ${
                      fan.level === 'Diamond' ? 'bg-blue-600/20 text-blue-300' :
                      fan.level === 'Gold' ? 'bg-yellow-600/20 text-yellow-300' :
                      'bg-gray-600/20 text-gray-300'
                    }`}>
                      {fan.level}
                    </span>
                    <span className="text-gray-400">{fan.streak} day streak</span>
                  </div>
                </div>
              </div>
              <div className="ml-auto text-right">
                <div className="font-semibold text-white">{fan.posts}</div>
                <div className="text-xs text-gray-400">posts</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
