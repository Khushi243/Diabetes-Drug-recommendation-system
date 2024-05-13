//import logo from './Components/images/image3.jpg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, ReactDOM } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/pages/Home';
import AboutUs from './Components/pages/AboutUs';
import SignUp from './Components/pages/SignUp';
import Sign from './Components/Sign';
import Dashboard from './Components/Dashboard';
import Report from './Components/Report';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact Component={Home} />
        <Route path='/home' exact Component={Home} />
        <Route path='/about-us' exact Component={AboutUs}/>
        <Route path='/login' exact Component={SignUp}/>
        <Route path='/Sign-Up' exact Component={Sign}/>
        <Route path='/dash' exact Component={Dashboard}/>
        <Route path='/report' exact Component={Report}/>  
      </Routes>
    </Router>
    </>
  );
}
export default App;
