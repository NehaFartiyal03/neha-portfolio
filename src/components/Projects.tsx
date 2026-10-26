
import { motion } from 'framer-motion';
import {
  CheckCircle2,
  Star,
  Sprout,
  HeartHandshake,
  Activity,
  Milk,
  Users,
} from 'lucide-react';
import { Reveal, SectionHead } from './Reveal';
import { AnimatedFeatureCard } from './ui/animated-feature-card';
import { projectsData } from '../data/projects';

const META = {
  adfarm: { icon: <Sprout size={44} />, color: 'green' },
  'pushker-society': { icon: <HeartHandshake size={44} />, color: 'blue' },
  'fitness-yog-foundation': { icon: <Activity size={44} />, color: 'purple' },
  'ganeshnath-dairy': { icon: <Milk size={44} />, color: 'orange' },
  'ujwal-mahila': { icon: <Users size={44} />, color: 'rose' },
} as const;

export function Projects() {
  const [hrm, ...sites] = projectsData;

  return (
    <section id="projects" className="section-soft py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHead
          eyebrow="Selected work"
          title="Projects that are live and in use"
          sub="I've built 60+ websites for clients. Here are five live ones, plus a full-stack enterprise application."
        />

        <Reveal className="card-flat mb-10 grid overflow-hidden rounded-3xl shadow-xl shadow-blue-900/5 md:grid-cols-5">
          <div className="noise-dark relative flex min-h-64 flex-col justify-between overflow-hidden p-7 text-white md:col-span-2">
            <div className="dot-grid absolute inset-0 opacity-25 invert" />

            <div className="relative">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/10 px-3 py-1 font-mono text-[10px] uppercase tracking-widest">
                <Star size={11} /> Featured · {hrm.type}
              </span>

              <p className="mt-4 text-3xl font-extrabold leading-tight">
                HRM &amp; Attendance System
              </p>
            </div>

            <div className="relative mt-6 rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur">
              <div className="flex items-center justify-between text-[11px] font-semibold text-blue-100">
                <span>Attendance · this week</span>
                <span className="rounded bg-emerald-400/20 px-1.5 py-0.5 text-emerald-200">
                  96% present
                </span>
              </div>

              <div className="mt-3 flex h-16 items-end gap-2">
                {[62, 80, 74, 92, 86, 96, 58].map((h, i) => (
                  <motion.span
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.15 + i * 0.07,
                      duration: 0.6,
                    }}
                    className="flex-1 rounded-t-md bg-gradient-to-t from-sky-300 to-white/90"
                  />
                ))}
              </div>

              <div className="mt-2 flex justify-between font-mono text-[9px] text-blue-200">
                {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => (
                  <span key={i} className="flex-1 text-center">
                    {d}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="p-7 md:col-span-3 md:p-9">
            <h3 className="text-xl font-extrabold">{hrm.title}</h3>

            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              {hrm.longDescription}
            </p>

            <ul className="mt-5 grid gap-x-4 gap-y-2 text-sm text-slate-700 sm:grid-cols-2">
              {hrm.features?.slice(0, 6).map((f) => (
                <li key={f} className="flex gap-2">
                  <CheckCircle2
                    size={16}
                    className="mt-0.5 shrink-0 text-blue-600"
                  />
                  {f}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-2">
              {hrm.technologies.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-blue-100 bg-blue-50 px-2.5 py-1 font-mono text-xs font-medium text-blue-700"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Live HRM software link */}
            <a
              href="https://hrm.enigoal.co.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition duration-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Visit Live HRM Software <span aria-hidden="true">↗</span>
            </a>
          </div>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sites.map((p, i) => {
            const m = META[p.id as keyof typeof META];

            return (
              <Reveal key={p.id} delay={i * 0.07}>
                <AnimatedFeatureCard
                  index={String(i + 1).padStart(3, '0')}
                  tag={p.category.toUpperCase()}
                  title={p.title}
                  description={p.description}
                  icon={m.icon}
                  color={m.color}
                  href={p.liveUrl!}
                  tech={p.technologies}
                />
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
