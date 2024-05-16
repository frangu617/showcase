import React from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Box,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

import projects from "./projects";

export default function Portfolio() {
  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        My Portfolio
      </Typography>
      <Typography variant="body1" paragraph>
        Welcome to my portfolio! Here you can find some of the projects I've
        worked on. Click on the links to view more details about each project.
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={project.imageUrl}
                alt={project.title}
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <strong>Technologies:</strong> {project.technologies}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  component="a"
                  href={project.projectLink}
                  target="_blank"
                >
                  View Project
                </Button>
                <Button
                  size="small"
                  color="primary"
                  component="a"
                  href={project.githubLink}
                  target="_blank"
                >
                  View Code
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box mt={4}>
        <Typography variant="h6">Skills and Technologies</Typography>
        <Typography variant="body1">
          React, Node.js, MongoDB, HTML, CSS, JavaScript, Python, SQL, Git,
          Agile methodologies, and more.
        </Typography>
      </Box>
      <Box mt={4}>
        <Typography variant="h6">Testimonials</Typography>
        <Typography variant="body1" paragraph>
          "Francisco is a highly skilled developer who delivers quality work on
          time. His attention to detail and problem-solving abilities are
          exceptional." - Client A
        </Typography>
        <Typography variant="body1">
          "Working with Francisco has been a great experience. He is
          knowledgeable, responsive, and always willing to go the extra mile." -
          Client B
        </Typography>
      </Box>
      <Box mt={4}>
        <Typography variant="h6">Contact Me</Typography>
        <Typography variant="body1">
          If you would like to discuss a project or just want to say hello, feel
          free to reach out to me at{" "}
          <a href="mailto:franciscogutierrez617@gmail.com">
            franciscogutierrez617@gmail.com
          </a>
          .
        </Typography>
      </Box>
    </Container>
  );
}