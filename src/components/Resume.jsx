import React from "react";
import {
  Container,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  Divider,
  Link as MuiLink,
  Box,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

export default function Resume() {
  return (
    <Container sx={{ marginBottom: "60px" }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Resume
      </Typography>
      <Paper style={{ padding: "20px" }}>
        <Typography variant="h5" gutterBottom>
          Francisco Gutierrez
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Software Developer
        </Typography>
        <Box
          component="div"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
            flexWrap: "wrap",
            marginBottom: "16px",
          }}
        >
          <MuiLink
            href="tel:951-807-9789"
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <PhoneIcon sx={{ marginRight: "5px" }} />
            951-807-9789
          </MuiLink>
          <MuiLink
            href="mailto:franciscogutierrez617@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <EmailIcon sx={{ marginRight: "5px" }} />
            franciscogutierrez617@gmail.com
          </MuiLink>
          <MuiLink
            href="https://www.linkedin.com/in/francisco-e-gutierrez"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <LinkedInIcon sx={{ marginRight: "5px" }} />
            LinkedIn
          </MuiLink>
        </Box>
        <Divider style={{ margin: "20px 0" }} />
        <Typography variant="h6" gutterBottom>
          Professional Summary
        </Typography>
        <Typography variant="body1" gutterBottom>
          Versatile software development professional and educator with a broad
          technical skill set including full-stack development and
          cybersecurity. Coming from a bachelor’s degree in software development
          and a recent graduate from a software development certification
          program with San Diego State University. Committed to leveraging
          technical expertise and teaching experience to contribute to a dynamic
          software development team.
        </Typography>
        <Divider style={{ margin: "20px 0" }} />
        <Typography variant="h6" gutterBottom>
          Technical Skills
        </Typography>
        <List>
          <ListItem>
            <ListItemText
              primary="Operating Systems:"
              secondary="Windows, Android, Linux"
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Programming Languages:"
              secondary="C/C++, Java, C#, HTML, JavaScript, Python, Assembly"
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Development Tools:"
              secondary="Microsoft Visual Studio.NET, Eclipse"
            />
          </ListItem>
          <ListItem>
            <ListItemText primary="Databases:" secondary="SQL, MongoDB" />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Other Skills:"
              secondary="Testing, Debugging, Quality Assurance, Cybersecurity, Microsoft Office Suite"
            />
          </ListItem>
        </List>
        <Divider style={{ margin: "20px 0" }} />
        <Typography variant="h6" gutterBottom>
          Education
        </Typography>
        <List>
          <ListItem>
            <ListItemText
              primary="Software Development Certification | San Diego State University | San Diego CA | 04/2024"
              secondary="A comprehensive coding program focused on full-stack development, data structures, algorithms, and cybersecurity principles."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Bachelor of Science - Software Development | Westwood College | Upland CA | 10/2013"
              secondary="Courses Included: Programming (Beginner to Advanced), Data Structures, Game Analysis, Software Development Lifecycle, 2D/3D Game Programming, Game Engine Architecture, Algorithm Design, Network Programming, Systems Programming, Compiler Design, Game Testing and Debugging."
            />
          </ListItem>
        </List>
        <Divider style={{ margin: "20px 0" }} />
        <Typography variant="h6" gutterBottom>
          Professional Experience
        </Typography>
        <List>
          <ListItem>
            <ListItemText
              primary="Operations Office Manager | 1-800 Radiator Murrieta CA | 2016 - Present"
              secondary={
                <>
                  <Typography variant="body2" component="span">
                    Roles: Administrative operations, IT Support, program
                    management, customer sales and organization.
                  </Typography>
                  <Typography variant="body2" component="span">
                    IT Support: Maintain onsite computers, tablets, printers,
                    firewalls.
                  </Typography>
                  <Typography variant="body2" component="span">
                    Program Management: ensuring company meets goals and
                    objectives, data analysis and management, maintain
                    relationships with franchise warehouses.
                  </Typography>
                  <Typography variant="body2" component="span">
                    Customer Sales: Service point of sales for customers and
                    ensure excellent customer service.
                  </Typography>
                  <Typography variant="body2" component="span">
                    Inventory Management: Ensure timely delivery of parts and
                    solve inventory issues.
                  </Typography>
                </>
              }
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Substitute Teacher | Moreno Valley Unified School District | Moreno Valley CA | 2020 - Present"
              secondary={
                <>
                  <Typography variant="body2" component="span">
                    Facilitate a positive learning environment for students
                    across various grade levels adapting teaching methods to
                    meet diverse learning needs.
                  </Typography>
                  <Typography variant="body2" component="span">
                    Employ strong communication and interpersonal skills to
                    effectively manage classroom dynamics and foster student
                    engagement.
                  </Typography>
                </>
              }
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Software Developer Apprentice | San Diego State University | 08/2023 – 04/2024"
              secondary={
                <>
                  <Typography variant="body2" component="span">
                    Simulated the role of a Software Developer who builds
                    websites, apps, software.
                  </Typography>
                  <Typography variant="body2" component="span">
                    Created HTML/CSS and web accessibility mock websites.
                  </Typography>
                  <Typography variant="body2" component="span">
                    Executed UI/UX customer research and Agile methodologies.
                  </Typography>
                  <Typography variant="body2" component="span">
                    Completed JavaScript Front-End Development and Back-End
                    Development and API projects.
                  </Typography>
                  <Typography variant="body2" component="span">
                    SQL Database modeling - Created normalized data models,
                    migrations to manage schema and content over time, and
                    common optimization techniques found in the software
                    industry.
                  </Typography>
                  <Typography variant="body2" component="span">
                    Cybersecurity - Prioritized securing data and identifying
                    proper and improper access to information.
                  </Typography>
                  <Typography variant="body2" component="span">
                    Built applications to support user authentication and
                    authorization.
                  </Typography>
                </>
              }
            />
          </ListItem>
        </List>
      </Paper>
    </Container>
  );
}
