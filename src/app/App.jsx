import './App.css';
import PublicView from '../shared/layouts/publicView/PublicView.jsx';
import Home from '../features/home/Home.jsx';
import Explore from '@features/explore/Explore.jsx';
import HorseDetails from '@features/horseDetails/HorseDetails.jsx';
import Premium from '@features/premium/Premium.jsx';
import TrustSafety from "@/features/trustSafety/TrustSafety";
import AboutUs from "@features/aboutUs/AboutUs.jsx";
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <PublicView>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explorar" element={<Explore />} />
        <Route path="/detalle" element={<HorseDetails />} />
        <Route path="/premium" element={<Premium />} />
        <Route path="/confianza-seguridad" element={<TrustSafety />} />
        <Route path="/sobre-nosotros" element={<AboutUs />} />

      </Routes>
    </PublicView>
  );
}

export default App;
