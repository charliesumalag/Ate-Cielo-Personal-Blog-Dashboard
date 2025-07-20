import React, { useContext } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Dashboard from "./pages/Dashboard";
import Posts from "./pages/Posts";
import Categories from "./pages/Categories";
import Create from './pages/Create';
import Settings from './pages/Settings';
import AuthLogin from './pages/AuthLogin';
import AuthRegister from './pages/AuthRegister';
import { AppContext } from './context/AppContext';

const App = () => {
  const {user} = useContext(AppContext);
  console.log(user);

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={ user ? <Layout /> : <AuthLogin />}></Route>
      <Route path='/register' element={user ? <Layout /> : <AuthRegister />}></Route>
      <Route path='/' element={user ? <Layout /> : <AuthLogin />  }>
        <Route index element={<Dashboard /> } ></Route>
        <Route path='posts' element={user ? <Posts /> : <AuthLogin />} ></Route>
        <Route path='create' element={user ? <Create /> : <AuthLogin />} ></Route>
        <Route path='settings' element={user ? <Settings /> : <AuthLogin />} ></Route>
        <Route path='categories' element={ user ? < Categories /> : <AuthLogin/>} ></Route>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
