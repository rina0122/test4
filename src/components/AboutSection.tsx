import { motion } from 'motion/react';
import { Mail, MapPin, Github, Linkedin, Sparkles } from 'lucide-react';
import { Profile } from '../types';

interface AboutSectionProps {
  profile: Profile;
}

export default function AboutSection({ profile }: AboutSectionProps) {
  return (
    <section id="about" className="relative bg-[#FAF8F5] rounded-none border border-[#1A1A1A]/10 p-6 md:p-8">
      {/* Editorial Decorative Vertical Accent Stripe */}
      <div className="absolute top-0 bottom-0 left-0 w-1.5 bg-[#C53030]" />

      <div className="flex flex-col gap-6 items-center lg:items-start pl-2">
        {/* Profile Avatar Frame (Editorial Square Layout) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative shrink-0"
        >
          <div className="relative bg-[#FAF8F5] p-1.5 border border-[#1A1A1A]/15">
            <img 
              src={profile.avatarUrl} 
              alt={profile.name} 
              referrerPolicy="no-referrer"
              className="w-32 h-32 md:w-36 md:h-36 object-cover bg-[#F5F2EE] filter grayscale-[15%] contrast-[105%]"
            />
          </div>
          
          <motion.div 
            animate={{ 
              opacity: [0.85, 1, 0.85] 
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -bottom-2.5 -right-2 bg-[#C53030] text-white text-[9px] font-bold tracking-[0.25em] px-2.5 py-0.5 rounded-none shadow-xs flex items-center gap-1 font-mono uppercase"
          >
            <Sparkles className="w-2.5 h-2.5 text-amber-300 fill-amber-300" />
            Active
          </motion.div>
        </motion.div>

        {/* Profile Details */}
        <div className="flex-1 text-center lg:text-left space-y-4">
          <div className="space-y-1">
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2.5">
              <h1 className="text-3xl font-serif font-black text-[#1A1A1A] tracking-tight">
                {profile.name}
              </h1>
              <span className="text-[10px] bg-[#1A1A1A]/5 text-[#1A1A1A]/60 font-mono tracking-widest px-2 py-0.5 rounded-none border border-[#1A1A1A]/10 uppercase font-medium">
                {profile.englishName}
              </span>
            </div>
            
            <p className="text-sm uppercase tracking-[0.3em] font-bold text-[#C53030] font-sans italic">
              {profile.role}
            </p>
          </div>

          <p className="text-base text-gray-700 leading-relaxed font-serif italic border-l border-[#C53030] pl-4 text-left hidden lg:block">
            "{profile.tagline}"
          </p>
          
          <p className="text-xs text-gray-600 leading-6 text-left">
            {profile.description}
          </p>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 text-[#1A1A1A]/70 text-xs font-mono">
            <span className="flex items-center gap-1" id="profile-location">
              <MapPin className="w-3.5 h-3.5 text-[#C53030]" />
              {profile.location}
            </span>
            <span className="w-1 h-1 bg-slate-300 rounded-full hidden sm:block" />
            <a href={`mailto:${profile.email}`} className="flex items-center gap-1 hover:text-[#C53030] transition-colors underline decoration-dotted" id="profile-email">
              <Mail className="w-3.5 h-3.5 text-slate-500" />
              {profile.email}
            </a>
            <span className="w-1 h-1 bg-slate-300 rounded-full hidden sm:block" />
            <div className="flex items-center gap-2">
              <a 
                href={profile.github} 
                target="_blank" 
                rel="noreferrer" 
                className="hover:text-[#C53030] transition-colors p-1 bg-white border border-[#1A1A1A]/10 rounded-none shadow-3xs"
                title="GitHub"
              >
                <Github className="w-3.5 h-3.5 text-slate-700" />
              </a>
              <a 
                href={profile.linkedin} 
                target="_blank" 
                rel="noreferrer" 
                className="hover:text-[#C53030] transition-colors p-1 bg-white border border-[#1A1A1A]/10 rounded-none shadow-3xs"
                title="LinkedIn"
              >
                <Linkedin className="w-3.5 h-3.5 text-slate-700" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Key Numbers (Editorial Boxed Stats Grid) */}
      <div className="grid grid-cols-2 lg:grid-cols-2 gap-2 mt-6 pt-6 border-t border-[#1A1A1A]/10 bg-[#F5F2EE]/50 p-3 rounded-none">
        {profile.stats.map((stat, idx) => (
          <div key={idx} className="flex flex-col p-2.5 bg-white border border-[#1A1A1A]/10 rounded-none text-center justify-center">
            <span className="text-xl md:text-2xl font-black font-serif text-[#1A1A1A]">
              {stat.value}
            </span>
            <span className="text-[9px] uppercase tracking-[0.1em] font-semibold text-gray-500 mt-1 block">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
