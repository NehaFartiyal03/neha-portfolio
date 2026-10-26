import { useEffect, useRef, useState } from 'react';
import { animate, motion, useInView } from 'framer-motion';
import type { ReactNode } from 'react';

export function Reveal({ children, delay = 0, className = '', x = 0 }: { children: ReactNode; delay?: number; className?: string; x?: number }) {
  return (
    <motion.div className={className} initial={{ opacity: 0, y: 22, x }} whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.div>
  );
}

export function SectionHead({ eyebrow, title, sub, center = false }: { eyebrow: string; title: string; sub?: string; center?: boolean }) {
  return (
    <Reveal className={`mb-12 max-w-2xl ${center ? 'mx-auto text-center' : ''}`}>
      <p className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 font-mono text-[11px] font-medium uppercase tracking-widest text-blue-700">
        <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />{eyebrow}
      </p>
      <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">{title}</h2>
      <span className={`mt-4 block h-1 w-16 rounded-full bg-gradient-to-r from-blue-600 to-sky-400 ${center ? 'mx-auto' : ''}`} />
      {sub && <p className="mt-4 leading-relaxed text-slate-600">{sub}</p>}
    </Reveal>
  );
}

/** Counts up from 0 to `value` when scrolled into view. Non-numeric values are shown as-is. */
export function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const num = parseFloat(value);
  const isNum = /^\d+(\.\d+)?$/.test(value);
  const decimals = value.includes('.') ? value.split('.')[1].length : 0;
  const [text, setText] = useState(isNum ? (0).toFixed(decimals) : value);

  useEffect(() => {
    if (!isNum || !inView) return;
    const controls = animate(0, num, { duration: 1.6, ease: 'easeOut', onUpdate: v => setText(v.toFixed(decimals)) });
    return () => controls.stop();
  }, [inView, isNum, num, decimals]);

  return <span ref={ref}>{text}</span>;
}
