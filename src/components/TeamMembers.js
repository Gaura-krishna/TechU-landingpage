import React from 'react'
import { Stars } from 'react-bootstrap-icons'
import '../css/teammembers.css'
import MentorCards from './MentorCard.js'

function TeamMembers() {
  const mentorlist = [
    {
      image: "/images/archanapng.png",
      name: "Archana Tygi",
      role: "UI/UX Designing Couch ",
      bgcolor:"#E06491",
      links: "",
    },
    {
      image: "/images/rohitpng.png",
      name: "Rohit A",
      role: "PHP Trainer",
      bgcolor:"#EC4456",
      links: "",
    },
    {
      image: "/images/arunpng.png",
      name: "Arun Rudra",
      role: "Front-End Development Coach",
      bgcolor:"#085692",
      links: "",
    },
  ]
  return (
    <>
      <div className='teammembers row  '>


        <div className='col col-lg-6 col-md-12 col-sm-12'>
          <span className='badge'> <span><Stars className='stars' /> Team Members</span></span>
          <div>
            <span><h1 className='head'>Our Export <br /><span className='font-color'>Instructors</span></h1></span>
            <p className='sub-head'>At Tech U, we have a team of experienced and knowledgeable experts dedicated to guiding </p>
          </div>

          <div className='text-start m-5'>
            <button className='joinus'>Join with Us?</button>
          </div>
          <div className='mail'>
            Lorem Ipsum is simply dummy text of the printing <span className='info-mail'>info@techu.com</span>

          </div>

        </div>

        <div className='col col-lg-6 col-md-12 col-sm-12'>
          <div class="row  g-4">
            {
              mentorlist.map((mentor) => {
                return (
                  < MentorCards image={mentor.image} name={mentor.name} role={mentor.role} bgcolor={mentor.bgcolor}/>)
              })
            }

          </div>
        </div>
      </div>
    </>
  )
}

export default TeamMembers