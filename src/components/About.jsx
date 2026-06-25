import { motion } from 'framer-motion';
import { MapPin, Briefcase, Sparkle } from '@phosphor-icons/react';

const traits = [
  { icon: MapPin, label: 'Based in Faisalabad, Pakistan' },
  { icon: Briefcase, label: 'Freelancing on Upwork' },
  { icon: Sparkle, label: 'Obsessed with motion & detail' },
];

export default function About() {
  return (
    <section id="about" className="section-gap" style={{ background: 'var(--surface-1)' }}>
      {/* Top divider */}
      <div className="glow-line mb-0" />

      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left — visual block */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Avatar placeholder */}
            <div
              className="relative w-full aspect-square max-w-sm mx-auto lg:mx-0 rounded-3xl overflow-hidden flex items-center justify-center"
              style={{
                background: 'linear-gradient(135deg, var(--surface-2) 0%, var(--surface-3) 100%)',
                border: '1px solid var(--border)',
              }}
            >
              {/* Decorative accent */}
              <div
                className="absolute inset-0"
                style={{
                  background: 'radial-gradient(ellipse at 30% 30%, rgba(124,106,247,0.15) 0%, transparent 60%)',
                }}
              />
              <span
                className="text-8xl font-semibold font-mono select-none z-10"
                style={{ color: 'rgba(124,106,247,0.2)' }}
              >
                Z.
              </span>

              {/* Corner accent */}
              <div
                className="absolute bottom-0 right-0 w-32 h-32 rounded-tl-3xl"
                style={{ background: 'rgba(124,106,247,0.06)', border: '1px solid rgba(124,106,247,0.1)' }}
              />
            </div>

            {/* Floating tag */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-4 -right-0 lg:-right-6 px-4 py-3 rounded-2xl"
              style={{
                background: 'var(--surface-0)',
                border: '1px solid var(--border)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
              }}
            >
              <p className="text-xs font-mono" style={{ color: 'var(--ink-faint)' }}>
                Currently crafting
              </p>
              <p className="text-sm font-semibold mt-0.5" style={{ color: 'var(--ink)' }}>
                Portfolio v3 ✦
              </p>
            </motion.div>
          </motion.div>

          {/* Right — copy */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-6"
          >
            <p className="text-xs font-mono tracking-widest" style={{ color: 'var(--accent)' }}>
              ABOUT ME
            </p>

            <h2 className="text-4xl sm:text-5xl font-semibold leading-tight tracking-tight" style={{ color: 'var(--ink)' }}>
              I build the front, you feel the difference.
            </h2>

            <div className="flex flex-col gap-4 text-base leading-relaxed" style={{ color: 'var(--ink-muted)' }}>
              <p>
                I'm a frontend developer with a designer's eye. I care deeply about the space between
                interactions — the easing curves, the micro-delays, the way a hover state communicates personality.
              </p>
              <p>
                My toolkit spans vanilla HTML/CSS/JS, React, Tailwind, and GSAP. I specialize in
                landing pages and marketing sites that not only look premium but convert for real businesses.
              </p>
              <p>
                When I'm not shipping pixels, I'm studying the best interfaces on the web and
                asking: what makes this feel <em style={{ color: 'var(--ink)', fontStyle: 'italic' }}>alive?</em>
              </p>
            </div>

            {/* Traits */}
            <div className="flex flex-col gap-3 mt-2">
              {traits.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3">
                  <span
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: 'var(--accent-muted)', color: 'var(--accent)' }}
                  >
                    <Icon size={15} weight="regular" />
                  </span>
                  <span className="text-sm font-medium" style={{ color: 'var(--ink-muted)' }}>
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="glow-line mt-0" />
    </section>
  );
}
