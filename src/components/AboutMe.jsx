import React from "react";
import {
  Container,
  Card,
  Typography,
  Grid,
  Paper,
  Avatar,
  Box,
  Link as MuiLink,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function AboutMe() {
  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        About Me
      </Typography>
      <Paper
        style={{
          padding: "20px",
          backgroundImage: `url('/assets/hackerOffice.webp')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Avatar
              alt="Francisco Gutierrez"
              src="/assets/me.png"
              sx={{ width: 200, height: 200, margin: "auto" }}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography variant="h5" gutterBottom>
              Francisco Gutierrez
            </Typography>
            <Card>
              <Typography variant="body1" paragraph>
                Hello! I'm Francisco Gutierrez, a versatile software development
                professional with a broad technical skill set including
                full-stack development and cybersecurity. With a Bachelor’s
                degree in Software Development from Westwood College and a
                recent certification from San Diego State University, I am
                committed to leveraging my technical expertise and teaching
                experience to contribute to a dynamic software development team.
              </Typography>
              <Typography variant="body1" paragraph>
                I am passionate about continuous learning and staying updated
                with the latest industry trends. I enjoy working on challenging
                projects that require innovative solutions and collaborating
                with others to achieve common goals.
              </Typography>
              <Typography variant="body1" paragraph>
                When I'm not working, I enjoy games, both board games, and video
                games, excercising, spending time with my family, and exploring
                new technologies. Feel free to connect with me through the
                following platforms:
              </Typography>
            </Card>
            <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
              <MuiLink
                href="https://www.linkedin.com/in/francisco-e-gutierrez"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ display: "flex", alignItems: "center" }}
              >
                <Card sx={{ display: "flex", alignItems: "center", padding: "5px" }}>
                  <LinkedInIcon sx={{ marginRight: "5px" }} />
                  LinkedIn
                </Card>
              </MuiLink>
              <MuiLink
                href="mailto:franciscogutierrez617@gmail.com"
                sx={{ display: "flex", alignItems: "center"}}
              >
                <Card sx={{ display: "flex", alignItems: "center", padding: "5px" }}>
                <EmailIcon sx={{ marginRight: "5px" }} />
                Email
                </Card>
              </MuiLink>
              <MuiLink
                href="https://github.com/frangu617"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ display: "flex", alignItems: "center" }}
              >
                <Card sx={{ display: "flex", alignItems: "center", padding: "5px" }}>
                <GitHubIcon sx={{ marginRight: "5px" }} />
                GitHub
                </Card>
              </MuiLink>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}
