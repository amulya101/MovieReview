
import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './Pages/Home';
import About from './Pages/About';
import Blogs from './Pages/Blogs';
import BlogDetail from './Pages/BlogDetail';

function App() {
  
  const [blogs, setBlogs] = useState();

  const getBlogs = async () => {
    try {
      
      const response = await axios.get("./data.json");
      setBlogs(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{ 
    getBlogs();
  },[])

  return (
    <>
      <Header name="Amulya"/>

      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About  />} />
          <Route path='/blogs' element= {<Blogs blogs={blogs}/>} />
          <Route path='/blog/:blogId' element= {<BlogDetail/>}/>
       </Routes>
    </>
  )
}

export default App
