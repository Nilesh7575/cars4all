import React from 'react'
import "./footer.css"
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import CallIcon from '@material-ui/icons/Call';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import CopyrightIcon from '@material-ui/icons/Copyright';
const Footer = () => {
    return (
        <div className="footer-div">
            <div className="container ">
                <div class="row text-left">
                    <div class="mb-4 col-sm-6 col-md-4 col-lg-3">
                        <h3>CARS4ALL</h3>
                        <div class="footer-head-line"></div>
                        <p>
                            <a className="mail-contact" href="mailto: admin@cars4all.in" target="_blank" rel="noopener noreferrer"><MailOutlineIcon />&nbsp;admin@cars4all.in</a>
                        </p>
                        <p>
                            <a className="mail-contact" href="tel:+91 9360037217"><CallIcon />&nbsp;+91 9360037217</a>
                        </p>
                        <div class="Footer_social">
                            <div>
                                <a href="https://www.facebook.com/advaithmarvar" target="_blank" rel="noopener noreferrer"><FacebookIcon className="social-icon"/></a>
                            </div>
                            <div>
                                <a href="https://www.linkedin.com/in/cars4all-india-67b1921b6/" target="_blank" rel="noopener noreferrer"><LinkedInIcon className="social-icon"/></a>
                            </div>
                            <div>
                                <a href="https://twitter.com/cars4all3" target="_blank" rel="noopener noreferrer"><TwitterIcon className="social-icon"/></a>
                            </div>
                            <div>
                                <a href="https://instagram.com/cars4all5?igshid=1sazol5nqdxhg" target="_blank" rel="noopener noreferrer"><InstagramIcon className="social-icon"/></a>
                            </div>
                        </div>
                    </div>
                    <div class="mb-4 col-sm-6 col-md-4 col-lg-3">
                        <h3><span>Quick Links</span></h3>
                        <div class="footer-head-line"></div>
                        <div class="footer_quick-links">
                            <div><a href="/contact_us"><span>Contact Us</span></a></div>
                            <div><a href="/sell_car"><span>Sell Your Car</span></a></div>
                            <div><a href="/car_listings">Cars for sale in Chennai</a></div>
                        </div>
                    </div>
                    <div class="mb-4 col-sm-6 col-md-4 col-lg-3">
                        <h3><span>About Us</span></h3>
                        <div class="footer-head-line"></div>
                        <div>
                            <span className="about-us-para">Cars4All is a professionally managed used cars | pre-owned cars company offering cars with good after sales, service and warranty to keep your car as the best companion in your life.</span>
                        </div>
                    </div>
                    <div class="mb-4 col-sm-6 col-md-4 col-lg-3">
                        <h3><span>Road Map</span></h3>
                        <div class="footer-head-line"></div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.8085023009953!2d80.11715251485683!3d13.047858116730598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52618ad484473f%3A0x556f8d6fccbda18b!2sMarvar%20India%20pvt.ltd..%2C!5e0!3m2!1sen!2sin!4v1598862507848!5m2!1sen!2sin"
                            width="100%" height="200" frameborder="0" aria-hidden="false" tabindex="0" title="Marvar India" style={{ border: "0px" }}></iframe>
                    </div>
                </div>
            </div>
            <div className="copyright-div">
            Copyright <CopyrightIcon className="copy-icon"/> Marvar. All rights reserved
            </div>
        </div>
    )
}

export default Footer