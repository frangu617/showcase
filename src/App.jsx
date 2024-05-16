import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AppBar, Toolbar, Typography, Container } from "@mui/material";
import './App.css'
import NavBar from './components/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      return (
          <CssBaseline />
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
                
              </Routes>
            </Container>
          </Router>
      )
    </>
  );
}

export default App
