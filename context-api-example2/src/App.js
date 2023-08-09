import './App.css';
import Create from './components/Create';
import Home from './components/Home';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Update from './components/Update';
import Read from './components/Read';
import Login from './components/Login';
import Kullanıcılar from './components/Kullanıcılar';
import KullanıcıEkle from './components/KullanıcıEkle';
import KullanıcıGüncelle from './components/KullanıcıGüncelle';
import KullanıcıGörüntüle from './components/KullanıcıGörüntüle';
import Logout from './components/Logout';

function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Create" element={<Create navigate/>}></Route>
        <Route path="/Update/:id" element={<Update />}></Route>
        <Route path="/Read/:id" element={<Read />}></Route>
        <Route path="/Kullanıcılar" element={<Kullanıcılar />}></Route>
        <Route path="/KullanıcıEkle" element={<KullanıcıEkle />}></Route>
        <Route path="/KullanıcıGüncelle/:id" element={<KullanıcıGüncelle />}></Route>
        <Route path="/KullanıcıGörüntüle/:id" element={<KullanıcıGörüntüle />}></Route>
        <Route path="/Logout" element={<Logout />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
