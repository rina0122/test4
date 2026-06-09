import { motion } from 'motion/react';
import { profileData, skillsData, projectsData, qaData } from './data';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import QASection from './components/QASection';
import ContactSection from './components/ContactSection';
import { Heart } from 'lucide-react';

export default function App() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-[#FDFCFB] text-[#1A1A1A] font-sans selection:bg-[#C53030]/10 selection:text-[#C53030] pb-12 relative overflow-x-hidden">
      
      {/* Background Graphic Element - Left Warm Cream Column Highlight */}
      <div className="absolute top-0 right-0 w-1/4 h-full bg-[#F5F2EE] -z-10 hidden lg:block border-l border-[#1A1A1A]/5" />

      {/* Main Container */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 pt-6">
        
        {/* Top Navigation - Newspaper Style Masthead */}
        <motion.nav 
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col sm:flex-row justify-between items-center pb-5 border-b-2 border-[#1A1A1A] gap-4"
        >
          <div className="text-xs uppercase tracking-[0.3em] font-black italic text-[#C53030]">
            DOYUN LEE // CREATIVE PORTFOLIO
          </div>
          <div className="flex gap-6 items-center">
            <span className="text-xs uppercase tracking-[0.2em] font-medium text-gray-500 hidden sm:inline">SEOUL, KOREA</span>
            <span className="text-[10px] font-mono bg-[#C53030]/10 text-[#C53030] px-3 py-1 border border-[#C53030]/20 flex items-center gap-1.5 uppercase font-bold tracking-[0.15em] shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C53030] animate-pulse" />
              Available for work
            </span>
          </div>
        </motion.nav>

        {/* Huge Headline Intro Typography - Authentic Editorial Aesthetic */}
        <div className="border-b border-[#1A1A1A]/10 pb-8 mb-8 text-center md:text-left">
          <h2 className="text-[#C53030] text-xs uppercase tracking-[0.4em] font-black italic mb-3">
            Creative Technology &amp; Visual Architect
          </h2>
          <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-[0.8] tracking-tight mb-5 uppercase text-[#1A1A1A]">
            LEE DO YUN
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl font-serif italic leading-relaxed">
            "시각적인 시적 영감과 코드 아키텍처의 우아한 완결성을 양립하여, 사용자 흐름의 전 과정을 세밀히 가꾸어 나가는 엔니어 하이라이트입니다."
          </p>
        </div>

        {/* Dashboard Responsive Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column (Main Profile, Tech Stats) - Sticky on Desktop */}
          <div className="lg:col-span-12 xl:col-span-4 space-y-6 xl:sticky xl:top-6">
            <motion.div
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <AboutSection profile={profileData} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 }}
            >
              <SkillsSection skills={skillsData} />
            </motion.div>
          </div>

          {/* Right Column (Focus/Showcases/Interactivities) */}
          <div className="lg:col-span-12 xl:col-span-8 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
            >
              <ProjectsSection projects={projectsData} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <QASection qaItems={qaData} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
            >
              <ContactSection />
            </motion.div>
          </div>
        </div>

        {/* Editorial Footer */}
        <footer className="bg-transparent border-t border-[#1A1A1A]/10 mt-12 py-8 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-500 font-mono tracking-[0.1em] gap-4">
          <div className="flex items-baseline gap-3">
            <div className="w-12 h-[1px] bg-[#1A1A1A]/20" />
            <span>&copy; {currentYear} LEE DO YUN // METICULOUSLY CRAFTED LEDGER</span>
          </div>
          <div className="flex items-center gap-1.5 uppercase">
            <span>Designed with</span>
            <Heart className="w-3.5 h-3.5 text-[#C53030] fill-[#C53030] animate-pulse" />
            <span>in Seoul, South Korea</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
