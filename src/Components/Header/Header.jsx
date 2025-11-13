import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Header.css'
export default function Header() {
  return (
    <>
    <header>
      <Navbar/>
                <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner container">
    <div className="carousel-item  active">
      <h1>Fast Food Restaurant</h1>
      <p className='pra'>A vibrant fast-food restaurant serving delicious pizzas, juicy burgers, and crispy golden fries. Perfect for quick bites, friendly hangouts, or casual family meals with great taste, fast service, and affordable prices.</p>
      <button className='order-now'>Order Now</button>
    </div>
    <div className="carousel-item ">
            <h1>Fast Food Restaurant</h1>
      <p  className='pra'>Enjoy a fast-food experience with freshly baked pizzas, flavorful burgers, and crunchy fries. A cozy spot combining great taste, speedy service, and unbeatable value for friends and families alike.</p>
      <button className='order-now'>Order Now</button>
    </div>
    <div className="carousel-item ">
            <h1>Fast Food Restaurant</h1>
      <p  className='pra'>Savor mouthwatering pizzas, classic burgers, and crispy fries at our fast-food spot. Quick service, bold flavors, and a casual atmosphere make it the perfect choice anytime you crave delicious comfort food.</p>
      <button className='order-now'>Order Now</button>
    </div>
  </div>
  <div className="d-flex justify-content-start gap-2 header-button">
  <button className="prev border-0" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <i class="fa-solid fa-arrow-left"></i>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="next border-0" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <i class="fa-solid fa-arrow-right"></i>
    <span className="visually-hidden">Next</span>
  </button>
  </div>
</div>
    </header>
    </>
  )
}
