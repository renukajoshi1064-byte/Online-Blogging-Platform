import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Layout from './pages/admin/Layout';
import Dashboard from './pages/admin/Dashboard';
import AddBlog from './pages/admin/AddBlog';
import ListBlog from './pages/admin/ListBlog';
import Comments from './pages/admin/Comments';
import Login from './compoents/admin/Login';
import 'quill/dist/quill.snow.css';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const admin = localStorage.getItem('isAdmin');
    if (admin === 'true') {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
    setLoading(false);
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/blog/:id" element={<Blog />} />

      {/* Login Route */}
      <Route
        path="/login"
        element={
          isAuthenticated
            ? <Navigate to="/admin" replace />
            : <Login setIsAuthenticated={setIsAuthenticated} />
        }
      />

      {/* Protected Admin Routes */}
      <Route
        path="/admin/*"
        element={
          isAuthenticated
            ? <Layout setIsAuthenticated={setIsAuthenticated} />
            : <Navigate to="/login" replace />
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="addBlog" element={<AddBlog />} />
        <Route path="listBlog" element={<ListBlog />} />
        <Route path="comments" element={<Comments />} />
      </Route>
    </Routes>
  );
};

export default App;
