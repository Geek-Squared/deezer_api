import React, { useState } from "react";
import { SearchOutlined } from "@mui/icons-material";
import {
  IconButton,
  Stack,
  TextField,
} from "@mui/material";
import { useSearchArtist } from "../customHooks/useSearchArtist";

/**
 * Component for search bar
 * @returns Search Field
 */
const SearchBar = () => {
  const { setSelectedArtist } = useSearchArtist();
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
        <SearchOutlined />
      </IconButton>
        <TextField
          id="filled-search"
          type="search"
          placeholder="Search Track..."
          onChange={(e) => setSelectedArtist(e.target.value)}
          style={{
            margin: '0 auto',
            width: 600
          }}
        />

    </div>
  );
};

export default SearchBar;
