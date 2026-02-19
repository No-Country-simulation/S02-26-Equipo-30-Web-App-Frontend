import "./App.css";
import PublicView from "../shared/layouts/publicView/PublicView.jsx";
import Home from "../features/home/Home.jsx";
import Explore from "@features/explore/Explore.jsx";
import HorseDetails from "@features/horseDetails/HorseDetails.jsx";
import Premium from "@features/premium/Premium.jsx";

import Marketplace from "../features/marketplace/components/Marketplace.jsx";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <PublicView>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explorar" element={<Explore />} />
        <Route path="/detalle" element={<HorseDetails />} />
        <Route path="/premium" element={<Premium />} />

        {/* Tu pantalla para probar/usar la HorseCard */}
        <Route path="/marketplace" element={<Marketplace />} />
      </Routes>
    </PublicView>
  );
}

export default App;
