import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import Selectabatch from './components/Selectabatch';
import Editcertificate from './components/Editcertificate';
import Login from './components/Login';
import Registercertificate from './components/Registercertificate';
import Certificateforbatch from './components/Certificateforbatch';
import UploadCertificate from './components/UploadCertificate';
import Welcome from './components/Welcome';
function App() {
  return (
    <div className="App">
      <Router>
      <div><Header/> </div>
        <div>
          <Routes>
            <Route exact path='/selectabatch' element={<Selectabatch/>} />
            <Route exact path='/editcertificate' element={<Editcertificate/>} />
            <Route exact path='/login' element={<Login/>}/>
            <Route exact path='/' element={<Login/>}/>
            <Route exact path='/register' element={<Registercertificate/>}/>
            <Route exact path='/certificateforbatch' element={<Certificateforbatch/>} />
            <Route exact path='/uploadcertificate' element={<UploadCertificate/>} />
            <Route exact path='/welcome' element={<Welcome/>} />            
          </Routes>
        </div>
        <div><Footer/> </div>

      </Router>
      
    </div>
  );
}

export default App;
