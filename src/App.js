import logo from './logo.svg';
import './App.css';
import { SignUp } from './component/SignUp';
import { SignIn } from './component/SignIn';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <SignUp></SignUp>
      
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route  path='/login' element={<SignIn/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
