import React, { useState } from 'react';
import { 
  UserPlus, 
  TrendingUp, 
  Shield, 
  Zap,
  CheckCircle,
  Info,
  Star
} from 'lucide-react';

const OpenNewAccount = () => {
  const [selectedAccountType, setSelectedAccountType] = useState('');
  const [leverage, setLeverage] = useState('500');
  const [currency, setCurrency] = useState('USD');

  const accountTypes = [
    {
      id: 'standard',
      name: 'Standard Account',
      icon: TrendingUp,
      minDeposit: '$100',
      spread: 'From 1.2 pips',
      commission: '$0',
      features: ['No commission', 'Standard spreads', 'All trading instruments', 'Expert advisors allowed'],
      popular: false
    },
    {
      id: 'ecn',
      name: 'ECN Account',
      icon: Zap,
      minDeposit: '$500',
      spread: 'From 0.1 pips',
      commission: '$3.5 per lot',
      features: ['Raw spreads', 'Market execution', 'Level II pricing', 'Professional trading'],
      popular: true
    },
    {
      id: 'pro',
      name: 'Pro Account',
      icon: Star,
      minDeposit: '$2,500',
      spread: 'From 0.0 pips',
      commission: '$2.5 per lot',
      features: ['Zero spreads', 'VIP support', 'Advanced tools', 'Priority execution'],
      popular: false
    }
  ];

  const leverageOptions = [
    { value: '50', label: '1:50' },
    { value: '100', label: '1:100' },
    { value: '200', label: '1:200' },
    { value: '500', label: '1:500' },
    { value: '1000', label: '1:1000' }
  ];

  const currencyOptions = [
    { value: 'USD', label: 'US Dollar (USD)' },
    { value: 'EUR', label: 'Euro (EUR)' },
    { value: 'GBP', label: 'British Pound (GBP)' },
    { value: 'JPY', label: 'Japanese Yen (JPY)' }
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
          <UserPlus size={20} className="text-green-600" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Open New Account</h1>
          <p className="text-gray-600">Create a new trading account to start your journey</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Account Selection */}
        <div className="lg:col-span-2 space-y-6">
          {/* Account Types */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Choose Account Type</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {accountTypes.map((account) => {
                const Icon = account.icon;
                return (
                  <div
                    key={account.id}
                    onClick={() => setSelectedAccountType(account.id)}
                    className={`relative p-6 rounded-lg border-2 cursor-pointer transition-all ${
                      selectedAccountType === account.id
                        ? 'border-green-500 bg-green-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    {account.popular && (
                      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                        <span className="bg-green-500 text-white text-xs px-3 py-1 rounded-full">
                          Most Popular
                        </span>
                      </div>
                    )}
                    
                    <div className="text-center mb-4">
                      <Icon size={32} className={selectedAccountType === account.id ? 'text-green-600' : 'text-gray-600'} />
                      <h3 className="font-semibold text-gray-900 mt-2">{account.name}</h3>
                    </div>

                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Min Deposit:</span>
                        <span className="font-medium">{account.minDeposit}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Spread:</span>
                        <span className="font-medium">{account.spread}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Commission:</span>
                        <span className="font-medium">{account.commission}</span>
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <ul className="space-y-1">
                        {account.features.map((feature, index) => (
                          <li key={index} className="flex items-center text-xs text-gray-600">
                            <CheckCircle size={12} className="text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Account Configuration */}
          {selectedAccountType && (
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Account Configuration</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Account Currency
                  </label>
                  <select 
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    {currencyOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Leverage
                  </label>
                  <select 
                    value={leverage}
                    onChange={(e) => setLeverage(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    {leverageOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Account Password
                  </label>
                  <input
                    type="password"
                    placeholder="Enter trading password"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Password must be at least 8 characters with numbers and letters
                  </p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
                <div className="flex items-start space-x-2">
                  <Info size={16} className="text-yellow-600 mt-0.5" />
                  <div className="text-sm text-yellow-800">
                    <p className="font-medium mb-1">Important Notice:</p>
                    <p>Your new trading account will be created instantly. You'll receive login credentials via email within 5 minutes.</p>
                  </div>
                </div>
              </div>

              <button className="w-full mt-6 bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-medium transition-colors">
                Create Trading Account
              </button>
            </div>
          )}
        </div>

        {/* Sidebar Info */}
        <div className="space-y-6">
          {/* Account Benefits */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center space-x-2 mb-4">
              <Shield size={20} className="text-blue-600" />
              <h3 className="text-lg font-semibold text-gray-900">Why Choose ZForex?</h3>
            </div>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-center space-x-2">
                <CheckCircle size={16} className="text-green-500" />
                <span>Regulated by top-tier authorities</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle size={16} className="text-green-500" />
                <span>Negative balance protection</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle size={16} className="text-green-500" />
                <span>24/5 multilingual support</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle size={16} className="text-green-500" />
                <span>Advanced trading platforms</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle size={16} className="text-green-500" />
                <span>Competitive spreads & execution</span>
              </li>
            </ul>
          </div>

          {/* Current Accounts */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Current Accounts</h3>
            <div className="space-y-3">
              <div className="p-3 bg-gray-50 rounded-lg">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium text-gray-900">MT5: 303419</p>
                    <p className="text-sm text-gray-600">ECN Account</p>
                  </div>
                  <span className="text-sm font-medium text-gray-900">$0.00</span>
                </div>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium text-gray-900">MT5: 408312</p>
                    <p className="text-sm text-gray-600">ECN Account</p>
                  </div>
                  <span className="text-sm font-medium text-gray-900">$0.00</span>
                </div>
              </div>
            </div>
          </div>

          {/* Support */}
          <div className="bg-blue-50 rounded-xl p-6">
            <h3 className="font-semibold text-blue-900 mb-2">Need Help?</h3>
            <p className="text-sm text-blue-800 mb-4">
              Our support team is available 24/5 to assist you with account opening.
            </p>
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg text-sm font-medium transition-colors">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenNewAccount;