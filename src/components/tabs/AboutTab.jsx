import React from 'react';
import WindowCard from '../WindowCard';

export default function AboutTab() {
  const asciiLogo = `
       .---.
      /     \\
      \\.@-@./
      /\\\`_'/\\
     //  _  \\\\
    | \\     / |
   /\\_\\_\\_/_/_/\\
   \\__/__|__\\__/
  `;

  return (
    <div className="h-full w-full flex flex-col justify-center max-w-4xl mx-auto">
      <WindowCard title="user@sysad:~" className="h-auto">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="text-mauve font-pixel text-xs sm:text-sm md:text-base whitespace-pre leading-none drop-shadow-[0_0_5px_rgba(202,158,230,0.5)]">
            {asciiLogo}
          </div>
          
          <div className="flex-1 space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-green font-bold">sysad@ejei</span>
              <span className="text-text">~</span>
              <span className="text-text">$</span>
              <span className="text-yellow ml-2">neofetch</span>
            </div>
            
            <div className="space-y-2 mt-4 text-sm sm:text-base">
              <div className="flex">
                <span className="text-blue font-bold w-32">OS:</span>
                <span className="text-text">Aesthetic Arch Linux x86_64</span>
              </div>
              <div className="flex">
                <span className="text-blue font-bold w-32">Host:</span>
                <span className="text-text">Ejei Salgado</span>
              </div>
              <div className="flex">
                <span className="text-blue font-bold w-32">Kernel:</span>
                <span className="text-text">IT Student & Systems Administrator</span>
              </div>
              <div className="flex">
                <span className="text-blue font-bold w-32">Uptime:</span>
                <span className="text-text">Since 2004</span>
              </div>
              <div className="flex">
                <span className="text-blue font-bold w-32">Packages:</span>
                <span className="text-text">Linux, Docker, Python, Bash</span>
              </div>
              <div className="flex">
                <span className="text-blue font-bold w-32">Shell:</span>
                <span className="text-text">zsh 5.9</span>
              </div>
              <div className="flex">
                <span className="text-blue font-bold w-32">Location:</span>
                <span className="text-text">General Trias, Cavite, PH</span>
              </div>
              <div className="flex">
                <span className="text-blue font-bold w-32">Status:</span>
                <span className="text-green animate-pulse">#active</span>
              </div>
            </div>

            {/* Color Palette blocks */}
            <div className="flex space-x-2 mt-6">
              <div className="w-4 h-4 sm:w-6 sm:h-6 bg-surface1 rounded-sm"></div>
              <div className="w-4 h-4 sm:w-6 sm:h-6 bg-red rounded-sm"></div>
              <div className="w-4 h-4 sm:w-6 sm:h-6 bg-green rounded-sm"></div>
              <div className="w-4 h-4 sm:w-6 sm:h-6 bg-yellow rounded-sm"></div>
              <div className="w-4 h-4 sm:w-6 sm:h-6 bg-blue rounded-sm"></div>
              <div className="w-4 h-4 sm:w-6 sm:h-6 bg-mauve rounded-sm"></div>
              <div className="w-4 h-4 sm:w-6 sm:h-6 bg-teal rounded-sm"></div>
              <div className="w-4 h-4 sm:w-6 sm:h-6 bg-text rounded-sm"></div>
            </div>
            
            <div className="flex space-x-2 mt-2">
              <div className="w-4 h-4 sm:w-6 sm:h-6 bg-surface2 rounded-sm"></div>
              <div className="w-4 h-4 sm:w-6 sm:h-6 bg-flamingo rounded-sm"></div>
              <div className="w-4 h-4 sm:w-6 sm:h-6 bg-peach rounded-sm"></div>
              <div className="w-4 h-4 sm:w-6 sm:h-6 bg-rosewater rounded-sm"></div>
              <div className="w-4 h-4 sm:w-6 sm:h-6 bg-sapphire rounded-sm"></div>
              <div className="w-4 h-4 sm:w-6 sm:h-6 bg-pink rounded-sm"></div>
              <div className="w-4 h-4 sm:w-6 sm:h-6 bg-sky rounded-sm"></div>
              <div className="w-4 h-4 sm:w-6 sm:h-6 bg-subtext1 rounded-sm"></div>
            </div>

            <div className="mt-8 pt-6 border-t border-surface0 text-subtext1 leading-relaxed">
              <h1 className="text-3xl font-pixel text-text mb-4">whoami</h1>
              <p>
                I am an Information Technology student specializing in Linux infrastructure, automated deployment pipelines, and backend systems architecture. I bridge the gap between software development and system administration, building applications with clean object-oriented logic and deploying them on secure, containerized environments.
              </p>
            </div>
          </div>
        </div>
      </WindowCard>
    </div>
  );
}
