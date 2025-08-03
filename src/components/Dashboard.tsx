import React from 'react';
import { 
  Plus, 
  RefreshCw, 
  BarChart3, 
  TrendingUp, 
  TrendingDown, 
  ArrowUpDown, 
  Users,
  CreditCard,
  MoreHorizontal,
  Eye,
  Activity,
  ChevronDown
} from 'lucide-react';

interface StatCard {
  title: string;
  value: string;
  subtitle?: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  color: string;
  bgColor: string;
  borderColor: string;
}

interface PerformanceMetric {
  title: string;
  value: string;
  change: string;
  color: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
}

interface TodayPerformanceItem {
  title: string;
  value: string;
  color: string;
}

interface Account {
  name: string;
  id: string;
  balance: string;
  equity: string;
  pnl: string;
  leverage: string;
  type: string;
}

const Dashboard: React.FC = () => {
  const statCards: StatCard[] = [
    {
      title: 'Total Balance',
      value: '$0.00',
      icon: CreditCard,
      color: 'blue',
      bgColor: 'bg-blue-50/80',
      borderColor: 'border-t-blue-500'
    },
    {
      title: 'Total Deposits',
      value: '$0.00',
      icon: TrendingUp,
      color: 'green',
      bgColor: 'bg-green-50/80',
      borderColor: 'border-t-green-500'
    },
    {
      title: 'Total Withdrawals',
      value: '$0.00',
      icon: TrendingDown,
      color: 'red',
      bgColor: 'bg-red-50/80',
      borderColor: 'border-t-red-500'
    },
    {
      title: 'MT5 Accounts',
      value: '2',
      subtitle: 'Active',
      icon: BarChart3,
      color: 'purple',
      bgColor: 'bg-purple-50/80',
      borderColor: 'border-t-purple-500'
    }
  ];

  const performanceMetrics: PerformanceMetric[] = [
    { title: 'Deposits', value: '$0', change: '+0.0%', color: 'green', icon: TrendingUp },
    { title: 'Withdrawals', value: '$0', change: '+0.0%', color: 'red', icon: TrendingDown },
    { title: 'Transactions', value: '0', change: '+0.0%', color: 'yellow', icon: ArrowUpDown },
    { title: 'IB Partners', value: '0', change: '+0.0%', color: 'purple', icon: Users }
  ];

  const todayPerformance: TodayPerformanceItem[] = [
    { title: 'Deposits', value: '$0', color: 'text-green-600' },
    { title: 'Withdrawals', value: '$0', color: 'text-red-600' },
    { title: 'Transactions', value: '0', color: 'text-blue-600' },
    { title: 'Net Flow', value: '$0', color: 'text-green-600' }
  ];

  const accounts: Account[] = [
    {
      name: 'DIVYESH Katariya',
      id: 'MT5: 303419',
      balance: '$0.00',
      equity: '$0.00',
      pnl: '+$0.00',
      leverage: '500',
      type: 'ECN'
    },
    {
      name: 'DIVYESH Katariya', 
      id: 'MT5: 408312',
      balance: '$0.00',
      equity: '$0.00',
      pnl: '+$0.00',
      leverage: '500',
      type: 'ECN'
    }
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Dashboard Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Dashboard</h1>
          <p className="text-gray-600 flex items-center">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
            Welcome back! Here's your trading overview.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
          <div className="text-sm text-gray-500">
            <p>Last updated: 1:14:41 AM</p>
            <p>Next refresh in: 3s</p>
          </div>
          <div className="flex space-x-2">
            <button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-all duration-200 shadow-lg hover:shadow-xl">
              <Plus size={16} />
              <span>Open Account</span>
            </button>
            <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-all duration-200 shadow-lg hover:shadow-xl">
              <RefreshCw size={16} />
              <span>Refresh</span>
            </button>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((card, index) => {
          const Icon = card.icon;
          return (
            <div key={index} className={`${card.bgColor} backdrop-blur-md rounded-xl p-6 border-t-4 ${card.borderColor} shadow-lg border border-white/50 hover:shadow-xl transition-all duration-200`}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-gray-600">{card.title}</h3>
                <Icon size={20} className={`text-${card.color}-500`} />
              </div>
              <div>
                <p className={`text-2xl font-bold text-gray-800 mb-1`}>{card.value}</p>
                {card.subtitle && (
                  <p className="text-sm text-gray-500">{card.subtitle}</p>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Daily Performance Trends */}
      <div className="bg-white/80 backdrop-blur-md rounded-xl shadow-lg p-6 border border-white/50">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6 space-y-4 lg:space-y-0">
          <div className="flex items-center space-x-2">
            <BarChart3 size={20} className="text-blue-500" />
            <div>
              <h2 className="text-lg font-semibold text-gray-800">Daily Performance Trends</h2>
              <p className="text-sm text-gray-500">Last 30 days activity overview</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <button className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">All</button>
            <button className="text-gray-600 hover:bg-gray-100 px-3 py-1 rounded-full text-sm transition-colors">Financial</button>
            <button className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">Line</button>
            <button className="text-gray-600 hover:bg-gray-100 px-3 py-1 rounded-full text-sm transition-colors">Area</button>
            <button className="text-gray-600 hover:bg-gray-100 px-3 py-1 rounded-full text-sm transition-colors">Mixed</button>
            <select className="text-gray-600 bg-white/80 border border-gray-200 rounded-lg px-3 py-1 text-sm">
              <option>30 Days</option>
              <option>7 Days</option>
              <option>1 Day</option>
            </select>
            <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-3 py-1 rounded-lg text-sm flex items-center space-x-1 transition-all duration-200">
              <RefreshCw size={14} />
              <span>Refresh</span>
            </button>
          </div>
        </div>

        {/* Performance Metrics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {performanceMetrics.map((metric, index) => {
            const Icon = metric.icon;
            const borderColors = {
              green: 'border-l-green-500',
              red: 'border-l-red-500', 
              yellow: 'border-l-yellow-500',
              purple: 'border-l-purple-500'
            };
            
            return (
              <div key={index} className={`bg-white/60 backdrop-blur-sm rounded-lg p-4 border-l-4 ${borderColors[metric.color as keyof typeof borderColors]} border border-white/30`}>
                <div className="flex items-center justify-between mb-2">
                  <Icon size={16} className={`text-${metric.color}-500`} />
                  <span className={`text-xs text-${metric.color}-600 font-medium`}>{metric.change}</span>
                </div>
                <h4 className="text-sm font-medium text-gray-600 mb-1">{metric.title}</h4>
                <p className="text-lg font-bold text-gray-800">{metric.value}</p>
              </div>
            );
          })}
        </div>

        {/* Chart Area */}
        <div className="h-64 bg-white/60 backdrop-blur-sm rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
          <div className="text-center">
            <Activity size={48} className="mx-auto text-gray-400 mb-2" />
            <p className="text-gray-500">Chart visualization area</p>
            <p className="text-sm text-gray-400">Performance data will be displayed here</p>
          </div>
        </div>
      </div>

      {/* Today's Performance */}
      <div className="bg-white/80 backdrop-blur-md rounded-xl shadow-lg p-6 border border-white/50">
        <div className="flex items-center space-x-2 mb-4">
          <TrendingUp size={20} className="text-green-500" />
          <h2 className="text-lg font-semibold text-gray-800">Today's Performance</h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {todayPerformance.map((item, index) => (
            <div key={index} className="text-center">
              <p className={`text-2xl font-bold ${item.color} mb-1`}>{item.value}</p>
              <p className="text-sm text-gray-500">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Transactions */}
        <div className="bg-white/80 backdrop-blur-md rounded-xl shadow-lg p-6 border border-white/50">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                <ArrowUpDown size={16} className="text-purple-600" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-800">Recent Transactions</h2>
                <p className="text-sm text-gray-500">Latest activity on your accounts</p>
              </div>
            </div>
            <RefreshCw size={16} className="text-gray-400" />
          </div>
          
          <div className="flex space-x-2 mb-4">
            <button className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">All (0)</button>
            <button className="text-gray-600 hover:bg-gray-100 px-3 py-1 rounded-full text-sm transition-colors">Deposit</button>
            <button className="text-gray-600 hover:bg-gray-100 px-3 py-1 rounded-full text-sm transition-colors">Withdrawal</button>
            <button className="text-gray-600 hover:bg-gray-100 px-3 py-1 rounded-full text-sm transition-colors">Transfer</button>
          </div>

          <div className="flex flex-col items-center justify-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <ArrowUpDown size={24} className="text-gray-400" />
            </div>
            <p className="text-gray-500">No transactions found</p>
          </div>
        </div>

        {/* Active Accounts */}
        <div className="bg-white/80 backdrop-blur-md rounded-xl shadow-lg p-6 border border-white/50">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                <Users size={16} className="text-blue-600" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-800">Active Accounts</h2>
                <p className="text-sm text-gray-500">2 accounts connected</p>
              </div>
            </div>
            <RefreshCw size={16} className="text-gray-400" />
          </div>

          <p className="text-sm text-gray-500 mb-4">
            <span className="font-medium text-gray-600">Server Name:</span> Fxco Liquidity Corp
          </p>

          <div className="space-y-4">
            {accounts.map((account, index) => (
              <div key={index} className="border border-gray-200/50 rounded-lg p-4 bg-white/60 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="font-medium text-gray-800">{account.name}</h3>
                    <p className="text-sm text-gray-500">{account.id}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded border border-gray-200">{account.type}</span>
                    <button className="p-1 text-gray-400 hover:text-gray-600 transition-colors">
                      <Eye size={16} />
                    </button>
                    <button className="p-1 text-gray-400 hover:text-gray-600 transition-colors">
                      <MoreHorizontal size={16} />
                    </button>
                  </div>
                </div>
                
                <div className="grid grid-cols-4 gap-4 text-sm">
                  <div>
                    <p className="text-gray-500">Balance</p>
                    <p className="font-medium text-gray-800">{account.balance}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Equity</p>
                    <p className="font-medium text-gray-800">{account.equity}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">P&L</p>
                    <p className="font-medium text-green-600">{account.pnl}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Leverage</p>
                    <p className="font-medium text-gray-800">{account.leverage}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;