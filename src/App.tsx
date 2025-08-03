import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Deposit from './components/pages/Deposit';
import Withdrawal from './components/pages/Withdrawal';
import Transfer from './components/pages/Transfer';
import TransactionHistory from './components/pages/TransactionHistory';
import OpenNewAccount from './components/pages/OpenNewAccount';
import AccountList from './components/pages/AccountList';
import TradingContest from './components/pages/TradingContest';
import AnimatedBackground from './components/AnimatedBackground';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('dashboard');

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const renderContent = () => {
    switch (activeItem) {
      case 'dashboard':
        return <Dashboard />;
      case 'deposit':
        return <Deposit />;
      case 'withdrawal':
        return <Withdrawal />;
      case 'transfer':
        return <Transfer />;
      case 'transaction-history':
        return <TransactionHistory />;
      case 'open-new-account':
        return <OpenNewAccount />;
      case 'account-list':
        return <AccountList />;
      case 'trading-contest':
        return <TradingContest />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden">
      <AnimatedBackground />
      <div className="flex relative z-10">
        {/* Sidebar */}
        <Sidebar 
          isOpen={sidebarOpen} 
          onClose={closeSidebar}
          activeItem={activeItem}
          setActiveItem={setActiveItem}
        />

        {/* Main Content */}
        <div className="flex-1 lg:ml-64">
          {/* Header */}
          <Header onMenuToggle={toggleSidebar} />
          
          {/* Dashboard Content */}
          <main className="min-h-screen">
            {renderContent()}
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;