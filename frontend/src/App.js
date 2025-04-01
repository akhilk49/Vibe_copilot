import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import AddAsset from './pages/AddAsset';
import EditAsset from './pages/EditAsset';
import AssetDetail from './pages/AssetDetail';
import './styles.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<AddAsset />} />
            <Route path="/edit/:id" element={<EditAsset />} />
            <Route path="/asset/:id" element={<AssetDetail />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;