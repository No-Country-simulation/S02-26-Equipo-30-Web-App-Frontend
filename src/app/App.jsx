import './App.css';
import PublicView from '../shared/layouts/publicView/PublicView.jsx';
import Home from '../features/home/Home.jsx';
import Explore from '../features/explore/Explore.jsx';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <PublicView>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explorar" element={<Explore />} />
      </Routes>
    </PublicView>
  );
}

export default App;
