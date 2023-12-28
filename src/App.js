import React from 'react';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './components/NavBar';
import QueueList from './components/QueueList';
import Add from './components/Add';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<QueueList />} />
          <Route path="/add" element={<Add />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
