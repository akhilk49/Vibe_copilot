import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getAsset } from '../services/api';
import { Box, Typography, Paper, List, ListItem, ListItemText } from '@mui/material';

const AssetDetail = () => {
  const { id } = useParams();
  const [asset, setAsset] = useState(null);

  useEffect(() => {
    const fetchAsset = async () => {
      try {
        const data = await getAsset(id);
        setAsset(data);
      } catch (error) {
        console.error('Error fetching asset:', error);
      }
    };

    fetchAsset();
  }, [id]);

  if (!asset) return <p>Loading...</p>;

  return (
    <Box sx={{ mt: 3 }}>
      <Typography variant="h4" gutterBottom>
        Asset Details
      </Typography>
      <Paper elevation={3} sx={{ p: 3 }}>
        <List>
          <ListItem>
            <ListItemText primary="Asset Name" secondary={asset.asset_name} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Building" secondary={asset.building} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Floor" secondary={asset.floor} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Unit" secondary={asset.unit} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Asset Number" secondary={asset.asset_number} />
          </ListItem>
          <ListItem>
            <ListItemText primary="FOX/IMAGE ID" secondary={asset.fox_image_id || 'NA'} />
          </ListItem>
          <ListItem>
            <ListItemText primary="OEM Name" secondary={asset.oem_name || 'NA'} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Serial Number" secondary={asset.serial_number || 'NA'} />
          </ListItem>
        </List>
      </Paper>
    </Box>
  );
};

export default AssetDetail;