import React from 'react'
import { Stars } from 'react-bootstrap-icons'
import '../css/successstory.css'
import book from "../assests/book.png"
import edu from "../assests/edu.png"
import personcheck from "../assests/personcheck.png"

function SuccessStory() {


  return (
    <>
      <div className='SucessStory'>
        <div className='text-center'>
          <span className='badge '> <span><Stars className='stars' /> SucessStory</span></span>

          <span><h2 className='head d-flex d-flex flex-wrap  justify-content-center pt-2 '> World largest selection of <span className='font-color'>Courses</span></h2></span>
          <p className='sub-head text-center py-3'>At Tech U, we have a team of experienced and knowledgeable <br />experts dedicated to guiding </p>
        </div>

        <div className='story-cards'>
          <div className='row  gx-5 justify-content-center'>
            <div className='col-lg-4 col-md-6 col-sm-12 pb-3 align-item-center '>
              <span className='sucess-card'>
                <span className='bg-book sucess_icon'>
                  <img src={book} alt='' width={42} height={42} /> </span>
                <span><h3 className='count'>50+</h3>
                  <p className='count-title'>Special Courses</p>
                </span>
              </span>
            </div>
            <div className=' col-lg-4 col-md-6 col-sm-12 pb-3 align-item-center '>
              <span className='sucess-card'>
                <span className='bg-personcheck sucess_icon'><img src={personcheck} alt='' width={42} height={42} /> </span>
                <span><h3 className='count'>100+</h3>
                  <p className='count-title'>Enrolled Students</p>
                </span>
              </span>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-12  pb-3 align-item-center'>
              <span className='sucess-card'>
                <span className='bg-edu sucess_icon'><img src={edu} alt='' width={42} height={42} /> </span>
                <span><h3 className='count'>45+</h3>
                  <p className='count-title'>Expert Mentors</p>
                </span>
              </span>

            </div>
          </div>

        </div>

      </div>

    </>
  )
}

export default SuccessStory