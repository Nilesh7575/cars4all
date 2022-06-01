import React from 'react'
import './aboutus.css'





const Aboutus = () => {
    return (
        <div className="aboutus-div ">
            <div className="aboutus-content-left ">
                <h1>About Us</h1>
                <p>Cars4All is a professionally managed used cars | pre-owned cars company offering cars with good after sales, service and warranty to keep your car as the best companion in your life.</p>
                <a class="aboutus-contactButton" href=""><span>Contact Us</span></a>
            </div>


            <div className="aboutus-content-right">
                <div className="left-div">
                    <div className="left-first">
                        <div>
                            <img src="./CertifiedCars.png" alt="" />
                        </div>
                        <div>
                            <h5>Certified Cars</h5>
                            <p>CARS4ALL used cars are certified by trained people and fit to run like a new car.</p>
                        </div>
                    </div>
                    <div className="left-second">
                        <div>
                            <img src="./Affordable.png" alt="" />
                        </div>
                        <div>
                            <h5>Affordable price with loan facility & road side assistance</h5>
                            <p>CARS4ALL is offering cars at a very affordable price based on the customer requirement with loan arrangement and road side assistance.</p>
                        </div>
                    </div>
                </div>
                <div className="right-div">
                <div className="right-first">
                        <div>
                        <img src="./Exchangefacility.png" alt="" />
                        </div>
                        <div>
                            <h5>Exchange facility</h5>
                            <p>Customers can sell their used cars and buy a car of their choice from CARS4ALL.</p>
                        </div>
                    </div>
                    <div className="right-second">
                        <div>
                        <img src="./ParkingSale.png" alt="" />
                        </div>
                        <div>
                            <h5>Parking Sale</h5>
                            <p>Customers can avail CARS4ALL park and sell facility to sell their used car.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Aboutus