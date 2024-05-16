import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Typography,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  AppBar,
  Toolbar,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const NavBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <nav>
      <AppBar
        position="fixed"
        style={{ marginBottom: "20px", boxShadow: "none" }}
      >
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            <NavLink
              to="/"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Francisco Gutierrez
            </NavLink>
          </Typography>
          {isMobile ? (
            <>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
              >
                <List>
                  <ListItem
                    component={NavLink}
                    to="/"
                    onClick={toggleDrawer(false)}
                  >
                    <ListItemText primary="Home" />
                  </ListItem>
                  <ListItem
                    component={NavLink}
                    to="/aboutMe"
                    onClick={toggleDrawer(false)}
                  >
                    <ListItemText primary="About Me" />
                  </ListItem>
                  <ListItem
                    component={NavLink}
                    to="/resume"
                    onClick={toggleDrawer(false)}
                  >
                    <ListItemText primary="Resume" />
                  </ListItem>
                  <ListItem
                    component={NavLink}
                    to="/portfolio"
                    onClick={toggleDrawer(false)}
                  >
                    <ListItemText primary="Portfolio" />
                  </ListItem>
                </List>
              </Drawer>
            </>
          ) : (
            <>
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
            </>
          )}
        </Toolbar>
      </AppBar>
    </nav>
  );
};

export default NavBar;
