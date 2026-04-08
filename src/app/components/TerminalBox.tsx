import React from 'react';

interface TerminalBoxProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
}

/**
 * TerminalBox uses box-drawing characters:
 * ┌ ─ ┐
 * │   │
 * └ ─ ┘
 */
export const TerminalBox: React.FC<TerminalBoxProps> = ({ children, title, className = "" }) => {
  return (
    <div className={`relative p-1 md:p-3 border-2 border-transparent ${className}`}>
      {/* Decorative box borders using CSS after/before or nested spans to mimic box-drawing */}
      <div className="absolute top-0 left-0 w-full flex text-amber-crt/80 font-mono text-sm">
        <span>┌</span>
        <div className="flex-grow flex items-center px-2 space-x-2">
          {title && <span className="bg-brown-bg px-3 font-bold tracking-wider text-amber-crt">[{title}]</span>}
          <div className="flex-grow border-t border-dashed border-amber-crt/40"></div>
        </div>
        <span>┐</span>
      </div>
      
      <div className="py-6 px-4 md:py-8 md:px-8 bg-brown-bg/40 backdrop-blur-sm">
        {children}
      </div>

      <div className="absolute bottom-0 left-0 w-full flex text-amber-crt/80 font-mono text-sm">
        <span>└</span>
        <div className="flex-grow border-t border-dashed border-amber-crt/40 mt-1"></div>
        <span>┘</span>
      </div>

      {/* Side borders */}
      <div className="absolute top-[1.2rem] bottom-[1.2rem] left-0 w-[1px] border-l border-dashed border-amber-crt/40"></div>
      <div className="absolute top-[1.2rem] bottom-[1.2rem] right-0 w-[1px] border-r border-dashed border-amber-crt/40"></div>
    </div>
  );
};
