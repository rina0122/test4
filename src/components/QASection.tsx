import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Code, Users, MessageSquare, ChevronRight, Zap } from 'lucide-react';
import { QAItem } from '../types';

interface QASectionProps {
  qaItems: QAItem[];
}

export default function QASection({ qaItems }: QASectionProps) {
  const [selectedQaId, setSelectedQaId] = useState<string>(qaItems[0]?.id || '');

  const getIcon = (name: string) => {
    switch (name) {
      case 'Heart':
        return <Heart className="w-4 h-4 text-[#C53030]" />;
      case 'Code':
        return <Code className="w-4 h-4 text-[#C53030]" />;
      case 'Users':
        return <Users className="w-4 h-4 text-[#C53030]" />;
      default:
        return <MessageSquare className="w-4 h-4 text-slate-500" />;
    }
  };

  const selectedQa = qaItems.find((item) => item.id === selectedQaId);

  return (
    <section id="qa" className="bg-[#FAF8F5] rounded-none border border-[#1A1A1A]/10 p-6 md:p-8 space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="p-1.5 bg-[#C53030]/10 rounded-none border border-[#C53030]/20">
          <MessageSquare className="w-5 h-5 text-[#C53030]" />
        </div>
        <div>
          <h2 className="text-xl font-serif font-black text-[#1A1A1A] tracking-tight">PHILOSOPHY & INTERVIEW</h2>
          <p className="text-[10px] font-mono uppercase tracking-[0.1em] text-gray-400">03. Insights on engineering methodologies and collaboration design.</p>
        </div>
      </div>

      {/* Main Grid Card Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Simple Question Buttons Side */}
        <div className="lg:col-span-12 xl:col-span-5 space-y-2">
          {qaItems.map((item) => {
            const isSelected = selectedQaId === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedQaId(item.id)}
                className={`w-full text-left p-3.5 rounded-none border transition-all flex items-center justify-between cursor-pointer ${
                  isSelected
                    ? 'bg-white border-[#C53030] ring-1 ring-[#C53030]/10'
                    : 'bg-white hover:bg-[#F5F2EE] border-[#1A1A1A]/10 text-slate-600'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-1.5 rounded-none border ${
                    isSelected ? 'bg-[#FAF8F5] border-[#C53030]/30' : 'bg-slate-50 border-transparent'
                  }`}>
                    {getIcon(item.iconName)}
                  </div>
                  <span className={`text-xs md:text-sm font-sans font-bold ${isSelected ? 'text-[#1A1A1A]' : 'text-slate-600'}`}>
                    {item.question}
                  </span>
                </div>
                <ChevronRight className={`w-4 h-4 transition-transform ${
                  isSelected ? 'text-[#C53030] translate-x-0.5' : 'text-slate-400'
                }`} />
              </button>
            );
          })}
        </div>

        {/* Dynamic Answer Box Display */}
        <div className="lg:col-span-12 xl:col-span-7 flex">
          <AnimatePresence mode="wait">
            {selectedQa ? (
              <motion.div
                key={selectedQa.id}
                initial={{ opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -8 }}
                transition={{ duration: 0.25 }}
                className="flex-1 bg-[#F5F2EE]/50 border border-[#1A1A1A]/10 rounded-none p-5 md:p-6 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="p-1 bg-[#C53030]/10 rounded-none border border-[#C53030]/20">
                      <Zap className="w-3.5 h-3.5 text-[#C53030]" />
                    </div>
                    <span className="text-[9px] font-mono font-bold tracking-[0.2em] text-[#1A1A1A]/60">COLUMN INSIGHT CARD</span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-base font-serif font-black text-[#1A1A1A]">
                      Q. {selectedQa.question}
                    </h3>
                    <div className="w-12 h-[1.5px] bg-[#C53030]" />
                  </div>

                  <p className="text-xs md:text-sm text-gray-750 leading-relaxed font-serif bg-white p-5 rounded-none border border-[#1A1A1A]/8 italic">
                    "{selectedQa.answer}"
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#1A1A1A]/10 flex justify-between items-center text-[9px] text-gray-450 font-mono tracking-[0.1em] uppercase">
                  <span>Interview Ledger</span>
                  <span>Section 03</span>
                </div>
              </motion.div>
            ) : (
              <div className="flex-1 border-2 border-dashed border-[#1A1A1A]/12 rounded-none flex items-center justify-center p-6 text-slate-400 text-xs font-mono">
                Select a topic column above to load the editorial response.
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
