import React from 'react';
import { User, Book, FolderGit2, Cpu, Mail } from 'lucide-react';

export default function Sidebar({ activeTab, setActiveTab }) {
  const navItems = [
    { id: 'about', icon: User, label: 'About', color: 'text-peach', activeBg: 'bg-peach/20', shadow: 'shadow-peach/50' },
    { id: 'education', icon: Book, label: 'Education', color: 'text-mauve', activeBg: 'bg-mauve/20', shadow: 'shadow-mauve/50' },
    { id: 'projects', icon: FolderGit2, label: 'Projects', color: 'text-blue', activeBg: 'bg-blue/20', shadow: 'shadow-blue/50' },
    { id: 'skills', icon: Cpu, label: 'Skills', color: 'text-green', activeBg: 'bg-green/20', shadow: 'shadow-green/50' },
    { id: 'contact', icon: Mail, label: 'Contact', color: 'text-yellow', activeBg: 'bg-yellow/20', shadow: 'shadow-yellow/50' },
  ];

  return (
    <div className="w-20 md:w-24 h-full bg-crust border-r border-surface0 flex flex-col items-center py-8 z-50 shadow-2xl relative">
      <div className="flex-1 flex flex-col gap-6 w-full px-2">
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          const Icon = item.icon;
          
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`relative flex flex-col items-center justify-center p-3 rounded-xl transition-all duration-300 group ${
                isActive 
                  ? `${item.activeBg} ${item.color} scale-110 shadow-[0_0_15px_rgba(0,0,0,0.5)] ${item.shadow}` 
                  : 'text-subtext0 hover:text-text hover:bg-surface0 hover:scale-105'
              }`}
              title={item.label}
            >
              {/* Active Indicator Line */}
              {isActive && (
                <div className={`absolute left-0 w-1 h-8 rounded-r-full bg-current ${item.color}`}></div>
              )}
              <Icon className={`w-6 h-6 md:w-8 md:h-8 ${isActive ? '' : 'group-hover:drop-shadow-[0_0_8px_currentColor]'}`} strokeWidth={isActive ? 2.5 : 2} />
              <span className={`text-[10px] mt-1 font-bold ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
