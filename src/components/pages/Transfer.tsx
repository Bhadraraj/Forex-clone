import React, { useState } from 'react';
import { 
  ArrowLeftRight, 
  ArrowRight,
  Info,
  CheckCircle
} from 'lucide-react';

const Transfer: React.FC = () => {
  const [fromAccount, setFromAccount] = useState('');
  const [toAccount, setToAccount] = useState('');
  const [amount, setAmount] = useState('');

  const accounts = [
    { id: '303419', name: 'MT5: 303419 - DIVYESH Katariya', balance: '0.00' },
    { id: '408312', name: 'MT5: 408312 - DIVYESH Katariya', balance: '0.00' }
  ];

  const handleSwapAccounts = () => {
    const temp = fromAccount;
    setFromAccount(toAccount);
    setToAccount(temp);
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
          <ArrowLeftRight size={20} className="text-blue-600" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Transfer Funds</h1>
          <p className="text-gray-600">Transfer money between your trading accounts</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Transfer Form */}
        <div className="lg:col-span-2">
          <div className="bg-white/80 backdrop-blur-md rounded-xl shadow-sm p-6 border border-white/50">
            <h2 className="text-lg font-semibold text-gray-800 mb-6">Internal Transfer</h2>
            
            <div className="space-y-6">
              {/* From Account */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  From Account
                </label>
                <select 
                  value={fromAccount}
                  onChange={(e) => setFromAccount(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/80"
                >
                  <option value="">Select source account</option>
                  {accounts.map((account) => (
                    <option key={account.id} value={account.id}>
                      {account.name} (${account.balance})
                    </option>
                  ))}
                </select>
              </div>

              {/* Swap Button */}
              <div className="flex justify-center">
                <button
                  onClick={handleSwapAccounts}
                  className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                  disabled={!fromAccount || !toAccount}
                >
                  <ArrowLeftRight size={20} className="text-gray-600" />
                </button>
              </div>

              {/* To Account */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  To Account
                </label>
                <select 
                  value={toAccount}
                  onChange={(e) => setToAccount(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/80"
                >
                  <option value="">Select destination account</option>
                  {accounts.filter(account => account.id !== fromAccount).map((account) => (
                    <option key={account.id} value={account.id}>
                      {account.name} (${account.balance})
                    </option>
                  ))}
                </select>
              </div>

              {/* Amount */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Transfer Amount (USD)
                </label>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="Enter amount to transfer"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/80"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>Min: $1.00</span>
                  <span>Available: $0.00</span>
                </div>
              </div>

              {/* Transfer Summary */}
              {fromAccount && toAccount && amount && (
                <div className="bg-blue-50/80 backdrop-blur-md rounded-lg p-4 border border-white/50">
                  <h3 className="font-medium text-blue-900 mb-2">Transfer Summary</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-blue-700">From:</span>
                      <span className="text-blue-900">
                        {accounts.find(acc => acc.id === fromAccount)?.name.split(' - ')[0]}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-700">To:</span>
                      <span className="text-blue-900">
                        {accounts.find(acc => acc.id === toAccount)?.name.split(' - ')[0]}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-700">Amount:</span>
                      <span className="text-blue-900 font-medium">${amount}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-700">Fee:</span>
                      <span className="text-blue-900">$0.00</span>
                    </div>
                    <hr className="border-blue-200" />
                    <div className="flex justify-between font-medium">
                      <span className="text-blue-700">Total:</span>
                      <span className="text-blue-900">${amount}</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Transfer Button */}
              <button 
                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-medium transition-colors disabled:bg-gray-300"
                disabled={!fromAccount || !toAccount || !amount || parseFloat(amount) <= 0}
              >
                Transfer Funds
              </button>
            </div>
          </div>
        </div>

        {/* Sidebar Info */}
        <div className="space-y-6">
          {/* Account Balances */}
          <div className="bg-white/80 backdrop-blur-md rounded-xl shadow-sm p-6 border border-white/50">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Account Balances</h3>
            <div className="space-y-3">
              {accounts.map((account) => (
                <div key={account.id} className="flex justify-between items-center p-3 bg-gray-50/80 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-800">{account.name.split(' - ')[0]}</p>
                    <p className="text-sm text-gray-600">{account.name.split(' - ')[1]}</p>
                  </div>
                  <span className="font-bold text-gray-800">${account.balance}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Transfer Info */}
          <div className="bg-green-50/80 backdrop-blur-md rounded-xl p-6 border border-white/50">
            <div className="flex items-center space-x-2 mb-3">
              <CheckCircle size={20} className="text-green-600" />
              <h3 className="font-semibold text-green-900">Transfer Benefits</h3>
            </div>
            <ul className="text-sm text-green-800 space-y-2">
              <li>• Instant transfers between accounts</li>
              <li>• No transfer fees</li>
              <li>• Available 24/7</li>
              <li>• Secure and encrypted</li>
            </ul>
          </div>

          {/* Recent Transfers */}
          <div className="bg-white/80 backdrop-blur-md rounded-xl shadow-sm p-6 border border-white/50">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Transfers</h3>
            <div className="text-center py-8">
              <ArrowLeftRight size={32} className="mx-auto text-gray-400 mb-2" />
              <p className="text-gray-500">No recent transfers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transfer;