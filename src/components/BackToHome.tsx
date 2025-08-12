import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const BackToHome = () => {
  const location = useLocation();
  if (location.pathname === '/') return null;

  return (
    <div className="fixed top-24 left-4 sm:left-6 lg:left-8 z-40">
      <Link
        to="/"
        className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-background/70 backdrop-blur-md border border-border text-muted-foreground hover:text-primary transition-colors shadow"
        aria-label="Back to Home"
      >
        <ArrowLeft className="w-4 h-4" />
        <span className="text-sm font-medium">Back to Home</span>
      </Link>
    </div>
  );
};

export default BackToHome;
