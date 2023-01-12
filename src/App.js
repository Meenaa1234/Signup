import React from "react"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import '../src/css/style.css'
import Signup from "./pages/Home.js";


function App() {
  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Signup />}/>
   

          </Routes>
        
      </BrowserRouter>
    </>
  );
}

export default App;
