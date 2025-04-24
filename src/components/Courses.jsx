import React from 'react'
import Slider from "react-slick";
import list from '../../public/list.json';
import Card from './Card';

const Courses = () => {
    const freeBook = list.filter((data) => data.category === "Free");
    console.log(`Filter data ${freeBook}`)
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
                <h1 className='font-semibold text-xl pb-2'>Free offered book</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, quasi repudiandae, animi recusandae nulla rem corporis illum possimus dolores quisquam earum officia beatae maxime neque asperiores excepturi voluptatum. Quaerat, suscipit!</p>

                <div className="slider-container py-5">
                        <Slider {...settings}>
                            {
                                freeBook.map((data) =>
                                    <Card dataList={data} key={data.id} />
                                )
                            }
                        </Slider>
                </div>
            </div>

        </>
    )
}

export default Courses