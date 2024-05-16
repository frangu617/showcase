import React from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Grid,
  Paper,
} from "@mui/material";
// import "./Home.css";

function Home() {
  return (
    <div>
      {/* <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Your Name
          </Typography>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/aboutMe">
            About Me
          </Button>
          <Button color="inherit" component={Link} to="/resume">
            Resume
          </Button>
          <Button color="inherit" component={Link} to="/portfolio">
            Portfolio
          </Button>
        </Toolbar>
      </AppBar> */}
      <Container>
        <header className="hero-section">
          <Typography variant="h2">Welcome to My Portfolio</Typography>
          <Typography variant="h5">I'm a [Your Profession]</Typography>
          <img
            src="path/to/your/photo.jpg"
            alt="Your Name"
            className="profile-photo"
          />
        </header>
        <section className="intro">
          <Typography variant="h6">About Me</Typography>
          <Typography variant="body1">
            Brief introduction about yourself, your profession, and what you do.
            Keep it concise and engaging.
          </Typography>
        </section>
        <Grid container spacing={3} className="navigation">
          <Grid item xs={12} md={4}>
            <Paper className="nav-card">
              <Typography variant="h6">About Me</Typography>
              <Button
                variant="contained"
                color="primary"
                component={Link}
                to="/aboutMe"
              >
                Learn More
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper className="nav-card">
              <Typography variant="h6">Resume</Typography>
              <Button
                variant="contained"
                color="primary"
                component={Link}
                to="/resume"
              >
                View Resume
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper className="nav-card">
              <Typography variant="h6">Portfolio</Typography>
              <Button
                variant="contained"
                color="primary"
                component={Link}
                to="/portfolio"
              >
                View My Work
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Home;
