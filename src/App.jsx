
import './App.css';
import Post from './Post';
import { supabase } from './client'
import MyEditor from './MyEditor';
import SignIn from './SignIn';
function App() {
  return (
    <div className="App">
      <SignIn/>
      <h1>hi man</h1>
      <MyEditor/>
    </div>
  );
}

export default App;
