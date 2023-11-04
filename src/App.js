import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';
import Notfound from './Notfound';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<SignUp />}/>
      <Route path='*' element={<Notfound />} />
     </Routes>
    </div>
  );
}

export default App;
