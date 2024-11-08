import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import ProductsList from "./components/ProductsList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./components/Checkout";
import About from "./components/About";
import CustomerService from "./components/CustomerService";
import HowTo from "./components/HowTo";
import Club from "./components/Club";
import Login from "./components/firebase/Login";
import Profile from "./components/firebase/Profile";
import Signup from "./components/firebase/Signup";
import Layout from "./components/firebase/Layout";

function App() {
  return (
    <Router>
      <div>
        <Header />
      </div>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/customer" element={<CustomerService />} />
          <Route path="/howto" element={<HowTo />} />
          <Route path="/club" element={<Club />} />
          <Route path="/pantok" element={<ProductsList catName="pántok" catId={2} />} />
          <Route path="/nyakorvek" element={<ProductsList catName="nyakörv" catId={1} />} />
          <Route path="/nevtabla" element={<ProductsList catName="névtábla" catId={3} />} />
          <Route path="/bevasarlokosar" element={<Checkout />} />
          <Route path="/bejelentkezes" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/layout" element={<Layout />} />
        </Routes>
      </div>
      <div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
