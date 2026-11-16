import { Eye, Handshake, ShieldCheck, Target } from 'lucide-react';
import { CtaBand, PageHero, SectionHeading, usePageTitle } from '../components/Shared.jsx';
import { technologies } from '../data/services.js';
import heroImg from '../assets/photos/p1.jpg';
import aboutImg from '../assets/photos/p8.jpg';

const values = [
  {
    icon: Target,
    title: 'Focus',
    text: 'We do one thing: Microsoft 365 and the technologies around it. Depth over breadth.',
  },
  {
    icon: Eye,
    title: 'Clarity',
    text: 'Plain language, written scope, honest estimates and regular updates. You always know where things stand.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality',
    text: 'Secure, governed, well-documented solutions that your team can maintain and extend.',
  },
  {
    icon: Handshake,
    title: 'Partnership',
    text: 'We aim for long-term relationships, measured by the value our clients get from what we build.',
  },
];

export default function About() {
  usePageTitle('About us');
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="A Microsoft 365 services company built on focus"
        text="KiaSoft Innovations designs, develops and supports business solutions on the Microsoft cloud for clients around the world."
        image={heroImg}
      />

      <section className="section">
        <div className="container split">
          <div>
            <SectionHeading eyebrow="Who we are" title="Specialists in the Microsoft cloud" />
            <div className="prose">
              <p>
                KiaSoft Innovations is a technology services company dedicated to Microsoft 365.
                We help organizations plan, build and run solutions on SharePoint, Power Apps,
                Power Automate, Power BI, Azure and .NET.
              </p>
              <p>
                Most organizations already own powerful tools through their Microsoft 365
                licensing, yet use only a fraction of what is available. Our role is to close
                that gap: understanding the business need, choosing the right mix of services,
                and delivering a solution that is secure, maintainable and adopted by the people
                it is built for.
              </p>
              <p>
                We work with clients across regions and time zones, delivering remotely with
                the structure, documentation and communication that distributed projects need.
              </p>
            </div>
          </div>
          <div className="split-media">
            <img src={aboutImg} alt="A presenter sharing a plan with colleagues in an open office" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <div className="mission-grid">
            <div className="card mission-card">
              <span className="eyebrow">Our mission</span>
              <p>
                To help organizations work better by turning the Microsoft 365 platform they
                already have into solutions that save time, reduce risk and support growth.
              </p>
            </div>
            <div className="card mission-card">
              <span className="eyebrow">Our promise</span>
              <p>
                Practical advice, dependable delivery and support you can reach. We recommend
                what we would choose ourselves, even when that means a smaller project.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading center eyebrow="Our values" title="What guides our work" />
          <div className="grid grid-4">
            {values.map(({ icon: Icon, title, text }) => (
              <div key={title} className="card pillar-card">
                <span className="pillar-icon"><Icon size={24} aria-hidden="true" /></span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="tech-strip tech-strip--bordered" aria-label="Technologies we work with">
        <div className="container">
          <p className="tech-title">Our technology focus</p>
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

      <CtaBand title="Let's talk about your project" />
    </>
  );
}
