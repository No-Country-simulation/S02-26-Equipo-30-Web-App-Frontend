import './App.css';
import PublicView from '../shared/layouts/publicView/PublicView.jsx';
import Home from '../features/home/Home.jsx';
import Explore from '@features/explore/Explore.jsx';
import HorseDetails from '@features/horseDetails/HorseDetails.jsx';
import Login from '@features/auth/Login.jsx';
import Register from '@features/auth/Register.jsx';
import Verification from '@features/auth/Verification.jsx';
import Profile from '@features/profile/Profile.jsx';
import EditProfile from '@features/profile-edit/EditProfile.jsx';
import Favorites from '@/features/favorites/Favorites.jsx';
import Premium from '@features/premium/Premium.jsx';
import TrustSafety from "@/features/trustSafety/TrustSafety";

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <PublicView>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explorar" element={<Explore />} />
        <Route path="/detalle" element={<HorseDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Register />} />
        <Route path="/verificar" element={<Verification />} />
        <Route path="/perfil" element={<Profile />} />
        <Route path="/perfil/editar" element={<EditProfile />} />
        <Route path="/favoritos" element={<Favorites />} />
        <Route path="/premium" element={<Premium />} />
        <Route path="/confianza-seguridad" element={<TrustSafety />} />

      </Routes>
    </PublicView>
  );
}

export default App;
