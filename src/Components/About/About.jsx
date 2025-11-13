import React from 'react'
import './About.css'


export default function About() {
  return (
    <>
    
 <section className='about-section'>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="img-about">
              <img src="/images/about-img.png" alt="" />
            </div>
          </div>
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <div className="about-details">
              <h2 className='ps-3'>We Are Feane</h2>
              <p className='ps-3 mb-4'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All</p>
              <button className='order ps-5 pe-5 fs-5'>Read More</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    </>
  )
}
