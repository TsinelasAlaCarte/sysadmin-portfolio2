import React from 'react';
import Sidebar from './components/Sidebar';
import Workspace from './components/Workspace';

function App() {
  const [activeTab, setActiveTab] = React.useState('about');

  return (
    <div className="h-screen w-screen flex bg-lavender/10 overflow-hidden font-mono">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none z-[-1] opacity-50"></div>
      
      {/* Sidebar Navigation */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      {/* Main Workspace Area */}
      <div className="flex-1 relative overflow-hidden">
        <Workspace activeTab={activeTab} />
      </div>
    </div>
  );
}

export default App;
