import { useState } from "react";
import { NavLink } from "react-router-dom";
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
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const NavBar= () => {
  const { currentUser } = useCurrentUser();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer =
    (open) => (event) => {
      if (
        event.type === "keydown" &&
        ((event).key === "Tab" ||
          (event).key === "Shift")
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
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            <NavLink
              to="/"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Francisco Gutierrez{" "}
            </NavLink>
          </Typography>
          
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <List>
          <ListItem            
            component={NavLink}
            to="/aboutMe"
            onClick={toggleDrawer(false)}>
            <ListItemText primary="About Me" />
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
    </nav>
  );
};

export default NavBar;
