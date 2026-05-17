import React from 'react';
import WindowCard from '../WindowCard';
import { Terminal } from 'lucide-react';

export default function EducationTab() {
  const eduData = [
    {
      institution: 'Lyceum of the Philippines University, Cavite',
      degree: 'Bachelor of Science in Information Technology',
      location: "Governor's Drive, Manggahan, General Trias City",
      date: 'Expected Graduation: 2027',
      status: 'In Progress'
    },
    {
      institution: 'Luis Y. Ferrer Jr. Senior High School',
      degree: 'Science, Technology, Engineering, and Mathematics (STEM) Strand',
      location: 'South Square Village, General Trias',
      date: 'Graduated: 2022',
      status: 'Completed'
    }
  ];

  return (
    <div className="h-full w-full max-w-4xl mx-auto flex flex-col justify-center">
      <WindowCard title="/var/log/education.log" className="h-[80vh] max-h-[600px]">
        <div className="flex items-center space-x-2 mb-6">
          <Terminal className="text-mauve w-5 h-5" />
          <span className="text-green font-bold">sysad@ejei</span>
          <span className="text-text">~</span>
          <span className="text-text">$</span>
          <span className="text-yellow ml-2">cat /var/log/education.log</span>
        </div>
        
        <div className="space-y-8 mt-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-surface2 before:to-transparent">
          {eduData.map((item, index) => (
            <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              {/* Icon */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-surface2 bg-crust shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-colors duration-300 group-hover:border-mauve group-hover:shadow-[0_0_10px_rgba(202,158,230,0.5)]">
                <div className={`w-3 h-3 rounded-full ${item.status === 'Completed' ? 'bg-green' : 'bg-yellow animate-pulse'}`}></div>
              </div>
              
              {/* Content */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-surface0 bg-mantle/50 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-surface2 hover:shadow-lg hover:shadow-crust/50">
                <div className="flex flex-col space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-mauve bg-crust px-2 py-1 rounded border border-surface0">{item.date}</span>
                    <span className={`text-xs px-2 py-1 rounded font-bold ${item.status === 'Completed' ? 'text-green bg-green/10' : 'text-yellow bg-yellow/10'}`}>{item.status}</span>
                  </div>
                  <h3 className="font-bold text-text text-lg mt-2">{item.institution}</h3>
                  <p className="text-subtext1 text-sm">{item.degree}</p>
                  <p className="text-surface2 text-xs flex items-center mt-2">
                    <span className="text-blue mr-1">@</span>
                    {item.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
          
          {/* End marker */}
          <div className="relative flex items-center justify-center group is-active">
             <div className="flex items-center justify-center w-10 h-10 rounded-full border border-surface2 bg-crust shadow z-10">
                <span className="text-xs text-subtext0">EOF</span>
             </div>
          </div>
        </div>
      </WindowCard>
    </div>
  );
}
