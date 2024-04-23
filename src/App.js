import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './components/homepage/Homepage';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import Viewmenu from './components/viewmenu/Viewmenu';
import Orders from './components/orders/Orders';
import Dashboard from './components/dashboard/Dashboard'
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/menu/:id' element={<Viewmenu />} />
          <Route path='/orders' element={<Orders />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </div>
    
    </BrowserRouter>
  );
}

export default App;
