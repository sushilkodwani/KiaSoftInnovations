import { Link } from 'react-router-dom';
import { Linkedin, Mail } from 'lucide-react';
import { Brand } from './Header.jsx';
import { site } from '../data/site.js';
import { services } from '../data/services.js';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-about">
          <Brand light />
          <p>
            Microsoft 365 design, development and support services for organizations
            around the world.
          </p>
          <a className="footer-mail" href={`mailto:${site.email}`}>
            <Mail size={16} aria-hidden="true" /> {site.email}
          </a>
          {site.linkedin && (
            <a className="footer-mail" href={site.linkedin} target="_blank" rel="noreferrer">
              <Linkedin size={16} aria-hidden="true" /> LinkedIn
            </a>
          )}
        </div>
        <div>
          <h4>Services</h4>
          <ul>
            {services.map((s) => (
              <li key={s.slug}><Link to={`/services/${s.slug}`}>{s.name}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Company</h4>
          <ul>
            <li><Link to="/about">About us</Link></li>
            <li><Link to="/services">All services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4>Start a conversation</h4>
          <p>Tell us about your project and we will get back to you with next steps.</p>
          <Link to="/contact" className="btn btn-light btn-sm">Contact us</Link>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} {site.name}. All rights reserved.</span>
        <span className="footer-legal">
          Microsoft, Microsoft 365, SharePoint, Power Apps, Power Automate, Power BI, Teams, Azure
          and .NET are trademarks of the Microsoft group of companies. {site.name} is an independent
          service provider.
        </span>
      </div>
    </footer>
  );
}
