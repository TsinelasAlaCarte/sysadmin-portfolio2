import React from 'react';
import { Minus, Square, X } from 'lucide-react';

export default function WindowCard({ title, children, className = '' }) {
  return (
    <div className={`bg-base border border-surface1 rounded-lg overflow-hidden terminal-shadow flex flex-col transition-all duration-300 hover:-translate-y-1 hover:border-surface2 ${className}`}>
      {/* Window Controls / Title Bar */}
      <div className="bg-crust px-4 py-2 flex items-center justify-between border-b border-surface0 select-none">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red flex items-center justify-center group/btn cursor-pointer">
             <X className="w-2 h-2 text-crust opacity-0 group-hover/btn:opacity-100" />
          </div>
          <div className="w-3 h-3 rounded-full bg-yellow flex items-center justify-center group/btn cursor-pointer">
             <Minus className="w-2 h-2 text-crust opacity-0 group-hover/btn:opacity-100" />
          </div>
          <div className="w-3 h-3 rounded-full bg-green flex items-center justify-center group/btn cursor-pointer">
             <Square className="w-2 h-2 text-crust opacity-0 group-hover/btn:opacity-100" />
          </div>
        </div>
        <div className="text-subtext1 text-sm font-mono font-bold tracking-wider flex-1 text-center pr-6">
          {title}
        </div>
      </div>
      
      {/* Window Content */}
      <div className="p-4 sm:p-6 flex-1 overflow-auto text-text bg-base relative z-0 group">
        <div className="scanlines opacity-50 transition-opacity duration-300 group-hover:opacity-100"></div>
        <div className="relative z-10 h-full">
           {children}
        </div>
      </div>
    </div>
  );
}
