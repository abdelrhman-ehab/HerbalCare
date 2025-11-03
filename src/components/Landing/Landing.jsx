import React, { useEffect, useState } from 'react'
import style from '../Landing/Landing.module.css'

export default function Landing() {
  return (
    <div className={`${style.h100}`}>
      <h1 className={`text-white ${style.h1s}`}>Rediscover Your <br /> Balance, Naturally.</h1>
      <p className='text-white w-75 text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim, adipisci! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat cumque odit ad, soluta debitis rem?</p>
      <button className='btn btn-success'>Get Started</button>
    </div>
  )
}
