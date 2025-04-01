import React from 'react';
import {
  TextField,
  Button,
  Box,
  Grid,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';

const AssetForm = ({ asset, onSubmit, onCancel }) => {
  const [formData, setFormData] = React.useState({
    asset_name: asset?.asset_name || '',
    building: asset?.building || '',
    floor: asset?.floor || '',
    unit: asset?.unit || '',
    asset_number: asset?.asset_number || '',
    fox_image_id: asset?.fox_image_id || '',
    oem_name: asset?.oem_name || '',
    serial_number: asset?.serial_number || '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            label="Asset Name"
            name="asset_name"
            value={formData.asset_name}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Building</InputLabel>
            <Select
              name="building"
              value={formData.building}
              label="Building"
              onChange={handleChange}
              required
            >
              <MenuItem value="Digi">Digi</MenuItem>
              <MenuItem value="NWAIT TECHPARK">NWAIT TECHPARK</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Floor</InputLabel>
            <Select
              name="floor"
              value={formData.floor}
              label="Floor"
              onChange={handleChange}
              required
            >
              <MenuItem value="Ground">Ground</MenuItem>
              <MenuItem value="1st Floor">1st Floor</MenuItem>
              <MenuItem value="2nd Floor">2nd Floor</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Unit</InputLabel>
            <Select
              name="unit"
              value={formData.unit}
              label="Unit"
              onChange={handleChange}
              required
            >
              <MenuItem value="VibeConnect">VibeConnect</MenuItem>
              <MenuItem value="Connect">Connect</MenuItem>
              <MenuItem value="Copilot">Copilot</MenuItem>
              <MenuItem value="U1">U1</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            label="Asset Number"
            name="asset_number"
            value={formData.asset_number}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="FOX/IMAGE ID"
            name="fox_image_id"
            value={formData.fox_image_id}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="OEM Name"
            name="oem_name"
            value={formData.oem_name}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Serial Number"
            name="serial_number"
            value={formData.serial_number}
            onChange={handleChange}
          />
        </Grid>
      </Grid>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
        <Button onClick={onCancel} sx={{ mr: 2 }}>
          Cancel
        </Button>
        <Button type="submit" variant="contained">
          {asset ? 'Update Asset' : 'Add Asset'}
        </Button>
      </Box>
    </Box>
  );
};

export default AssetForm;