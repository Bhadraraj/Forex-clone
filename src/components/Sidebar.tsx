import React from 'react';
import { 
  Home, 
  ArrowDownToLine, 
  ArrowUpFromLine, 
  ArrowLeftRight, 
  Clock, 
  UserPlus, 
  Users, 
  Trophy, 
  TrendingUp, 
  UserCheck, 
  Building, 
  BarChart3, 
  DollarSign, 
  FileText,
  X
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  activeItem: string;
  setActiveItem: (item: string) => void;
}

interface MenuItem {
  id: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  label: string;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, activeItem, setActiveItem }) => {
  const menuItems: MenuItem[] = [
    { id: 'dashboard', icon: Home, label: 'Dashboard' },
    { id: 'deposit', icon: ArrowDownToLine, label: 'Deposit' },
    { id: 'withdrawal', icon: ArrowUpFromLine, label: 'Withdrawal' },
    { id: 'transfer', icon: ArrowLeftRight, label: 'Transfer' },
    { id: 'transaction-history', icon: Clock, label: 'Transaction History' },
    { id: 'open-new-account', icon: UserPlus, label: 'Open New Account' },
    { id: 'account-list', icon: Users, label: 'Account List' },
    { id: 'trading-contest', icon: Trophy, label: 'Trading Contest' },
    { id: 'trading-platforms', icon: TrendingUp, label: 'Trading Platforms' },
    { id: 'refer-friend', icon: UserCheck, label: 'Refer A Friend' },
    { id: 'ib-account', icon: Building, label: 'IB Account' },
    { id: 'partner-dashboard', icon: BarChart3, label: 'Partner Dashboard' },
    { id: 'ib-commission', icon: DollarSign, label: 'IB Commission' },
    { id: 'ib-withdrawal', icon: ArrowUpFromLine, label: 'IB Withdrawal' },
    { id: 'copy-request', icon: FileText, label: 'Copy Request' }
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div className={`
        fixed left-0 top-0 h-full w-64 bg-white/10 backdrop-blur-md border-r border-white/20 z-50 transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 lg:static lg:z-auto
      `}>
        {/* Mobile Close Button */}
        <div className="lg:hidden flex justify-end p-4">
          <button onClick={onClose} className="text-white hover:text-gray-300 transition-colors">
            <X size={24} />
          </button>
        </div>

        {/* Navigation Menu */}
        <nav className="px-4 py-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeItem === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => setActiveItem(item.id)}
                className={`
                  w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-200 mb-1 group
                  ${isActive 
                    ? 'bg-gradient-to-r from-blue-500/20 to-purple-600/20 text-white border border-blue-500/30 shadow-lg backdrop-blur-sm' 
                    : 'text-gray-300 hover:bg-white/10 hover:text-white'
                  }
                `}
              >
                <Icon 
                  size={18} 
                  className={`${isActive ? 'text-blue-400' : 'text-gray-400 group-hover:text-white'} transition-colors`} 
                />
                <span className="text-sm font-medium">{item.label}</span>
                {isActive && (
                  <div className="ml-auto w-2 h-2 bg-blue-400 rounded-full"></div>
                )}
              </button>
            );
          })}
        </nav>
      </div>
    </>
  );
};

export default Sidebar;