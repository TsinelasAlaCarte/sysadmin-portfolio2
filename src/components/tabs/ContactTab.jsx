import React, { useState } from 'react';
import WindowCard from '../WindowCard';
import { Mail, GitBranch, Briefcase, Send } from 'lucide-react';

export default function ContactTab() {
  const [inputVal, setInputVal] = useState('');
  const [output, setOutput] = useState([]);

  const handleCommand = (e) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();

    let response = '';
    switch (cmd) {
      case 'email':
      case 'mail':
        response = 'Opening default mail client to contact@ejeisalgado.com...';
        window.open('mailto:contact@ejeisalgado.com', '_blank');
        break;
      case 'github':
      case 'gh':
        response = 'Redirecting to GitHub profile (github.com/ejeisalgado)...';
        window.open('https://github.com/ejeisalgado', '_blank');
        break;
      case 'linkedin':
      case 'in':
        response = 'Redirecting to LinkedIn profile...';
        window.open('https://linkedin.com/in/ejeisalgado', '_blank');
        break;
      case 'clear':
        setOutput([]);
        setInputVal('');
        return;
      case 'help':
        response = 'Available commands: email, github, linkedin, clear, help';
        break;
      case '':
        break;
      default:
        response = `bash: ${cmd}: command not found. Type 'help' for available commands.`;
    }

    if (cmd) {
      setOutput([...output, { cmd, response }]);
    }
    setInputVal('');
  };

  return (
    <div className="h-full w-full max-w-3xl mx-auto flex flex-col justify-center pb-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-pixel text-text mb-2 drop-shadow-[0_0_8px_rgba(205,214,244,0.3)]">Initiate Connection</h2>
        <p className="text-subtext0">Run commands or click the links below to establish contact.</p>
      </div>

      <WindowCard title="tty1 - sysad@contact" className="h-[400px]">
        <div className="flex flex-col h-full font-mono text-sm md:text-base">
          <div className="flex-1 overflow-y-auto mb-4 space-y-2">
            <div className="text-green mb-4">
              Welcome to the contact terminal. Type a command to connect or click the links below.
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <a href="mailto:contact@ejeisalgado.com" className="flex flex-col items-center justify-center p-4 rounded bg-mantle border border-surface0 hover:border-surface2 hover:bg-surface0 transition-all group">
                <Mail className="w-8 h-8 text-yellow mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-text font-bold">Email</span>
              </a>
              <a href="https://github.com/ejeisalgado" target="_blank" rel="noreferrer" className="flex flex-col items-center justify-center p-4 rounded bg-mantle border border-surface0 hover:border-surface2 hover:bg-surface0 transition-all group">
                <GitBranch className="w-8 h-8 text-blue mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-text font-bold">GitHub</span>
              </a>
              <a href="https://linkedin.com/in/ejeisalgado" target="_blank" rel="noreferrer" className="flex flex-col items-center justify-center p-4 rounded bg-mantle border border-surface0 hover:border-surface2 hover:bg-surface0 transition-all group">
                <Briefcase className="w-8 h-8 text-mauve mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-text font-bold">LinkedIn</span>
              </a>
            </div>

            <div className="text-subtext1 mb-4">
              Type 'help' to see available commands.
            </div>

            {output.map((line, i) => (
              <div key={i} className="mb-2">
                <div className="flex">
                  <span className="text-green font-bold mr-2">sysad@contact:~$</span>
                  <span className="text-text">{line.cmd}</span>
                </div>
                {line.response && (
                  <div className={line.response.includes('command not found') ? 'text-red' : 'text-blue'}>
                    {line.response}
                  </div>
                )}
              </div>
            ))}
          </div>

          <form onSubmit={handleCommand} className="flex items-center mt-auto border-t border-surface0 pt-4">
            <span className="text-green font-bold mr-2 whitespace-nowrap">sysad@contact:~$</span>
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              className="flex-1 bg-transparent border-none outline-none text-text caret-text placeholder-surface2"
              autoFocus
              spellCheck="false"
              autoComplete="off"
            />
            <button type="submit" className="text-surface2 hover:text-text transition-colors">
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </WindowCard>
    </div>
  );
}
