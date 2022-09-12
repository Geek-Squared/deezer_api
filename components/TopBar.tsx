import React from "react";
import { Box, AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import SearchBar from "./SearchBar";

/**
 * Component for top bar
 * @returns TopBar
 */
const TopBar = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{
          backgroundColor: "#05386B",
        }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            />
            <Typography variant="h6" component="div">
              Deezer App
            </Typography>
            <SearchBar />
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default TopBar;
