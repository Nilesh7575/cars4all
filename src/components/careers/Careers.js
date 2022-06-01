import React from 'react'
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";
import './career.css';



const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    }
};


const testCarousel = [
    {
        para: "The best place to buy used cars in Chennai. The way of approching the customers(especially Shiva) is the key success point of them. Supporting 24*7, friendly workers.Just make a visit to the spot to know more. I'm totally satisfied with their service.1000% you can trust them.",
        img: "https://www.cars4all.in/static/media/default.15f8b310.svg",
        auther: "- Asok Kumar"
    },
    {
        para: "Economical and good in arranging finance for buying cars. No customer complaint so far",
        img: "https://www.cars4all.in/static/media/default.15f8b310.svg",
        auther: "- Franklin, owner Blessing Tours and Travels."
    },
    {
        para: "Honest and transparent business deal. They are very good in buying and selling of used cars",
        img: "https://www.cars4all.in/static/media/default.15f8b310.svg",
        auther: "- Mr. Anandan, used car dealer."
    },
    {
        para: "Very open and flexible dealings....Good  customer satisfaction....bough Hyundai  santafe....Very happy to get this  vechicle  at low cost...",
        img: "https://www.cars4all.in/static/media/default.15f8b310.svg",
        auther: "- Mkarthick Uma"
    },
    {
        para: "I bought a swift vdi from shiva cars.. it's working good.. reasonable price .. nice atmoshpire also.. especially I like the way of approaching the customers .. thank you shiva cars",
        img: "https://www.cars4all.in/static/media/default.15f8b310.svg",
        auther: "- Babu M"
    }
]



const Careers = () => {
    return (
        <>
            <div className="career-top container">
                <h4>CAREERS</h4>
                <div class="hiring_positionChip">Web Developers</div>
                <div class="hiring_positionChip">Mobile App Developers</div>
                <div class="hiring_positionChip">Car Inspection Specialists</div>
                <div class="hiring_positionChip">Sales Engineers</div>
                <div class="hiring_positionChip">Accounts Assistants</div>
                <div class="hiring_positionChip">Liasion Officers</div>
                <div class="hiring_tag">
                    <span>Send your profile to</span>
                    <a href="mailto: admin@cars4all.in" target="_blank" rel="noopener noreferrer">
                        <span>admin@cars4all.in</span>
                    </a>
                </div>
            </div>
            <div className="career-bottom container">
                <h4>OUR TESTIMONIALS...</h4>

                <Carousel
                    className="cara"
                    responsive={responsive}
                    infinite={true}
                    draggable={false}
                    swipeable={true}
                    showDots={true}
                    centerMode={true}
                    autoPlay={true}
                    autoPlaySpeed={3000}
                    keyBoardControl={true}
                    removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-30-px"
                    containerClass="carousel-container"
                >
                    {
                        testCarousel.map((e, i) => {
                            console.log(e)
                            return (
                                <div className="career-carousel">
                                    <blockquote>{e.para}<br />
                                        <span class="testimonials_avatar">
                                            <img src={e.img} alt="author" />
                                        </span>
                                        <span>{e.auther}</span>
                                    </blockquote>
                                </div>
                            )
                        })
                    }
                </Carousel>

            </div>
        </>
    )
}

export default Careers