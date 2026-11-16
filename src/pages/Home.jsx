import { Link } from 'react-router-dom';
import { ArrowRight, Check, Code2, LifeBuoy, PenTool } from 'lucide-react';
import { CtaBand, SectionHeading, ServiceCard, usePageTitle } from '../components/Shared.jsx';
import { services, technologies } from '../data/services.js';
import heroImg from '../assets/photos/p3.jpg';
import teamImg from '../assets/photos/p7.jpg';
import globeImg from '../assets/photos/p11.jpg';

const pillars = [
  {
    icon: PenTool,
    title: 'Design',
    text: 'Solution architecture, information architecture and user experience design that set a project up to succeed before a line of code is written.',
  },
  {
    icon: Code2,
    title: 'Development',
    text: 'Low-code and full-code delivery across SharePoint, Power Platform, Azure and .NET, built to Microsoft best practice and properly tested.',
  },
  {
    icon: LifeBuoy,
    title: 'Support',
    text: 'Ongoing support, administration and enhancement so your Microsoft 365 solutions keep working as your organization changes.',
  },
];

const steps = [
  { title: 'Discover', text: 'We listen first: your goals, your users, your current environment and constraints.' },
  { title: 'Design', text: 'We propose an architecture, scope and plan, with clear estimates and no surprises.' },
  { title: 'Build', text: 'We deliver in short iterations with regular demos, so you see progress and steer early.' },
  { title: 'Support', text: 'We hand over with documentation and training, and stay on for support if you need us.' },
];

export default function Home() {
  usePageTitle('');
  return (
    <>
      <section className="hero">
        <img className="hero-media" src={heroImg} alt="" />
        <div className="container hero-inner">
          <span className="eyebrow eyebrow--light">Microsoft 365 services</span>
          <h1>Microsoft 365 solutions, designed, built and supported with care.</h1>
          <p>
            KiaSoft Innovations helps organizations around the world get more from SharePoint,
            Power Platform, Azure and .NET, from the first workshop to long-term support.
          </p>
          <div className="hero-actions">
            <Link to="/contact" className="btn btn-primary">
              Talk to our team <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link to="/services" className="btn btn-outline-light">Explore services</Link>
          </div>
        </div>
      </section>

      <section className="tech-strip" aria-label="Technologies we work with">
        <div className="container">
          <p className="tech-title">Technologies we work with</p>
          <ul className="tech-list">
            {technologies.map((t) => (
              <li key={t.name}>
                <img src={t.icon} alt="" width="36" height="36" />
                <span>{t.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            center
            eyebrow="What we do"
            title="Specialist services across the Microsoft cloud"
            text="One team covering the platforms your business runs on, so solutions work together instead of in silos."
          />
          <div className="grid grid-3">
            {services.slice(0, 6).map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
          <p className="center-link">
            <Link to="/services" className="text-link">
              View all services <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </p>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <SectionHeading
            center
            eyebrow="How we help"
            title="Design. Development. Support."
            text="Engage us for a single phase or the whole lifecycle."
          />
          <div className="grid grid-3">
            {pillars.map(({ icon: Icon, title, text }) => (
              <div key={title} className="card pillar-card">
                <span className="pillar-icon"><Icon size={24} aria-hidden="true" /></span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div className="split-media">
            <img src={teamImg} alt="A project team working together around a table" loading="lazy" />
          </div>
          <div>
            <SectionHeading
              eyebrow="Why KiaSoft"
              title="A focused Microsoft 365 team, not a generalist agency"
              text="We work on the Microsoft platform every day. That focus means sound advice, fewer wrong turns and solutions that fit how Microsoft 365 is meant to be used."
            />
            <ul className="check-list">
              <li><Check size={18} aria-hidden="true" /> Deep specialization in SharePoint, Power Platform, Azure and .NET</li>
              <li><Check size={18} aria-hidden="true" /> Out-of-the-box first, custom code only where it adds value</li>
              <li><Check size={18} aria-hidden="true" /> Clear communication, written scope and transparent estimates</li>
              <li><Check size={18} aria-hidden="true" /> Security, governance and maintainability built in from day one</li>
              <li><Check size={18} aria-hidden="true" /> Documentation and handover so you are never locked in</li>
            </ul>
            <Link to="/about" className="btn btn-outline">More about us</Link>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <SectionHeading
            center
            eyebrow="Our approach"
            title="A straightforward way of working"
            text="A simple, proven delivery process that keeps you informed and in control."
          />
          <ol className="steps">
            {steps.map((s, i) => (
              <li key={s.title}>
                <span className="step-num">{String(i + 1).padStart(2, '0')}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="global-band">
        <img className="global-media" src={globeImg} alt="" loading="lazy" />
        <div className="container global-inner">
          <span className="eyebrow eyebrow--light">Global delivery</span>
          <h2>Working with clients across the world</h2>
          <p>
            Microsoft 365 is a global platform, and so is our delivery. We collaborate remotely
            through Teams, plan for working-hour overlap with your team, and keep every
            engagement documented and visible wherever you are.
          </p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
