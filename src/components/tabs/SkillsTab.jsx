import React from 'react';
import WindowCard from '../WindowCard';
import { Cpu, Activity, Database, Layout, ShieldCheck, Network, Users } from 'lucide-react';

export default function SkillsTab() {
  const renderSkillBar = (name, percentage, colorClass, bgColorClass) => (
    <div className="mb-4 group">
      <div className="flex justify-between text-xs mb-1">
        <span className="text-text group-hover:text-blue transition-colors">{name}</span>
        <span className="text-subtext0">{percentage}%</span>
      </div>
      <div className="w-full bg-crust rounded-full h-1.5 border border-surface0 overflow-hidden">
        <div className={`h-1.5 rounded-full ${bgColorClass} relative overflow-hidden`} style={{ width: `${percentage}%` }}>
           <div className="absolute inset-0 bg-white/20 w-full animate-[shimmer_2s_infinite]"></div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="h-full w-full max-w-6xl mx-auto flex flex-col justify-center pb-8">
      <WindowCard title="htop - system monitor" className="h-[85vh] max-h-[800px]">
        {/* Header / CPU Stats Simulation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-6 pb-6 border-b border-surface0">
          <div>
            <div className="flex items-center text-sm mb-2 text-subtext1">
               <Activity className="w-4 h-4 mr-2 text-green" /> CPU[|||||||||||||||||95.0%]
            </div>
            <div className="flex items-center text-sm mb-2 text-subtext1">
               <Database className="w-4 h-4 mr-2 text-blue" /> Mem[||||||||||      48.2%]
            </div>
            <div className="flex items-center text-sm text-subtext1">
               <Network className="w-4 h-4 mr-2 text-peach" /> Swp[|               1.2%]
            </div>
          </div>
          <div className="text-xs text-subtext0 space-y-1">
            <div>Tasks: 142, 105 thr, 126 kthr; 1 running</div>
            <div>Load average: 1.04 1.15 1.08</div>
            <div>Uptime: 20 years, 354 days</div>
            <div>Mode: God Mode Activated</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Column 1 */}
          <div className="space-y-8">
            <section>
              <h3 className="flex items-center text-lg font-bold text-green mb-4 pb-2 border-b border-surface0">
                <Cpu className="w-5 h-5 mr-2" /> Infrastructure & Systems
              </h3>
              <ul className="text-sm space-y-2 text-subtext1 list-disc list-inside">
                <li><strong className="text-text">Environments:</strong> Linux (Deep KDE Plasma customization), Bare-metal dual-boot deployments, Virtual Machine provisioning</li>
                <li><strong className="text-text">DevOps & Automation:</strong> Docker, Bash scripting, YAML configuration, Git/GitHub, Custom Dataview querying</li>
                <li><strong className="text-text">Networking:</strong> Standard routing, IP management, Troubleshooting</li>
              </ul>
            </section>

            <section>
              <h3 className="flex items-center text-lg font-bold text-blue mb-4 pb-2 border-b border-surface0">
                <Layout className="w-5 h-5 mr-2" /> Software Engineering
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-xs font-bold text-peach mb-2 uppercase tracking-widest">Languages</h4>
                  {renderSkillBar('Python', 85, 'text-blue', 'bg-blue')}
                  {renderSkillBar('JavaScript', 80, 'text-yellow', 'bg-yellow')}
                  {renderSkillBar('C#', 70, 'text-green', 'bg-green')}
                  {renderSkillBar('PHP', 65, 'text-mauve', 'bg-mauve')}
                  {renderSkillBar('Dart / Kotlin', 75, 'text-teal', 'bg-teal')}
                </div>
                <div>
                  <h4 className="text-xs font-bold text-peach mb-2 uppercase tracking-widest">Databases & Markup</h4>
                  {renderSkillBar('SQL / SQLite', 80, 'text-blue', 'bg-blue')}
                  {renderSkillBar('Firebase', 75, 'text-yellow', 'bg-yellow')}
                  {renderSkillBar('HTML / CSS', 90, 'text-pink', 'bg-pink')}
                  {renderSkillBar('Markdown', 95, 'text-mauve', 'bg-mauve')}
                </div>
              </div>
            </section>
          </div>

          {/* Column 2 */}
          <div className="space-y-8">
            <section>
              <h3 className="flex items-center text-lg font-bold text-yellow mb-4 pb-2 border-b border-surface0">
                <ShieldCheck className="w-5 h-5 mr-2" /> Verified Certifications
              </h3>
              <div className="space-y-3">
                <a href="#" className="block p-3 rounded-lg border border-surface0 bg-crust/50 hover:bg-surface0 hover:border-surface1 transition-colors group">
                   <div className="flex items-center justify-between">
                     <span className="font-bold text-text group-hover:text-blue transition-colors">CCNA: Introduction to Networks</span>
                     <span className="text-xs text-subtext0 bg-surface1 px-2 py-1 rounded">Cisco NetAcad</span>
                   </div>
                </a>
                <a href="#" className="block p-3 rounded-lg border border-surface0 bg-crust/50 hover:bg-surface0 hover:border-surface1 transition-colors group">
                   <div className="flex items-center justify-between">
                     <span className="font-bold text-text group-hover:text-blue transition-colors">Networking Basics</span>
                     <span className="text-xs text-subtext0 bg-surface1 px-2 py-1 rounded">Cisco NetAcad</span>
                   </div>
                </a>
                <a href="#" className="block p-3 rounded-lg border border-surface0 bg-crust/50 hover:bg-surface0 hover:border-surface1 transition-colors group">
                   <div className="flex items-center justify-between">
                     <span className="font-bold text-text group-hover:text-blue transition-colors">Python Essentials 2</span>
                     <span className="text-xs text-subtext0 bg-surface1 px-2 py-1 rounded">Cisco NetAcad</span>
                   </div>
                </a>
              </div>
              <p className="text-xs text-subtext0 mt-2 italic">* Click to view verified Credly badges.</p>
            </section>

            <section>
              <h3 className="flex items-center text-lg font-bold text-mauve mb-4 pb-2 border-b border-surface0">
                <Users className="w-5 h-5 mr-2" /> Soft Skills
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3 rounded-lg border border-surface0 bg-mantle">
                  <div className="text-green font-bold mb-1">Architecture</div>
                  <div className="text-xs text-subtext1">Technical Documentation & System Architecture Design</div>
                </div>
                <div className="p-3 rounded-lg border border-surface0 bg-mantle">
                  <div className="text-blue font-bold mb-1">Communication</div>
                  <div className="text-xs text-subtext1">Effective Communication with technical & non-technical teams</div>
                </div>
                <div className="p-3 rounded-lg border border-surface0 bg-mantle sm:col-span-2">
                  <div className="text-peach font-bold mb-1">Leadership</div>
                  <div className="text-xs text-subtext1">Teamwork and Leadership in collaborative environments</div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </WindowCard>
    </div>
  );
}
