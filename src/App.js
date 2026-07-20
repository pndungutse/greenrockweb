import { useEffect } from 'react';
import Home from './pages/Home';
import { Routes, Route, BrowserRouter, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Contacts from './pages/Contacts';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import FAQ from './pages/FAQ';
import { setupStrnixPageEffects } from './utils/strnixScripts';

/** Re-init Owl / Fancybox / WOW / counters on every SPA route change. */
function StrnixRouteEffects() {
  const location = useLocation();

  useEffect(() => {
    let cancelled = false;

    setupStrnixPageEffects().catch((err) => {
      if (!cancelled) {
        // eslint-disable-next-line no-console
        console.error(err);
      }
    });

    return () => {
      cancelled = true;
    };
  }, [location.pathname]);

  return null;
}

function App() {
  return (
    <div>
      <div className="page-wrapper">
        {/* Single app-level preloader (pages must not remount their own). */}
        <div className="preloader"><div className="icon"></div></div>
        <BrowserRouter>
        <StrnixRouteEffects />
        <Header />
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Contacts />} />
          <Route path="/news" element={<Contacts />} />
        </Routes>

        <Footer />
        </BrowserRouter>
      </div>
    </div>
  )

}

export default App;
