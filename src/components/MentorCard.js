import React from 'react'
import '../css/teammembers.css'

function MentorCards({ image, name, role,bgcolor }) {




  return (
    <>

      <div class="col">
        {/* <div class="image-cards">
          <span className='px-4 pt-4' style={{backgroundColor:`${bgcolor}`}}>
            <img className="" src={image} class="card-img-top" alt="..." height={240} width={100} /></span>
          <div class="card-body">
            <h5 class="card-title">{name}</h5>
          </div>
          <small class="text-muted">{role}</small>
        </div> */}
        <div className='mentor-card'>
          <div className='img-containter' style={{backgroundColor:`${bgcolor}`}}>
            <img src={image} alt='' width={"100%"} height={"250"}/>
          </div>
          <div className='mt-4'>
            <h5>{name}</h5>
            <p>{role}</p>
            <span>
              links
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default MentorCards