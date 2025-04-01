import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getAsset, updateAsset } from '../services/api';
import AssetForm from '../components/AssetForm';

const EditAsset = () => {
  const { id } = useParams();
  const navigate = useNavigate();
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

  const handleSubmit = async (assetData) => {
    try {
      await updateAsset(id, assetData);
      navigate('/');
    } catch (error) {
      console.error('Error updating asset:', error);
    }
  };

  if (!asset) return <p>Loading...</p>;

  return (
    <div>
      <h2>Edit Asset</h2>
      <AssetForm asset={asset} onSubmit={handleSubmit} onCancel={() => navigate('/')} />
    </div>
  );
};

export default EditAsset;