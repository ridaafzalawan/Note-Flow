import "./App.css";
import NavBar from './componants/Navbar';
import About from './componants/About';
import Home from './componants/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NoteState from "./context/notes/NoteState";
import Alert from "./componants/Alert";
function App() {
  return (
    <>
    <NoteState>
 <BrowserRouter>
    <NavBar/>
    <Alert messege = "this is amazing"/>
    <div className="container">
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/home" element={<Home/>} />
    <Route path="/about" element={<About/>} />
    </Routes>
    </div>  
  </BrowserRouter>  
  </NoteState>
  </>
  );
}

export default App;
