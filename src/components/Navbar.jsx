import { useState, useEffect, useCallback, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, List, X } from '@phosphor-icons/react';

const links = [
  { label: 'Work',     href: '#work' },
  { label: 'About',    href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Skills',   href: '#skills' },
];

const NavLink = memo(({ label, href, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="text-sm font-medium transition-colors duration-200"
    style={{ color: 'var(--ink-muted)' }}
    onMouseEnter={e => e.target.style.color = 'var(--ink)'}
    onMouseLeave={e => e.target.style.color = 'var(--ink-muted)'}
  >
    {label}
  </a>
));
NavLink.displayName = 'NavLink';

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = useCallback(() => setMenuOpen(false), []);
  const toggleMenu = useCallback(() => setMenuOpen(v => !v), []);

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-3 backdrop-blur-xl border-b' : 'py-5'}`}
        style={{
          background: scrolled ? 'var(--nav-bg)' : 'transparent',
          borderColor: scrolled ? 'var(--border)' : 'transparent',
        }}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <a href="#" className="font-mono text-sm font-medium tracking-widest uppercase" style={{ color: 'var(--accent)' }}>
            ZSH<span style={{ color: 'var(--ink-muted)' }}>_</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map(l => <NavLink key={l.label} {...l} />)}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200"
              style={{ background: 'var(--surface-2)', color: 'var(--ink-muted)' }}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            <a
              href="#work"
              className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium"
              style={{ background: 'var(--accent)', color: '#fff' }}
            >
              View Work
            </a>

            <button
              onClick={toggleMenu}
              className="md:hidden w-9 h-9 rounded-lg flex items-center justify-center"
              style={{ background: 'var(--surface-2)', color: 'var(--ink-muted)' }}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={16} /> : <List size={16} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-4 right-4 z-40 rounded-2xl p-5 md:hidden"
            style={{ background: 'var(--surface-2)', border: '1px solid var(--border)' }}
          >
            <div className="flex flex-col gap-4">
              {links.map(l => (
                <NavLink key={l.label} {...l} onClick={closeMenu} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
