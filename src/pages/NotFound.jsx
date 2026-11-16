import { Link } from 'react-router-dom';
import { PageHero } from '../components/Shared.jsx';

export default function NotFound() {
  return (
    <PageHero eyebrow="404" title="Page not found" text="The page you are looking for does not exist or has moved.">
      <div className="hero-actions">
        <Link to="/" className="btn btn-primary">Back to home</Link>
        <Link to="/services" className="btn btn-outline-light">View services</Link>
      </div>
    </PageHero>
  );
}
