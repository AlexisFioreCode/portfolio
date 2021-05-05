import logo from './logo.svg';
import './App.css';
import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer'
import Projets from './components/projets/Projets'

function App() {
  return (
    <div>
      <Header />
      <Nav />
      <Projets/>
      <Footer />
    
    </div>
  );
}

export default App;
