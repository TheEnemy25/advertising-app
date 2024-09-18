import React from "react";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./page/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      <Footer />
      {/* <h1 className="text-3xl font-roboto font-bold italic">
        Roboto Bold 700 Italic
      </h1>
      <h1 className="text-3xl font-roboto font-black">Roboto Black 900</h1>
      <h1 className="text-3xl font-inter font-normal">Inter Regular 400</h1>
      <h1 className="text-3xl font-inter font-bold">Inter Bold 700</h1> */}
    </Router>
  );
}

export default App;
