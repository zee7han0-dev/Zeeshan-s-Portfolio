import { Suspense } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight } from '@phosphor-icons/react';
import DotField from './DotField';
import HeroCard from './HeroCard';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
});

export default function Hero({ theme }) {
  const isDark = theme === 'dark';

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex flex-col justify-center overflow-hidden"
      style={{ background: 'var(--surface-0)' }}
    >
      {/* DotField bg */}
      <div className="absolute inset-0 z-0">
        <DotField
          dotRadius={1.8}
          dotSpacing={9}
          bulgeStrength={30}
          glowRadius={120}
          sparkle={false}
          waveAmplitude={0}
          cursorRadius={420}
          gradientFrom={isDark ? 'rgba(124, 106, 247, 0.60)' : 'rgba(91, 72, 245, 0.45)'}
          gradientTo={isDark ? 'rgba(160, 140, 255, 0.38)' : 'rgba(120, 100, 255, 0.28)'}
          glowColor={isDark ? '#0a0a0f' : '#f8f8fc'}
        />
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none"
        style={{ height: '280px', background: 'linear-gradient(to bottom, transparent, var(--surface-0))' }}
      />

      {/* Radial glow */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: isDark
            ? 'radial-gradient(ellipse 70% 55% at 30% 50%, rgba(124,106,247,0.10) 0%, transparent 70%)'
            : 'radial-gradient(ellipse 70% 55% at 30% 50%, rgba(91,72,245,0.07) 0%, transparent 70%)',
        }}
      />

      {/* Two-column layout */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4 items-center min-h-[75vh]">

          {/* LEFT */}
          <div className="flex flex-col justify-center">
            <motion.div {...fadeUp(0.1)} className="mb-8">
              <span
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono font-medium tracking-wider"
                style={{ background: 'var(--accent-muted)', color: 'var(--accent)', border: '1px solid rgba(124,106,247,0.22)' }}
              >
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: 'var(--accent)' }} />
                Available for freelance work
              </span>
            </motion.div>

            <motion.h1
              {...fadeUp(0.2)}
              className="font-semibold leading-[1.1] tracking-tight mb-6"
              style={{ color: 'var(--ink)', fontSize: 'clamp(2.2rem, 4.5vw, 4rem)' }}
            >
              Building digital{' '}
              <br className="hidden sm:block" />
              experiences that{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, var(--accent) 0%, rgba(180,160,255,0.9) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  display: 'inline',
                  paddingBottom: '0.05em',
                }}
              >
                feel seamless.
              </span>
            </motion.h1>

            <motion.p
              {...fadeUp(0.35)}
              className="text-lg leading-relaxed mb-10 max-w-lg"
              style={{ color: 'var(--ink-muted)' }}
            >
              I'm <span style={{ color: 'var(--ink)', fontWeight: 500 }}>Zeeshan</span> — a frontend developer who builds fast, polished, and interactive web experiences. Based in Faisalabad, available worldwide.
            </motion.p>

            <motion.div {...fadeUp(0.45)} className="flex flex-wrap items-center gap-4 mb-14">
              <a
                href="#work"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 hover:scale-[1.03] active:scale-[0.97]"
                style={{ background: 'var(--accent)', color: '#fff', boxShadow: '0 0 32px rgba(124,106,247,0.38)' }}
              >
                View My Work <ArrowUpRight size={16} weight="bold" />
              </a>
              <a
                href="#about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium transition-all duration-200"
                style={{ background: 'var(--surface-2)', color: 'var(--ink-muted)', border: '1px solid var(--border)' }}
              >
                About me
              </a>
            </motion.div>

            <motion.div {...fadeUp(0.55)} className="flex flex-wrap items-center gap-8">
              {[
                { value: '2+', label: 'Years of craft' },
                { value: '30+', label: 'Projects shipped' },
                { value: '100%', label: 'Client satisfaction' },
              ].map((s) => (
                <div key={s.label} className="flex flex-col gap-1">
                  <span className="text-2xl font-semibold font-mono" style={{ color: 'var(--ink)' }}>{s.value}</span>
                  <span className="text-xs font-medium" style={{ color: 'var(--ink-faint)' }}>{s.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — animated profile card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:flex items-center justify-end pr-4"
            style={{ height: '600px' }}
          >
            <HeroCard />
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          style={{ color: 'var(--ink-faint)' }}
        >
          <ArrowDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}
