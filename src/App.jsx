import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";


import './App.css'

function App() {



  return (
    <Router>
      {/* <Navbar /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="home" element={<Home />} />
      
        
      </Routes>

    </Router>
  )
}

export default App
