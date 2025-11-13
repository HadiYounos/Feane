import React from 'react'

export default function Footer() {
  return (
    <>
    <footer>
          <div className="footer-container container">
            <div className="row">
              <div className="col-md-4 footer-col">
                <div className="footer-content">
                  <h5 className='fs-3'>Contact Us</h5>
                  <div className="contact-box">
                    <a href="#N"><i className="fa-solid fa-location-dot"></i><span>Location</span></a>
                    <a href="#N"><i className="fa-solid fa-phone"></i><span>Call +010 1234567890</span></a>
                    <a href="#N"><i className="fa-solid fa-envelope"></i><span>Demo@gmail.com</span></a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 footer-col">
                <div className="footer-details">
                  <a href="#Feane" className='footer-logo mb-5'>Feane</a>
                  <p>Necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with</p>
                  <div className="footer-social">
                    <a href="#N"><i className="fa-brands fa-facebook-f"></i></a>
                    <a href="#N"><i className="fa-brands fa-twitter"></i></a>
                    <a href="#N"><i className="fa-brands fa-linkedin-in"></i></a>
                    <a href="#N"><i className="fa-brands fa-instagram"></i></a>
                    <a href="#N"><i className="fa-brands fa-pinterest-p"></i></a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 footer-col">
                  <h5 className='fs-3'>Opening Houres</h5>
                  <p className='mt-4'>Every Day</p>
                  <p>10:00 Am - 10:00 Pm</p>
              </div>
            </div>
            <div className="footer-info mt-5">
              <p><span>©</span> 2025 All Rights Reserved By Free Html Templates</p>
              <p>© Distributed By ThemeWagon</p>
            </div>
          </div>
        </footer>
    </>
  )
}
