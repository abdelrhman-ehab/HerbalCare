import React, { useEffect, useState } from 'react'
import { FiTarget } from "react-icons/fi";

export default function AboutUs() {
  return (
    <div className='container-fluid p-5 text-center'>
      <h2>About Us</h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni tempore, repudiandae similique est officiis ipsum nostrum inventore pariatur dolorum rerum, aliquid sed voluptate dignissimos eveniet amet. Rem magnam labore, explicabo, blanditiis cumque distinctio adipisci aspernatur quidem enim voluptatem impedit architecto molestias culpa ipsum fugiat maxime nam in fugit officia cupiditate?</p>
      <div className="row g-5 pt-4">
        <div className="col-6">
          <div className="col-content border border-2 border-danger p-3 rounded-3">
            <FiTarget className='fs-3 mb-3' />
            <h3>Our Mission</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi eos numquam deserunt aliquam, facilis harum dolore suscipit reiciendis, dolorum labore provident saepe voluptates amet quis earum perferendis mollitia reprehenderit vel?</p>
          </div>
        </div>
        <div className="col-6">
          <div className="col-content border border-2 border-danger p-3 rounded-3">
            <FiTarget className='fs-3 mb-3' />
            <h3>Our Mission</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi eos numquam deserunt aliquam, facilis harum dolore suscipit reiciendis, dolorum labore provident saepe voluptates amet quis earum perferendis mollitia reprehenderit vel?</p>
          </div>
        </div>
      </div>
    </div>
  )
}
