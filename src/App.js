import React from 'react'
import './App.css'
import {Routes, Route} from "react-router-dom";
import Home from "../src/pages/Home.jsx";

const App = () => {
  return (
    <div>
    <Routes >
    <Route path="/" element={<Home />} />
    </Routes>
    </div>
  )
}

export default App