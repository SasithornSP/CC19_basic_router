import React from 'react'
import { Link, Outlet, Route,Routes } from 'react-router';
import Layout from '../Layouts/Layout';
import About from '../pages/About';
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Dashboard from '../pages/Dashboard';
import Manage from '../pages/Manage';
import Setting from '../pages/Setting';


function AppRoutes() {

  return (
    <div>
   
    <Routes>
      {/* Public */}
      <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>} />
      <Route path='about' element={<About/>} />
      <Route path='contact' element={<Contact/>} />
      <Route path='login' element={<Login/>} />
      <Route path='register' element={<Register/>} />
      </Route>
      
      {/* Private */}
        <Route path='admin'element={<Layout/>}>
        <Route index element={<Dashboard/>}/>
        <Route path='manage' element={<Manage/>}/>
        <Route path='setting' element={<Setting/>}/>
      </Route>

    </Routes>
    </div>
  )
}

export default AppRoutes