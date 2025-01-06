import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './Pages/Home';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import TradePage from './Pages/Trade';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element={<HomePage/>}></Route>
            <Route path="/profile" element={<Login/>}></Route>
            <Route path="/signup" element={<SignUp/>}></Route>
            <Route path="/trade" element={<TradePage/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
