import React, { useState } from 'react';
import { TextField, Button, Box, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const FilterBar = ({ onSearch, onAdd }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
      <TextField
        variant="outlined"
        size="small"
        placeholder="Search By Building, Asset, Unit or OEM Name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        sx={{ width: '60%' }}
      />
      <Box>
        <Button variant="contained" onClick={onAdd} sx={{ mr: 1 }}>
          Add Asset
        </Button>
        <Button variant="outlined" sx={{ mr: 1 }}>
          QR Code
        </Button>
        <Button variant="outlined" sx={{ mr: 1 }}>
          Hide Columns
        </Button>
        <Button variant="outlined" sx={{ mr: 1 }}>
          Filter
        </Button>
        <Button variant="outlined">
          Import
        </Button>
      </Box>
    </Box>
  );
};

export default FilterBar;