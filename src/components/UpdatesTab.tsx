
import { Play, Radio, Eye, TrendingUp, Heart, Sparkles, Calendar, Clock, Star, Users, MessageCircle, Share2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import { EnhancedCard } from '@/components/EnhancedCard';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

export function UpdatesTab() {
  const [isLive, setIsLive] = useState(true);
  const [liveViewers, setLiveViewers] = useState(2300);
  const [currentTime, setCurrentTime] = useState(new Date());

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

  const recentDrops = [
    { 
      id: 1, 
      title: "Moonwalking in Calabasas", 
      type: "Music Video",
      views: "2.1M", 
      likes: "156K", 
      duration: "3:24",
      thumbnail: "gradient-to-br from-blue-600/50 via-purple-600/50 to-pink-600/50",
      date: "2 days ago"
    },
    { 
      id: 2, 
      title: "Arguments", 
      type: "Official Audio",
      views: "890K", 
      likes: "67K", 
      duration: "2:58",
      thumbnail: "gradient-to-br from-orange-600/50 via-red-600/50 to-pink-600/50",
      date: "1 week ago"
    },
    { 
      id: 3, 
      title: "No Makeup", 
      type: "Music Video",
      views: "3.2M", 
      likes: "201K", 
      duration: "4:12",
      thumbnail: "gradient-to-br from-green-600/50 via-teal-600/50 to-blue-600/50",
      date: "2 weeks ago"
    },
    { 
      id: 4, 
      title: "If I Want To", 
      type: "Lyric Video",
      views: "1.5M", 
      likes: "98K", 
      duration: "3:45",
      thumbnail: "gradient-to-br from-purple-600/50 via-indigo-600/50 to-blue-600/50",
      date: "3 weeks ago"
    }
  ];

  const contentUpdates = [
    { 
      type: 'youtube', 
      title: 'Behind the Scenes: Moonwalking', 
      description: 'Exclusive footage from the latest music video shoot',
      time: '2 hours ago', 
      views: '150K', 
      engagement: '+12%', 
      color: 'red',
      comments: '1.2K',
      shares: '89'
    },
    { 
      type: 'instagram', 
      title: 'Studio Session Vibes', 
      description: 'Working on something special 🎵',
      time: '5 hours ago', 
      views: '89K', 
      engagement: '+8%', 
      color: 'pink',
      comments: '856',
      shares: '234'
    },
    { 
      type: 'music', 
      title: 'New Single: "Fast Lane"', 
      description: 'Available now on all streaming platforms',
      time: '1 day ago', 
      views: '500K', 
      engagement: '+25%', 
      color: 'green',
      comments: '2.1K',
      shares: '445'
    },
    { 
      type: 'tiktok', 
      title: 'Dance Challenge Preview', 
      description: 'Get ready for the #MoonwalkChallenge',
      time: '2 days ago', 
      views: '1.2M', 
      engagement: '+45%', 
      color: 'purple',
      comments: '3.4K',
      shares: '1.2K'
    }
  ];

  return (
    <div className="space-y-8 pb-24 relative">
      {/* Enhanced Twitch Live Section with Real-time Clock */}
      <div className="relative">
        <EnhancedCard 
          glowColor={isLive ? 'purple' : undefined}
          className={`relative overflow-hidden ${isLive ? 'bg-gradient-to-r from-purple-600/30 via-pink-600/30 to-purple-700/30' : 'bg-gray-800/50'} p-6 shadow-2xl border-purple-500/30`}
        >
          {/* Live indicator with pulsing animation */}
          {isLive && (
            <div className="absolute top-4 right-4 flex items-center space-x-2 bg-red-500/20 backdrop-blur-sm px-3 py-1 rounded-full border border-red-500/30">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-red-300 text-xs font-medium">LIVE</span>
            </div>
          )}
          
          <div className="flex items-center justify-between relative z-10">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Radio className={`w-8 h-8 ${isLive ? 'text-white' : 'text-gray-400'}`} />
                {isLive && (
                  <>
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse border-2 border-white"></div>
                    <div className="absolute -top-2 -right-2 w-5 h-5 bg-red-500/30 rounded-full animate-ping"></div>
                  </>
                )}
              </div>
              <div>
                <div className="flex items-center space-x-3 mb-2">
                  <span className="font-bold text-white text-xl">
                    {isLive ? '🔴 DDG is LIVE on Twitch!' : 'DDG is offline'}
                  </span>
                  {isLive && <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />}
                </div>
                {isLive && (
                  <div className="flex items-center space-x-4 text-sm">
                    <p className="text-purple-100 flex items-center space-x-1">
                      <Eye className="w-4 h-4" />
                      <span className="animate-pulse font-medium">{liveViewers.toLocaleString()} viewers</span>
                    </p>
                    <p className="text-purple-200 flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>Started 2h ago</span>
                    </p>
                  </div>
                )}
              </div>
            </div>
            {isLive && (
              <div className="flex flex-col items-end space-y-2">
                <div className="text-purple-200 text-sm font-medium">
                  {currentTime.toLocaleTimeString()}
                </div>
                <button className="relative bg-white/20 hover:bg-white/30 backdrop-blur-sm px-6 py-3 rounded-xl text-white font-medium transition-all duration-300 transform hover:scale-105 shadow-lg border border-white/20 group overflow-hidden">
                  <span className="relative z-10 flex items-center space-x-2">
                    <Play className="w-4 h-4" />
                    <span>Watch Now</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                </button>
              </div>
            )}
          </div>
          
          {/* Enhanced background effects */}
          {isLive && (
            <>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 animate-pulse"></div>
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse"></div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 animate-pulse"></div>
            </>
          )}
        </EnhancedCard>
      </div>

      {/* Enhanced Recent Drops with Carousel */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent flex items-center space-x-3">
            <Sparkles className="w-8 h-8 text-purple-400" />
            <span>Recent Drops</span>
          </h2>
          <button className="text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors hover:scale-105 transform duration-200 flex items-center space-x-1">
            <span>View All</span>
            <TrendingUp className="w-4 h-4" />
          </button>
        </div>

        <Carousel className="w-full">
          <CarouselContent className="-ml-2 md:-ml-4">
            {recentDrops.map((drop) => (
              <CarouselItem key={drop.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <EnhancedCard className="p-6 h-full">
                  <div className={`aspect-video bg-${drop.thumbnail} rounded-xl mb-4 flex items-center justify-center relative overflow-hidden group cursor-pointer`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-black/30 to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <Play className="w-16 h-16 text-white/80 relative z-10 group-hover:scale-125 transition-transform duration-500 drop-shadow-lg" />
                    
                    {/* Duration badge */}
                    <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-sm px-2 py-1 rounded text-white text-xs font-medium">
                      {drop.duration}
                    </div>
                    
                    {/* Type badge */}
                    <div className="absolute top-3 left-3 bg-purple-500/80 backdrop-blur-sm px-2 py-1 rounded text-white text-xs font-medium">
                      {drop.type}
                    </div>
                    
                    {/* Floating play button animation */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 border-2 border-white/30 rounded-full animate-ping opacity-0 group-hover:opacity-100"></div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="font-semibold text-white text-lg group-hover:text-purple-200 transition-colors line-clamp-2">
                      {drop.title}
                    </h3>
                    
                    <div className="flex items-center justify-between text-gray-400 text-sm">
                      <span className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{drop.date}</span>
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm">
                        <div className="flex items-center space-x-1 hover:text-white transition-colors">
                          <Eye className="w-4 h-4" />
                          <span>{drop.views}</span>
                        </div>
                        <div className="flex items-center space-x-1 hover:text-red-400 transition-colors">
                          <Heart className="w-4 h-4" />
                          <span>{drop.likes}</span>
                        </div>
                      </div>
                      <Star className="w-4 h-4 text-yellow-400 hover:scale-110 transition-transform cursor-pointer" />
                    </div>
                  </div>
                </EnhancedCard>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-white border-purple-500/50 hover:bg-purple-500/20" />
          <CarouselNext className="text-white border-purple-500/50 hover:bg-purple-500/20" />
        </Carousel>
      </div>

      {/* Enhanced Content Feed with Better Interaction */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent flex items-center space-x-3">
          <TrendingUp className="w-8 h-8 text-green-400" />
          <span>Latest Updates</span>
        </h2>
        
        <div className="grid gap-6">
          {contentUpdates.map((post, index) => (
            <EnhancedCard key={index} glowColor={post.color as any} className="p-6 hover:scale-[1.01] transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start space-x-4">
                  <div className="relative w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg group-hover:shadow-purple-500/50 transition-all duration-300 group-hover:rotate-6">
                    {post.type === 'youtube' && '🎥'}
                    {post.type === 'instagram' && '📸'}
                    {post.type === 'music' && '🎶'}
                    {post.type === 'tiktok' && '🎵'}
                    
                    {/* Floating particles */}
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-bounce opacity-0 group-hover:opacity-100 transition-opacity delay-200"></div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white text-xl group-hover:text-purple-200 transition-colors mb-1">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-2">{post.description}</p>
                    <div className="flex items-center space-x-4 text-gray-400 text-sm">
                      <div className="flex items-center space-x-1">
                        <div className="w-1 h-1 bg-purple-400 rounded-full animate-pulse"></div>
                        <span>{post.time}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>{post.views}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="text-right space-y-2">
                  <div className="flex items-center space-x-1 text-green-400 text-sm font-medium">
                    <TrendingUp className="w-4 h-4 animate-pulse" />
                    <span>{post.engagement}</span>
                  </div>
                  <button className="text-purple-400 hover:text-purple-300 transition-colors">
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              {/* Enhanced Content Preview */}
              <div className="aspect-video bg-gradient-to-br from-gray-700/50 to-gray-800/50 rounded-xl flex items-center justify-center group-hover:scale-[1.02] transition-transform duration-500 relative overflow-hidden mb-4">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <Play className="w-16 h-16 text-white/50 relative z-10 group-hover:scale-110 transition-transform duration-300" />
                
                {/* Video preview overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              {/* Enhanced Interaction Bar */}
              <div className="flex items-center justify-between text-gray-400 text-sm border-t border-gray-700/50 pt-4">
                <div className="flex items-center space-x-6">
                  <button className="flex items-center space-x-1 hover:text-red-400 transition-colors">
                    <Heart className="w-4 h-4" />
                    <span>Like</span>
                  </button>
                  <button className="flex items-center space-x-1 hover:text-blue-400 transition-colors">
                    <MessageCircle className="w-4 h-4" />
                    <span>{post.comments}</span>
                  </button>
                  <button className="flex items-center space-x-1 hover:text-green-400 transition-colors">
                    <Share2 className="w-4 h-4" />
                    <span>{post.shares}</span>
                  </button>
                </div>
                <button className="text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors">
                  View Full Post
                </button>
              </div>
            </EnhancedCard>
          ))}
        </div>
      </div>
    </div>
  );
}
