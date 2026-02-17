import './App.css'
import PublicView from '../shared/layouts/publicView/PublicView.jsx';

function App() {
  return (
    <PublicView>
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>Contenido Principal del Marketplace</h1>
        <p>Aquí irá el contenido dinámico de tus features.</p>
      </div>
    </PublicView>
  )
}

export default App

