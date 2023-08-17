import React from 'react'
import '../css/header.css'
import { PlayFill } from 'react-bootstrap-icons'


const Header = () => {
  return (
    <>
      <div className='header'>
        <div className='navbar w-100 ps-5'>
          <nav className="navbar navbar-expand-lg bg-body-tertiary w-100 ">
            <div className="container-fluid ms-5 ">
              <img src="/images/techU.png" />
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse px-5" id="navbarNavDropdown">
                <ul className="navbar-nav ms-auto ">
                  <li className="nav-item dropdown">
                    <a className="anchor-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Our Courses
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#">Action</a></li>
                      <li><a className="dropdown-item" href="#">Another action</a></li>
                      <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a className=" anchor-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Services
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#">Action</a></li>
                      <li><a className="dropdown-item" href="#">Another action</a></li>
                      <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="anchor-link" aria-current="page" href="#">About us</a>
                  </li>
                  <li className="nav-item">
                    <a className="anchor-link" href="#">Contact us</a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="anchor-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      More
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#">Action</a></li>
                      <li><a className="dropdown-item" href="#">Another action</a></li>
                      <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="anchor-link" href="#">Login</a>
                  </li>
                  <li className='nav-item'>
                    <a className="anchor-link register-link" href="#">Register</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>

        <div className=' row gx-0 online-courses'>
          <div className='col-lg-7 col-sm-12 p-5 courses'>
            <div className='heading ms-3 ps-5'>
              <span><h1>Unlock Your Potential <br /> with Our <span className='font-color'>Online Courses</span></h1></span>
              <p className='mt-4'>India's first teacher visible online classes</p>
              <button className='button mt-4 mb-5 me-5 '> Request call back</button>
             <span className='mt-2'>  <a href=''><span className='p-2 play-button' ><PlayFill /></span > Watch Demo</a></span>
            </div>

          </div>

          <div className='col-lg-5 col-sm-12 pt-5 image'>
            <img className="table" src='../images/courses-img.png' alt='' />
          </div>
        </div>

        <div className='scroll-container '>
        <ul className='scroll-text pb-5'>
          <li> MERN Stack</li>
          <li> Java Script</li>
          <li> Angular</li>
          <li> HTML</li>
          <li> CSS</li>
          <li> React</li>
        </ul>
        </div>
      </div>
      <div className=' d-flex justify-content-around flex-wrap p-5 companies'>

        <img src='../images/Infosys_logo.png' alt='' />
        <img src='../images/Oracle_logo.png' alt='' width={150} height={30} />
        <img src='../images/People_Tech_logo.png' alt='' />
        <img src='../images/Coursera_logo.png' alt='' width={150} height={30} />
        <img src='../images/Tech_Mahendra_logo.png' alt='' />
        <img src='../images/Coursera_logo.png' alt='' width={150} height={30} />



      </div>
    </>
  )
}

export default Header