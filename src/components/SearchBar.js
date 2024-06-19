import React, { useState, useRef } from 'react';
import { TextField, Button, Box } from '@mui/material';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');
  const inputRef = useRef();

  const handleSearch = () => {
    onSearch(query);
    inputRef.current.focus();
  };

  return (
    <Box display="flex" justifyContent="center" mb={4}>
      <TextField
        label="Search Movies"
        variant="outlined"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        inputRef={inputRef}
        sx={{ marginRight: 2 }}
      />
      <Button variant="contained" color="primary" onClick={handleSearch}>
        Search
      </Button>
    </Box>
  );
}

export default SearchBar;
