import React from 'react'
import './footer.css'
import {FaPhone,FaMailBulk,FaLocationArrow,FaFacebook,FaLinkedinIn,FaTwitter,FaInstagram}  from 'react-icons/fa'

function footer () {
  return <>
        <section className="footer">
            <div className="head">
                <div className="tags">
                <div className="icon">
                    <FaPhone/>
                </div>
                <div className="body">
                    <h6>(+92) 310-8767844</h6>
                </div>
                </div>

                <div className="tags">
                <div className="icon">
                    <FaMailBulk/>
                </div>
                <div className="body">
                    <h6>dumy@email.com</h6>
                </div>
                </div>

                <div className="tags">
                <div className="icon">
                    <FaLocationArrow/>
                </div>
                <div className="body">
                    <h6>Wah Cantt, Pakistan</h6>
                </div>
                </div>
                    
            </div>
            <hr/>
            <div className="foot">
                <div className="abouts">
                    <h5>About</h5>
                    <ul>
                        <li>Our Story</li>
                        <li>Awards</li>
                        <li>Our Team</li>
                        <li>Career</li> 
                    </ul>
                </div>
                <div className="company">
                <h5>Company</h5>
                    <ul>
                        <li>Our Services</li>
                        <li>Client </li>
                        <li>Contact</li>
                        <li>Press</li> 
                    </ul>
                </div>
                <div className="resources">
                <h5>Resources</h5>
                    <ul>
                        <li>Blog</li>
                        <li>Newsletter</li>
                        <li>Privacy Policy</li> 
                    </ul>
                </div>
                <div className="subscribe">
                    <h5>Subscribe</h5>
                    <ul>
                        <li><input type="text" placeholder='Email Address'/></li>
                        <li><i>Get digital marketing updates in your mailbox</i></li>
                    </ul>
                </div>
            </div>
            <div className="social">
                <div className="facebook">
                    <FaFacebook/>
                </div>
                <div className="facebook">
                    <FaLinkedinIn/>
                </div>
                <div className="facebook">
                    <FaTwitter/>
                </div>
                <div className="facebook">
                    <FaInstagram/>
                </div>
            </div>
            <div className="copyrightTag">
            <p>Ⓒ	2019 Private Company Limited. All Rights Reserved</p>
            </div>
        </section>
    </>
}

export default footer
