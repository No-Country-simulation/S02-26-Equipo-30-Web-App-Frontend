import './App.css'
import PublicView from '../shared/layouts/publicView/PublicView.jsx';
import Home from '../features/home/Home.jsx';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <PublicView>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </PublicView>
  )
}

export default App

