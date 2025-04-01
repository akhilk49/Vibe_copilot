import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAssets, deleteAsset, searchAssets } from '../services/api';
import AssetTable from '../components/AssetTable';
import FilterBar from '../components/FilterBar';
import Pagination from '../components/Pagination';

const Home = () => {
  const [assets, setAssets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const itemsPerPage = 10;
  const navigate = useNavigate();

  useEffect(() => {
    fetchAssets();
  }, [page]);

  const fetchAssets = async () => {
    try {
      setLoading(true);
      const data = await getAssets(page, itemsPerPage);
      setAssets(data);
      // In a real app, you'd get total count from the API
      setTotalCount(100); // Mock value for pagination
      setLoading(false);
    } catch (error) {
      console.error('Error fetching assets:', error);
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteAsset(id);
      fetchAssets();
    } catch (error) {
      console.error('Error deleting asset:', error);
    }
  };

  const handleSearch = async (query) => {
    try {
      if (query.trim() === '') {
        fetchAssets();
        return;
      }
      const data = await searchAssets(query);
      setAssets(data);
    } catch (error) {
      console.error('Error searching assets:', error);
    }
  };

  const handleAdd = () => {
    navigate('/add');
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <div>
      <FilterBar onSearch={handleSearch} onAdd={handleAdd} />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <AssetTable assets={assets} onDelete={handleDelete} />
          <Pagination
            count={totalCount}
            page={page}
            onPageChange={handlePageChange}
            itemsPerPage={itemsPerPage}
          />
        </>
      )}
    </div>
  );
};

export default Home;