import { useState, useEffect } from 'react';
import './App.css';
import PublicView from '../shared/layouts/publicView/PublicView.jsx';
import Home from '../features/home/Home.jsx';
import Explore from '../features/explore/Explore.jsx';

function getPage() {
  return window.location.hash === '#/explorar' ? 'explore' : 'home';
}

function App() {
  const [page, setPage] = useState(getPage);

  useEffect(() => {
    const onHash = () => setPage(getPage());
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  return (
    <PublicView onNavigate={setPage}>
      {page === 'explore' ? <Explore /> : <Home />}
    </PublicView>
  );
}

export default App;

