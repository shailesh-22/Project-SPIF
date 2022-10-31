import React, { Component } from 'react'
import '../Sidebar/header.css'
import {Link} from 'react-router-dom'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  
       
      const handleLogout = ()=>{
        localStorage.removeItem("token");
        // window.location.reload();
    }
       
    return (
      <div>
  <nav className=" main-header navbar  navbar-expand">
    {/* Left navbar links */}
    <ul className="navbar-nav d-flex ">
      <li className="nav-item ">
        <a className="nav-link " data-widget="pushmenu" >
          {/* <i className="fas fa-bars" /> */}
          <MenuIcon/>
          </a>
      </li>
      <li className=" nav-item d-flex align-item-center ">
        
            <img src="https://www.spif.in/wp-content/uploads/2021/08/new-logo3.png" alt="logo" width={105}  />
      
      </li>
    </ul>
   
    {/* Right navbar links */}
    <ul className="navbar-nav ml-auto">
      
      {/* Notifications Dropdown Menu */}
      <li className="nav-item dropdown">
        <a className="nav-link" data-toggle="dropdown" >
        {/* <i class="bi bi-person-circle"></i> */}
        <AccountCircleIcon/>
        </a>
        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
         
          <div className="dropdown-divider " />
          <a  className="dropdown-item">
            <i className="fas" /> 

           <Link to="/" class="dropdown-item" onClick={handleLogout} >Logout</Link>
         
          </a>
         
         
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-widget="fullscreen" role="button">
          <AspectRatioIcon/>
        </a>
      </li>
      
    </ul>
  </nav>
</div>

      



    
  )
}

export default Header