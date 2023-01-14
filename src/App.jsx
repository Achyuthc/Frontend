
import './App.css';
import Post from './Post';
import { supabase } from './client'
import MyEditor from './MyEditor';
import SignIn from './SignIn';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './pages/Login';
import CreatePost from './pages/CreatePost';
function App() {
  return (
    <div className="App">
      <CreatePost></CreatePost>
      
    </div>
  );
}

export default App;
