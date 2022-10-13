import logo from './logo.svg';
import './App.css';
import { SignUp } from './component/SignUp';
import { SignIn } from './component/SignIn';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { Nav } from './component/Nav';
import { PrivateComponent } from './PrivateComponent';
// import { PrivateComponent } from "./components/PrivateComponent";
function App() {
  return (
    <div className="App">
     <Nav></Nav>
     
      
      <Routes>
        <Route path='/' element={<PrivateComponent><Home/></PrivateComponent>}></Route>
        <Route  path='/login' element={<SignIn/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
