import React, { useState } from 'react'
// import courseimg from "../assests/courses.jpg";
import { PersonFill, Star, StarFill, Stars } from 'react-bootstrap-icons'
import '../css/courses.css'




function Courses() {
    const courseslist = [
        {
            "title": "Learn MERN with  our Experts from basics to Advance.",
       
            "trainer": "Atul Sharma",
            "rating": "4.9",
            "images": "/images/courses.jpg",
            "price": 16000,
            "discountprice": 12000

        },
        {
            "title": "Learn MERN with  our Experts from basics to Advance.",
       
            "trainer": "Atul Sharma",
            "profile": "bi bi-person-circle",
            "rating": "4.9",
            "images": "/images/courses.jpg",
            "price": 16000,
            "discountprice": 12000

        },
        {
            "title": "Learn MERN with  our Experts from basics to Advance.",
       
            "trainer": "Atul Sharma",
            "profile": "bi bi-person-circle",
            "rating": "4.9",
            "images": "/images/courses.jpg",
            "price": 16000,
            "discountprice": 12000

        },
        {
            "title": "Learn MERN with  our Experts from basics to Advance.",
       
            "trainer": "Atul Sharma",
            "profile": "bi bi-person-circle",
            "rating": "4.9",
            "images": "/images/courses.jpg",
            "price": 16000,
            "discountprice": 12000

        },
        {
            "title": "Learn MERN with  our Experts from basics to Advance.",
       
            "trainer": "Atul Sharma",
            "profile": "bi bi-person-circle",
            "rating": "4.9",
            "images": "/images/courses.jpg",
            "price": 16000,
            "discountprice": 12000

        },
        {
            "title": "Learn MERN with  our Experts from basics to Advance.",
            "trainer": "Atul Sharma",
            "profile": "bi bi-person-circle",
            "rating": "4.9",
            "images": "/images/courses.jpg",
            "price": 16000,
            "discountprice": 12000

        },
    ]


    return (
        <>
            <div className='ps-5  Courses '>
                <span className='badge'> <span><Stars className='stars' /> Popular Courses</span></span>
                <div>
                    <span><h2 className='head py-3'>  Choose Our Top <span className='font-color'>Courses</span></h2></span>
                    <p className='sub-head'>lorem this is dummy text</p>
                </div>

                <div className='row gx-0'>
                    {
                        courseslist.map((course) =>
                        (
                            <div className="  col-lg-4 col-md-6 col-sm-12 px-3  mt-3" >
                                <div className='card'>
                                    <img src={course.images} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h6 className="card-title card-headers">{course.title}</h6>
                                        <span className="d-flex align-text-bottom">
                                            <span className='trainer'>
                                                <PersonFill className='profile' /> {course.trainer}
                                            </span>
                                            <span className='ms-auto align-center'>
                                                <StarFill title='rating' className='star' />{course.rating}</span>
                                        </span>
                                    </div>
                                    <hr className='m-3 mt-0 mb-0' />
                                    <span className="d-flex justify-content-between p-3 align-center">
                                        <span className='discount-price '>   {course.discountprice}
                                            <span className='strike mx-2' >    {course.price}</span>
                                        </span>

                                        <button className='veiwallcourses'>Enroll Now</button>
                                    </span>
                                </div>

                            </div>
                        ))
                    }
                </div>

                <div className='text-center m-5'>
                    <button className='veiwallcourses'>View all courses</button>
                </div>
            </div>
        </>
    )
}

export default Courses