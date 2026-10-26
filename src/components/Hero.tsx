import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import banner from '../assets/images/hero-banner.webp';

const ROLES = ['React Developer', 'Full-Stack Builder', 'UI Craftsperson', 'Freelance Website Developer'];
const dv = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons';
const STACK: [string, string][] = [
  ['HTML5', `${dv}/html5/html5-original.svg`], ['CSS3', `${dv}/css3/css3-original.svg`], ['JavaScript', `${dv}/javascript/javascript-original.svg`],
  ['TypeScript', `${dv}/typescript/typescript-original.svg`], ['React', `${dv}/react/react-original.svg`], ['Tailwind CSS', `${dv}/tailwindcss/tailwindcss-original.svg`],
  ['Node.js', `${dv}/nodejs/nodejs-original.svg`], ['Express', `${dv}/express/express-original.svg`], ['MongoDB', `${dv}/mongodb/mongodb-original.svg`],
  ['MySQL', `${dv}/mysql/mysql-original.svg`], ['Git', `${dv}/git/git-original.svg`],
];

function Typing() {
  const [i, setI] = useState(0);
  const [n, setN] = useState(0);
  const [del, setDel] = useState(false);
  useEffect(() => {
    const word = ROLES[i];
    const t = setTimeout(() => {
      if (!del && n < word.length) setN(n + 1);
      else if (!del) setDel(true);
      else if (n > 0) setN(n - 1);
      else { setDel(false); setI((i + 1) % ROLES.length); }
    }, !del && n === word.length ? 1400 : del ? 35 : 70);
    return () => clearTimeout(t);
  }, [n, del, i]);
  return <span className="font-mono font-semibold text-blue-700">{ROLES[i].slice(0, n)}<span className="ml-0.5 inline-block w-[2px] animate-pulse bg-blue-600">&nbsp;</span></span>;
}

const up = (d: number) => ({ initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 }, transition: { delay: d, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } });

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-[#d4e3f7] via-[#cfdff5] to-[#f8fafc] pb-10">
      <div className="dot-grid pointer-events-none absolute inset-0 opacity-60" />

      {/* ---------- Photo + text (text sits on the left of the photo) ---------- */}
      <div className="relative flex flex-col xl:block">
        <img
          src={banner} alt="Neha Fartiyal, web developer"
          className="order-2 block h-auto w-full"
          style={{ WebkitMaskImage: 'linear-gradient(180deg, transparent 0, #000 16%, #000 88%, transparent 100%)', maskImage: 'linear-gradient(180deg, transparent 0, #000 16%, #000 88%, transparent 100%)' }}
          fetchPriority="high"
        />

        <div className="order-1 px-5 pb-4 pt-28 text-center xl:absolute xl:inset-0 xl:flex xl:items-center xl:p-0 xl:text-left">
          <div className="mx-auto w-full max-w-6xl xl:mx-0 xl:max-w-none xl:pl-[6vw] xl:pt-10">
            <div className="mx-auto max-w-xl xl:mx-0 xl:max-w-[min(34vw,32rem)]">
              <motion.span {...up(0.1)} className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold text-blue-700">
                <span className="pulse-dot h-2 w-2 rounded-full bg-emerald-500" /> Open to full-time roles &amp; freelance
              </motion.span>
              <motion.p {...up(0.2)} className="mt-5 text-xl font-medium text-slate-800 sm:text-2xl">
                Hi, I'm <b className="font-extrabold">Neha Fartiyal</b> <span className="inline-block origin-[70%_70%] animate-[wave_2.2s_ease-in-out_infinite]">👋</span>
              </motion.p>
              <h1 className="mt-1 text-6xl font-black leading-[1.02] tracking-tight sm:text-7xl">
                <motion.span {...up(0.3)} className="block text-slate-900">Web</motion.span>
                <motion.span {...up(0.4)} className="gradient-text block pb-1">Developer</motion.span>
              </h1>
              <motion.p {...up(0.55)} className="mt-3 h-7 text-lg"><Typing /></motion.p>
              <motion.p {...up(0.65)} className="mt-3 text-base leading-relaxed text-slate-700 sm:text-lg">
                I build fast, responsive and scalable web applications using modern technologies — from pixel-perfect interfaces to full-stack systems.
              </motion.p>
              <motion.div {...up(0.8)} className="mt-7 flex flex-wrap items-center justify-center gap-3 xl:justify-start">
                <a href="#projects" className="btn-primary group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold text-white">
                  Explore My Work <ArrowRight size={16} className="transition group-hover:translate-x-1" />
                </a>
                <a href="#contact" className="glass inline-flex items-center rounded-full px-7 py-3.5 text-sm font-bold text-slate-800 transition hover:-translate-y-0.5 hover:text-blue-700">Get In Touch</a>
                <a href="/resume.pdf" download="Neha_Fartiyal_Resume.pdf" className="inline-flex items-center gap-1.5 rounded-full px-4 py-3.5 text-sm font-bold text-blue-700 transition hover:underline"><Download size={15} /> Resume</a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-6xl px-5">
        {/* ---------- Tech marquee ---------- */}
        <motion.div {...up(1.3)} className="marquee mt-6 overflow-hidden">
          <div className="marquee-track">
            {[...STACK, ...STACK].map(([name, src], k) => (
              <div key={k} className="flex shrink-0 items-center gap-2.5 pr-10" aria-hidden={k >= STACK.length}>
                <img src={src} alt={k < STACK.length ? name : ''} loading="lazy" className="h-8 w-8" />
                <span className="text-sm font-bold text-slate-600">{name}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
