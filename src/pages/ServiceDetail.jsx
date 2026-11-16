import { Link, useParams } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { CtaBand, PageHero, SectionHeading, usePageTitle } from '../components/Shared.jsx';
import { getService, services } from '../data/services.js';
import NotFound from './NotFound.jsx';
import officeImg from '../assets/photos/p2.jpg';
import analyticsImg from '../assets/photos/p6.jpg';

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = getService(slug);
  usePageTitle(service ? service.title : 'Page not found');
  if (!service) return <NotFound />;

  const others = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      <PageHero
        eyebrow="Services"
        title={service.title}
        text={service.summary}
        icon={service.icon}
        image={service.slug === 'power-bi' ? analyticsImg : officeImg}
      />

      <section className="section">
        <div className="container detail-layout">
          <div className="detail-main">
            <div className="prose">
              {service.intro.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>

            <SectionHeading eyebrow="Capabilities" title="What we deliver" />
            <div className="grid grid-2">
              {service.capabilities.map((c) => (
                <div key={c.title} className="card capability-card">
                  <h3>{c.title}</h3>
                  <p>{c.text}</p>
                </div>
              ))}
            </div>

            <div className="engagements">
              <SectionHeading eyebrow="Typical engagements" title="How clients use this service" />
              <ul className="check-list check-list--cols">
                {service.engagements.map((e) => (
                  <li key={e}><Check size={18} aria-hidden="true" /> {e}</li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="detail-side">
            <div className="side-card side-card--accent">
              <h3>Discuss your {service.name} requirement</h3>
              <p>Share a few details and we will respond with how we can help.</p>
              <Link to="/contact" className="btn btn-light btn-block">
                Contact us <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
            <div className="side-card">
              <h3>Other services</h3>
              <ul className="side-list">
                {others.map((s) => (
                  <li key={s.slug}>
                    <Link to={`/services/${s.slug}`}>
                      <img src={s.icon} alt="" width="24" height="24" />
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
