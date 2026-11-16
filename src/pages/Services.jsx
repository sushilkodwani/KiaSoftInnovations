import { Briefcase, Headset, Users } from 'lucide-react';
import { CtaBand, PageHero, SectionHeading, ServiceCard, usePageTitle } from '../components/Shared.jsx';
import { services } from '../data/services.js';
import heroImg from '../assets/photos/p9.jpg';

const models = [
  {
    icon: Briefcase,
    title: 'Project delivery',
    text: 'A defined scope, timeline and budget. Best when you know what you need and want it delivered end to end.',
  },
  {
    icon: Users,
    title: 'Dedicated team',
    text: 'Our specialists working as an extension of your team, on your priorities, for as long as you need the capacity.',
  },
  {
    icon: Headset,
    title: 'Support retainer',
    text: 'A monthly allocation for support, administration and small enhancements, with agreed response times.',
  },
];

export default function Services() {
  usePageTitle('Services');
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Microsoft 365 services, end to end"
        text="Consulting, design, development and support across SharePoint, Power Platform, Azure and .NET."
        image={heroImg}
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Our expertise"
            title="What we deliver"
            text="Choose a single service or combine them. Most real-world solutions span several: a Power App on SharePoint data, automated with Power Automate, reported in Power BI and extended with Azure."
          />
          <div className="grid grid-4">
            {services.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <SectionHeading
            center
            eyebrow="Engagement models"
            title="Work with us in the way that suits you"
          />
          <div className="grid grid-3">
            {models.map(({ icon: Icon, title, text }) => (
              <div key={title} className="card pillar-card">
                <span className="pillar-icon"><Icon size={24} aria-hidden="true" /></span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Not sure which service you need?"
        text="Describe the problem and we will recommend the right mix of Microsoft 365 tools to solve it."
      />
    </>
  );
}
