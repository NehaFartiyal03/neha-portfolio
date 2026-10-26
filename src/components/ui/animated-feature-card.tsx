import * as React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

const colorVariants = {
  orange: { '--feature-color': 'hsl(24, 90%, 48%)', '--feature-color-light': 'hsl(41, 100%, 80%)', '--feature-color-dark': 'hsl(24, 98%, 95%)' },
  purple: { '--feature-color': 'hsl(262, 70%, 52%)', '--feature-color-light': 'hsl(261, 100%, 87%)', '--feature-color-dark': 'hsl(264, 100%, 96%)' },
  blue: { '--feature-color': 'hsl(211, 90%, 45%)', '--feature-color-light': 'hsl(210, 100%, 83%)', '--feature-color-dark': 'hsl(216, 100%, 96%)' },
  green: { '--feature-color': 'hsl(158, 75%, 30%)', '--feature-color-light': 'hsl(152, 70%, 78%)', '--feature-color-dark': 'hsl(150, 80%, 94%)' },
  rose: { '--feature-color': 'hsl(340, 75%, 45%)', '--feature-color-light': 'hsl(340, 100%, 87%)', '--feature-color-dark': 'hsl(340, 100%, 96%)' },
};

const shots = [
  (u: string) => `https://image.thum.io/get/width/900/crop/1500/noanimate/${u}`,
  (u: string) => `https://s0.wp.com/mshots/v1/${encodeURIComponent(u)}?w=900&h=1500`,
];

interface Props {
  index: string;
  tag: string;
  title: React.ReactNode;
  description: string;
  icon: React.ReactNode;
  href: string;
  tech: string[];
  color: keyof typeof colorVariants;
  className?: string;
}

export function AnimatedFeatureCard({ className, index, tag, title, description, icon, href, tech, color }: Props) {
  const [src, setSrc] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const failed = src >= shots.length;
  const host = new URL(href).hostname.replace('www.', '');

  return (
    <motion.a
      href={href} target="_blank" rel="noreferrer"
      style={colorVariants[color] as React.CSSProperties}
      className={cn('group relative flex w-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-sm', className)}
      whileHover="hover" initial="initial"
      variants={{ initial: { y: 0, boxShadow: '0 1px 2px rgba(15,23,42,.05)' }, hover: { y: -10, boxShadow: '0 28px 44px -14px rgba(15,23,42,.22)' } }}
      transition={{ type: 'spring', stiffness: 200, damping: 15 }}
    >
      <div className="absolute inset-0 z-0 opacity-60" style={{ background: 'radial-gradient(circle at 50% 18%, var(--feature-color-light) 0%, transparent 65%)' }} />
      <div className="relative z-10 mb-2 font-mono text-sm font-bold text-slate-400">{index}</div>

      <div className="relative z-10 mb-4">
        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg">
          <div className="flex items-center gap-1.5 border-b border-slate-200 bg-slate-50 px-3 py-2">
            <i className="h-2 w-2 rounded-full bg-red-400" /><i className="h-2 w-2 rounded-full bg-amber-400" /><i className="h-2 w-2 rounded-full bg-emerald-400" />
            <span className="ml-2 flex-1 truncate rounded-md border border-slate-200 bg-white px-2 py-0.5 font-mono text-[10px] text-slate-500">{host}</span>
          </div>
          <div className="relative h-44 overflow-hidden bg-slate-100">
            {!loaded && !failed && <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-slate-100 to-slate-200" />}
            {failed ? (
              <div className="grid h-full place-items-center" style={{ color: 'var(--feature-color)' }}>{icon}</div>
            ) : (
              <img
                key={src} src={shots[src](href)} alt={`${host} website preview`} loading="lazy"
                onLoad={() => setLoaded(true)} onError={() => { setLoaded(false); setSrc(s => s + 1); }}
                className={cn('h-full w-full object-cover object-top transition-[object-position,opacity] duration-[4500ms] ease-in-out group-hover:object-bottom', loaded ? 'opacity-100' : 'opacity-0')}
              />
            )}
          </div>
        </div>
        <motion.div
          className="absolute -right-2 -top-3 grid h-11 w-11 place-items-center rounded-2xl border border-white bg-white shadow-lg"
          style={{ color: 'var(--feature-color)' }}
          variants={{ initial: { scale: 1, rotate: 0 }, hover: { scale: 1.2, rotate: -8 } }}
          transition={{ type: 'spring', stiffness: 200, damping: 15 }}
        >
          <span className="scale-50">{icon}</span>
        </motion.div>
      </div>

      <div className="relative z-20 rounded-xl border border-slate-200 bg-white/85 p-4 backdrop-blur-sm">
        <span className="mb-2 inline-block rounded-full px-3 py-1 text-xs font-bold" style={{ backgroundColor: 'var(--feature-color-dark)', color: 'var(--feature-color)' }}>{tag}</span>
        <h3 className="text-lg font-extrabold text-slate-900">{title}</h3>
        <p className="mt-1 text-sm leading-relaxed text-slate-600">{description}</p>
        <div className="mt-3 flex flex-wrap items-center gap-1.5">
          {tech.map(t => <span key={t} className="rounded-md bg-slate-100 px-2 py-0.5 font-mono text-[11px] text-slate-700">{t}</span>)}
          <span className="ml-auto text-xs font-bold" style={{ color: 'var(--feature-color)' }}>Visit site ↗</span>
        </div>
      </div>
    </motion.a>
  );
}
