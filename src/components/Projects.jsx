import { memo } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, GithubLogo } from '@phosphor-icons/react';

const projects = [
  {
    id: '01',
    title: 'Aura Glasses',
    subtitle: 'Premium AR Concept Landing Page',
    description: 'A high-fidelity product landing page for a concept AR glasses brand. Built with GSAP ScrollTrigger for cinematic scroll animations, sticky feature panels, and buttery-smooth parallax.',
    tags: ['HTML', 'CSS', 'GSAP', 'ScrollTrigger'],
    liveUrl: '#', githubUrl: '#', accent: '#7c6af7',
  },
  {
    id: '02',
    title: 'NOVA XR',
    subtitle: 'VR Headset Interactive Site',
    description: 'A zero-dependency static site showcasing a VR headset concept. Features sticky SVG panels, scroll-driven 3D-feel transitions, and a performance-first architecture.',
    tags: ['Vanilla JS', 'GSAP', 'SVG', 'CSS3'],
    liveUrl: '#', githubUrl: '#', accent: '#4fa8e0',
  },
  {
    id: '03',
    title: 'Analytics Dashboard',
    subtitle: 'Real-time Data Interface',
    description: 'A Vercel/Linear-inspired analytics dashboard with live CoinGecko API integration, tab-switching views, Chart.js visualizations, and a mock auth system.',
    tags: ['React', 'Tailwind', 'Chart.js', 'REST API'],
    liveUrl: '#', githubUrl: '#', accent: '#2ecc8a',
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] },
  }),
};

const ProjectCard = memo(({ project, index }) => (
  <motion.div
    custom={index}
    variants={cardVariant}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: '-80px' }}
    className="group relative rounded-2xl overflow-hidden flex flex-col"
    style={{ background: 'var(--surface-1)', border: '1px solid var(--border)', transition: 'border-color 0.3s ease, box-shadow 0.3s ease' }}
    onMouseEnter={e => { e.currentTarget.style.borderColor = `${project.accent}40`; e.currentTarget.style.boxShadow = `0 0 40px ${project.accent}12`; }}
    onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.boxShadow = 'none'; }}
  >
    <div className="h-px w-full" style={{ background: `linear-gradient(90deg, transparent, ${project.accent}60, transparent)` }} />

    <div className="mx-5 mt-5 rounded-xl overflow-hidden" style={{ background: 'var(--surface-2)', border: '1px solid var(--border)', minHeight: '180px' }}>
      <div className="flex items-center gap-1.5 px-3 py-2.5" style={{ borderBottom: '1px solid var(--border)' }}>
        {['#ff5f57','#febc2e','#28c840'].map(c => (
          <span key={c} className="w-2.5 h-2.5 rounded-full" style={{ background: c, opacity: 0.8 }} />
        ))}
        <span className="ml-3 text-xs font-mono px-3 py-0.5 rounded flex-1" style={{ background: 'var(--surface-3)', color: 'var(--ink-faint)', maxWidth: '200px' }}>
          zeeshan.dev/{project.title.toLowerCase().replace(' ', '-')}
        </span>
      </div>
      <div className="relative flex items-center justify-center" style={{ height: '140px', background: `radial-gradient(ellipse at 50% 50%, ${project.accent}18 0%, transparent 70%)` }}>
        <span className="text-5xl font-mono font-semibold tracking-tighter select-none" style={{ color: `${project.accent}30` }}>{project.id}</span>
      </div>
    </div>

    <div className="p-5 flex flex-col flex-1 gap-3">
      <div>
        <p className="text-xs font-mono mb-1.5" style={{ color: 'var(--ink-faint)' }}>{project.subtitle}</p>
        <h3 className="text-lg font-semibold" style={{ color: 'var(--ink)' }}>{project.title}</h3>
      </div>
      <p className="text-sm leading-relaxed flex-1" style={{ color: 'var(--ink-muted)' }}>{project.description}</p>
      <div className="flex flex-wrap gap-2 mt-1">
        {project.tags.map(tag => (
          <span key={tag} className="px-2 py-0.5 rounded text-xs font-mono font-medium" style={{ background: 'var(--surface-3)', color: 'var(--ink-faint)' }}>{tag}</span>
        ))}
      </div>
      <div className="flex items-center gap-3 pt-2 mt-auto" style={{ borderTop: '1px solid var(--border)' }}>
        <a href={project.liveUrl} className="inline-flex items-center gap-1.5 text-sm font-medium pt-3" style={{ color: project.accent }}>
          Live site <ArrowUpRight size={14} weight="bold" />
        </a>
        <a href={project.githubUrl} className="inline-flex items-center gap-1.5 text-sm pt-3 ml-auto" style={{ color: 'var(--ink-faint)' }}>
          <GithubLogo size={16} /> Code
        </a>
      </div>
    </div>
  </motion.div>
));
ProjectCard.displayName = 'ProjectCard';

export default function Projects() {
  return (
    <section id="work" className="section-gap" style={{ background: 'var(--surface-0)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14"
        >
          <p className="text-xs font-mono tracking-widest mb-3" style={{ color: 'var(--accent)' }}>SELECTED WORK</p>
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight" style={{ color: 'var(--ink)' }}>Projects that shipped.</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
        </div>
      </div>
    </section>
  );
}
