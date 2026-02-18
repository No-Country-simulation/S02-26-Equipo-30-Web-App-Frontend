import './App.css'
import PublicView from '../shared/layouts/publicView/PublicView.jsx';
import Home from '../features/home/Home.jsx';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <PublicView>
        <Route path="/" element={<Home />} />
      </PublicView>
    </Routes>
  )
}

export default App

