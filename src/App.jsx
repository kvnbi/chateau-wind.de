import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { initConsentEnforcer } from '@/lib/consentEnforcer';
import PageNotFound from './lib/PageNotFound';

import SiteLayout from './components/layout/SiteLayout';
import Home from './pages/Home';
import Modelle from './pages/Modelle';
import ProductDetail from './pages/ProductDetail';
import { useParams } from 'react-router-dom';
import Versailles from './pages/Versailles';
import Chenonceau from './pages/Chenonceau';
import Ausstattung from './pages/Ausstattung';
import Kontakt from './pages/Kontakt';
import UeberChateau from './pages/UeberChateau';
import Impressum from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';
import AGB from './pages/AGB';
import Downloads from './pages/Downloads';

const KeyedProductDetail = () => {
  const { slug } = useParams();
  return <ProductDetail key={slug} />;
};

function App() {
  useEffect(() => { initConsentEnforcer(); }, []);
  return (
    <Router>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/modelle" element={<Modelle />} />
          <Route path="/modelle/:slug" element={<KeyedProductDetail />} />
          <Route path="/versailles" element={<Versailles />} />
          <Route path="/chenonceau" element={<Chenonceau />} />
          <Route path="/ausstattung" element={<Ausstattung />} />
          <Route path="/beratung" element={<Navigate to="/kontakt" replace />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/ueber-chateau" element={<UeberChateau />} />
          <Route path="/haendler-musikschulen" element={<Navigate to="/kontakt" replace />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="/agb" element={<AGB />} />
          <Route path="/downloads" element={<Downloads />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
