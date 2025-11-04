import React, { useEffect, useState } from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';


export default function Register() {
  return <>
    <div className="container w-75 my-5 py-5">
      <div className="row">
        <div className="col-5 bg-main py-5 rounded-3">
          <div className="col-content h-100 d-flex justify-content-center align-items-center">
            <p className="text-light fw-bold fs-3">Register Now</p>
          </div>
        </div>
        <div className="col-7 py-5 ">
          <div className="col-content d-flex flex-column justify-content-center h-100">
            <Form>
              <FloatingLabel
                controlId="floatingInput"
                label="Name"
                className="mb-3"
              >
                <Form.Control type="text" placeholder="Abdelrhman" />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingInput"
                label="Email address"
                className="mb-3"
              >
                <Form.Control type="email" placeholder="name@example.com" />
              </FloatingLabel>
              <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3" >
                <Form.Control type="password" placeholder="Password" />
              </FloatingLabel>

              <FloatingLabel controlId="floatingPassword" label="Confirm Password" className="mb-3">
                <Form.Control type="password" placeholder="Confirm Password" />
              </FloatingLabel>
              <div className='d-flex gap-3 align-items-center'>
                <button className='btn btn-success'>Register</button>
                <span>already has an account? <Link className='text-primary' to={'/login'}>login now</Link></span>
              </div>
            </Form>
          </div>
        </div>
      </div>

    </div>
  </>
}
