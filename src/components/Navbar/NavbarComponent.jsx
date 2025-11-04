import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { IoNotifications } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom';
import { GiHerbsBundle } from "react-icons/gi";
import { MdDarkMode } from "react-icons/md";
import profile from '../../assets/profile.jpg'

export default function NavbarComponent() {
  const [profileAppear, setProfileAppear] = useState(false)
  return (
    <>
      <div className='container-fluid px-md-5 px-3 position-sticky top-0 bg-white shadow py-1 z-1'>
        <Navbar collapseOnSelect expand="lg">
          <NavLink to={'/'} className='fw-bold fs-3 logo'><GiHerbsBundle className='active fs-1' /> HerbalCare</NavLink>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto mt-1 d-flex gap-4 fw-medium">
              <NavLink className={'cat'} to={'/'}>Home</NavLink>
              <NavLink className={'cat'} to={'herbas'}>Herbas</NavLink>
              <NavLink className={'cat'} to={'activity'}>Activity</NavLink>
              <NavLink className={'cat'} to={'features'}>AI Features</NavLink>
              <NavLink className={'cat'} to={'ContactUs'}>Contact Us</NavLink>
            </Nav>
            <Nav className='d-flex gap-4 flex-row align-items-center position-relative z-0'>
              <MdDarkMode className='fs-5 pointer' />
              <IoNotifications className='fs-5 pointer' />
              <FaCartShopping className='fs-5 pointer' />
              <FaUserCircle onClick={()=>{profileAppear?setProfileAppear(false):setProfileAppear(true)}} className='fs-5 pointer' />
            </Nav>
          </Navbar.Collapse>
        </Navbar >
        <div className={`p-5 profile-dropdown ${profileAppear?'profile-dropdown-appear':'profile-dropdown-disappear'}`}>
          <img className='profile-image' src={profile} alt="" />
            <p className='text-white'>welcome back!</p>
          <div className='d-flex gap-2'>
            <button className='btn btn-success'><Link className='text-white' to={'/register'} onClick={()=>{setProfileAppear(false)}}>Register</Link></button>
            <button className='btn btn-success'><Link className='text-white' to={'/login'} onClick={()=>{setProfileAppear(false)}}>Login</Link></button>
          </div>
        </div>
      </div>

    </>

  );
}
