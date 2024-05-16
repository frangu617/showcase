import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AppBar, Toolbar, Typography, Container } from "@mui/material";
import "./App.css";
import NavBar from "./components/NavBar";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <AppBar position="static" style={{ marginBottom: "20px" }}>
          <Toolbar>
            <Typography
              variant="h6"
              style={{ flexGrow: 1, marginLeft: "20px" }}
            ></Typography>
            <NavBar />
          </Toolbar>
        </AppBar>
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutMe" element={<AboutMe />} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>
        </Container>
      </Router>
    </>
  );
}

export default App;
