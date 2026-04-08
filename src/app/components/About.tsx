import React from 'react';
import { TerminalBox } from './TerminalBox';
import { ImageWithFallback } from './shared/ImageWithFallback';

export const About: React.FC = () => {
  return (
    <div className="space-y-12">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <TerminalBox title="BIO_CORE_V1.1">
          <div className="p-4 space-y-6">
            <p className="leading-relaxed">
              &gt; I'm a <span className="text-white font-bold underline">SYSTEMS_ENGINEER</span> based in the digital void. 
              My passion lies in the layers where software and hardware collide. 
              From assembly-level optimizations to kernel-space architecture, 
              I find beauty in the constraints of minimal memory and real-time deadlines.
            </p>
            
            <div className="space-y-2 text-sm">
              <h4 className="font-bold border-b border-amber-crt/20 pb-2 mb-4">CORE_STRENGTHS:</h4>
              <ul className="space-y-1 list-none p-0">
                <li className="flex gap-2"><span>[+]</span> BARE-METAL_DEVELOPMENT</li>
                <li className="flex gap-2"><span>[+]</span> RTOS_SCHEDULING_ALGORITHMS</li>
                <li className="flex gap-2"><span>[+]</span> DEVICE_DRIVER_ARCHITECTURE</li>
                <li className="flex gap-2"><span>[+]</span> POWER_MANAGEMENT_OPTIMIZATION</li>
                <li className="flex gap-2"><span>[+]</span> REVERSE_ENGINEERING_ARM_BINARIES</li>
              </ul>
            </div>
          </div>
        </TerminalBox>

        <div className="space-y-8">
          <TerminalBox title="PROFILE_IMAGE" className="aspect-square">
            <div className="w-full h-full p-4 overflow-hidden flex items-center justify-center grayscale contrast-150 brightness-75 border border-dashed border-amber-crt/40">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" 
                alt="System Developer Profile" 
                className="w-full h-full object-cover mix-blend-screen opacity-70"
              />
            </div>
            <p className="text-[10px] text-center mt-2 opacity-50 tracking-[0.2em]">0x7FF0F0_PROFILE_IMG_v2.bmp</p>
          </TerminalBox>

          <TerminalBox title="CERTIFICATIONS">
            <div className="p-4 grid grid-cols-2 gap-4 text-[10px]">
              <div className="border border-amber-crt/10 p-2 flex flex-col justify-center gap-1">
                <span className="font-bold">ARM_CERT_0x01</span>
                <span className="opacity-60 text-amber-crt/80">Cortex-M Specialist</span>
              </div>
              <div className="border border-amber-crt/10 p-2 flex flex-col justify-center gap-1">
                <span className="font-bold">OS_ENG_VER</span>
                <span className="opacity-60 text-amber-crt/80">Kernel Security v4.0</span>
              </div>
            </div>
          </TerminalBox>
        </div>
      </section>

      <section>
        <TerminalBox title="EXPERIENCE_TIMELINE">
          <div className="p-4 space-y-10 border-l border-dashed border-amber-crt/20 ml-4">
            <div className="relative pl-8">
              <div className="absolute left-[-5px] top-1 w-[10px] h-[10px] bg-amber-crt rotate-45"></div>
              <h4 className="text-lg font-bold underline underline-offset-4">SENIOR_EMBEDDED_ENG @CYBER_DYNAMICS</h4>
              <p className="text-xs opacity-50 mb-4">2022_PRESENT | 0x0001 - CURRENT</p>
              <p className="text-sm leading-relaxed text-amber-crt/80">
                Led the development of the primary firmware layer for autonomous warehouse robotics, achieving a 15% reduction in latency through custom interrupt-driven IPC.
              </p>
            </div>

            <div className="relative pl-8">
              <div className="absolute left-[-5px] top-1 w-[10px] h-[10px] bg-amber-crt rotate-45 opacity-50"></div>
              <h4 className="text-lg font-bold underline underline-offset-4">FIRMWARE_DEV @AERO_TECH_SOLUTIONS</h4>
              <p className="text-xs opacity-50 mb-4">2018_2022 | 0x0100 - 0x0001</p>
              <p className="text-sm leading-relaxed text-amber-crt/80">
                Implemented safety-critical sensor fusion algorithms for industrial monitoring systems, maintaining ISO-26262 compliance throughout the hardware lifecycle.
              </p>
            </div>
          </div>
        </TerminalBox>
      </section>
    </div>
  );
};
