import React from 'react';
import { NavLink, Outlet } from 'react-router';
import { TerminalBox } from './TerminalBox';
import { Terminal, Code, User, Mail, ChevronRight } from 'lucide-react';

export const Layout: React.FC = () => {
  return (
    <div className="min-h-screen bg-brown-bg text-amber-crt selection:bg-amber-crt selection:text-brown-bg relative overflow-hidden">
      {/* Visual Effects */}
      <div className="crt-overlay" />
      <div className="crt-flicker" />
      <div className="dot-matrix" />

      {/* Main Container */}
      <div className="container mx-auto px-4 py-8 relative z-10">
        <header className="mb-12">
          <TerminalBox title="SYS_INIT_V1.0.4">
            <nav className="flex flex-wrap items-center justify-between gap-6 px-4">
              <div className="flex items-center gap-3">
                <Terminal className="w-6 h-6 animate-pulse" />
                <span className="font-bold tracking-widest uppercase">SYSM_DEV_PORTFOLIO</span>
              </div>
              
              <ul className="flex items-center gap-8 text-sm md:text-base">
                <li>
                  <NavLink 
                    to="/" 
                    className={({ isActive }) => 
                      `flex items-center gap-1 transition-all duration-300 hover:text-white ${isActive ? 'text-white underline underline-offset-8' : 'opacity-70 hover:opacity-100'}`
                    }
                  >
                    <ChevronRight className="w-4 h-4" /> [HOME]
                  </NavLink>
                </li>
                <li>
                  <NavLink 
                    to="/works" 
                    className={({ isActive }) => 
                      `flex items-center gap-1 transition-all duration-300 hover:text-white ${isActive ? 'text-white underline underline-offset-8' : 'opacity-70 hover:opacity-100'}`
                    }
                  >
                    <ChevronRight className="w-4 h-4" /> [WORKS]
                  </NavLink>
                </li>
                <li>
                  <NavLink 
                    to="/about" 
                    className={({ isActive }) => 
                      `flex items-center gap-1 transition-all duration-300 hover:text-white ${isActive ? 'text-white underline underline-offset-8' : 'opacity-70 hover:opacity-100'}`
                    }
                  >
                    <ChevronRight className="w-4 h-4" /> [ABOUT]
                  </NavLink>
                </li>
                <li>
                  <NavLink 
                    to="/contact" 
                    className={({ isActive }) => 
                      `flex items-center gap-1 transition-all duration-300 hover:text-white ${isActive ? 'text-white underline underline-offset-8' : 'opacity-70 hover:opacity-100'}`
                    }
                  >
                    <ChevronRight className="w-4 h-4" /> [MAIL]
                  </NavLink>
                </li>
              </ul>
            </nav>
          </TerminalBox>
        </header>

        <main className="min-h-[60vh]">
          <Outlet />
        </main>

        <footer className="mt-20 py-8 border-t border-dashed border-amber-crt/20 text-xs opacity-50 flex justify-between items-center">
          <div>
            <p>© 2026 YOUR_NAME_HERE.ALL_RIGHTS_RESERVED</p>
            <p>COMPILED WITH PORTFOLIO_TEMPLATE_V1.0</p>
          </div>
          <div className="text-right">
            <p>UPTIME: 1024h 56m 12s</p>
            <p>STATUS: OK</p>
          </div>
        </footer>
      </div>
    </div>
  );
};
