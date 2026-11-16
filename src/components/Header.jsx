import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ChevronDown, Globe, Mail, Menu, X } from 'lucide-react';
import logo from '../assets/logo-mark.png';
import { site } from '../data/site.js';
import { services } from '../data/services.js';

export function Brand({ light = false }) {
  return (
    <Link to="/" className={`brand${light ? ' brand--light' : ''}`} aria-label={`${site.name} home`}>
      <img src={logo} alt="" width="40" height="44" />
      <span className="brand-text">
        <strong>KiaSoft</strong>
        <span>Innovations</span>
      </span>
    </Link>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="site-header">
      <div className="topbar">
        <div className="container topbar-inner">
          <span><Globe size={14} aria-hidden="true" /> Serving clients worldwide</span>
          <a href={`mailto:${site.email}`}><Mail size={14} aria-hidden="true" /> {site.email}</a>
        </div>
      </div>
      <div className="navbar">
        <div className="container navbar-inner">
          <Brand />
          <button
            className="nav-toggle"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
          <nav className={`nav${open ? ' is-open' : ''}`} aria-label="Primary">
            <NavLink to="/" end>Home</NavLink>
            <div className="nav-item has-menu">
              <NavLink to="/services">
                Services <ChevronDown size={15} aria-hidden="true" />
              </NavLink>
              <div className="mega" key={pathname}>
                {services.map((s) => (
                  <Link key={s.slug} to={`/services/${s.slug}`} className="mega-link">
                    <img src={s.icon} alt="" width="28" height="28" />
                    <span>{s.name}</span>
                  </Link>
                ))}
              </div>
            </div>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact" className="nav-contact-link">Contact</NavLink>
            <Link to="/contact" className="btn btn-primary nav-cta">Talk to us</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
