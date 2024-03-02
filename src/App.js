import './App.css';
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import ForgotPassword from './pages/ForgotPassword';
import Profile from './pages/Profile';
import Offers from './pages/Offers';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/home' element={<Home />}/>
        <Route path='/' element={<Home />}/>
        <Route path='/sign-up' element={<SignUp />}/>
        <Route path='/sign-in' element={<SignIn />}/>
        <Route path='/forgot-password' element={<ForgotPassword />}/>
        <Route path='/profile' element={<Profile />}/>
        <Route path='/offers' element={<Offers />}/>

      </Routes>
    </Router>
  );
}

export default App;
