import React, { useEffect, useState } from 'react'
import OurVision1 from "../../assets/OurVision.jpg";
import OurVision2 from "../../assets/OurVision2.jpg";
import OurVision3 from "../../assets/pexels-mareefe-672046.jpg";

export default function Herbas() {
  return (
    <>
      <div className="container-fluid second-nav px-lg-5 px-md-4 px-3">
        <div className="categories mb-2 pt-2">
          <ul className='list-unstyled d-flex gap-1 overflow-x-auto flex-nowrap'>
            <li className='pointer cat'>Adaptogens</li>
            <li className='pointer cat'>Anti-inflammatory herbs</li>
            <li className='pointer cat'>Antioxidant herbs</li>
            <li className='pointer cat'>Antimicrobial / Antiseptic herbs</li>
            <li className='pointer cat'>Digestive herbs</li>
            <li className='pointer cat'>Detoxifying herbs</li>
            <li className='pointer cat'>Calming / Sedative herbs</li>
            <li className='pointer cat'>Stimulant herbs</li>
            <li className='pointer cat'>Expectorant herbs</li>
            <li className='pointer cat'>Immunomodulating herbs</li>
          </ul>
        </div>
      </div>
      <div className="container-fluid px-lg-5 px-md-4 px-3 my-4">
        <div className="herbas row g-3">
          <div className="col-6 col-sm-4 col-md-3 col-xxl-2">
            <div className="col-content">
              <img className='w-100 rounded-2' src={OurVision1} alt="" />
              <p className='aboutIcone'>category</p>
              <p>name</p>
            </div>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-xxl-2">
            <div className="col-content">
              <img className='w-100 rounded-2' src={OurVision2} alt="" />
              <p className='aboutIcone'>category</p>
              <p>name</p>
            </div>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-xxl-2">
            <div className="col-content">
              <img className='w-100 rounded-2' src={OurVision3} alt="" />
              <p className='aboutIcone'>category</p>
              <p>name</p>
            </div>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-xxl-2">
            <div className="col-content">
              <img className='w-100 rounded-2' src={OurVision3} alt="" />
              <p className='aboutIcone'>category</p>
              <p>name</p>
            </div>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-xxl-2">
            <div className="col-content">
              <img className='w-100 rounded-2' src={OurVision1} alt="" />
              <p className='aboutIcone'>category</p>
              <p>name</p>
            </div>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-xxl-2">
            <div className="col-content">
              <img className='w-100 rounded-2' src={OurVision3} alt="" />
              <p className='aboutIcone'>category</p>
              <p>name</p>
            </div>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-xxl-2">
            <div className="col-content">
              <img className='w-100 rounded-2' src={OurVision3} alt="" />
              <p className='aboutIcone'>category</p>
              <p>name</p>
            </div>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-xxl-2">
            <div className="col-content">
              <img className='w-100 rounded-2' src={OurVision1} alt="" />
              <p className='aboutIcone'>category</p>
              <p>name</p>
            </div>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-xxl-2">
            <div className="col-content">
              <img className='w-100 rounded-2' src={OurVision3} alt="" />
              <p className='aboutIcone'>category</p>
              <p>name</p>
            </div>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-xxl-2">
            <div className="col-content">
              <img className='w-100 rounded-2' src={OurVision1} alt="" />
              <p className='aboutIcone'>category</p>
              <p>name</p>
            </div>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-xxl-2">
            <div className="col-content">
              <img className='w-100 rounded-2' src={OurVision2} alt="" />
              <p className='aboutIcone'>category</p>
              <p>name</p>
            </div>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-xxl-2">
            <div className="col-content">
              <img className='w-100 rounded-2' src={OurVision1} alt="" />
              <p className='aboutIcone'>category</p>
              <p>name</p>
            </div>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-xxl-2">
            <div className="col-content">
              <img className='w-100 rounded-2' src={OurVision2} alt="" />
              <p className='aboutIcone'>category</p>
              <p>name</p>
            </div>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-xxl-2">
            <div className="col-content">
              <img className='w-100 rounded-2' src={OurVision3} alt="" />
              <p className='aboutIcone'>category</p>
              <p>name</p>
            </div>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-xxl-2">
            <div className="col-content">
              <img className='w-100 rounded-2' src={OurVision3} alt="" />
              <p className='aboutIcone'>category</p>
              <p>name</p>
            </div>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-xxl-2">
            <div className="col-content">
              <img className='w-100 rounded-2' src={OurVision1} alt="" />
              <p className='aboutIcone'>category</p>
              <p>name</p>
            </div>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-xxl-2">
            <div className="col-content">
              <img className='w-100 rounded-2' src={OurVision2} alt="" />
              <p className='aboutIcone'>category</p>
              <p>name</p>
            </div>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-xxl-2">
            <div className="col-content">
              <img className='w-100 rounded-2' src={OurVision3} alt="" />
              <p className='aboutIcone'>category</p>
              <p>name</p>
            </div>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-xxl-2">
            <div className="col-content">
              <img className='w-100 rounded-2' src={OurVision3} alt="" />
              <p className='aboutIcone'>category</p>
              <p>name</p>
            </div>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-xxl-2">
            <div className="col-content">
              <img className='w-100 rounded-2' src={OurVision1} alt="" />
              <p className='aboutIcone'>category</p>
              <p>name</p>
            </div>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-xxl-2">
            <div className="col-content">
              <img className='w-100 rounded-2' src={OurVision1} alt="" />
              <p className='aboutIcone'>category</p>
              <p>name</p>
            </div>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-xxl-2">
            <div className="col-content">
              <img className='w-100 rounded-2' src={OurVision2} alt="" />
              <p className='aboutIcone'>category</p>
              <p>name</p>
            </div>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-xxl-2">
            <div className="col-content">
              <img className='w-100 rounded-2' src={OurVision1} alt="" />
              <p className='aboutIcone'>category</p>
              <p>name</p>
            </div>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-xxl-2">
            <div className="col-content">
              <img className='w-100 rounded-2' src={OurVision2} alt="" />
              <p className='aboutIcone'>category</p>
              <p>name</p>
            </div>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-xxl-2">
            <div className="col-content">
              <img className='w-100 rounded-2' src={OurVision3} alt="" />
              <p className='aboutIcone'>category</p>
              <p>name</p>
            </div>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-xxl-2">
            <div className="col-content">
              <img className='w-100 rounded-2' src={OurVision3} alt="" />
              <p className='aboutIcone'>category</p>
              <p>name</p>
            </div>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-xxl-2">
            <div className="col-content">
              <img className='w-100 rounded-2' src={OurVision1} alt="" />
              <p className='aboutIcone'>category</p>
              <p>name</p>
            </div>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-xxl-2">
            <div className="col-content">
              <img className='w-100 rounded-2' src={OurVision2} alt="" />
              <p className='aboutIcone'>category</p>
              <p>name</p>
            </div>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-xxl-2">
            <div className="col-content">
              <img className='w-100 rounded-2' src={OurVision1} alt="" />
              <p className='aboutIcone'>category</p>
              <p>name</p>
            </div>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-xxl-2">
            <div className="col-content">
              <img className='w-100 rounded-2' src={OurVision2} alt="" />
              <p className='aboutIcone'>category</p>
              <p>name</p>
            </div>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-xxl-2">
            <div className="col-content">
              <img className='w-100 rounded-2' src={OurVision3} alt="" />
              <p className='aboutIcone'>category</p>
              <p>name</p>
            </div>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-xxl-2">
            <div className="col-content">
              <img className='w-100 rounded-2' src={OurVision3} alt="" />
              <p className='aboutIcone'>category</p>
              <p>name</p>
            </div>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-xxl-2">
            <div className="col-content">
              <img className='w-100 rounded-2' src={OurVision1} alt="" />
              <p className='aboutIcone'>category</p>
              <p>name</p>
            </div>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-xxl-2">
            <div className="col-content">
              <img className='w-100 rounded-2' src={OurVision2} alt="" />
              <p className='aboutIcone'>category</p>
              <p>name</p>
            </div>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-xxl-2">
            <div className="col-content">
              <img className='w-100 rounded-2' src={OurVision1} alt="" />
              <p className='aboutIcone'>category</p>
              <p>name</p>
            </div>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-xxl-2">
            <div className="col-content">
              <img className='w-100 rounded-2' src={OurVision2} alt="" />
              <p className='aboutIcone'>category</p>
              <p>name</p>
            </div>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-xxl-2">
            <div className="col-content">
              <img className='w-100 rounded-2' src={OurVision3} alt="" />
              <p className='aboutIcone'>category</p>
              <p>name</p>
            </div>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-xxl-2">
            <div className="col-content">
              <img className='w-100 rounded-2' src={OurVision3} alt="" />
              <p className='aboutIcone'>category</p>
              <p>name</p>
            </div>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-xxl-2">
            <div className="col-content">
              <img className='w-100 rounded-2' src={OurVision1} alt="" />
              <p className='aboutIcone'>category</p>
              <p>name</p>
            </div>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-xxl-2">
            <div className="col-content">
              <img className='w-100 rounded-2' src={OurVision2} alt="" />
              <p className='aboutIcone'>category</p>
              <p>name</p>
            </div>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-xxl-2">
            <div className="col-content">
              <img className='w-100 rounded-2' src={OurVision1} alt="" />
              <p className='aboutIcone'>category</p>
              <p>name</p>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}
