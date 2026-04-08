import React, { useState, useEffect } from 'react';
import { TerminalBox } from './TerminalBox';
import { ChevronRight, Cpu, MemoryStick as Memory, Server } from 'lucide-react';
import { motion } from 'motion/react';

export const Home: React.FC = () => {
  const [text, setText] = useState("");
  const fullText = "WELCOME_TO_MY_WORKSPACE. SYS_INT: SYSTEMS_EMBEDDED_DEV. CURRENT_STATUS: OPEN_FOR_CONTRIBUTIONS.";
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);

  return (
    <div className="space-y-12">
      <section>
        <TerminalBox title="SYSLOG_DAEMON" className="mb-12">
          <div className="space-y-4 px-2 md:px-4 font-mono text-lg md:text-xl lg:text-2xl min-h-[120px] md:min-h-[80px] leading-relaxed">
            <p className="inline-block">
              <span className="text-amber-crt/50 mr-3">C:\USER\SYS_ROOT&gt;</span>
              <span>{text}</span>
              <span className="w-3 h-5 md:h-6 bg-amber-crt inline-block blink ml-1 align-sub"></span>
            </p>
          </div>
        </TerminalBox>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TerminalBox title="CPU_STATS">
            <div className="flex flex-col items-center gap-6 py-4 text-center">
              <Cpu className="w-16 h-16 opacity-80" />
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-3 underline underline-offset-4 tracking-wider">ARCHITECTURE</h3>
                <p className="text-sm font-bold text-amber-crt">RISC-V / ARMv8 / AVR</p>
                <p className="text-sm text-amber-crt/80 mt-3 leading-relaxed">Specializing in low-level kernel and RTOS development.</p>
              </div>
            </div>
          </TerminalBox>

          <TerminalBox title="MEM_MGMT">
            <div className="flex flex-col items-center gap-6 py-4 text-center">
              <Memory className="w-16 h-16 opacity-80" />
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-3 underline underline-offset-4 tracking-wider">MEMORY_POOL</h3>
                <p className="text-sm font-bold text-amber-crt">C / C++ / ASM / RUST</p>
                <p className="text-sm text-amber-crt/80 mt-3 leading-relaxed">Optimizing every byte for high-performance firmware.</p>
              </div>
            </div>
          </TerminalBox>

          <TerminalBox title="SYS_BUS">
            <div className="flex flex-col items-center gap-6 py-4 text-center">
              <Server className="w-16 h-16 opacity-80" />
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-3 underline underline-offset-4 tracking-wider">PROTOCOLS</h3>
                <p className="text-sm font-bold text-amber-crt">I2C / SPI / UART / CAN</p>
                <p className="text-sm text-amber-crt/80 mt-3 leading-relaxed">Seamlessly bridging hardware and software barriers.</p>
              </div>
            </div>
          </TerminalBox>
        </div>
      </section>

      <section className="mt-12">
        <TerminalBox title="LATEST_ENTRIES">
          <div className="p-2 md:p-4 space-y-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex items-start gap-4 p-4 hover:bg-amber-crt/10 transition-colors group cursor-pointer border border-transparent hover:border-amber-crt/30">
                <span className="text-xs font-bold text-amber-crt/50 mt-1 tracking-widest">0x00{item}F</span>
                <div className="flex-grow">
                  <h4 className="text-lg font-bold group-hover:text-white transition-colors underline underline-offset-4">KERNEL_MOD_0{item}.OBJ</h4>
                  <p className="text-sm text-amber-crt/80 mt-3 leading-relaxed">A breakdown of custom scheduler implementation for minimalist RTOS kernels...</p>
                </div>
                <ChevronRight className="w-6 h-6 opacity-50 group-hover:opacity-100 group-hover:translate-x-2 transition-all mt-1" />
              </div>
            ))}
          </div>
        </TerminalBox>
      </section>
    </div>
  );
};
