import React from 'react';
import AboutTab from './tabs/AboutTab';
import EducationTab from './tabs/EducationTab';
import ProjectsTab from './tabs/ProjectsTab';
import SkillsTab from './tabs/SkillsTab';
import ContactTab from './tabs/ContactTab';

export default function Workspace({ activeTab }) {
  const renderTabContent = () => {
    switch (activeTab) {
      case 'about':
        return <AboutTab />;
      case 'education':
        return <EducationTab />;
      case 'projects':
        return <ProjectsTab />;
      case 'skills':
        return <SkillsTab />;
      case 'contact':
        return <ContactTab />;
      default:
        return <AboutTab />;
    }
  };

  return (
    <div className="h-full w-full p-4 md:p-8 overflow-y-auto overflow-x-hidden scrollbar-hide">
      <div className="max-w-7xl mx-auto h-full animate-in fade-in zoom-in duration-500">
        {renderTabContent()}
      </div>
    </div>
  );
}
