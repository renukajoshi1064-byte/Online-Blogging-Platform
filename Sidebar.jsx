import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../../assets/assets'

const Sidebar = () => {
  return (
    <div className='flex flex-col h-full bg-white shadow-md'>
      <NavLink
        end
        to='/admin'
        className={({ isActive }) =>
          `flex items-center gap-3 py-3.5 md:px-9 w-64 cursor-pointer ${
            isActive ? "bg-primary-light border-r-4 border-primary" : ""
          }`
        }
      >
        <img src={assets.home_icon} className='min-w-4 w-5' alt="home" />
        <p className='flex-shrink-0'>Dashboard</p>
      </NavLink>

      <NavLink
        end
        to='/admin/addBlog'
        className={({ isActive }) =>
          `flex items-center gap-3 py-3.5 md:px-9 w-64 cursor-pointer ${
            isActive ? "bg-primary-light border-r-4 border-primary" : ""
          }`
        }
      >
        <img src={assets.add_icon} className='min-w-4 w-5' alt="home" />
        <p className='flex-shrink-0'>Add Blogs</p>
      </NavLink>

      <NavLink
        end
        to='/admin/listBlog'
        className={({ isActive }) =>
          `flex items-center gap-3 py-3.5 md:px-9 w-64 cursor-pointer ${
            isActive ? "bg-primary-light border-r-4 border-primary" : ""
          }`
        }
      >
        <img src={assets.list_icon} className='min-w-4 w-5' alt="home" />
        <p className='flex-shrink-0'>Blog lists</p>
      </NavLink>

      <NavLink
        end
        to='/admin/comments'
        className={({ isActive }) =>
          `flex items-center gap-3 py-3.5 md:px-9 w-64 cursor-pointer ${
            isActive ? "bg-primary-light border-r-4 border-primary" : ""
          }`
        }
      >
        <img src={assets.comment_icon} className='min-w-4 w-5' alt="home" />
        <p className='flex-shrink-0'>Comments</p>
      </NavLink>
    </div>
  )
}

export default Sidebar
