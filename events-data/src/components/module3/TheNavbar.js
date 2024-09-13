import './App.css';
import Header from './components/module1/Header';
import Main from './components/module1/Main';
import { Routes, Route, Link } from 'react-router-dom';
function App() {
  return (
    <div className='App'>
      <nav className='nav'>
        <Link to='/'>Header</Link>
        <Link to='/components/module1/Main'>Main</Link>
      </nav>
      <div>
        <Routes>
          <Route path='/' element={<Header/>}/>
          <Route path='/components/module1/Main' element={<Main/>}/>
        </Routes>
    </div>
    </div>
  );
}

export default App;
