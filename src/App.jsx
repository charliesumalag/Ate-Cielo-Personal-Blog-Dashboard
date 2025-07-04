import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Dashboard from "./pages/Dashboard";
import Posts from "./pages/Posts";
import Create from './pages/Create';
import Settings from './pages/Settings';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={ <Layout /> }>
        <Route index element={<Dashboard />} ></Route>
        <Route path='posts' element={<Posts />} ></Route>
        <Route path='create' element={<Create />} ></Route>
        <Route path='settings' element={<Settings />} ></Route>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
