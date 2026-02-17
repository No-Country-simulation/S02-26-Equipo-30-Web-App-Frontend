import './App.css'
import PublicView from '../shared/layouts/publicView/PublicView.jsx';
import Home from '../features/home/Home.jsx';

function App() {
  return (
    <PublicView>
      <Home />
    </PublicView>
  )
}

export default App

