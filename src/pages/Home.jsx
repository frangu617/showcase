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
      <Container>
        <header className="hero-section">
          <Typography variant="h2">Welcome to My Portfolio</Typography>
          <Typography variant="h5">I'm a Software Developer</Typography>
          <img
            src="path/to/your/photo.jpg"
            alt="Francisco Gutierrez"
            className="profile-photo"
          />
        </header>
        <section className="intro">
          <Typography variant="h6">About Me</Typography>
          <Typography variant="body1">
            I am Francisco Gutierrez, a versatile software development. Graduated from Westwood College with a BS in Software Development, and finished the San Diego State University software development certification.
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
