import './App.css'
import PublicView from '../shared/layouts/publicView/PublicView.jsx';
import Home from '../features/home/Home.jsx';
import Marketplace from "../features/marketplace/components/Marketplace.jsx";

function App() {
  return (
    <PublicView>
      <Home />
      <Marketplace />
    </PublicView>
  )
  // return (
  //   <PublicView>
  //     <Marketplace />
  //   </PublicView>
  // );
}

export default App

