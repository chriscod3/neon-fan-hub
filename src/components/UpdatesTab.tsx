
import { Play, Radio, Eye, TrendingUp, Heart, Sparkles, Calendar, Clock, Star, Users, MessageCircle, Share2, Zap, Music, Video, Image, Mic, Globe, Bell, Activity, ArrowRight, ChevronDown, Dot, Plus, Filter, Search, Rss, Wifi, Signal, Terminal, Database, Cpu, HardDrive, NetworkIcon as Network, MonitorSpeaker, Radar, Waves, Pulse, BarChart3, LineChart, PieChart, AlertTriangle, CheckCircle, XCircle, Loader, Gauge } from 'lucide-react';
import { useState, useEffect } from 'react';
import { EnhancedCard } from '@/components/EnhancedCard';

export function UpdatesTab() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [systemStatus, setSystemStatus] = useState('OPERATIONAL');
  const [dataStreams, setDataStreams] = useState(0);
  const [activeConnections, setActiveConnections] = useState(127);
  const [cpuUsage, setCpuUsage] = useState(65);
  const [networkActivity, setNetworkActivity] = useState(85);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
      setDataStreams(prev => prev + Math.floor(Math.random() * 5));
      setActiveConnections(prev => prev + Math.floor(Math.random() * 3 - 1));
      setCpuUsage(prev => Math.max(20, Math.min(95, prev + Math.floor(Math.random() * 10 - 5))));
      setNetworkActivity(prev => Math.max(30, Math.min(100, prev + Math.floor(Math.random() * 15 - 7))));
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const terminalLogs = [
    { time: '14:23:45', type: 'INFO', message: 'New track uploaded to Spotify' },
    { time: '14:22:12', type: 'SUCCESS', message: 'YouTube stream started successfully' },
    { time: '14:21:33', type: 'WARNING', message: 'High traffic detected on Instagram' },
    { time: '14:20:15', type: 'INFO', message: 'Twitch chat moderation active' },
    { time: '14:19:42', type: 'SUCCESS', message: 'Twitter post published' },
    { time: '14:18:27', type: 'INFO', message: 'TikTok video processing complete' }
  ];

  const realTimeData = [
    { platform: 'Twitch', status: 'LIVE', viewers: 2847, trend: '+12%' },
    { platform: 'YouTube', status: 'ACTIVE', subscribers: '1.2M', trend: '+5%' },
    { platform: 'Instagram', status: 'ACTIVE', followers: '850K', trend: '+8%' },
    { platform: 'Twitter', status: 'ACTIVE', followers: '420K', trend: '+3%' },
    { platform: 'TikTok', status: 'ACTIVE', followers: '2.1M', trend: '+15%' },
    { platform: 'Spotify', status: 'STREAMING', listeners: '45K', trend: '+7%' }
  ];

  const alerts = [
    { id: 1, type: 'critical', title: 'Server Load High', message: 'CPU usage above 90%', time: '2m ago' },
    { id: 2, type: 'warning', title: 'Rate Limit Warning', message: 'Twitter API approaching limit', time: '5m ago' },
    { id: 3, type: 'info', title: 'New Milestone', message: '1M total followers reached', time: '12m ago' }
  ];

  const getLogTypeColor = (type: string) => {
    switch (type) {
      case 'SUCCESS': return 'text-green-400';
      case 'WARNING': return 'text-yellow-400';
      case 'ERROR': return 'text-red-400';
      default: return 'text-blue-400';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'LIVE': return 'text-red-400 animate-pulse';
      case 'ACTIVE': return 'text-green-400';
      case 'STREAMING': return 'text-purple-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-green-400 font-mono pb-24 relative overflow-hidden">
      {/* Matrix-style background effect */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px),
            linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px',
          animation: 'matrix-scroll 20s linear infinite'
        }} />
      </div>

      {/* Command Center Header */}
      <div className="relative z-10 p-6 border-b border-green-500/30 bg-gray-900/50 backdrop-blur-sm">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <h1 className="text-2xl font-bold text-green-400 tracking-wider">
              [DDG_COMMAND_CENTER_v2.1]
            </h1>
            <div className="text-green-400/70">
              STATUS: <span className="text-green-400 font-bold">{systemStatus}</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-6 text-sm">
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>{currentTime.toLocaleTimeString()}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Database className="w-4 h-4" />
              <span>STREAMS: {dataStreams}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Network className="w-4 h-4" />
              <span>CONN: {activeConnections}</span>
            </div>
          </div>
        </div>

        {/* System Metrics Bar */}
        <div className="grid grid-cols-4 gap-4 text-xs">
          <div className="flex items-center space-x-2">
            <Cpu className="w-3 h-3" />
            <span>CPU:</span>
            <div className="flex-1 bg-gray-800 rounded-full h-2">
              <div 
                className="bg-green-400 h-2 rounded-full transition-all duration-500"
                style={{ width: `${cpuUsage}%` }}
              />
            </div>
            <span>{cpuUsage}%</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <HardDrive className="w-3 h-3" />
            <span>DISK:</span>
            <div className="flex-1 bg-gray-800 rounded-full h-2">
              <div className="bg-green-400 h-2 rounded-full w-3/4" />
            </div>
            <span>72%</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <Waves className="w-3 h-3" />
            <span>NET:</span>
            <div className="flex-1 bg-gray-800 rounded-full h-2">
              <div 
                className="bg-green-400 h-2 rounded-full transition-all duration-500"
                style={{ width: `${networkActivity}%` }}
              />
            </div>
            <span>{networkActivity}%</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <Gauge className="w-3 h-3" />
            <span>LOAD:</span>
            <div className="flex-1 bg-gray-800 rounded-full h-2">
              <div className="bg-yellow-400 h-2 rounded-full w-2/3" />
            </div>
            <span>65%</span>
          </div>
        </div>
      </div>

      <div className="relative z-10 p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Live Platform Monitoring */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center space-x-2 mb-4">
            <Radar className="w-5 h-5 text-green-400 animate-spin" style={{ animationDuration: '3s' }} />
            <h2 className="text-lg font-bold text-green-400">[PLATFORM_MONITOR]</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {realTimeData.map((platform, index) => (
              <div key={platform.platform} className="bg-gray-900/70 border border-green-500/30 rounded-lg p-4 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <div className={`w-2 h-2 rounded-full ${getStatusColor(platform.status)}`}></div>
                    <span className="text-green-400 font-bold">{platform.platform.toUpperCase()}</span>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded ${getStatusColor(platform.status)} bg-gray-800/50`}>
                    {platform.status}
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-green-400/70 text-sm">
                      {platform.platform === 'Twitch' ? 'VIEWERS' : 
                       platform.platform === 'Spotify' ? 'LISTENERS' : 'FOLLOWERS'}:
                    </span>
                    <span className="text-green-400 font-bold">{platform.viewers || platform.subscribers || platform.followers || platform.listeners}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-green-400/70 text-sm">TREND:</span>
                    <span className="text-green-400 font-bold">{platform.trend}</span>
                  </div>

                  {/* Activity Graph Simulation */}
                  <div className="mt-3 h-8 bg-gray-800/50 rounded overflow-hidden relative">
                    <div className="flex items-end h-full space-x-0.5 px-1">
                      {Array(20).fill(0).map((_, i) => (
                        <div
                          key={i}
                          className="bg-green-400/60 flex-1 animate-pulse"
                          style={{ 
                            height: `${Math.random() * 100}%`,
                            animationDelay: `${i * 0.1}s`
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Command Terminal */}
          <div className="bg-gray-900/90 border border-green-500/30 rounded-lg overflow-hidden backdrop-blur-sm">
            <div className="bg-gray-800/50 px-4 py-2 border-b border-green-500/30 flex items-center space-x-2">
              <Terminal className="w-4 h-4 text-green-400" />
              <span className="text-green-400 font-bold">[ACTIVITY_LOG]</span>
              <div className="flex space-x-1 ml-auto">
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              </div>
            </div>
            
            <div className="p-4 space-y-1 max-h-48 overflow-y-auto font-mono text-xs">
              {terminalLogs.map((log, index) => (
                <div key={index} className="flex items-center space-x-3 hover:bg-gray-800/50 px-2 py-1 rounded">
                  <span className="text-green-400/50">[{log.time}]</span>
                  <span className={`font-bold ${getLogTypeColor(log.type)}`}>{log.type}</span>
                  <span className="text-green-400/80">{log.message}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Alert Panel & System Info */}
        <div className="space-y-4">
          {/* Alert System */}
          <div className="bg-gray-900/70 border border-green-500/30 rounded-lg backdrop-blur-sm">
            <div className="px-4 py-3 border-b border-green-500/30 flex items-center space-x-2">
              <AlertTriangle className="w-4 h-4 text-yellow-400 animate-pulse" />
              <span className="text-green-400 font-bold">[ALERTS]</span>
            </div>
            
            <div className="p-4 space-y-3">
              {alerts.map((alert) => (
                <div key={alert.id} className="bg-gray-800/50 border-l-4 border-l-red-400 p-3 rounded">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-red-400 font-bold text-sm">{alert.title}</span>
                    <span className="text-green-400/50 text-xs">{alert.time}</span>
                  </div>
                  <p className="text-green-400/80 text-xs">{alert.message}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Data Visualization Panel */}
          <div className="bg-gray-900/70 border border-green-500/30 rounded-lg backdrop-blur-sm">
            <div className="px-4 py-3 border-b border-green-500/30 flex items-center space-x-2">
              <BarChart3 className="w-4 h-4 text-green-400" />
              <span className="text-green-400 font-bold">[ANALYTICS]</span>
            </div>
            
            <div className="p-4 space-y-4">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-gray-800/50 p-3 rounded">
                  <div className="text-2xl font-bold text-green-400">1.2M</div>
                  <div className="text-xs text-green-400/70">TOTAL REACH</div>
                </div>
                <div className="bg-gray-800/50 p-3 rounded">
                  <div className="text-2xl font-bold text-green-400">24</div>
                  <div className="text-xs text-green-400/70">LIVE FEEDS</div>
                </div>
              </div>

              {/* Mini Network Graph */}
              <div className="bg-gray-800/50 rounded p-3">
                <div className="text-xs text-green-400/70 mb-2">NETWORK TOPOLOGY</div>
                <div className="grid grid-cols-3 gap-2">
                  {Array(9).fill(0).map((_, i) => (
                    <div key={i} className="aspect-square bg-green-400/20 rounded flex items-center justify-center">
                      <div className={`w-2 h-2 rounded-full ${Math.random() > 0.5 ? 'bg-green-400 animate-pulse' : 'bg-gray-600'}`} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-gray-900/70 border border-green-500/30 rounded-lg backdrop-blur-sm">
            <div className="px-4 py-3 border-b border-green-500/30 flex items-center space-x-2">
              <Zap className="w-4 h-4 text-green-400" />
              <span className="text-green-400 font-bold">[QUICK_ACTIONS]</span>
            </div>
            
            <div className="p-4 grid grid-cols-2 gap-2">
              <button className="bg-gray-800/50 hover:bg-gray-700/50 border border-green-500/30 rounded p-2 text-xs text-green-400 transition-colors">
                DEPLOY
              </button>
              <button className="bg-gray-800/50 hover:bg-gray-700/50 border border-green-500/30 rounded p-2 text-xs text-green-400 transition-colors">
                RESTART
              </button>
              <button className="bg-gray-800/50 hover:bg-gray-700/50 border border-green-500/30 rounded p-2 text-xs text-green-400 transition-colors">
                BACKUP
              </button>
              <button className="bg-gray-800/50 hover:bg-gray-700/50 border border-green-500/30 rounded p-2 text-xs text-green-400 transition-colors">
                MONITOR
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes matrix-scroll {
          0% { transform: translateY(0); }
          100% { transform: translateY(20px); }
        }
      `}</style>
    </div>
  );
}
