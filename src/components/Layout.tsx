import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { site } from '../config/site'
import styles from './Layout.module.css'

const nav = [
  { to: '/', label: 'Home' },
  { to: '/work', label: 'Work' },
  { to: '/openings', label: 'Openings / Exhibitions' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
] as const

export default function Layout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <Link to="/" className={styles.logo} onClick={() => setMenuOpen(false)}>
          {site.title}
        </Link>
        <button
          type="button"
          className={`${styles.menuToggle} ${menuOpen ? styles.menuOpen : ''}`}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className={styles.hamburger} />
          <span className={styles.hamburger} />
          <span className={styles.hamburger} />
        </button>
        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
          {nav.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={
              location.pathname === to ||
              (to !== '/' && location.pathname.startsWith(to))
                ? styles.navActive
                : ''
            }
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <span>© {new Date().getFullYear()} {site.title}</span>
      </footer>
    </div>
  )
}
