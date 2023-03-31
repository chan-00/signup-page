import React from 'react';
//import react-routing
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
//import components
import {Signup} from "./templates/signup";

const App = () => {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Signup/>} />
        </Routes>
      </Router>
  );
}

export default App;
