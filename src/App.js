
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './assignment_4/Header';
import Contact from './assignment_4/Contact';
import Home from './assignment_4/Home';
import Student from './assignment_4/Student';
import React from "react";


function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
            <Route path="/Home" element={<Home />}/>
            <Route path="/Student" element={<Student />}/>
            <Route path="/Contact" element={<Contact />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

