import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { site } from '../data/site.js';

export function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} | ${site.name}` : `${site.name} | Microsoft 365 Design, Development & Support`;
  }, [title]);
}

export function SectionHeading({ eyebrow, title, text, center = false }) {
  return (
    <div className={`section-heading${center ? ' is-center' : ''}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

export function PageHero({ eyebrow, title, text, image, icon, children }) {
  return (
    <section className="page-hero">
      {image && <img className="page-hero-media" src={image} alt="" />}
      <div className="container page-hero-inner">
        {icon && (
          <span className="page-hero-icon"><img src={icon} alt="" width="44" height="44" /></span>
        )}
        {eyebrow && <span className="eyebrow eyebrow--light">{eyebrow}</span>}
        <h1>{title}</h1>
        {text && <p>{text}</p>}
        {children}
      </div>
    </section>
  );
}

export function ServiceCard({ service }) {
  return (
    <Link to={`/services/${service.slug}`} className="card service-card">
      <span className="service-icon"><img src={service.icon} alt="" width="40" height="40" /></span>
      <h3>{service.name}</h3>
      <p>{service.summary}</p>
      <span className="card-link">Learn more <ArrowRight size={16} aria-hidden="true" /></span>
    </Link>
  );
}

export function CtaBand({
  title = 'Ready to get more from Microsoft 365?',
  text = 'Tell us what you are trying to achieve. We will come back with a clear, practical way forward.',
}) {
  return (
    <section className="cta-band">
      <div className="container cta-inner">
        <div>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <Link to="/contact" className="btn btn-light">
          Talk to our team <ArrowRight size={18} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
