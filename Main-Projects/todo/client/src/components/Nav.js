import React from "react";
import { AppBar,Box,Toolbar,Typography,IconButton } from "@mui/material";
import { Menu,AccountCircle,NotificationsNoneIcon,SearchIcon,AddBoxIcon,Dashboard } from "@mui/icons-material";
import CollectionsBookmarkIcon from "@mui/icons-material/CollectionsBookmark";
import { Link } from "react-router-dom";
import Linki from "@mui/material/Link";

const NavBar = () => {
  return (
    <Box className="navi" sx={{ flexGrow: 1 }}>
      <AppBar color="transparent" position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Menu />
          </IconButton>
          <IconButton component={Link} to="/">
            <Dashboard sx={{ fontSize: 30, color: "white" }} />
          </IconButton>
          <Typography variant="h7" component="div" sx={{ flexGrow: 1 }}>
            <Linki href="/" underline="none" color="inherit">
              Dashboard
            </Linki>
          </Typography>
          <IconButton component={Link} to="/collections">
            <CollectionsBookmarkIcon sx={{ fontSize: 30, color: "white" }} />
          </IconButton>
          <Typography variant="h7" component="div" sx={{ flexGrow: 40 }}>
            <Linki href="/collections" underline="none" color="inherit">
              Collections
            </Linki>
          </Typography>
          <IconButton>
            <AddBoxIcon
              className="navi-icons"
              sx={{ fontSize: 40, color: "#FA58B6" }}
            />
          </IconButton>
          <IconButton>
            <SearchIcon
              className="navi-icons"
              sx={{ fontSize: 30, color: "white" }}
            />
          </IconButton>
          <IconButton>
            <NotificationsNoneIcon
              className="navi-icons"
              sx={{ fontSize: 30, color: "white" }}
            />
          </IconButton>
          <AccountCircle sx={{ fontSize: 40, color: "white" }} />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
