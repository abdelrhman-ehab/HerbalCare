import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { IoNotifications } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

export default function NavbarComponent() {
  return (
    <div className='container-fluid py-2 px-5 position-sticky top-0 bg-white shadow'>
      <Navbar collapseOnSelect expand="lg">
        <NavLink to={'/'} className='fw-bold fs-3 text-black'>HerbaCare</NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto mt-1 d-flex gap-3">
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'herbas'}>Herbas</NavLink>
            <NavLink to={'activity'}>Activity</NavLink>
            <NavLink to={'features'}>AI Features</NavLink>
            <NavLink to={'ContactUs'}>Contact Us</NavLink>
          </Nav>
          <Nav className='d-flex gap-3 align-items-center'>
            <span className='fs-5'><IoNotifications /></span>
            <NavLink to="cart" className='fs-5'><FaCartShopping /></NavLink>
            <span className='fs-5'><FaUserCircle /></span>
          </Nav>
        </Navbar.Collapse>
    </Navbar >
    </div>
  );
}
