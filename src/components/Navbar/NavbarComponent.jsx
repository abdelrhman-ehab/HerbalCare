import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { IoNotifications } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { GiHerbsBundle } from "react-icons/gi";

export default function NavbarComponent() {
  return (
    <div className='container-fluid  px-md-5 px-3 position-sticky top-0 bg-white shadow py-1'>
      <Navbar collapseOnSelect expand="lg">
        <NavLink to={'/'} className='fw-bold fs-3 text-black'><GiHerbsBundle className='active fs-1' /> HerbalCare</NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto mt-1 d-flex gap-4 fw-medium">
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'herbas'}>Herbas</NavLink>
            <NavLink to={'activity'}>Activity</NavLink>
            <NavLink to={'features'}>AI Features</NavLink>
            <NavLink to={'ContactUs'}>Contact Us</NavLink>
          </Nav>
          <Nav className='d-flex gap-4 flex-row align-items-center'>
            <span className='navIcon'><IoNotifications /></span>
            <NavLink to="cart" className='navIcon'><FaCartShopping /></NavLink>
            <span className='navIcon'><FaUserCircle /></span>
          </Nav>
        </Navbar.Collapse>
    </Navbar >
    </div>
  );
}
