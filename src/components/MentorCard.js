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
        <div>
          <div>
            <img src='' alt=''/>
          </div>
          <div>
            <h5></h5>
            <p></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default MentorCards