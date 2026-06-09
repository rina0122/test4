import { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Code, Server, Wrench } from 'lucide-react';
import { Skill } from '../types';

interface SkillsSectionProps {
  skills: Skill[];
}

export default function SkillsSection({ skills }: SkillsSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Frontend' | 'Backend' | 'Design/Tools'>('All');
  const [focusedSkill, setFocusedSkill] = useState<Skill | null>(skills[0]);

  const categories = [
    { key: 'All', label: 'ALL SKILLS', icon: Sparkles },
    { key: 'Frontend', label: 'FRONTEND', icon: Code },
    { key: 'Backend', label: 'BACKEND/INFRA', icon: Server },
    { key: 'Design/Tools', label: 'DESIGN/TOOLS', icon: Wrench },
  ];

  const filteredSkills = selectedCategory === 'All'
    ? skills
    : skills.filter(skill => skill.category === selectedCategory);

  return (
    <section id="skills" className="bg-[#FAF8F5] rounded-none border border-[#1A1A1A]/10 p-6 md:p-8 space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="p-1.5 bg-[#C53030]/10 rounded-none border border-[#C53030]/20">
          <Code className="w-5 h-5 text-[#C53030]" />
        </div>
        <div>
          <h2 className="text-xl font-serif font-black text-[#1A1A1A] tracking-tight">EXPERTISE & SKILLSETS</h2>
          <p className="text-[10px] font-mono uppercase tracking-[0.1em] text-gray-400">01. Click a technical discipline to expand real-life highlights.</p>
        </div>
      </div>

      {/* Category Filter Pills (Editorial Style) */}
      <div className="flex flex-wrap gap-1.5 pb-2">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat.key;
          return (
            <button
              key={cat.key}
              onClick={() => {
                setSelectedCategory(cat.key as any);
                const matches = skills.filter(s => cat.key === 'All' || s.category === cat.key);
                if (matches.length > 0) setFocusedSkill(matches[0]);
              }}
              className={`px-3 py-1.5 rounded-none text-[10px] font-mono tracking-[0.15em] font-bold border transition-all cursor-pointer ${
                isActive
                  ? 'bg-[#C53030] border-[#C53030] text-white shadow-xs'
                  : 'bg-white hover:bg-[#F5F2EE] border-[#1A1A1A]/15 text-[#1A1A1A]'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Grid: Skill Bars (Left) & Detailed Explainer Box (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        {/* Skill Bars List */}
        <div className="lg:col-span-12 xl:col-span-7 space-y-3">
          <div className="space-y-2.5">
            {filteredSkills.map((skill) => {
              const isFocused = focusedSkill?.name === skill.name;
              return (
                <div
                  key={skill.name}
                  onClick={() => setFocusedSkill(skill)}
                  className={`p-3 rounded-none border transition-all cursor-pointer text-left ${
                    isFocused
                      ? 'bg-white border-[#C53030] ring-1 ring-[#C53030]/25'
                      : 'bg-white hover:bg-[#F5F2EE] border-[#1A1A1A]/10'
                  }`}
                >
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-xs font-bold text-[#1A1A1A] tracking-tight">{skill.name}</span>
                    <span className="text-xs font-black text-[#C53030] font-serif italic">{skill.level}%</span>
                  </div>
                  
                  {/* Skill Progress track (Solid red/charcoal block) */}
                  <div className="h-1 bg-[#F5F2EE] rounded-none overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                      className="h-full bg-gradient-to-r from-[#C53030] to-[#1A1A1A] rounded-none"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Detailed Explanation Display Panel */}
        <div className="lg:col-span-12 xl:col-span-5 flex flex-col">
          {focusedSkill ? (
            <motion.div
              key={focusedSkill.name}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex-1 bg-[#1A1A1A] text-white rounded-none p-5 border border-[#1A1A1A] flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-bold font-mono tracking-[0.2em] bg-white/10 text-white/90 px-2 py-0.5 rounded-none border border-white/20">
                    {focusedSkill.category.toUpperCase()}
                  </span>
                  <span className="text-[9px] font-bold font-mono tracking-[0.2em] text-[#C53030]">
                    CRITICAL METRIC
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-base font-serif font-bold text-white italic tracking-tight">{focusedSkill.name}</h3>
                  <div className="text-[10px] font-mono text-gray-400">
                    Confidence Level: <span className="text-[#C53030] font-bold">{focusedSkill.level}%</span>
                  </div>
                </div>

                <p className="text-xs text-gray-300 leading-relaxed font-serif">
                  {focusedSkill.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 flex items-center gap-2 text-[10px] text-gray-500 font-mono">
                <div className="w-1.5 h-1.5 bg-[#C53030] uppercase" />
                <span>Core architect role applied</span>
              </div>
            </motion.div>
          ) : (
            <div className="flex-1 border-2 border-dashed border-[#1A1A1A]/10 rounded-none flex items-center justify-center p-6 text-slate-400 text-xs font-mono">
              Select key skill to load editorial metrics.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
