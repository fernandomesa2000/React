import logo from './logo.svg';
import Nav from './components/Nav';
import Intro1 from './components/Intro1';
import Intro2 from './components/Intro2';
import Intro3 from './components/Intro3';
import Promo from './components/Promo';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Nav />
      </header>
      <Intro1 />
      <Intro2 />
      <Intro3 />
      <Promo />
      <Footer />
    </div>
  );
}

export default App;
