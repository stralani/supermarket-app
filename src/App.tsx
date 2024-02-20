import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./Layout/intex";
import Main from "./Pages/Main";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Main />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
