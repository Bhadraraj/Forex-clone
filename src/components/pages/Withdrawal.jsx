import React, { useState } from 'react';
import { 
  ArrowUpFromLine, 
  CreditCard, 
  Building2, 
  Smartphone, 
  Globe, 
  Shield, 
  Clock,
  AlertTriangle,
  Info
} from 'lucide-react';

const Withdrawal = () => {
  const [selectedMethod, setSelectedMethod] = useState('card');
  const [amount, setAmount] = useState('');

  const withdrawalMethods = [
    {
      id: 'card',
      name: 'Credit/Debit Card',
      icon: CreditCard,
      fee: '0%',
      minAmount: '$10',
      maxAmount: '$5,000',
      processingTime: '1-3 business days',
      description: 'Back to your original card'
    },
    {
      id: 'bank',
      name: 'Bank Transfer',
      icon: Building2,
      fee: '0%',
      minAmount: '$100',
      maxAmount: '$50,000',
      processingTime: '3-5 business days',
      description: 'Wire transfer to your bank'
    },
    {
      id: 'ewallet',
      name: 'E-Wallet',
      icon: Smartphone,
      fee: '0%',
      minAmount: '$10',
      maxAmount: '$5,000',
      processingTime: '24 hours',
      description: 'Skrill, Neteller, PayPal'
    }
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
            <ArrowUpFromLine size={20} className="text-red-600" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Withdraw Funds</h1>
            <p className="text-gray-600">Withdraw money from your trading account</p>
          </div>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <Shield size={16} />
          <span>SSL Secured</span>
        </div>
      </div>

      {/* Warning Banner */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <div className="flex items-center space-x-2">
          <AlertTriangle size={20} className="text-yellow-600" />
          <div>
            <h3 className="font-medium text-yellow-800">Withdrawal Requirements</h3>
            <p className="text-sm text-yellow-700">
              Withdrawals can only be processed to the same payment method used for deposits. 
              Please ensure your account is verified before requesting a withdrawal.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Withdrawal Methods */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Select Withdrawal Method</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {withdrawalMethods.map((method) => {
                const Icon = method.icon;
                return (
                  <div
                    key={method.id}
                    onClick={() => setSelectedMethod(method.id)}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      selectedMethod === method.id
                        ? 'border-red-500 bg-red-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center space-x-3 mb-3">
                      <Icon size={24} className={selectedMethod === method.id ? 'text-red-600' : 'text-gray-600'} />
                      <h3 className="font-medium text-gray-900">{method.name}</h3>
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

          {/* Withdrawal Form */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Withdrawal Details</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Account
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500">
                  <option>MT5: 303419 - DIVYESH Katariya ($0.00)</option>
                  <option>MT5: 408312 - DIVYESH Katariya ($0.00)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Withdrawal Amount (USD)
                </label>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="Enter amount"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>Min: $10</span>
                  <span>Available: $0.00</span>
                </div>
              </div>

              {selectedMethod === 'bank' && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Bank Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter bank name"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Account Number
                    </label>
                    <input
                      type="text"
                      placeholder="Enter account number"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      SWIFT/IBAN Code
                    </label>
                    <input
                      type="text"
                      placeholder="Enter SWIFT/IBAN code"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                </div>
              )}

              <button 
                className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg font-medium transition-colors disabled:bg-gray-300"
                disabled={!amount || parseFloat(amount) <= 0}
              >
                Request Withdrawal ${amount || '0.00'}
              </button>
            </div>
          </div>
        </div>

        {/* Sidebar Info */}
        <div className="space-y-6">
          {/* Available Balance */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Available Balance</h3>
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
                <span>Total Available</span>
                <span>$0.00</span>
              </div>
            </div>
          </div>

          {/* Withdrawal Limits */}
          <div className="bg-red-50 rounded-xl p-6">
            <div className="flex items-center space-x-2 mb-3">
              <Info size={20} className="text-red-600" />
              <h3 className="font-semibold text-red-900">Withdrawal Limits</h3>
            </div>
            <ul className="text-sm text-red-800 space-y-2">
              <li>• Daily limit: $10,000</li>
              <li>• Monthly limit: $100,000</li>
              <li>• Minimum withdrawal: $10</li>
              <li>• Processing time: 1-5 business days</li>
            </ul>
          </div>

          {/* Pending Withdrawals */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Pending Withdrawals</h3>
            <div className="text-center py-8">
              <Clock size={32} className="mx-auto text-gray-400 mb-2" />
              <p className="text-gray-500">No pending withdrawals</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Withdrawal;