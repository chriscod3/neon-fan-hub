
import { Heart, MessageCircle, Share, Plus, Flame, Brain, Skull } from 'lucide-react';
import { useState } from 'react';

export function MemesTab() {
  const [memes] = useState([
    { id: 1, caption: "When DDG drops a new track", likes: 234, comments: 12, category: 'fire' },
    { id: 2, caption: "Me waiting for the next stream", likes: 189, comments: 8, category: 'skull' },
    { id: 3, caption: "DDG's bars be like", likes: 456, comments: 23, category: 'brain' },
    { id: 4, caption: "That new music video hits different", likes: 321, comments: 15, category: 'fire' },
    { id: 5, caption: "Fan since day one energy", likes: 567, comments: 34, category: 'brain' },
    { id: 6, caption: "When someone says they don't know DDG", likes: 123, comments: 7, category: 'skull' },
  ]);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'fire': return <Flame className="w-4 h-4 text-orange-400" />;
      case 'brain': return <Brain className="w-4 h-4 text-purple-400" />;
      case 'skull': return <Skull className="w-4 h-4 text-gray-400" />;
      default: return null;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'fire': return 'border-orange-500/20';
      case 'brain': return 'border-purple-500/20';
      case 'skull': return 'border-gray-500/20';
      default: return 'border-purple-500/20';
    }
  };

  return (
    <div className="space-y-6 pb-20">
      {/* Header with Submit Button */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">Meme Wall</h1>
        <button className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-full text-white font-medium flex items-center space-x-2 transition-all">
          <Plus className="w-4 h-4" />
          <span>Submit Meme</span>
        </button>
      </div>

      {/* Top Meme of the Week */}
      <div className="bg-gradient-to-r from-yellow-600/20 to-orange-600/20 rounded-lg p-6 border border-yellow-500/30">
        <div className="flex items-center space-x-2 mb-4">
          <span className="text-2xl">🏆</span>
          <span className="text-yellow-400 font-bold">Top Meme of the Week</span>
        </div>
        <div className="bg-gray-800/50 rounded-lg p-4 border border-yellow-500/20">
          <div className="aspect-square bg-gradient-to-br from-yellow-900/50 to-orange-900/50 rounded-lg mb-3 flex items-center justify-center">
            <span className="text-4xl">😂</span>
          </div>
          <p className="text-white font-medium mb-2">"When DDG drops the hardest bar of 2024"</p>
          <div className="flex items-center justify-between text-gray-400 text-sm">
            <span>by @TopFan123</span>
            <span>1.2K likes</span>
          </div>
        </div>
      </div>

      {/* Category Filters */}
      <div className="flex space-x-2 overflow-x-auto pb-2">
        <button className="flex items-center space-x-2 bg-orange-600/20 border border-orange-500/30 px-4 py-2 rounded-full text-orange-400 font-medium whitespace-nowrap">
          <Flame className="w-4 h-4" />
          <span>🔥 Fire</span>
        </button>
        <button className="flex items-center space-x-2 bg-gray-800/50 border border-gray-600/30 px-4 py-2 rounded-full text-gray-400 font-medium whitespace-nowrap hover:bg-purple-600/20 hover:border-purple-500/30 hover:text-purple-400 transition-all">
          <Skull className="w-4 h-4" />
          <span>💀 Skull</span>
        </button>
        <button className="flex items-center space-x-2 bg-gray-800/50 border border-gray-600/30 px-4 py-2 rounded-full text-gray-400 font-medium whitespace-nowrap hover:bg-purple-600/20 hover:border-purple-500/30 hover:text-purple-400 transition-all">
          <Brain className="w-4 h-4" />
          <span>🧠 Big Brain</span>
        </button>
      </div>

      {/* Memes Grid */}
      <div className="grid grid-cols-2 gap-4">
        {memes.map((meme, index) => (
          <div key={meme.id} className={`bg-gray-800/50 rounded-lg p-3 border ${getCategoryColor(meme.category)} hover:border-purple-400/40 transition-all cursor-pointer`}>
            <div className="aspect-square bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-lg mb-3 flex items-center justify-center relative">
              <span className="text-3xl">
                {index % 4 === 0 && '😂'}
                {index % 4 === 1 && '💀'}
                {index % 4 === 2 && '🔥'}
                {index % 4 === 3 && '🧠'}
              </span>
              <div className="absolute top-2 right-2">
                {getCategoryIcon(meme.category)}
              </div>
            </div>
            <p className="text-white text-sm font-medium mb-2 line-clamp-2">{meme.caption}</p>
            <div className="flex items-center justify-between text-gray-400 text-xs">
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-1">
                  <Heart className="w-3 h-3" />
                  <span>{meme.likes}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MessageCircle className="w-3 h-3" />
                  <span>{meme.comments}</span>
                </div>
              </div>
              <Share className="w-3 h-3 hover:text-purple-400 cursor-pointer" />
            </div>
          </div>
        ))}
      </div>

      {/* Load More */}
      <button className="w-full bg-gray-800/50 hover:bg-gray-700/50 border border-purple-500/20 hover:border-purple-400/40 py-4 rounded-lg text-gray-400 hover:text-white font-medium transition-all">
        Load More Memes
      </button>
    </div>
  );
}
