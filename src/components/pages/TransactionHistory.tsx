import React, { useState } from 'react';
import { 
  Clock, 
  Filter, 
  Download, 
  Search,
  ArrowUpDown,
  ArrowDownToLine,
  ArrowUpFromLine,
  ArrowLeftRight,
  Calendar
} from 'lucide-react';

interface Transaction {
  id: string;
  type: 'deposit' | 'withdrawal' | 'transfer';
  amount: number;
  status: 'completed' | 'pending' | 'failed' | 'cancelled';
  date: string;
  time: string;
  method: string;
  account: string;
  reference: string;
}

const TransactionHistory: React.FC = () => {
  const [filterType, setFilterType] = useState('all');
  const [dateRange, setDateRange] = useState('30');
  const [searchTerm, setSearchTerm] = useState('');

  // Mock transaction data
  const transactions: Transaction[] = [
    {
      id: 'TXN001',
      type: 'deposit',
      amount: 1000.00,
      status: 'completed',
      date: '2024-01-15',
      time: '14:30:25',
      method: 'Credit Card',
      account: 'MT5: 303419',
      reference: 'DEP-2024-001'
    },
    {
      id: 'TXN002',
      type: 'withdrawal',
      amount: 500.00,
      status: 'pending',
      date: '2024-01-14',
      time: '09:15:10',
      method: 'Bank Transfer',
      account: 'MT5: 408312',
      reference: 'WTH-2024-001'
    },
    {
      id: 'TXN003',
      type: 'transfer',
      amount: 250.00,
      status: 'completed',
      date: '2024-01-13',
      time: '16:45:30',
      method: 'Internal Transfer',
      account: 'MT5: 303419 → MT5: 408312',
      reference: 'TRF-2024-001'
    }
  ];

  const getTransactionIcon = (type: string) => {
    switch (type) {
      case 'deposit':
        return <ArrowDownToLine size={16} className="text-green-600" />;
      case 'withdrawal':
        return <ArrowUpFromLine size={16} className="text-red-600" />;
      case 'transfer':
        return <ArrowLeftRight size={16} className="text-blue-600" />;
      default:
        return <ArrowUpDown size={16} className="text-gray-600" />;
    }
  };

  const getStatusBadge = (status: string) => {
    const statusStyles = {
      completed: 'bg-green-100 text-green-800',
      pending: 'bg-yellow-100 text-yellow-800',
      failed: 'bg-red-100 text-red-800',
      cancelled: 'bg-gray-100 text-gray-800'
    };

    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusStyles[status as keyof typeof statusStyles]}`}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  const filteredTransactions = transactions.filter(transaction => {
    if (filterType !== 'all' && transaction.type !== filterType) return false;
    if (searchTerm && !transaction.reference.toLowerCase().includes(searchTerm.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
            <Clock size={20} className="text-purple-600" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Transaction History</h1>
            <p className="text-gray-600">View all your account transactions</p>
          </div>
        </div>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
          <Download size={16} />
          <span>Export</span>
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white/80 backdrop-blur-md rounded-xl shadow-sm p-6 border border-white/50">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
            {/* Transaction Type Filter */}
            <div className="flex items-center space-x-2">
              <Filter size={16} className="text-gray-500" />
              <select 
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/80"
              >
                <option value="all">All Transactions</option>
                <option value="deposit">Deposits</option>
                <option value="withdrawal">Withdrawals</option>
                <option value="transfer">Transfers</option>
              </select>
            </div>

            {/* Date Range Filter */}
            <div className="flex items-center space-x-2">
              <Calendar size={16} className="text-gray-500" />
              <select 
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/80"
              >
                <option value="7">Last 7 days</option>
                <option value="30">Last 30 days</option>
                <option value="90">Last 3 months</option>
                <option value="365">Last year</option>
              </select>
            </div>
          </div>

          {/* Search */}
          <div className="relative">
            <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search by reference..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/80"
            />
          </div>
        </div>
      </div>

      {/* Transaction Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white/80 backdrop-blur-md rounded-xl shadow-sm p-6 border border-white/50">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-600">Total Deposits</h3>
            <ArrowDownToLine size={16} className="text-green-600" />
          </div>
          <p className="text-2xl font-bold text-green-600">$1,000.00</p>
          <p className="text-xs text-gray-500">1 transaction</p>
        </div>

        <div className="bg-white/80 backdrop-blur-md rounded-xl shadow-sm p-6 border border-white/50">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-600">Total Withdrawals</h3>
            <ArrowUpFromLine size={16} className="text-red-600" />
          </div>
          <p className="text-2xl font-bold text-red-600">$500.00</p>
          <p className="text-xs text-gray-500">1 transaction</p>
        </div>

        <div className="bg-white/80 backdrop-blur-md rounded-xl shadow-sm p-6 border border-white/50">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-600">Total Transfers</h3>
            <ArrowLeftRight size={16} className="text-blue-600" />
          </div>
          <p className="text-2xl font-bold text-blue-600">$250.00</p>
          <p className="text-xs text-gray-500">1 transaction</p>
        </div>

        <div className="bg-white/80 backdrop-blur-md rounded-xl shadow-sm p-6 border border-white/50">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-600">Net Flow</h3>
            <ArrowUpDown size={16} className="text-gray-600" />
          </div>
          <p className="text-2xl font-bold text-gray-800">$750.00</p>
          <p className="text-xs text-gray-500">3 transactions</p>
        </div>
      </div>

      {/* Transactions Table */}
      <div className="bg-white/80 backdrop-blur-md rounded-xl shadow-sm overflow-hidden border border-white/50">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800">
            Recent Transactions ({filteredTransactions.length})
          </h2>
        </div>

        {filteredTransactions.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50/80">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Transaction
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Amount
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date & Time
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Method
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Account
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white/60 divide-y divide-gray-200">
                {filteredTransactions.map((transaction) => (
                  <tr key={transaction.id} className="hover:bg-gray-50/50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-3">
                        {getTransactionIcon(transaction.type)}
                        <div>
                          <p className="text-sm font-medium text-gray-800">{transaction.reference}</p>
                          <p className="text-xs text-gray-500">{transaction.id}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm text-gray-800 capitalize">{transaction.type}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`text-sm font-medium ${
                        transaction.type === 'deposit' ? 'text-green-600' :
                        transaction.type === 'withdrawal' ? 'text-red-600' :
                        'text-blue-600'
                      }`}>
                        ${transaction.amount.toFixed(2)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {getStatusBadge(transaction.status)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-800">{transaction.date}</div>
                      <div className="text-xs text-gray-500">{transaction.time}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      {transaction.method}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      {transaction.account}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center py-12">
            <Clock size={48} className="mx-auto text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-gray-800 mb-2">No transactions found</h3>
            <p className="text-gray-500">Try adjusting your filters or date range</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TransactionHistory;