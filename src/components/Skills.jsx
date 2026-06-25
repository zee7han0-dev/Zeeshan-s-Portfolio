import { memo } from 'react';
import { motion } from 'framer-motion';

const categories = [
  { label: 'Core',       skills: [{ name: 'HTML5', level: 95 }, { name: 'CSS3', level: 92 }, { name: 'JavaScript', level: 88 }] },
  { label: 'Frameworks', skills: [{ name: 'React', level: 85 }, { name: 'Tailwind CSS', level: 90 }, { name: 'Framer Motion', level: 80 }] },
  { label: 'Animation',  skills: [{ name: 'GSAP', level: 85 }, { name: 'ScrollTrigger', level: 82 }, { name: 'CSS Animations', level: 90 }] },
  { label: 'Tools',      skills: [{ name: 'Figma', level: 78 }, { name: 'Vite', level: 85 }, { name: 'Git / GitHub', level: 82 }] },
];

const allTags = ['HTML','CSS','JavaScript','React','Tailwind CSS','GSAP','Framer Motion','Figma','Vite','Git','Responsive Design','Performance','Accessibility','ScrollTrigger','Canvas API','SVG Animation'];

const SkillBar = memo(({ name, level, index }) => (
  <motion.div
    initial={{ opacity: 0, x: -16 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: '-40px' }}
    transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
    className="flex flex-col gap-2"
  >
    <div className="flex items-center justify-between">
      <span className="text-sm font-medium" style={{ color: 'var(--ink-muted)' }}>{name}</span>
      <span className="text-xs font-mono" style={{ color: 'var(--ink-faint)' }}>{level}%</span>
    </div>
    <div className="w-full h-1 rounded-full overflow-hidden" style={{ background: 'var(--surface-3)' }}>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.9, delay: 0.2 + index * 0.08, ease: [0.16, 1, 0.3, 1] }}
        className="h-full rounded-full"
        style={{ background: 'linear-gradient(90deg, var(--accent), rgba(160,140,255,0.8))' }}
      />
    </div>
  </motion.div>
));
SkillBar.displayName = 'SkillBar';

const TagPill = memo(({ tag, index }) => (
  <motion.span
    initial={{ opacity: 0, scale: 0.85 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.03, duration: 0.4 }}
    className="px-3 py-1.5 rounded-lg text-sm font-medium cursor-default"
    style={{ background: 'var(--surface-3)', color: 'var(--ink-muted)', border: '1px solid var(--border)', transition: 'all 0.2s' }}
    onMouseEnter={e => { e.target.style.background = 'var(--accent-muted)'; e.target.style.color = 'var(--accent)'; e.target.style.borderColor = 'rgba(124,106,247,0.3)'; }}
    onMouseLeave={e => { e.target.style.background = 'var(--surface-3)'; e.target.style.color = 'var(--ink-muted)'; e.target.style.borderColor = 'var(--border)'; }}
  >
    {tag}
  </motion.span>
));
TagPill.displayName = 'TagPill';

export default function Skills() {
  return (
    <section id="skills" className="section-gap" style={{ background: 'var(--surface-1)' }}>
      <div className="glow-line mb-0" />
      <div className="max-w-6xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14"
        >
          <p className="text-xs font-mono tracking-widest mb-3" style={{ color: 'var(--accent)' }}>TECH STACK</p>
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight" style={{ color: 'var(--ink)' }}>Skills & tools.</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {categories.map(cat => (
            <div key={cat.label} className="flex flex-col gap-5">
              <p className="text-xs font-mono tracking-widest uppercase" style={{ color: 'var(--ink-faint)' }}>{cat.label}</p>
              {cat.skills.map((s, i) => <SkillBar key={s.name} name={s.name} level={s.level} index={i} />)}
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-6 rounded-2xl"
          style={{ background: 'var(--surface-2)', border: '1px solid var(--border)' }}
        >
          <p className="text-xs font-mono tracking-widest mb-5" style={{ color: 'var(--ink-faint)' }}>ALL TECHNOLOGIES</p>
          <div className="flex flex-wrap gap-2">
            {allTags.map((tag, i) => <TagPill key={tag} tag={tag} index={i} />)}
          </div>
        </motion.div>
      </div>
      <div className="glow-line" />
    </section>
  );
}
