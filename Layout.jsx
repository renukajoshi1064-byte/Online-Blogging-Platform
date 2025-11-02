import React from 'react'
import { assets } from '../../assets/assets'
import { useNavigate, Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

const Layout = ({ setIsAuthenticated }) => {
  const navigate = useNavigate()

  const logout = () => {
    // clear auth info
    localStorage.removeItem('isAdmin')
    setIsAuthenticated(false)
    navigate('/login')
  }

  return (
    <>
      {/* Header */}
      <div className="flex justify-between items-center py-2 h-[70px] px-4 sm:px-12 border-b border-gray-200">
        <img 
          src={assets.logo} 
          className="w-32 sm:w-40 cursor-pointer" 
          onClick={() => navigate('/')} 
          alt="logo"
        />
        <button 
          onClick={logout} 
          className="text-sm px-8 py-2 bg-primary text-white rounded-full cursor-pointer"
        >
          LogOut
        </button>
      </div>

      {/* Sidebar + Content */}
      <div className="flex h-[calc(100vh-70px)]">
        {/* Sidebar */}
        <div className="w-64 border-r border-gray-200">
          <Sidebar />
        </div>

        {/* Main content */}
        <div className="flex-1 p-4">
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default Layout;
