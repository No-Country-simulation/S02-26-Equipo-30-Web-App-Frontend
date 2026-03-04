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

import TrustSafety from "@/features/trustSafety/TrustSafety";
import AboutUs from '@features/aboutUs/aboutUs.jsx';
import Favorites from '@features/favorites/Favorites.jsx';
import HowItWorks from '@features/how-it-works/HowItWorks.jsx';
import Contact from '@features/contact/Contact.jsx';
import Dashboard from '@features/dashboard/Dashboard.jsx';
import PurchaseProcess from '@features/purchase/PurchaseProcess.jsx';
import Chat from '@features/chat/Chat.jsx';
import HorseForm from '@features/horse-management/HorseForm.jsx';
import ProtectedRoute from '@/shared/common/ProtectedRoute';

import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from '../shared/context/AuthContext';
import ProtectedRoute from '@/shared/common/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <PublicView>
        <Routes>
          {/* Rutas Públicas */}
          <Route path="/" element={<Home />} />
          <Route path="/explorar" element={<Explore />} />
          <Route path="/detalle" element={<HorseDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Register />} />
          <Route path="/verificar" element={<Verification />} />
          <Route path="/como-funciona" element={<HowItWorks />} />
          <Route path="/sobre-nosotros" element={<AboutUs />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/confianza-seguridad" element={<TrustSafety />} />

          {/* Rutas Protegidas */}
          <Route path="/perfil" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
          <Route path="/perfil/editar" element={<ProtectedRoute><EditProfile /></ProtectedRoute>} />
          <Route path="/favoritos" element={<ProtectedRoute><Favorites /></ProtectedRoute>} />
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/compra" element={<ProtectedRoute><PurchaseProcess /></ProtectedRoute>} />
          <Route path="/chat" element={<ProtectedRoute><Chat /></ProtectedRoute>} />
          <Route path="/caballo/nuevo" element={<ProtectedRoute><HorseForm /></ProtectedRoute>} />
          <Route path="/caballo/editar/:id" element={<ProtectedRoute><HorseForm /></ProtectedRoute>} />
        </Routes>
      </PublicView>
    </AuthProvider>
  );
}

export default App;
