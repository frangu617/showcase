import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AppBar, Toolbar, Typography, Container } from "@mui/material";
import "./App.css";
import NavBar from "./components/NavBar";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import Home from "./pages/Home";
import Resume from "./components/Resume";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <AppBar position="static" style={{ marginBottom: "20px" }}>
        <Typography
          variant="h6"
          style={{ flexGrow: 1, marginLeft: "20px" }}
        ></Typography>
        <NavBar />
      </AppBar>
      <Container className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutMe" element={<AboutMe />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
