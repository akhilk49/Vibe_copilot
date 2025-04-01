import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
  IconButton,
} from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const AssetTable = ({ assets, onDelete }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell padding="checkbox">
              <Checkbox />
            </TableCell>
            <TableCell>Action</TableCell>
            <TableCell>Asset Name</TableCell>
            <TableCell>Building</TableCell>
            <TableCell>Floor</TableCell>
            <TableCell>Unit</TableCell>
            <TableCell>Asset Number</TableCell>
            <TableCell>FOX/IMAGE ID</TableCell>
            <TableCell>OEM Name</TableCell>
            <TableCell>Serial Number</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {assets.map((asset) => (
            <TableRow key={asset.id}>
              <TableCell padding="checkbox">
                <Checkbox />
              </TableCell>
              <TableCell>
                <IconButton component={Link} to={`/edit/${asset.id}`}>
                  <Edit />
                </IconButton>
                <IconButton onClick={() => onDelete(asset.id)}>
                  <Delete />
                </IconButton>
              </TableCell>
              <TableCell>{asset.asset_name}</TableCell>
              <TableCell>{asset.building}</TableCell>
              <TableCell>{asset.floor}</TableCell>
              <TableCell>{asset.unit}</TableCell>
              <TableCell>{asset.asset_number}</TableCell>
              <TableCell>{asset.fox_image_id || 'NA'}</TableCell>
              <TableCell>{asset.oem_name || 'NA'}</TableCell>
              <TableCell>{asset.serial_number || 'NA'}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AssetTable;