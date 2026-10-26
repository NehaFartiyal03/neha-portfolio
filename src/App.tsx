import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Mail, Phone, MapPin, Github, Linkedin, GraduationCap, CheckCircle2, Layers, ArrowUp, MessageCircle, Award, Calendar,
  Briefcase, Building2, Rocket, HeartHandshake, Smartphone, RefreshCw, Code, ArrowUpRight,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Reveal, SectionHead } from './components/Reveal';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { Projects } from './components/Projects';
import { experienceData } from './data/experience';
import { skillsData } from './data/skills';
import { servicesData, serviceDisclaimer } from './data/services';
import { educationData } from './data/education';
import { certificationsData } from './data/certifications';
import photo from './assets/images/neha.jpg';

const EMAIL = 'fartiyalneha82@gmail.com';
const PHONE = '+91 90844 88956';
const dv = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons';

/* ------------------------------------------------------------------ About */
function About() {
  const facts: [LucideIcon, string][] = [
    [MapPin, 'Noida · Dehradun, India'],
    [GraduationCap, 'MCA, DIT University (2024–26)'],
    [Layers, 'Full-stack · MERN'],
    [CheckCircle2, 'Available to join immediately'],
  ];
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-24">
      <div className="grid items-center gap-12 lg:grid-cols-5">
        <Reveal className="relative mx-auto w-full max-w-sm lg:col-span-2" x={-24}>
          <div className="absolute -inset-3 rotate-3 rounded-[2rem] bg-gradient-to-br from-blue-500 to-sky-400 opacity-80" />
          <div className="absolute -inset-3 -rotate-2 rounded-[2rem] border-2 border-dashed border-blue-300" />
          <img src={photo} alt="Neha Fartiyal" loading="lazy" className="relative aspect-[4/5] w-full rounded-[1.75rem] border-4 border-white object-cover object-top shadow-xl" />
          <div className="glass animate-float absolute -bottom-5 -right-3 rounded-2xl px-4 py-3 sm:-right-6">
            <p className="text-xs text-slate-500">Based in</p>
            <p className="text-sm font-bold text-slate-900">Noida &amp; Dehradun</p>
          </div>
        </Reveal>

        <div className="lg:col-span-3">
          <SectionHead eyebrow="About me" title="A developer who cares about the details" />
          <Reveal>
            <p className="-mt-4 text-lg leading-relaxed text-slate-700">
              I'm a Web Developer based in Noida &amp; Dehradun, currently completing my MCA at DIT University. I work with <b className="text-blue-700">React, TypeScript, Tailwind CSS and Node.js</b> to turn ideas into responsive, accessible websites and web applications.
            </p>
            <p className="mt-4 leading-relaxed text-slate-600">
              Alongside my role at ENIGOAL, I've built 60+ websites for clients, including live sites for NGOs, wellness, agritech and dairy businesses — and built a full-stack HRM &amp; attendance platform with role-based access. I'm looking for a team where I can keep shipping real products and growing fast.
            </p>
          </Reveal>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {facts.map(([Icon, text], i) => (
              <Reveal key={text} delay={0.08 * i} className="card flex items-center gap-3 p-4 text-sm font-semibold text-slate-800">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-blue-50 text-blue-600"><Icon size={19} /></span>{text}
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- Experience */
function duration(start?: string) {
  if (!start) return '';
  const d = new Date(start), n = new Date();
  const m = (n.getFullYear() - d.getFullYear()) * 12 + n.getMonth() - d.getMonth();
  if (m < 1) return 'Just started';
  const y = Math.floor(m / 12), r = m % 12;
  return [y && `${y} yr${y > 1 ? 's' : ''}`, r && `${r} mo${r > 1 ? 's' : ''}`].filter(Boolean).join(' ');
}
function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-5 py-24">
      <SectionHead eyebrow="Experience" title="Where I've worked" />
      <div className="relative ml-3 space-y-8 border-l-2 pl-8 sm:ml-5 sm:pl-10" style={{ borderImage: 'linear-gradient(180deg,#2563eb,#bae6fd) 1' }}>
        {experienceData.map(e => (
          <Reveal key={e.id} className="relative" x={-20}>
            <span className="absolute -left-[45px] top-7 grid h-6 w-6 place-items-center rounded-full border-4 border-white bg-blue-600 shadow-md sm:-left-[53px]">
              {e.current && <span className="pulse-dot h-2 w-2 rounded-full bg-white" />}
            </span>
            <div className="card p-7">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="flex items-start gap-4">
                  <span className="hidden h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-blue-600 to-sky-500 text-white sm:grid"><Briefcase size={22} /></span>
                  <div><h3 className="text-xl font-extrabold">{e.role}</h3><p className="font-semibold text-blue-600">{e.company} · {e.location}</p></div>
                </div>
                <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold ${e.current ? 'bg-emerald-50 text-emerald-700' : 'bg-slate-100 text-slate-600'}`}>
                  <Calendar size={12} />{e.period}{e.current && e.start ? ` · ${duration(e.start)}` : ''}
                </span>
              </div>
              <ul className="mt-5 space-y-2.5 text-sm text-slate-700">
                {e.responsibilities.map(r => <li key={r} className="flex gap-2.5"><CheckCircle2 size={17} className="mt-0.5 shrink-0 text-blue-500" />{r}</li>)}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------- Skills */
const SKILL_ICON: Record<string, string> = {
  React: 'react/react-original', TypeScript: 'typescript/typescript-original', JavaScript: 'javascript/javascript-original',
  'Tailwind CSS': 'tailwindcss/tailwindcss-original', HTML: 'html5/html5-original', CSS: 'css3/css3-original',
  'Node.js': 'nodejs/nodejs-original', 'Express.js': 'express/express-original', MongoDB: 'mongodb/mongodb-original',
  MySQL: 'mysql/mysql-original', Java: 'java/java-original', Python: 'python/python-original',
  Git: 'git/git-original', GitHub: 'github/github-original', 'VS Code': 'vscode/vscode-original',
};
const TABS = ['All', 'Frontend', 'Backend', 'Database', 'Programming', 'Tools'] as const;

function Skills() {
  const [tab, setTab] = useState<(typeof TABS)[number]>('All');
  const list = skillsData.filter(s => tab === 'All' || s.category === tab);
  return (
    <section id="skills" className="section-soft py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHead eyebrow="Skills" title="Tools I work with" sub="The languages, frameworks and tools I use to design, build and ship." />
        <Reveal className="mb-8 flex flex-wrap gap-2">
          {TABS.map(t => (
            <button key={t} onClick={() => setTab(t)} className={`relative rounded-full px-5 py-2 text-sm font-bold transition ${tab === t ? 'text-white' : 'border border-slate-200 bg-white text-slate-700 hover:border-blue-300 hover:text-blue-700'}`}>
              {tab === t && <motion.span layoutId="skill-tab" className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-sky-500 shadow-lg shadow-blue-600/30" transition={{ type: 'spring', stiffness: 380, damping: 30 }} />}
              <span className="relative">{t}</span>
            </button>
          ))}
        </Reveal>
        <motion.div layout className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {list.map(s => (
              <motion.div key={s.name} layout initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.92 }} transition={{ duration: 0.25 }}
                className="card group flex items-start gap-4 p-5">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-slate-50 ring-1 ring-slate-200 transition group-hover:scale-110 group-hover:bg-blue-50 group-hover:ring-blue-200">
                  {SKILL_ICON[s.name]
                    ? <img src={`${dv}/${SKILL_ICON[s.name]}.svg`} alt="" loading="lazy" className="h-8 w-8" onError={e => { e.currentTarget.style.display = 'none'; }} />
                    : <Code className="text-blue-600" />}
                </span>
                <div>
                  <div className="flex items-center gap-2"><h3 className="font-extrabold text-slate-900">{s.name}</h3><span className="rounded-md bg-blue-50 px-1.5 py-0.5 font-mono text-[10px] font-medium text-blue-700">{s.category}</span></div>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">{s.shortDescription}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- Services */
const SERVICE_ICON: Record<string, LucideIcon> = { Briefcase, Building2, Rocket, HeartHandshake, Smartphone, RefreshCw, Code, Layers };

function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-5 py-24">
      <SectionHead eyebrow="Freelance" title="What I can build for you" sub={serviceDisclaimer} />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {servicesData.map((s, i) => {
          const Icon = SERVICE_ICON[s.icon] ?? Code;
          return (
            <Reveal key={s.number} delay={(i % 4) * 0.06} className="card group relative overflow-hidden p-6">
              <span className="pointer-events-none absolute -right-2 -top-4 select-none font-mono text-7xl font-black text-slate-100 transition group-hover:text-blue-100">{s.number}</span>
              <span className="relative grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-blue-600 to-sky-500 text-white shadow-lg shadow-blue-600/25 transition group-hover:rotate-6 group-hover:scale-110"><Icon size={22} /></span>
              <h3 className="relative mt-4 font-extrabold leading-snug">{s.title}</h3>
              <p className="relative mt-2 text-sm leading-relaxed text-slate-600">{s.description}</p>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

/* -------------------------------------------------------------- Education */
function Education() {
  const edu = educationData.filter(e => !e.institution.includes('Editable'));
  return (
    <section className="section-soft py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHead eyebrow="Background" title="Education & certifications" />
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal className="card p-7">
            <h3 className="flex items-center gap-3 text-lg font-extrabold"><span className="grid h-10 w-10 place-items-center rounded-xl bg-blue-50 text-blue-600"><GraduationCap size={20} /></span> Education</h3>
            {edu.map(e => (
              <div key={e.degree} className="mt-6 border-l-2 border-blue-200 pl-4">
                <p className="font-bold">{e.degree}</p>
                <p className="text-sm text-slate-600">{e.institution}, {e.location}</p>
                <div className="mt-2 flex flex-wrap gap-2 text-xs font-semibold">
                  <span className="rounded-full bg-slate-100 px-2.5 py-1 text-slate-600">{e.period}</span>
                  <span className="rounded-full bg-blue-50 px-2.5 py-1 text-blue-700">CGPA {e.cgpa}</span>
                  <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-emerald-700">{e.status}</span>
                </div>
              </div>
            ))}
          </Reveal>
          <Reveal delay={0.08} className="card p-7">
            <h3 className="flex items-center gap-3 text-lg font-extrabold"><span className="grid h-10 w-10 place-items-center rounded-xl bg-blue-50 text-blue-600"><Award size={20} /></span> Certifications</h3>
            {certificationsData.map(c => (
              <div key={c.title} className="mt-6 border-l-2 border-blue-200 pl-4">
                <p className="font-bold">{c.title}</p>
                <p className="text-sm text-slate-600">{c.issuer} · {c.year}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- Contact */
function Contact() {
  const items: [LucideIcon, string, string][] = [
    [Mail, EMAIL, `mailto:${EMAIL}`],
    [Phone, PHONE, 'tel:+919084488956'],
    [Linkedin, 'LinkedIn', 'https://linkedin.com/in/neha-fartiyal'],
    [Github, 'GitHub', 'https://github.com/nehafartiyal'],
  ];
  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-24">
      <Reveal className="noise-dark relative overflow-hidden rounded-[2rem] p-10 text-center text-white shadow-2xl shadow-blue-900/30 sm:p-16">
        <div className="dot-grid absolute inset-0 opacity-30 invert" />
        <div className="relative">
          <p className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 font-mono text-[11px] uppercase tracking-widest text-sky-100">
            <span className="pulse-dot h-2 w-2 rounded-full bg-emerald-400" /> Available now
          </p>
          <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-extrabold tracking-tight sm:text-5xl">Let's build something <span className="bg-gradient-to-r from-sky-300 to-white bg-clip-text text-transparent">great together.</span></h2>
          <p className="mx-auto mt-4 max-w-xl text-blue-100">Hiring for a developer role or have a website project in mind? I reply within 24 hours.</p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-blue-700 shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"><Mail size={16} /> Email Me</a>
            <a href="https://wa.me/919084488956" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-7 py-3.5 text-sm font-bold backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/20"><MessageCircle size={16} /> WhatsApp</a>
          </div>
          <div className="mx-auto mt-10 grid max-w-3xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {items.map(([Icon, label, href]) => (
              <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer"
                className="group flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-blue-50 backdrop-blur transition hover:border-white/40 hover:bg-white/15">
                <Icon size={16} className="shrink-0" /><span className="truncate">{label}</span><ArrowUpRight size={13} className="shrink-0 opacity-0 transition group-hover:opacity-100" />
              </a>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/* ----------------------------------------------------------------- Footer */
const FOOT_LINKS = [['About', '#about'], ['Projects', '#projects'], ['Experience', '#experience'], ['Skills', '#skills'], ['Services', '#services'], ['Contact', '#contact']];

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-5 py-8 text-sm text-slate-500 md:flex-row">
        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-blue-600 to-sky-500 text-xs font-extrabold text-white">NF</span>
          <span>© {new Date().getFullYear()} <b className="text-slate-800">Neha Fartiyal</b> · Noida &amp; Dehradun, India</span>
        </div>
        <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2 font-semibold">
          {FOOT_LINKS.map(([l, h]) => <a key={l} href={h} className="transition hover:text-blue-600">{l}</a>)}
        </nav>
        <a href="#home" aria-label="Back to top" className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 text-slate-600 transition hover:-translate-y-1 hover:border-blue-400 hover:bg-blue-600 hover:text-white"><ArrowUp size={18} /></a>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero /><About /><Projects /><Experience /><Skills /><Services /><Education /><Contact />
      </main>
      <Footer />
    </>
  );
}
