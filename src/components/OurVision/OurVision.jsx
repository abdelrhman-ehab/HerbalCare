import React, { useEffect, useState } from 'react'
import OurVision1 from '../../assets/OurVision.jpg'
import OurVision2 from '../../assets/OurVision2.jpg'
import OurVision3 from '../../assets/pexels-mareefe-672046.jpg'

export default function OurVision() {
  return (
    <div className='bg-dark-subtle container-fluid p-5 text-center'>
      <h2>Our Vision</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati temporibus omnis laudantium quam rerum commodi, minima vel non voluptates sequi sunt architecto autem, nobis odit quis. Esse hic non iure quisquam est dignissimos at magni cupiditate pariatur, tenetur blanditiis mollitia magnam quas nesciunt ipsa vitae asperiores, nam repellendus repellat totam.</p>
      <div className="row g-3 pt-4">
        <div className="col-4">
          <div className="col-content">
            <img className='w-100 rounded-3 mb-3' src={OurVision1} alt={OurVision1} />
            <h3>Lorem, ipsum dolor.</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti molestias magni earum nostrum corporis! Corrupti!</p>
          </div>
        </div>
        <div className="col-4">
          <div className="col-content">
            <img className='w-100 rounded-3 mb-3' src={OurVision3} alt={OurVision3} />
            <h3>Lorem, ipsum dolor.</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti molestias magni earum nostrum corporis! Corrupti!</p>
          </div>
        </div>
        <div className="col-4">
          <div className="col-content">
            <img className='w-100 rounded-3 mb-3' src={OurVision2} alt={OurVision2} />
            <h3>Lorem, ipsum dolor.</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti molestias magni earum nostrum corporis! Corrupti!</p>
          </div>
        </div>
      </div>
    </div>

  )
}
