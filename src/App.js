import React, { useState } from 'react';
import './App.css';
import Contact from './Contact';
import CreateUser from './CreateUser';
import Help from './Help';
import Users from './Users'
import { Navbar, Nav, Container } from 'react-bootstrap';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Page404 from './Components/Page404';
import UserDetails from './Components/UserDetails';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Header title="Admin Panel" searchBar={false}/>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/user-details/:id" element={<UserDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
