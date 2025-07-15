
import { MessageCircle, Heart, Trophy, Pin } from 'lucide-react';
import { useState } from 'react';

export function CommunityTab() {
  const [discussions] = useState([
    { id: 1, title: "What's your favorite DDG bar from the new track?", replies: 23, likes: 45, time: '2h ago', pinned: true },
    { id: 2, title: "DDG's best music video countdown", replies: 67, likes: 112, time: '4h ago', pinned: false },
    { id: 3, title: "Weekly Poll: Next collab prediction?", replies: 34, likes: 78, time: '6h ago', pinned: false },
    { id: 4, title: "Fan art showcase thread", replies: 89, likes: 203, time: '1d ago', pinned: false },
  ]);

  return (
    <div className="space-y-6 pb-20">
      {/* Daily Fan Question */}
      <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg p-6 border border-purple-500/30">
        <div className="flex items-center space-x-2 mb-3">
          <Pin className="w-5 h-5 text-purple-400" />
          <span className="text-purple-400 font-semibold">Daily Question</span>
        </div>
        <h2 className="text-xl font-bold text-white mb-3">If you could collab with DDG on any track, what would it be about?</h2>
        <button className="bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-full text-white font-medium transition-all">
          Share Your Answer
        </button>
      </div>

      {/* Trending Discussions */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-white flex items-center space-x-2">
            <span>🔥</span>
            <span>Trending Discussions</span>
          </h2>
          <button className="text-purple-400 hover:text-purple-300 text-sm font-medium">
            View All
          </button>
        </div>

        {discussions.map((discussion) => (
          <div key={discussion.id} className="bg-gray-800/50 rounded-lg p-4 border border-purple-500/20 hover:border-purple-400/40 transition-all cursor-pointer">
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                {discussion.pinned ? <Pin className="w-5 h-5" /> : discussion.id}
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  {discussion.pinned && (
                    <span className="bg-purple-600 text-white text-xs px-2 py-1 rounded-full">Pinned</span>
                  )}
                  <span className="text-gray-400 text-sm">{discussion.time}</span>
                </div>
                <h3 className="font-semibold text-white mb-2">{discussion.title}</h3>
                <div className="flex items-center space-x-4 text-gray-400 text-sm">
                  <div className="flex items-center space-x-1">
                    <MessageCircle className="w-4 h-4" />
                    <span>{discussion.replies} replies</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Heart className="w-4 h-4" />
                    <span>{discussion.likes} likes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Leaderboard Preview */}
      <div className="bg-gray-800/30 rounded-lg p-4 border border-purple-500/20">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-white flex items-center space-x-2">
            <Trophy className="w-5 h-5 text-yellow-400" />
            <span>Top Fans This Week</span>
          </h3>
          <button className="text-purple-400 text-sm">View Full</button>
        </div>
        <div className="space-y-2">
          {[1, 2, 3].map((rank) => (
            <div key={rank} className="flex items-center space-x-3">
              <span className="text-yellow-400 font-bold">#{rank}</span>
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full"></div>
              <span className="text-white font-medium">Fan{rank}</span>
              <span className="text-gray-400 text-sm ml-auto">{100 - rank * 10} posts</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
