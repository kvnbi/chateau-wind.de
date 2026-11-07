import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import CookieBanner from './CookieBanner';
import { getProductBySlug } from '@/lib/products';

const PAGE_TITLES = {
  '/': 'Château Saxophone Deutschland',
  '/modelle': 'Produkte | Château Saxophone Deutschland',
  '/versailles': 'Versailles Serie | Château Saxophone Deutschland',
  '/chenonceau': 'Chenonceau Serie | Château Saxophone Deutschland',
  '/ausstattung': 'Ausstattung | Château Saxophone Deutschland',
  '/kontakt': 'Kontakt | Château Saxophone Deutschland',
  '/ueber-chateau': 'Über Château | Château Saxophone Deutschland',
  '/downloads': 'Downloads | Château Saxophone Deutschland',
  '/impressum': 'Impressum | Château Saxophone Deutschland',
  '/datenschutz': 'Datenschutz | Château Saxophone Deutschland',
  '/agb': 'AGB | Château Saxophone Deutschland',
};

function PageTitle() {
  const { pathname } = useLocation();

  useEffect(() => {
    const productMatch = pathname.match(/^\/modelle\/(.+)$/);
    if (productMatch) {
      const product = getProductBySlug(productMatch[1]);
      document.title = product
        ? `${product.fullName} | Château Saxophone Deutschland`
        : 'Modell | Château Saxophone Deutschland';
    } else {
      document.title = PAGE_TITLES[pathname] || 'Château Saxophone Deutschland';
    }
  }, [pathname]);

  return null;
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function SiteLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <PageTitle />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
}