
import React, { useState } from 'react';
import '../css/ImageCarousel.css'; // Include your CSS file
// import img1 from '../assests/img1.jpg'
// import img2 from '../assests/img2.jpg'
// import img3 from '../assests/img3.jpg'
// import img4 from '../assests/img4.jpg'
// import img5 from '../assests/img5.jpg'

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';





const Carousel = () => {
    const reviews = [
        {
            image: "/images/img1.jpg",
            name: "Priyanka Erabethaneni",
            role: "MERK Fullstack Developer",
            company: "infosys",
            title: "It was a great Experience!",
            comments: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularized in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },
        {
            image: "/images/img2.jpg",
            name: "Priyanka Erabethaneni",
            role: "MERK Fullstack Developer",
            company: "infosys",
            title: "It was a great Experience!",
            comments: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularized in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },
        {
            image: "/images/img3.jpg",
            name: "Priyanka Erabethaneni",
            role: "MERK Fullstack Developer",
            company: "infosys",
            title: "It was a great Experience!",
            comments: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularized in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },
        {
            image: "/images/img4.jpg",
            name: "Priyanka Erabethaneni",
            role: "MERK Fullstack Developer",
            company: "infosys",
            title: "It was a great Experience!",
            comments: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularized in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },
        {
            image: "/images/img5.jpg",
            name: "Priyanka Erabethaneni",
            role: "MERK Fullstack Developer",
            company: "infosys",
            title: "It was a great Experience!",
            comments: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularized in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },
        {
            image: "/images/img1.jpg",
            name: "Priyanka Erabethaneni",
            role: "MERK Fullstack Developer",
            company: "infosys",
            title: "It was a great Experience!",
            comments: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularized in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },
        {
            image: "/images/img2.jpg",
            name: "Priyanka Erabethaneni",
            role: "MERK Fullstack Developer",
            company: "infosys",
            title: "It was a great Experience!",
            comments: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularized in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },
        {
            image: "/images/img3.jpg",
            name: "Priyanka Erabethaneni",
            role: "MERK Fullstack Developer",
            company: "infosys",
            title: "It was a great Experience!",
            comments: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularized in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },
        {
            image: "/images/img4.jpg",
            name: "Priyanka Erabethaneni",
            role: "MERK Fullstack Developer",
            company: "infosys",
            title: "It was a great Experience!",
            comments: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularized in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },
        {
            image: "/images/img5.jpg",
            name: "Priyanka Erabethaneni",
            role: "MERK Fullstack Developer",
            company: "infosys",
            title: "It was a great Experience!",
            comments: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularized in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },
    ]

    const options = {
        items: 1,
        center: true,
        autoplay: false,
        autoplayTimeout: 4000,
        animationOut: 'slideOutUp',
        nav: true,
        dots: false,
        margin: 100,
        responsive: {
            1100: {
                items: 7
            },
            724: {
                items: 3
            },
            370: {
                items: 1
            },
        }
    }


    return (
        <>
            {/* <OwlCarousel className='owl-theme' loop margin={10} >
              { 
                reviews.map((val)=>(
                    <div class='item'>
                      <div>
                      <p className='comments'> {val.comments}</p>
                      </div>

                    
                 
                    </div>
                ))
              }
            </OwlCarousel>; */}

            <div className=' dummy-text'>
                <div className='  '>
                    <h4>It was a great Experience</h4>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type
                        specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged. It was popularized in the 1960s with the release of Letraset sheets containing
                        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </div>


            <OwlCarousel className='owl-theme' loop margin={10} {...options}>
                {
                    reviews.map((val) => (
                        <div class='item'>
                            {/* <div>
                      <p className='comments'> {val.comments}</p>
                      </div> */}

                            <img src={val.image} alt='' />

                        </div>
                    ))
                }
            </OwlCarousel>;

        </>
    );
};

export default Carousel;