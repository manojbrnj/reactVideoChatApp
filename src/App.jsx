import {useState} from 'react';
import socket from '../socket/socketConnection';
import Home from './Home';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import MainVideoPage from './VideoComponent/MainVideoPage.jsx';
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='container-fluid'>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/join-home' Component={MainVideoPage} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
