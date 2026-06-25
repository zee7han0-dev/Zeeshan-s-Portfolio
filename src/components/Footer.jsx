import { motion } from 'framer-motion';
import { ArrowUpRight, GithubLogo, LinkedinLogo, EnvelopeSimple } from '@phosphor-icons/react';

export default function Footer() {
  return (
    <footer style={{ background: 'var(--surface-0)', borderTop: '1px solid var(--border)' }}>
      {/* CTA Block */}
      <div className="max-w-6xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center flex flex-col items-center gap-6"
        >
          <p className="text-xs font-mono tracking-widest" style={{ color: 'var(--accent)' }}>
            GET IN TOUCH
          </p>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight max-w-xl leading-tight"
            style={{ color: 'var(--ink)' }}
          >
            Ready to build something great?
          </h2>
          <p className="text-base max-w-sm text-center" style={{ color: 'var(--ink-muted)' }}>
            I'm open to freelance projects, collaborations, and full-time opportunities.
          </p>

          <a
            href="mailto:hello@zeeshan.dev"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold transition-all duration-200 hover:scale-[1.03] active:scale-[0.97]"
            style={{
              background: 'var(--accent)',
              color: '#fff',
              boxShadow: '0 0 40px rgba(124,106,247,0.3)',
            }}
          >
            <EnvelopeSimple size={16} weight="bold" />
            Say hello
            <ArrowUpRight size={14} weight="bold" />
          </a>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <div
        className="border-t"
        style={{ borderColor: 'var(--border)' }}
      >
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-mono text-xs" style={{ color: 'var(--ink-faint)' }}>
            &copy; {new Date().getFullYear()} Zeeshan. Crafted with care.
          </span>

          <div className="flex items-center gap-4">
            {[
              { Icon: GithubLogo, href: '#', label: 'GitHub' },
              { Icon: LinkedinLogo, href: '#', label: 'LinkedIn' },
              { Icon: EnvelopeSimple, href: 'mailto:hello@zeeshan.dev', label: 'Email' },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200"
                style={{ color: 'var(--ink-faint)', background: 'var(--surface-2)' }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = 'var(--accent)';
                  e.currentTarget.style.background = 'var(--accent-muted)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = 'var(--ink-faint)';
                  e.currentTarget.style.background = 'var(--surface-2)';
                }}
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
