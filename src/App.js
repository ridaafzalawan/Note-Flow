import "./App.css";
import NavBar from './componants/Navbar';
import About from './componants/About';
import Home from './componants/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NoteState from "./context/notes/NoteState";
import Signup from "./componants/Signup";
import Login from "./componants/Login";

function App() {
  return (
    <>
    <NoteState>
 <BrowserRouter>
    <NavBar/>
    <div className="container">
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/home" element={<Home/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/signup" element={<Signup/>} />
    <Route path="/login" element={<Login/>} />
    </Routes>
    </div>  
  </BrowserRouter>  
  </NoteState>
  </>
  );
}

export default App;
