import './App.css';
import Home from './Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';

function App() {
  return (
    <Router>
      <div className="app">
        {/* Rutas*/}
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
