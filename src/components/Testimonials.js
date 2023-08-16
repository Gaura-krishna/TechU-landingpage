import React from 'react'
import '../css/testimonials.css'
import { Stars } from 'react-bootstrap-icons'
import Carousel from './Carousel'

function Testimonials() {
    return (
        <>
            <div className='testimonials'>
                <span className='badge'> <span><Stars className='stars' /> Testimonials</span></span>
                <div>
                    <h2 className='head'>  Our learners have to say <br/>about the Program</h2>
                    <p className='sub-head'>lorem this is dummy text</p>
                </div>

                <div>
                <Carousel/>
                
                </div>

            </div>

        </>
    )
}

export default Testimonials