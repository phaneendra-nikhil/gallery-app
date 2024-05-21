import React from 'react'
import '../App.css';
import light from '/light.png'

const Nav = () => {
  return (
    <>
        <nav>
            <h1>
              <img src={light} alt="" />
                <a href="/">Travello</a>
            </h1>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Partners</a></li>
                <li><a href="#">Destination</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Help</a></li>
                <li><a href="#">About us</a></li>
            </ul>
        </nav>
    </>
  )
}

export default Nav