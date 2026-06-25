import { motion } from 'framer-motion';
import { DeviceMobile, Rocket, PaintBrush, Code } from '@phosphor-icons/react';

const services = [
  {
    icon: PaintBrush,
    title: 'Landing Pages',
    description:
      'Conversion-focused landing pages with premium aesthetics. Every section designed to guide visitors toward action.',
    tags: ['React', 'GSAP', 'Tailwind'],
  },
  {
    icon: Code,
    title: 'Frontend Development',
    description:
      'Pixel-perfect implementation from Figma or mockup to production-ready code. Clean, maintainable, and fast.',
    tags: ['HTML/CSS', 'JavaScript', 'React'],
  },
  {
    icon: Rocket,
    title: 'Interactive Experiences',
    description:
      'Scroll-driven animations, interactive heroes, and micro-interactions that make your site memorable.',
    tags: ['GSAP', 'Framer Motion', 'Canvas'],
  },
  {
    icon: DeviceMobile,
    title: 'Responsive UI',
    description:
      'Mobile-first interfaces that look and feel great on every screen — from 375px to ultra-wide.',
    tags: ['Responsive', 'Tailwind', 'CSS Grid'],
  },
];

function ServiceCard({ service, index }) {
  const Icon = service.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="p-6 rounded-2xl flex flex-col gap-4 group transition-all duration-300"
      style={{
        background: 'var(--surface-2)',
        border: '1px solid var(--border)',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.background = 'var(--surface-3)';
        e.currentTarget.style.borderColor = 'rgba(124,106,247,0.25)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = 'var(--surface-2)';
        e.currentTarget.style.borderColor = 'var(--border)';
      }}
    >
      {/* Icon */}
      <span
        className="w-10 h-10 rounded-xl flex items-center justify-center"
        style={{ background: 'var(--accent-muted)', color: 'var(--accent)' }}
      >
        <Icon size={20} weight="regular" />
      </span>

      <div className="flex flex-col gap-2 flex-1">
        <h3 className="text-base font-semibold" style={{ color: 'var(--ink)' }}>
          {service.title}
        </h3>
        <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-muted)' }}>
          {service.description}
        </p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mt-auto">
        {service.tags.map((t) => (
          <span
            key={t}
            className="text-xs font-mono px-2 py-0.5 rounded"
            style={{ background: 'var(--surface-0)', color: 'var(--ink-faint)' }}
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="services" className="section-gap" style={{ background: 'var(--surface-0)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14"
        >
          <p className="text-xs font-mono tracking-widest mb-3" style={{ color: 'var(--accent)' }}>
            WHAT I DO
          </p>
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight" style={{ color: 'var(--ink)' }}>
            Services & specialties.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
