
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './pages/Login';
import Success from './pages/Success';
function SignIn() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/success" element={<Success />} />
        
      </Routes>
    </Router>
    
          
  );
}

export default SignIn;
