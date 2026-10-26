import { useEffect, useState } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Mail, Menu, X } from 'lucide-react';

const LINKS = [['home', 'Home'], ['about', 'About'], ['projects', 'Projects'], ['experience', 'Experience'], ['skills', 'Skills'], ['services', 'Services']] as const;

export function Navbar() {
  const [active, setActive] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const bar = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    const io = new IntersectionObserver(
      es => es.forEach(e => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    );
    [...LINKS.map(l => l[0]), 'contact'].forEach(id => { const el = document.getElementById(id); el && io.observe(el); });
    return () => { window.removeEventListener('scroll', onScroll); io.disconnect(); };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.div style={{ scaleX: bar }} className="absolute inset-x-0 top-0 h-[3px] origin-left bg-gradient-to-r from-blue-600 to-sky-400" />
      <motion.div
        initial={{ y: -40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}
        className={`mx-auto mt-3 flex max-w-6xl items-center justify-between gap-3 rounded-full px-3 py-2 transition-all duration-300 sm:px-4 ${scrolled ? 'border border-slate-200/80 bg-white/80 shadow-lg shadow-blue-900/5 backdrop-blur-xl' : 'border border-transparent'}`}
      >
        <a href="#home" className="flex items-center gap-2.5">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-blue-600 to-sky-500 text-sm font-extrabold text-white shadow-md shadow-blue-600/30">NF</span>
          <span className="leading-tight"><b className="block text-[15px] text-slate-900">Neha Fartiyal</b><small className="text-xs font-medium text-slate-500">Web Developer</small></span>
        </a>

        <nav className="hidden items-center gap-1 rounded-full bg-blue-50/80 p-1 lg:flex">
          {LINKS.map(([id, label]) => (
            <a key={id} href={`#${id}`} className={`relative rounded-full px-4 py-2 text-sm font-semibold transition-colors ${active === id ? 'text-white' : 'text-slate-700 hover:text-blue-600'}`}>
              {active === id && <motion.span layoutId="pill" className="absolute inset-0 rounded-full bg-blue-600 shadow-md shadow-blue-600/30" transition={{ type: 'spring', stiffness: 380, damping: 30 }} />}
              <span className="relative">{label}</span>
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href="#contact" className="hidden items-center gap-2 rounded-full border-2 border-blue-600 bg-white/90 px-5 py-2 text-sm font-bold text-blue-600 transition hover:-translate-y-0.5 hover:bg-blue-600 hover:text-white sm:inline-flex">
            <Mail size={16} /> Get In Touch
          </a>
          <button aria-label="Menu" onClick={() => setOpen(!open)} className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white lg:hidden">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            className="mx-4 mt-2 rounded-3xl border border-slate-200 bg-white/95 p-3 shadow-2xl backdrop-blur-xl lg:hidden">
            {[...LINKS, ['contact', 'Contact'] as const].map(([id, label]) => (
              <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className={`block rounded-2xl px-4 py-3 font-semibold ${active === id ? 'bg-blue-600 text-white' : 'text-slate-700 hover:bg-blue-50'}`}>{label}</a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
