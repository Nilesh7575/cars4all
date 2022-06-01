import React from 'react'
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";
import './cover.css'


const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 7,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    }
};

const brandImg = [
    { url: "https://vehicle-images-cars4all.s3.ap-south-1.amazonaws.com/brand/082fcb6f-e36f-4674-8db3-c8393140debc.jpeg" },
    { url: "https://vehicle-images-cars4all.s3.ap-south-1.amazonaws.com/brand/8cd52282-5e95-4489-80af-2c05e8f73a89.jpeg" },
    { url: "https://vehicle-images-cars4all.s3.ap-south-1.amazonaws.com/brand/00ef06b4-8326-434b-80b5-1af83bb81f69.jpeg" },
    { url: "https://vehicle-images-cars4all.s3.ap-south-1.amazonaws.com/brand/025cdd6f-da6d-4678-a16f-32be4d0f5f5c.jpeg" },
    { url: "https://vehicle-images-cars4all.s3.ap-south-1.amazonaws.com/brand/8e3cf9aa-649a-4918-9150-e979d7b1b682.jpeg" },
    { url: "https://vehicle-images-cars4all.s3.ap-south-1.amazonaws.com/brand/38b3ec62-829d-433c-9d38-37f1e26d5e26.jpeg" },
    { url: "https://vehicle-images-cars4all.s3.ap-south-1.amazonaws.com/brand/2addc605-04ee-4404-bb74-aacc071d443f.jpeg" },
    { url: "https://vehicle-images-cars4all.s3.ap-south-1.amazonaws.com/brand/df88ece0-1803-45c7-9331-b3241ea3f1d9.jpeg" },
    { url: "https://vehicle-images-cars4all.s3.ap-south-1.amazonaws.com/brand/06d9f3f3-509f-4dc5-a770-5b86187d1b01.jpeg" },
    { url: "https://vehicle-images-cars4all.s3.ap-south-1.amazonaws.com/brand/ac75a542-d22b-4f41-907f-5678777960ac.jpeg" },
    { url: "https://vehicle-images-cars4all.s3.ap-south-1.amazonaws.com/brand/a7e2bcd2-1875-4108-a2a8-0453c3fca9a7.png" },
    { url: "https://vehicle-images-cars4all.s3.ap-south-1.amazonaws.com/brand/b11cf0a8-56ec-47ce-9fc6-a8546d2dede0.png" },
    { url: "https://vehicle-images-cars4all.s3.ap-south-1.amazonaws.com/brand/76a93a36-0138-4db5-861b-26b5e113a556.jpeg" },
    { url: "https://vehicle-images-cars4all.s3.ap-south-1.amazonaws.com/brand/5e06ef38-a5ee-4221-be27-c347c2a24d41.png" },
    { url: "https://vehicle-images-cars4all.s3.ap-south-1.amazonaws.com/brand/ca6ebf01-b70c-4a13-bd56-8ae08d329bbc.png" },

]

const Cover = () => {
    return (
        <>
            <img className="cover" src="https://www.cars4all.in/static/media/carF.0f9ee72b.png" width="100%" height="590px" alt="" />

            <div className="coverdiv">
                <div className="coverdiv-in">
                    <div>
                        <p className="cover-head">CARS<span className="cover-head-span">4</span>ALL</p>
                        <p style={{ textAlign: 'center' }}>Find Your Lovely Car</p>
                        <div className="Landing_tabs__1ut6H">
                            <div className="Landing_tab__2YRYa Landing_selectedTab__2Iu0E">
                                <span>Buy Car</span>
                            </div>
                            <a href="/sell_car">
                                <div className="Landing_tab__2YRYa null">
                                    <span>Sell Car</span>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className=" car-search-div">
                        <div className="">
                            <select className="car-search-dropdown">
                                <option value="">Brand</option>
                                <option value="">1</option>
                            </select>
                        </div>
                        <div >
                            <select className="car-search-dropdown">
                                <option value="">Model</option>
                                <option value="">1</option>
                            </select>
                        </div>
                        <div class="btn Landing_goBtn__1olfT">
                            <span>Search</span>
                        </div>
                    </div>
                </div>

            </div>
            <div className="brand-carousel-div">
                <p>Brands available</p>
                <div className="carousel-div">
                    <Carousel
                        responsive={responsive}
                        infinite={true}
                        draggable={false}
                        swipeable={true}
                        showDots={false}
                        centerMode={true}
                        autoPlay={true}
                        autoPlaySpeed={1500}
                        keyBoardControl={true}
                        removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
                        dotListClass="custom-dot-list-style"
                        itemClass="carousel-item-padding-40-px"
                        containerClass="carousel-container"
                    >
                        {
                            brandImg.map((e, i) => {
                                console.log(e.url)
                                return (
                                    <div key={i} className="carousel-img">
                                        <img src={e.url} alt="productitem" height="75px" width="100px" />
                                    </div>
                                )
                            })
                        }
                    </Carousel>
                </div>
            </div>
        </>
    )
}

export default Cover