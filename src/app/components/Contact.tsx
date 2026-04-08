import React, { useState } from 'react';
import { TerminalBox } from './TerminalBox';
import { Mail, Github, Linkedin, Twitter, Terminal, ArrowRight } from 'lucide-react';
import { toast } from 'sonner';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    sender: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("MSG_SENT_0x00_SUCCESS: Your message has been transmitted successfully.");
    setFormData({ sender: '', subject: '', message: '' });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <section>
        <TerminalBox title="COMMS_CHANNEL">
          <form onSubmit={handleSubmit} className="p-4 space-y-6 font-mono text-sm">
            <div className="space-y-2">
              <label className="block font-bold">SENDER_ADDR:</label>
              <input 
                type="text" 
                required
                className="w-full bg-brown-dim border border-amber-crt/20 p-3 outline-none focus:border-amber-crt focus:ring-1 focus:ring-amber-crt/50 transition-all text-amber-crt placeholder-amber-crt/30"
                placeholder="USER@DOMAIN.COM"
                value={formData.sender}
                onChange={(e) => setFormData({ ...formData, sender: e.target.value })}
              />
            </div>
            
            <div className="space-y-2">
              <label className="block font-bold">PACKET_SUBJ:</label>
              <input 
                type="text" 
                required
                className="w-full bg-brown-dim border border-amber-crt/20 p-3 outline-none focus:border-amber-crt focus:ring-1 focus:ring-amber-crt/50 transition-all text-amber-crt placeholder-amber-crt/30"
                placeholder="REQUEST_FOR_COLLAB"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <label className="block font-bold">DATA_PAYLOAD:</label>
              <textarea 
                rows={6} 
                required
                className="w-full bg-brown-dim border border-amber-crt/20 p-3 outline-none focus:border-amber-crt focus:ring-1 focus:ring-amber-crt/50 transition-all text-amber-crt placeholder-amber-crt/30 resize-none"
                placeholder="ENTER_YOUR_MESSAGE_HERE..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full bg-amber-crt text-brown-bg font-bold py-4 hover:bg-white transition-colors flex items-center justify-center gap-2 group"
            >
              TRANSMIT_PACKET <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </button>
          </form>
        </TerminalBox>
      </section>

      <section className="space-y-8">
        <TerminalBox title="EXTERNAL_NODES">
          <div className="p-4 space-y-8">
            <a href="mailto:your@email.com" className="flex items-center gap-6 group">
              <div className="p-3 border border-amber-crt/20 group-hover:bg-amber-crt/10 transition-colors">
                <Mail className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold underline underline-offset-4">SMTP_PROTOCOL</h4>
                <p className="text-xs opacity-50">your.name@embedded.sys</p>
              </div>
            </a>

            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group">
              <div className="p-3 border border-amber-crt/20 group-hover:bg-amber-crt/10 transition-colors">
                <Github className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold underline underline-offset-4">REPOSITORY_HUB</h4>
                <p className="text-xs opacity-50">github.com/sys_name_here</p>
              </div>
            </a>

            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group">
              <div className="p-3 border border-amber-crt/20 group-hover:bg-amber-crt/10 transition-colors">
                <Linkedin className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold underline underline-offset-4">NETWORKING_NODE</h4>
                <p className="text-xs opacity-50">linkedin.com/in/sys_profile</p>
              </div>
            </a>
          </div>
        </TerminalBox>

        <TerminalBox title="SYS_ENCRYPTION">
          <div className="p-4 text-xs opacity-60 leading-relaxed font-mono">
            <p>PGP_FINGERPRINT: 0x823A F34B 99E1 200F 1A2E</p>
            <p className="mt-2">PUB_KEY_STATUS: ACTIVE</p>
            <p>ENCRYPTION: AES-256-GCM</p>
          </div>
        </TerminalBox>
      </section>
    </div>
  );
};
