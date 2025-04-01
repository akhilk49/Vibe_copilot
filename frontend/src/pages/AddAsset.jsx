import React from 'react';
import { useNavigate } from 'react-router-dom';
import { createAsset } from '../services/api';
import AssetForm from '../components/AssetForm';

const AddAsset = () => {
  const navigate = useNavigate();

  const handleSubmit = async (assetData) => {
    try {
      await createAsset(assetData);
      navigate('/');
    } catch (error) {
      console.error('Error creating asset:', error);
    }
  };

  return (
    <div>
      <h2>Add New Asset</h2>
      <AssetForm onSubmit={handleSubmit} onCancel={() => navigate('/')} />
    </div>
  );
};

export default AddAsset;