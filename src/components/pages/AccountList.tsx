import React, { useState } from 'react';
import { 
  Users, 
  MoreHorizontal, 
  Eye, 
  Settings, 
  Trash2,
  Plus,
  Search,
  Filter,
  TrendingUp,
  TrendingDown,
  BarChart3
} from 'lucide-react';

interface Account {
  id: string;
  name: string;
  type: string;
  server: string;
  balance: number;
  equity: number;
  margin: number;
  freeMargin: number;
  marginLevel: number;
  pnl: number;
  leverage: string;
  currency: string;
  status: 'active' | 'inactive' | 'suspended';
  created: string;
  lastLogin: string;
}

const AccountList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const accounts: Account[] = [
    {
      id: '303419',
      name: 'DIVYESH Katariya',
      type: 'ECN',
      server: 'Fxco Liquidity Corp',
      balance: 0.00,
      equity: 0.00,
      margin: 0.00,
      freeMargin: 0.00,
      marginLevel: 0.00,
      pnl: 0.00,
      leverage: '1:500',
      currency: 'USD',
      status: 'active',
      created: '2024-01-15',
      lastLogin: '2024-01-20 14:30'
    },
    {
      id: '408312',
      name: 'DIVYESH Katariya',
      type: 'ECN',
      server: 'Fxco Liquidity Corp',
      balance: 0.00,
      equity: 0.00,
      margin: 0.00,
      freeMargin: 0.00,
      marginLevel: 0.00,
      pnl: 0.00,
      leverage: '1:500',
      currency: 'USD',
      status: 'active',
      created: '2024-01-10',
      lastLogin: '2024-01-19 09:15'
    }
  ];

  const getStatusBadge = (status: string) => {
    const statusStyles = {
      active: 'bg-green-100 text-green-800',
      inactive: 'bg-gray-100 text-gray-800',
      suspended: 'bg-red-100 text-red-800'
    };

    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusStyles[status as keyof typeof statusStyles]}`}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  const filteredAccounts = accounts.filter(account => {
    if (filterStatus !== 'all' && account.status !== filterStatus) return false;
    if (searchTerm && !account.id.includes(searchTerm) && !account.name.toLowerCase().includes(searchTerm.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
            <Users size={20} className="text-blue-600" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Account List</h1>
            <p className="text-gray-600">Manage all your trading accounts</p>
          </div>
        </div>
        <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
          <Plus size={16} />
          <span>New Account</span>
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white/80 backdrop-blur-md rounded-xl shadow-sm p-6 border border-white/50">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-600">Total Accounts</h3>
            <Users size={16} className="text-blue-600" />
          </div>
          <p className="text-2xl font-bold text-gray-800">2</p>
          <p className="text-xs text-green-600">All active</p>
        </div>

        <div className="bg-white/80 backdrop-blur-md rounded-xl shadow-sm p-6 border border-white/50">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-600">Total Balance</h3>
            <BarChart3 size={16} className="text-green-600" />
          </div>
          <p className="text-2xl font-bold text-green-600">$0.00</p>
          <p className="text-xs text-gray-500">Across all accounts</p>
        </div>

        <div className="bg-white/80 backdrop-blur-md rounded-xl shadow-sm p-6 border border-white/50">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-600">Total Equity</h3>
            <TrendingUp size={16} className="text-blue-600" />
          </div>
          <p className="text-2xl font-bold text-blue-600">$0.00</p>
          <p className="text-xs text-gray-500">Current market value</p>
        </div>

        <div className="bg-white/80 backdrop-blur-md rounded-xl shadow-sm p-6 border border-white/50">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-600">Total P&L</h3>
            <TrendingDown size={16} className="text-gray-600" />
          </div>
          <p className="text-2xl font-bold text-gray-600">$0.00</p>
          <p className="text-xs text-gray-500">Unrealized profit/loss</p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white/80 backdrop-blur-md rounded-xl shadow-sm p-6 border border-white/50">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
            {/* Status Filter */}
            <div className="flex items-center space-x-2">
              <Filter size={16} className="text-gray-500" />
              <select 
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/80"
              >
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
                <option value="suspended">Suspended</option>
              </select>
            </div>
          </div>

          {/* Search */}
          <div className="relative">
            <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search accounts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/80"
            />
          </div>
        </div>
      </div>

      {/* Accounts Table */}
      <div className="bg-white/80 backdrop-blur-md rounded-xl shadow-sm overflow-hidden border border-white/50">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800">
            Trading Accounts ({filteredAccounts.length})
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50/80">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Account
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Balance
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Equity
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Margin
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  P&L
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white/60 divide-y divide-gray-200">
              {filteredAccounts.map((account) => (
                <tr key={account.id} className="hover:bg-gray-50/50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <BarChart3 size={16} className="text-blue-600" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-800">MT5: {account.id}</p>
                          <p className="text-xs text-gray-500">{account.name}</p>
                        </div>
                      </div>
                      <div className="mt-2 text-xs text-gray-500">
                        <p>{account.type} • {account.leverage} • {account.currency}</p>
                        <p>Server: {account.server}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-800">
                      ${account.balance.toFixed(2)}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-800">
                      ${account.equity.toFixed(2)}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-800">
                      ${account.margin.toFixed(2)}
                    </div>
                    <div className="text-xs text-gray-500">
                      Free: ${account.freeMargin.toFixed(2)}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className={`text-sm font-medium ${
                      account.pnl > 0 ? 'text-green-600' : 
                      account.pnl < 0 ? 'text-red-600' : 'text-gray-600'
                    }`}>
                      ${account.pnl.toFixed(2)}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {getStatusBadge(account.status)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-2">
                      <button className="p-1 text-gray-400 hover:text-blue-600 transition-colors">
                        <Eye size={16} />
                      </button>
                      <button className="p-1 text-gray-400 hover:text-gray-600 transition-colors">
                        <Settings size={16} />
                      </button>
                      <button className="p-1 text-gray-400 hover:text-red-600 transition-colors">
                        <Trash2 size={16} />
                      </button>
                      <button className="p-1 text-gray-400 hover:text-gray-600 transition-colors">
                        <MoreHorizontal size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AccountList;