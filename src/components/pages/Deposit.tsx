import React, { useState } from 'react';
import { 
  ArrowDownToLine, 
  CreditCard, 
  Building2, 
  Smartphone, 
  Globe, 
  Shield, 
  Clock,
  CheckCircle,
  AlertCircle,
  Info
} from 'lucide-react';

const Deposit: React.FC = () => {
  const [selectedMethod, setSelectedMethod] = useState('card');
  const [amount, setAmount] = useState('');

  const depositMethods = [
    {
      id: 'card',
      name: 'Credit/Debit Card',
      icon: CreditCard,
      fee: '0%',
      minAmount: '$10',
      maxAmount: '$10,000',
      processingTime: 'Instant',
      description: 'Visa, Mastercard accepted'
    },
    {
      id: 'bank',
      name: 'Bank Transfer',
      icon: Building2,
      fee: '0%',
      minAmount: '$100',
      maxAmount: '$50,000',
      processingTime: '1-3 business days',
      description: 'Wire transfer from your bank'
    },
    {
      id: 'ewallet',
      name: 'E-Wallet',
      icon: Smartphone,
      fee: '0%',
      minAmount: '$10',
      maxAmount: '$5,000',
      processingTime: 'Instant',
      description: 'Skrill, Neteller, PayPal'
    },
    {
      id: 'crypto',
      name: 'Cryptocurrency',
      icon: Globe,
      fee: '0%',
      minAmount: '$50',
      maxAmount: '$25,000',
      processingTime: '10-30 minutes',
      description: 'Bitcoin, Ethereum, USDT'
    }
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
            <ArrowDownToLine size={20} className="text-green-600" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Deposit Funds</h1>
            <p className="text-gray-600">Add money to your trading account</p>
          </div>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <Shield size={16} />
          <span>SSL Secured</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Deposit Methods */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white/80 backdrop-blur-md rounded-xl shadow-sm p-6 border border-white/50">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Select Deposit Method</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {depositMethods.map((method) => {
                const Icon = method.icon;
                return (
                  <div
                    key={method.id}
                    onClick={() => setSelectedMethod(method.id)}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      selectedMethod === method.id
                        ? 'border-blue-500 bg-blue-50/80'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center space-x-3 mb-3">
                      <Icon size={24} className={selectedMethod === method.id ? 'text-blue-600' : 'text-gray-600'} />
                      <h3 className="font-medium text-gray-800">{method.name}</h3>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{method.description}</p>
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>Fee: {method.fee}</span>
                      <span>{method.processingTime}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Deposit Form */}
          <div className="bg-white/80 backdrop-blur-md rounded-xl shadow-sm p-6 border border-white/50">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Deposit Details</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Account
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/80">
                  <option>MT5: 303419 - DIVYESH Katariya</option>
                  <option>MT5: 408312 - DIVYESH Katariya</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Deposit Amount (USD)
                </label>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="Enter amount"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/80"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>Min: $10</span>
                  <span>Max: $10,000</span>
                </div>
              </div>

              {selectedMethod === 'card' && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Card Number
                    </label>
                    <input
                      type="text"
                      placeholder="1234 5678 9012 3456"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/80"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Expiry Date
                      </label>
                      <input
                        type="text"
                        placeholder="MM/YY"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/80"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        CVV
                      </label>
                      <input
                        type="text"
                        placeholder="123"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/80"
                      />
                    </div>
                  </div>
                </div>
              )}

              <button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-medium transition-colors">
                Deposit ${amount || '0.00'}
              </button>
            </div>
          </div>
        </div>

        {/* Sidebar Info */}
        <div className="space-y-6">
          {/* Account Balance */}
          <div className="bg-white/80 backdrop-blur-md rounded-xl shadow-sm p-6 border border-white/50">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Account Balance</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">MT5: 303419</span>
                <span className="font-medium">$0.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">MT5: 408312</span>
                <span className="font-medium">$0.00</span>
              </div>
              <hr />
              <div className="flex justify-between font-semibold">
                <span>Total Balance</span>
                <span>$0.00</span>
              </div>
            </div>
          </div>

          {/* Important Notes */}
          <div className="bg-blue-50/80 backdrop-blur-md rounded-xl p-6 border border-white/50">
            <div className="flex items-center space-x-2 mb-3">
              <Info size={20} className="text-blue-600" />
              <h3 className="font-semibold text-blue-900">Important Notes</h3>
            </div>
            <ul className="text-sm text-blue-800 space-y-2">
              <li>• Deposits are processed instantly for most methods</li>
              <li>• No fees charged on deposits</li>
              <li>• Minimum deposit varies by method</li>
              <li>• All transactions are SSL encrypted</li>
            </ul>
          </div>

          {/* Recent Deposits */}
          <div className="bg-white/80 backdrop-blur-md rounded-xl shadow-sm p-6 border border-white/50">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Deposits</h3>
            <div className="text-center py-8">
              <Clock size={32} className="mx-auto text-gray-400 mb-2" />
              <p className="text-gray-500">No recent deposits</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deposit;