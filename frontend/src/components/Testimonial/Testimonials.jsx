import React from 'react'
import Slider from 'react-slick'
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'

const Testimonials = () => {

    const settings = {
        dots: true,
        infinite: true,
        autoply: true,
        speed: 1000,
        swipeToSlide: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,

        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinte: true,
                    dots: true,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            }
        ]

    }
    return <Slider {...settings}>
        <div className="testimonial py-4 px-3" >
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ex porro sequi ullam facere atque minus quo quasi perspiciatis fugiat vitae perferendis sunt quae assumenda nulla at, ipsum voluptas quis!</p>
            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava01} className='w-25 h-25 rounded-2' alt="" />
                <h6 className="mb-0 mt-3  ">John doe</h6>
                <p>Customer</p>
            </div>
        </div>
        <div className="testimonial py-4 px-3" >
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ex porro sequi ullam facere atque minus quo quasi perspiciatis fugiat vitae perferendis sunt quae assumenda nulla at, ipsum voluptas quis!</p>
            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava02} className='w-25 h-25 rounded-2' alt="" />
                <h6 className="mb-0 mt-3  ">Lia Franklin</h6>
                <p>Customer</p>
            </div>
        </div>
        <div className="testimonial py-4 px-3" >
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ex porro sequi ullam facere atque minus quo quasi perspiciatis fugiat vitae perferendis sunt quae assumenda nulla at, ipsum voluptas quis!</p>
            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava03} className='w-25 h-25 rounded-2' alt="" />
                <h6 className="mb-0 mt-3">John doe</h6>
                <p>Customer</p>
            </div>
        </div>
        <div className="testimonial py-4 px-3" >
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ex porro sequi ullam facere atque minus quo quasi perspiciatis fugiat vitae perferendis sunt quae assumenda nulla at, ipsum voluptas quis!</p>
            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava02} className='w-25 h-25 rounded-2' alt="" />
                <h6 className="mb-0 mt-3  ">Lia Franklin</h6>
                <p>Customer</p>
            </div>
        </div>

    </Slider>
}

export default Testimonials