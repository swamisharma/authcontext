import './App.css'
import { useContext } from 'react'
import { AuthContext } from './context/Auth'
import Login from './components/Login';
import Home from './components/Home';

function App() {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="App">
      {!currentUser ? <Login /> : <Home />}
    </div>
  )
}

export default App
