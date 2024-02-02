import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import SignupPage from './pages/Signup';
import Home from './pages/Home'
import LoginPage from './pages/Login';
import Logout from './components/Logout'
import CardList from './components/card-list'
import Items from './components/Items'

function App() {
  return (
    <>
     
     <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/registration" element={<SignupPage/>} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/cardlist" element={<CardList />} />
            <Route path="/items" element={<Items />} />
        </Routes>
      </BrowserRouter>
    
      </>
  );
}

export default App;