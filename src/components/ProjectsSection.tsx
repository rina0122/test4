import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, FolderGit2, X, Check } from 'lucide-react';
import { Project } from '../types';

interface ProjectsSectionProps {
  projects: Project[];
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);

  const categories = ['All', 'Web App', 'SaaS Product', 'Collaboration Tool'];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(proj => proj.category === selectedCategory);

  return (
    <section id="projects" className="bg-[#FAF8F5] rounded-none border border-[#1A1A1A]/10 p-6 md:p-8 space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="p-1.5 bg-[#C53030]/10 rounded-none border border-[#C53030]/20">
          <FolderGit2 className="w-5 h-5 text-[#C53030]" />
        </div>
        <div>
          <h2 className="text-xl font-serif font-black text-[#1A1A1A] tracking-tight">SELECTED PROJECT SHOWCASE</h2>
          <p className="text-[10px] font-mono uppercase tracking-[0.1em] text-gray-400">02. Curated engineering works optimized for responsive interactions.</p>
        </div>
      </div>

      {/* Filter Tabs (Editorial style) */}
      <div className="flex flex-wrap gap-1.5">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`cursor-pointer px-3 py-1 text-[10px] font-mono tracking-[0.15em] font-bold border transition-all rounded-none ${
              selectedCategory === cat
                ? 'bg-[#C53030] border-[#C53030] text-white shadow-xs'
                : 'bg-white hover:bg-[#F5F2EE] border-[#1A1A1A]/15 text-[#1A1A1A]/70'
            }`}
          >
            {cat === 'All' ? 'ALL WORKS' : cat.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            layoutId={`card-container-${project.id}`}
            onClick={() => setActiveProjectModal(project)}
            className="group cursor-pointer bg-white border border-[#1A1A1A]/12 rounded-none overflow-hidden transition-all duration-300 flex flex-col justify-between hover:border-[#C53030]"
          >
            <div>
              {/* Image Container (Editorial style grayscale hover transition) */}
              <div className="relative aspect-video w-full overflow-hidden bg-[#F5F2EE] border-b border-[#1A1A1A]/10">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-102"
                />
                <div className="absolute top-2 right-2 bg-[#1A1A1A] text-white text-[9px] font-mono font-bold tracking-widest px-2 py-0.5 rounded-none border border-white/10 uppercase">
                  {project.category}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-4 space-y-3">
                <div className="flex gap-1 flex-wrap">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="text-[9px] font-mono font-bold bg-[#F5F2EE] text-[#1A1A1A]/70 px-1.5 py-0.5 rounded-none border border-[#1A1A1A]/5">
                      {tag.toUpperCase()}
                    </span>
                  ))}
                </div>

                <h3 className="text-base font-serif font-black text-[#1A1A1A] group-hover:text-[#C53030] transition-colors leading-tight">
                  {project.title}
                </h3>

                <p className="text-xs text-gray-600 leading-relaxed font-serif italic line-clamp-2">
                  {project.summary}
                </p>
              </div>
            </div>

            {/* Card Footer */}
            <div className="px-4 py-3 border-t border-[#1A1A1A]/5 bg-[#FAF8F5] flex justify-between items-center text-[10px] text-gray-400 font-mono uppercase">
              <span>{project.period.split(' ')[0]}</span>
              <span className="text-[#C53030] font-bold tracking-[0.1em] group-hover:underline flex items-center gap-0.5 cursor-pointer">
                READ REPORT &rarr;
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal Overlay / Backdrop */}
      <AnimatePresence>
        {activeProjectModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop Blur effect */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveProjectModal(null)}
              className="absolute inset-0 bg-black/45 backdrop-blur-xs"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 10 }}
              transition={{ duration: 0.35 }}
              className="relative w-full max-w-2xl bg-[#FDFCFB] rounded-none border border-[#1A1A1A] shadow-2xl overflow-hidden z-10 max-h-[85vh] flex flex-col"
            >
              {/* Image view in modal */}
              <div className="relative aspect-video w-full shrink-0 bg-[#F5F2EE]">
                <img
                  src={activeProjectModal.imageUrl}
                  alt={activeProjectModal.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                
                {/* Close Button */}
                <button
                  onClick={() => setActiveProjectModal(null)}
                  className="absolute top-3 right-3 p-1.5 bg-[#1A1A1A] text-white hover:bg-[#C53030] transition-colors cursor-pointer border border-white/20 rounded-none"
                  title="CLOSE"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Scrollable Content */}
              <div className="p-6 md:p-8 overflow-y-auto space-y-6 text-left flex-1">
                <div className="space-y-1">
                  <span className="text-[10px] font-bold font-mono tracking-[0.2em] bg-[#C53030] text-white px-2 py-0.5 rounded-none uppercase">
                    {activeProjectModal.category}
                  </span>
                  <h3 className="text-xl md:text-2xl font-serif font-black text-[#1A1A1A] pt-1">
                    {activeProjectModal.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 font-mono">
                    <span>Role: <span className="text-[#1A1A1A] font-bold">{activeProjectModal.role}</span></span>
                    <span className="w-1 h-1 bg-slate-300 rounded-full" />
                    <span>Period: <span className="text-[#1A1A1A] font-bold">{activeProjectModal.period}</span></span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-[10px] font-mono font-bold text-[#C53030] uppercase tracking-[0.2em]">01. Abstract</h4>
                  <p className="text-sm text-gray-700 leading-6 font-serif">
                    {activeProjectModal.description}
                  </p>
                </div>

                {/* Key Achievements */}
                <div className="space-y-3 bg-[#FAF8F5] p-5 rounded-none border-l-2 border-[#C53030] border-y border-r border-[#1A1A1A]/10">
                  <h4 className="text-[10px] font-mono font-bold text-[#1A1A1A] uppercase tracking-[0.2em] flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-[#C53030]" />
                    TECHNICAL OUTCOMES & METRICS
                  </h4>
                  <ul className="space-y-2.5">
                    {activeProjectModal.keyFeature.map((feat, idx) => (
                      <li key={idx} className="flex gap-2 text-xs text-gray-600 leading-relaxed items-start font-serif">
                        <span className="shrink-0 w-1.5 h-1.5 bg-[#C53030] mt-1.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tags */}
                <div className="space-y-2">
                  <h4 className="text-[10px] font-mono font-bold text-gray-400 uppercase tracking-[0.2em]">02. Tech Stack Array</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {activeProjectModal.tags.map((tag) => (
                      <span key={tag} className="text-[10px] font-mono font-bold bg-[#F5F2EE] border border-[#1A1A1A]/10 text-[#1A1A1A] px-2.5 py-1">
                        {tag.toUpperCase()}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Bar */}
              <div className="px-6 py-4 border-t border-[#1A1A1A]/10 bg-[#FAF8F5] shrink-0 flex justify-end gap-2.5">
                <a
                  href={activeProjectModal.githubUrl || 'https://github.com'}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-[10px] font-mono font-bold tracking-widest text-[#1A1A1A] bg-white border border-[#1A1A1A]/15 hover:bg-[#F5F2EE] px-4 py-2.5 transition-colors cursor-pointer"
                >
                  <Github className="w-3.5 h-3.5" />
                  CODE ARCHIVE
                </a>
                <a
                  href={activeProjectModal.liveUrl || '#'}
                  onClick={(e) => {
                    if (!activeProjectModal.liveUrl) {
                      e.preventDefault();
                      alert('데모 링크가 성공적으로 연결되었습니다 (시뮬레이션 환경)');
                    }
                  }}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-[10px] font-mono font-bold tracking-widest text-white bg-[#C53030] hover:bg-red-800 px-4 py-2.5 transition-colors cursor-pointer"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  LIVE DEMO
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
