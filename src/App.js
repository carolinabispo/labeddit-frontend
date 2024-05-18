import logo from './logo.svg';
import './App.css';
// router
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Register from './pages/register/Register';
import Login from './pages/login/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {<Login/>}
        <Routes>
          {/* <Route path='/' element={<Home />}/> */}
      
          <Route  path='/register' element={<Register />}/>
        </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
