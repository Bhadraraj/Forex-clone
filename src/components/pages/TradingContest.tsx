import React, { useState } from 'react';
import { 
  Trophy, 
  Calendar, 
  Users, 
  DollarSign,
  Clock,
  Star,
  Medal,
  TrendingUp,
  Gift,
  Target
} from 'lucide-react';

interface Contest {
  id: number;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  participants: number;
  prizePool: number;
  entryFee: number;
  status: 'active' | 'upcoming';
  timeLeft?: string;
  registrationDeadline?: string;
  prizes?: Prize[];
}

interface Prize {
  position: string;
  amount: number;
  percentage: number;
}

interface LeaderboardEntry {
  rank: number;
  name: string;
  profit: number;
  trades: number;
  winRate: number;
}

const TradingContest: React.FC = () => {
  const [activeTab, setActiveTab] = useState('current');

  const currentContests: Contest[] = [
    {
      id: 1,
      name: 'Monthly Trading Championship',
      description: 'Compete with traders worldwide for the biggest prizes',
      startDate: '2024-02-01',
      endDate: '2024-02-29',
      participants: 1247,
      prizePool: 50000,
      entryFee: 0,
      status: 'active',
      timeLeft: '15 days',
      prizes: [
        { position: '1st', amount: 20000, percentage: 40 },
        { position: '2nd', amount: 15000, percentage: 30 },
        { position: '3rd', amount: 10000, percentage: 20 },
        { position: '4th-10th', amount: 5000, percentage: 10 }
      ]
    },
    {
      id: 2,
      name: 'Weekly Scalping Challenge',
      description: 'Fast-paced trading competition for scalpers',
      startDate: '2024-01-22',
      endDate: '2024-01-28',
      participants: 523,
      prizePool: 10000,
      entryFee: 50,
      status: 'active',
      timeLeft: '3 days',
      prizes: [
        { position: '1st', amount: 5000, percentage: 50 },
        { position: '2nd', amount: 3000, percentage: 30 },
        { position: '3rd', amount: 2000, percentage: 20 }
      ]
    }
  ];

  const upcomingContests: Contest[] = [
    {
      id: 3,
      name: 'Forex Masters Tournament',
      description: 'Elite competition for experienced traders',
      startDate: '2024-03-01',
      endDate: '2024-03-31',
      participants: 0,
      prizePool: 100000,
      entryFee: 100,
      status: 'upcoming',
      registrationDeadline: '2024-02-25'
    }
  ];

  const leaderboard: LeaderboardEntry[] = [
    { rank: 1, name: 'TradingPro2024', profit: 15420.50, trades: 156, winRate: 78.2 },
    { rank: 2, name: 'ForexMaster', profit: 12890.25, trades: 134, winRate: 72.4 },
    { rank: 3, name: 'ScalpingKing', profit: 11250.75, trades: 289, winRate: 65.8 },
    { rank: 4, name: 'PipHunter', profit: 9875.30, trades: 98, winRate: 81.6 },
    { rank: 5, name: 'MarketWizard', profit: 8960.45, trades: 167, winRate: 69.5 }
  ];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy size={20} className="text-yellow-500" />;
      case 2:
        return <Medal size={20} className="text-gray-400" />;
      case 3:
        return <Medal size={20} className="text-amber-600" />;
      default:
        return <span className="w-5 h-5 bg-gray-200 rounded-full flex items-center justify-center text-xs font-bold text-gray-600">{rank}</span>;
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
          <Trophy size={20} className="text-yellow-600" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Trading Contest</h1>
          <p className="text-gray-600">Compete with traders worldwide and win amazing prizes</p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white/80 backdrop-blur-md rounded-xl shadow-sm p-6 border border-white/50">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-600">Active Contests</h3>
            <Trophy size={16} className="text-yellow-600" />
          </div>
          <p className="text-2xl font-bold text-gray-800">2</p>
          <p className="text-xs text-green-600">Join now</p>
        </div>

        <div className="bg-white/80 backdrop-blur-md rounded-xl shadow-sm p-6 border border-white/50">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-600">Total Prize Pool</h3>
            <DollarSign size={16} className="text-green-600" />
          </div>
          <p className="text-2xl font-bold text-green-600">$60,000</p>
          <p className="text-xs text-gray-500">This month</p>
        </div>

        <div className="bg-white/80 backdrop-blur-md rounded-xl shadow-sm p-6 border border-white/50">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-600">Participants</h3>
            <Users size={16} className="text-blue-600" />
          </div>
          <p className="text-2xl font-bold text-blue-600">1,770</p>
          <p className="text-xs text-gray-500">Active traders</p>
        </div>

        <div className="bg-white/80 backdrop-blur-md rounded-xl shadow-sm p-6 border border-white/50">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-600">Your Rank</h3>
            <Star size={16} className="text-purple-600" />
          </div>
          <p className="text-2xl font-bold text-purple-600">-</p>
          <p className="text-xs text-gray-500">Not participating</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white/80 backdrop-blur-md rounded-xl shadow-sm border border-white/50">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            <button
              onClick={() => setActiveTab('current')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'current'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Current Contests
            </button>
            <button
              onClick={() => setActiveTab('upcoming')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'upcoming'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Upcoming
            </button>
            <button
              onClick={() => setActiveTab('leaderboard')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'leaderboard'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Leaderboard
            </button>
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'current' && (
            <div className="space-y-6">
              {currentContests.map((contest) => (
                <div key={contest.id} className="border border-gray-200 rounded-lg p-6 bg-white/60">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <Trophy size={24} className="text-yellow-500" />
                        <h3 className="text-xl font-bold text-gray-800">{contest.name}</h3>
                        <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                          Active
                        </span>
                      </div>
                      <p className="text-gray-600 mb-4">{contest.description}</p>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div className="flex items-center space-x-2">
                          <Calendar size={16} className="text-gray-400" />
                          <div>
                            <p className="text-gray-500">Duration</p>
                            <p className="font-medium">{contest.startDate} - {contest.endDate}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock size={16} className="text-gray-400" />
                          <div>
                            <p className="text-gray-500">Time Left</p>
                            <p className="font-medium text-red-600">{contest.timeLeft}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Users size={16} className="text-gray-400" />
                          <div>
                            <p className="text-gray-500">Participants</p>
                            <p className="font-medium">{contest.participants.toLocaleString()}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <DollarSign size={16} className="text-gray-400" />
                          <div>
                            <p className="text-gray-500">Prize Pool</p>
                            <p className="font-medium text-green-600">${contest.prizePool.toLocaleString()}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="lg:ml-6">
                      <button className="w-full lg:w-auto bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                        Join Contest
                      </button>
                      {contest.entryFee > 0 && (
                        <p className="text-xs text-gray-500 mt-1 text-center">
                          Entry fee: ${contest.entryFee}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Prize Distribution */}
                  {contest.prizes && (
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <h4 className="font-medium text-gray-800 mb-3">Prize Distribution</h4>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {contest.prizes.map((prize, index) => (
                          <div key={index} className="text-center p-3 bg-gray-50/80 rounded-lg">
                            <p className="text-sm font-medium text-gray-800">{prize.position}</p>
                            <p className="text-lg font-bold text-green-600">${prize.amount.toLocaleString()}</p>
                            <p className="text-xs text-gray-500">{prize.percentage}% of pool</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {activeTab === 'upcoming' && (
            <div className="space-y-6">
              {upcomingContests.map((contest) => (
                <div key={contest.id} className="border border-gray-200 rounded-lg p-6 bg-white/60">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <Gift size={24} className="text-purple-500" />
                        <h3 className="text-xl font-bold text-gray-800">{contest.name}</h3>
                        <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded-full">
                          Upcoming
                        </span>
                      </div>
                      <p className="text-gray-600 mb-4">{contest.description}</p>
                      
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                        <div className="flex items-center space-x-2">
                          <Calendar size={16} className="text-gray-400" />
                          <div>
                            <p className="text-gray-500">Starts</p>
                            <p className="font-medium">{contest.startDate}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Target size={16} className="text-gray-400" />
                          <div>
                            <p className="text-gray-500">Registration Deadline</p>
                            <p className="font-medium text-orange-600">{contest.registrationDeadline}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <DollarSign size={16} className="text-gray-400" />
                          <div>
                            <p className="text-gray-500">Prize Pool</p>
                            <p className="font-medium text-green-600">${contest.prizePool.toLocaleString()}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="lg:ml-6">
                      <button className="w-full lg:w-auto bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                        Register Now
                      </button>
                      <p className="text-xs text-gray-500 mt-1 text-center">
                        Entry fee: ${contest.entryFee}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'leaderboard' && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-800">Monthly Championship Leaderboard</h3>
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <Clock size={16} />
                  <span>Updated 5 minutes ago</span>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50/80">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Rank
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Trader
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Profit
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Trades
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Win Rate
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white/60 divide-y divide-gray-200">
                    {leaderboard.map((trader) => (
                      <tr key={trader.rank} className="hover:bg-gray-50/50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center space-x-2">
                            {getRankIcon(trader.rank)}
                            <span className="font-medium text-gray-800">#{trader.rank}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                              <span className="text-xs font-medium text-blue-600">
                                {trader.name.charAt(0)}
                              </span>
                            </div>
                            <span className="font-medium text-gray-800">{trader.name}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-sm font-medium text-green-600">
                            +${trader.profit.toLocaleString()}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                          {trader.trades}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-sm font-medium text-gray-800">{trader.winRate}%</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TradingContest;