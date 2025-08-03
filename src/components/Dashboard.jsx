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
  MoreHorizontal
} from 'lucide-react';

const Dashboard = () => {
  const statCards = [
    {
      title: 'Total Balance',
      value: '$0.00',
      icon: CreditCard,
      color: 'blue',
      bgColor: 'bg-blue-50',
      borderColor: 'border-t-blue-500'
    },
    {
      title: 'Total Deposits',
      value: '$0.00',
      icon: TrendingUp,
      color: 'green',
      bgColor: 'bg-green-50',
      borderColor: 'border-t-green-500'
    },
    {
      title: 'Total Withdrawals',
      value: '$0.00',
      icon: TrendingDown,
      color: 'red',
      bgColor: 'bg-red-50',
      borderColor: 'border-t-red-500'
    },
    {
      title: 'MT5 Accounts',
      value: '2',
      subtitle: 'Active',
      icon: BarChart3,
      color: 'purple',
      bgColor: 'bg-purple-50',
      borderColor: 'border-t-purple-500'
    }
  ];

  const performanceMetrics = [
    { title: 'Deposits', value: '$0', change: '+0.0%', color: 'green', icon: TrendingUp },
    { title: 'Withdrawals', value: '$0', change: '+0.0%', color: 'red', icon: TrendingDown },
    { title: 'Transactions', value: '0', change: '+0.0%', color: 'yellow', icon: ArrowUpDown },
    { title: 'IB Partners', value: '0', change: '+0.0%', color: 'purple', icon: Users }
  ];

  const todayPerformance = [
    { title: 'Deposits', value: '$0', color: 'text-green-500' },
    { title: 'Withdrawals', value: '$0', color: 'text-red-500' },
    { title: 'Transactions', value: '0', color: 'text-blue-500' },
    { title: 'Net Flow', value: '$0', color: 'text-green-500' }
  ];

  const accounts = [
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
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
          <p className="text-gray-600 flex items-center">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
            Welcome back! Here's your trading overview.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
          <div className="text-sm text-gray-500">
            <p>Last updated: 1:14:41 AM</p>
            <p>Next refresh in: 3s</p>
          </div>
          <div className="flex space-x-2">
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
              <Plus size={16} />
              <span>Open Account</span>
            </button>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
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
            <div key={index} className={`${card.bgColor} rounded-xl p-6 border-t-4 ${card.borderColor} shadow-sm`}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-gray-600">{card.title}</h3>
                <Icon size={20} className={`text-${card.color}-500`} />
              </div>
              <div>
                <p className={`text-2xl font-bold text-${card.color}-600 mb-1`}>{card.value}</p>
                {card.subtitle && (
                  <p className="text-sm text-gray-500">{card.subtitle}</p>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Daily Performance Trends */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6 space-y-4 lg:space-y-0">
          <div className="flex items-center space-x-2">
            <BarChart3 size={20} className="text-blue-500" />
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Daily Performance Trends</h2>
              <p className="text-sm text-gray-500">Last 30 days activity overview</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <button className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">All</button>
            <button className="text-gray-600 hover:bg-gray-100 px-3 py-1 rounded-full text-sm">Financial</button>
            <button className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">Line</button>
            <button className="text-gray-600 hover:bg-gray-100 px-3 py-1 rounded-full text-sm">Area</button>
            <button className="text-gray-600 hover:bg-gray-100 px-3 py-1 rounded-full text-sm">Mixed</button>
            <select className="text-gray-600 border border-gray-300 rounded-lg px-3 py-1 text-sm">
              <option>30 Days</option>
              <option>7 Days</option>
              <option>1 Day</option>
            </select>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-lg text-sm flex items-center space-x-1">
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
              <div key={index} className={`bg-gray-50 rounded-lg p-4 border-l-4 ${borderColors[metric.color]}`}>
                <div className="flex items-center justify-between mb-2">
                  <Icon size={16} className={`text-${metric.color}-500`} />
                  <span className={`text-xs text-${metric.color}-600 font-medium`}>{metric.change}</span>
                </div>
                <h4 className="text-sm font-medium text-gray-600 mb-1">{metric.title}</h4>
                <p className="text-lg font-bold text-gray-900">{metric.value}</p>
              </div>
            );
          })}
        </div>

        {/* Chart Area */}
        <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
          <div className="text-center">
            <BarChart3 size={48} className="mx-auto text-gray-400 mb-2" />
            <p className="text-gray-500">Chart visualization area</p>
            <p className="text-sm text-gray-400">Performance data will be displayed here</p>
          </div>
        </div>
      </div>

      {/* Today's Performance */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center space-x-2 mb-4">
          <TrendingUp size={20} className="text-green-500" />
          <h2 className="text-lg font-semibold text-gray-900">Today's Performance</h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {todayPerformance.map((item, index) => (
            <div key={index} className="text-center">
              <p className={`text-2xl font-bold ${item.color} mb-1`}>{item.value}</p>
              <p className="text-sm text-gray-600">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Transactions */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                <ArrowUpDown size={16} className="text-purple-600" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-900">Recent Transactions</h2>
                <p className="text-sm text-gray-500">Latest activity on your accounts</p>
              </div>
            </div>
            <RefreshCw size={16} className="text-gray-400" />
          </div>
          
          <div className="flex space-x-2 mb-4">
            <button className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">All (0)</button>
            <button className="text-gray-600 hover:bg-gray-100 px-3 py-1 rounded-full text-sm">Deposit</button>
            <button className="text-gray-600 hover:bg-gray-100 px-3 py-1 rounded-full text-sm">Withdrawal</button>
            <button className="text-gray-600 hover:bg-gray-100 px-3 py-1 rounded-full text-sm">Transfer</button>
          </div>

          <div className="flex flex-col items-center justify-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <ArrowUpDown size={24} className="text-gray-400" />
            </div>
            <p className="text-gray-500">No transactions found</p>
          </div>
        </div>

        {/* Active Accounts */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                <Users size={16} className="text-blue-600" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-900">Active Accounts</h2>
                <p className="text-sm text-gray-500">2 accounts connected</p>
              </div>
            </div>
            <RefreshCw size={16} className="text-gray-400" />
          </div>

          <p className="text-sm text-gray-600 mb-4">
            <span className="font-medium">Server Name:</span> Fxco Liquidity Corp
          </p>

          <div className="space-y-4">
            {accounts.map((account, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="font-medium text-gray-900">{account.name}</h3>
                    <p className="text-sm text-gray-500">{account.id}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">{account.type}</span>
                    <MoreHorizontal size={16} className="text-gray-400" />
                  </div>
                </div>
                
                <div className="grid grid-cols-4 gap-4 text-sm">
                  <div>
                    <p className="text-gray-500">Balance</p>
                    <p className="font-medium">{account.balance}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Equity</p>
                    <p className="font-medium">{account.equity}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">P&L</p>
                    <p className="font-medium text-green-600">{account.pnl}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Leverage</p>
                    <p className="font-medium">{account.leverage}</p>
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