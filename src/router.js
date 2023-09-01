import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/index";

function router() {
    return (
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
          </Routes>
      </BrowserRouter>
    )
  }
  
  export default router