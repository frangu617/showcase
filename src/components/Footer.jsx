import React from "react";
import { Box, Link as MuiLink, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "16px",
        backgroundColor: "#f5f5f5",
        borderTop: "1px solid #ddd",
        zIndex: 1000,
      }}
    >
      <MuiLink
        href="https://github.com/frangu617"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconButton color="inherit">
          <GitHubIcon />
        </IconButton>
      </MuiLink>
      <MuiLink
        href="https://www.linkedin.com/in/francisco-e-gutierrez"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconButton color="inherit">
          <LinkedInIcon />
        </IconButton>
      </MuiLink>
      <MuiLink href="mailto:franciscogutierrez617@gmail.com">
        <IconButton color="inherit">
          <EmailIcon />
        </IconButton>
      </MuiLink>
      <MuiLink href="tel:951-807-9789">
        <IconButton color="inherit">
          <PhoneIcon />
        </IconButton>
      </MuiLink>
    </Box>
  );
};

export default Footer;
