import React from 'react'
import Navbar from '../compoents/Navbar'
import Header from '../compoents/Header'
import BlogList from '../compoents/BlogList'
import Newsletter from '../compoents/Newsletter'
import Footer from '../compoents/Footer'


const Home = () => {
  return (
    <>
      <Navbar/>
      <Header/>
      <BlogList />
      <Newsletter />
      <Footer/>
      
    </>
  )
}

export default Home
