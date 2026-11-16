import { useState } from 'react';
import { Clock, Globe, Mail, Send } from 'lucide-react';
import { PageHero, usePageTitle } from '../components/Shared.jsx';
import { services } from '../data/services.js';
import { site } from '../data/site.js';
import heroImg from '../assets/photos/p12.jpg';

const empty = { name: '', email: '', company: '', service: '', message: '' };

export default function Contact() {
  usePageTitle('Contact');
  const [form, setForm] = useState(empty);
  const [status, setStatus] = useState('idle'); // idle | sending | sent | mailto | error

  const set = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  async function onSubmit(e) {
    e.preventDefault();
    if (site.formEndpoint) {
      setStatus('sending');
      try {
        const res = await fetch(site.formEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(form),
        });
        if (!res.ok) throw new Error('Request failed');
        setForm(empty);
        setStatus('sent');
      } catch {
        setStatus('error');
      }
      return;
    }
    // No backend configured: hand the message to the visitor's email client.
    const subject = `Website enquiry${form.service ? ` - ${form.service}` : ''}`;
    const lines = [`Name: ${form.name}`, `Email: ${form.email}`];
    if (form.company) lines.push(`Company: ${form.company}`);
    if (form.service) lines.push(`Service: ${form.service}`);
    lines.push('', form.message);
    const body = lines.join('\n');
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus('mailto');
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about your Microsoft 365 goals"
        text="Tell us a little about what you need. We will reply with next steps."
        image={heroImg}
      />

      <section className="section">
        <div className="container contact-layout">
          <div className="contact-info">
            <h2>Get in touch</h2>
            <p>
              Whether you have a defined project, an idea to explore or a solution that needs
              support, we would be glad to hear from you.
            </p>
            <ul className="contact-points">
              <li>
                <span className="pillar-icon"><Mail size={20} aria-hidden="true" /></span>
                <div>
                  <strong>Email</strong>
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </div>
              </li>
              <li>
                <span className="pillar-icon"><Globe size={20} aria-hidden="true" /></span>
                <div>
                  <strong>Where we work</strong>
                  <span>Remote delivery for clients worldwide</span>
                </div>
              </li>
              <li>
                <span className="pillar-icon"><Clock size={20} aria-hidden="true" /></span>
                <div>
                  <strong>What happens next</strong>
                  <span>We review your message and arrange a short call to understand your needs.</span>
                </div>
              </li>
            </ul>
          </div>

          <form className="card contact-form" onSubmit={onSubmit}>
            <div className="form-row">
              <label>
                Full name *
                <input name="name" value={form.name} onChange={set} required autoComplete="name" />
              </label>
              <label>
                Work email *
                <input type="email" name="email" value={form.email} onChange={set} required autoComplete="email" />
              </label>
            </div>
            <div className="form-row">
              <label>
                Company
                <input name="company" value={form.company} onChange={set} autoComplete="organization" />
              </label>
              <label>
                Service of interest
                <select name="service" value={form.service} onChange={set}>
                  <option value="">Select a service</option>
                  {services.map((s) => (
                    <option key={s.slug} value={s.name}>{s.name}</option>
                  ))}
                  <option value="Other">Other / not sure</option>
                </select>
              </label>
            </div>
            <label>
              How can we help? *
              <textarea name="message" rows="6" value={form.message} onChange={set} required />
            </label>
            <button className="btn btn-primary" type="submit" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending…' : 'Send message'} <Send size={16} aria-hidden="true" />
            </button>
            <p className="form-note" role="status">
              {status === 'sent' && 'Thank you. Your message has been sent and we will be in touch shortly.'}
              {status === 'error' && `Sorry, something went wrong. Please email us directly at ${site.email}.`}
              {status === 'mailto' && `Your email app should now be open with the message ready to send. If not, write to ${site.email}.`}
              {(status === 'idle' || status === 'sending') && !site.formEndpoint && 'Submitting opens your email app with this message ready to send.'}
            </p>
          </form>
        </div>
      </section>
    </>
  );
}
