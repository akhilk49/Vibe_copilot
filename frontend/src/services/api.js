import axios from 'axios';

const API_URL = 'http://localhost:8000/api/assets';

export const getAssets = async (page = 1, limit = 10) => {
  const response = await axios.get(`${API_URL}/?skip=${(page - 1) * limit}&limit=${limit}`);
  return response.data;
};

export const getAsset = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

export const createAsset = async (assetData) => {
  const response = await axios.post(API_URL, assetData);
  return response.data;
};

export const updateAsset = async (id, assetData) => {
  const response = await axios.put(`${API_URL}/${id}`, assetData);
  return response.data;
};

export const deleteAsset = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};

export const searchAssets = async (query) => {
  const response = await axios.get(`${API_URL}/search?q=${query}`);
  return response.data;
};