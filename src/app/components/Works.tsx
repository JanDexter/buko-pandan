import React from 'react';
import { TerminalBox } from './TerminalBox';
import { ExternalLink, Github, Code2, Layers, Cpu } from 'lucide-react';

interface Project {
  id: string;
  name: string;
  addr: string;
  type: string;
  description: string;
  tags: string[];
  repo: string;
}

const PROJECTS: Project[] = [
  {
    id: "0x4A2B",
    name: "TINY_RTOS_KERNEL",
    addr: "0x00400000",
    type: "OS_KERNEL",
    description: "A pre-emptive, priority-based RTOS kernel designed for microcontrollers with < 8KB of RAM.",
    tags: ["C", "ASM", "ARM-Cortex-M"],
    repo: "github.com/yourname/tiny_rtos"
  },
  {
    id: "0x7F1C",
    name: "CAN_BUS_ANALYZER",
    addr: "0x00401200",
    type: "FIRMWARE",
    description: "A high-speed CAN bus data logger and real-time visualization tool for automotive diagnostics.",
    tags: ["C++", "Qt", "STM32"],
    repo: "github.com/yourname/can_analyzer"
  },
  {
    id: "0x9E3D",
    name: "Z80_EMULATOR_CORE",
    addr: "0x00402400",
    type: "EMULATION",
    description: "Cycle-accurate Zilog Z80 CPU emulator written in Rust for retro-computing applications.",
    tags: ["Rust", "WASM", "Retro"],
    repo: "github.com/yourname/z80_emu"
  },
  {
    id: "0xB20E",
    name: "I2C_DRIVER_FRAMEWORK",
    addr: "0x00403600",
    type: "DRIVER",
    description: "A generic, portable I2C hardware abstraction layer (HAL) supporting multiple vendor SDKs.",
    tags: ["C", "HAL", "Embedded"],
    repo: "github.com/yourname/i2c_hal"
  }
];

export const Works: React.FC = () => {
  return (
    <div className="space-y-12">
      <section>
        <TerminalBox title="PROJECT_LISTING_V2.0">
          <div className="p-4 overflow-x-auto">
            <table className="w-full text-left font-mono text-sm">
              <thead>
                <tr className="border-b border-amber-crt/20 text-white font-bold">
                  <th className="py-4 px-2">ENTRY_ADDR</th>
                  <th className="py-4 px-2">MODULE_NAME</th>
                  <th className="py-4 px-2">SECTION_TYPE</th>
                  <th className="py-4 px-2">TECH_STACK</th>
                  <th className="py-4 px-2">ACTIONS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-amber-crt/10">
                {PROJECTS.map((project) => (
                  <tr key={project.id} className="group hover:bg-amber-crt/10 transition-colors cursor-pointer">
                    <td className="py-6 px-2 text-amber-crt/50 whitespace-nowrap">{project.addr}</td>
                    <td className="py-6 px-2">
                      <div className="space-y-1">
                        <span className="text-lg font-bold group-hover:text-white transition-colors underline underline-offset-4">
                          {project.name}
                        </span>
                        <p className="text-sm text-amber-crt/80 mt-2 max-w-md leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                    </td>
                    <td className="py-6 px-2">
                      <span className="px-3 py-1 bg-amber-crt/10 text-xs border border-amber-crt/20 rounded font-bold tracking-wider">
                        [{project.type}]
                      </span>
                    </td>
                    <td className="py-6 px-2">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map(tag => (
                          <span key={tag} className="text-xs opacity-70 border-b border-dashed border-amber-crt/30">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="py-6 px-2">
                      <div className="flex gap-4 opacity-70 group-hover:opacity-100 transition-opacity">
                        <a href={`https://${project.repo}`} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                          <Github className="w-5 h-5" />
                        </a>
                        <button className="hover:text-white transition-colors">
                          <ExternalLink className="w-5 h-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </TerminalBox>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <TerminalBox title="STATISTICS_VIEW">
          <div className="p-4 space-y-4">
            <div className="flex justify-between items-center">
              <span>TOTAL_COMMITS</span>
              <span className="font-bold">1,452</span>
            </div>
            <div className="w-full h-2 bg-brown-dim border border-amber-crt/20">
              <div className="h-full bg-amber-crt" style={{ width: '85%' }}></div>
            </div>
            
            <div className="flex justify-between items-center">
              <span>LINES_OF_C</span>
              <span className="font-bold">245,091</span>
            </div>
            <div className="w-full h-2 bg-brown-dim border border-amber-crt/20">
              <div className="h-full bg-amber-crt" style={{ width: '70%' }}></div>
            </div>

            <div className="flex justify-between items-center">
              <span>DEBUG_SESSIONS</span>
              <span className="font-bold">∞</span>
            </div>
            <div className="w-full h-2 bg-brown-dim border border-amber-crt/20">
              <div className="h-full bg-amber-crt" style={{ width: '99%' }}></div>
            </div>
          </div>
        </TerminalBox>

        <TerminalBox title="SYSTEM_ARCH">
          <div className="p-4 grid grid-cols-2 gap-4 text-xs">
            <div className="p-3 border border-dashed border-amber-crt/20 flex flex-col items-center gap-2 text-center">
              <Cpu className="w-8 h-8 opacity-50" />
              <span>KERNEL_LOGIC</span>
            </div>
            <div className="p-3 border border-dashed border-amber-crt/20 flex flex-col items-center gap-2 text-center">
              <Code2 className="w-8 h-8 opacity-50" />
              <span>DRIVER_LAYER</span>
            </div>
            <div className="p-3 border border-dashed border-amber-crt/20 flex flex-col items-center gap-2 text-center">
              <Layers className="w-8 h-8 opacity-50" />
              <span>HAL_ABSTRACTION</span>
            </div>
            <div className="p-3 border border-dashed border-amber-crt/20 flex flex-col items-center gap-2 text-center">
              <div className="w-8 h-8 flex items-center justify-center font-bold text-xl opacity-50">{}</div>
              <span>APP_USERSPACE</span>
            </div>
          </div>
        </TerminalBox>
      </section>
    </div>
  );
};
