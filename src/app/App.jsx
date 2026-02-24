import './App.css';
import PublicView from '../shared/layouts/publicView/PublicView.jsx';
import Home from '../features/home/Home.jsx';
import Explore from '@features/explore/Explore.jsx';
import HorseDetails from '@features/horseDetails/HorseDetails.jsx';
import Premium from '@features/premium/Premium.jsx';
import HowItWorks from '@features/how-it-works/HowItWorks.jsx';
import TrustAndSecurity from '@features/trust-and-security/TrustAndSecurity.jsx';
import Pricing from '@features/pricing/Pricing.jsx';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <PublicView>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explorar" element={<Explore />} />
        <Route path="/detalle" element={<HorseDetails />} />
        <Route path="/premium" element={<Premium />} />
        <Route path="/como-funciona" element={<HowItWorks />} />
        <Route path="/confianza-y-seguridad" element={<TrustAndSecurity />} />
        <Route path="/planes" element={<Pricing />} />
      </Routes>
    </PublicView>
  );
}

export default App;
