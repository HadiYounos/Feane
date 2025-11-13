
import './Home.css'
import About from '../About/About'
import Menu from '../Menu/Menu'
import Book from '../Book/Book'



export default function Home() {
   
  return (
    <>
      <section className='row row-cols-1 row-cols-md-2 g-2 Tasty'>
      <div className="offer-container">
              <div className="">
        <div className="row">
          <div className="col-md-6">
            <div className="box">
              <div className="image">
                <img src="/images/o1.jpg" alt="" />
              </div>
              <div className="box-content">
                <h5 className='fs-3'>Tasty Thursdays</h5>
                <h6 className='fs-1'>20% <span className='fs-5'>off</span></h6>
                <button className='order'>Order Now <i className="fa-solid fa-cart-shopping"></i></button>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="box">
              <div className="image">
                <img src="/images/o2.jpg" alt="" />
              </div>
              <div className="box-content">
                <h5 className='fs-3'>Pizza Days</h5>
                <h6 className='fs-1'>15% <span className='fs-5'>off</span></h6>
                <button className='order'>Order Now <i className="fa-solid fa-cart-shopping"></i></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      </section>
      <Menu/>
      <About/>
      <section>
        <div className="container text-center">
          <h5 className='fs-1 m-5'>Our Services</h5>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="serv text-center">
                <div className="serv-img">
                  <img src="/images/restaurant-service-icon01.png" alt="serv" />
                </div>
                <div className="serv-body mt-3">
                  <span className='fs-3'>Break Fast</span>
                  <p>A cozy restaurant offering fresh, delicious breakfast dishes with warm service and a welcoming atmosphere daily.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="serv text-center">
                <div className="serv-img">
                  <img src="/images/restaurant-service-icon02.png" alt="serv" />
                </div>
                <div className="serv-body mt-3">
                  <span className='fs-3'>Lunch</span>
                  <p>A vibrant restaurant offering unique, freshly prepared lunch meals with creative flavors and exceptional service daily.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="serv text-center">
                <div className="serv-img">
                  <img src="/images/restaurant-service-icon03.png" alt="serv" />
                </div>
                <div className="serv-body mt-3">
                  <span className='fs-3'>Diner</span>
                  <p>A stylish restaurant serving exceptional, freshly crafted dinner dishes with unique flavors and a charming ambiance nightly.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="serv text-center">
                <div className="serv-img">
                  <img src="/images/restaurant-service-icon04.png" alt="serv" />
                </div>
                <div className="serv-body mt-3">
                  <span className='fs-3'>Drinks</span>
                  <p>A trendy spot offering unique, handcrafted beverages with bold flavors and a relaxed, inviting atmosphere daily.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Book/>
<section className='text-center mt-5 pt-5 mb-5 pb-5'>
  <h2>What Says Our Customers</h2>
  <div id="customerCarousel" className="carousel slide container" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <div className="row justify-content-center">
          <div className="col-12 col-md-6 mb-4 mb-md-0">
            <div className="item-box h-100">
              <div className="item-details">
                <p>"I loved the food here! The pizza was fresh, the burgers were juicy, and the fries perfectly crispy. Great service, friendly staff, and a cozy atmosphere made the experience even better."</p>
                <h4>Moana Michell</h4>
              </div>
              <div className="item-img">
                <img src="/images/client1.jpg" alt="Moana Michell" className="img-fluid" />
              </div>
            </div>
          </div>
          <div className="col-md-6 d-none d-md-block">
            <div className="item-box h-100">
              <div className="item-details">
                <p>"Fast service, tasty food, and affordable prices. The chicken burger was delicious, and the seafood pizza was unforgettable. Highly recommend it for families and friends gatherings."</p>
                <h4>Mike Hamell</h4>
              </div>
              <div className="item-img">
                <img src="/images/client2.jpg" alt="Mike Hamell" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="carousel-item">
        <div className="row justify-content-center">
          <div className="col-12 col-md-6 mb-4 mb-md-0">
            <div className="item-box h-100">
              <div className="item-details">
                <p>"Such a great fast-food spot! The menu has variety, from cheesy pasta to flavorful burgers. Everything was served hot and fresh. Perfect for casual meal with friends or family."</p>
                <h4>Ryan Lewis</h4>
              </div>
              <div className="item-img">
                <img src="/images/three.jpg" alt="Ryan Lewis" className="img-fluid" />
              </div>
            </div>
          </div>
          <div className="col-md-6 d-none d-md-block">
            <div className="item-box h-100">
              <div className="item-details">
                <p>"Wonderful place! I enjoyed the Margherita pizza and crispy fries. Everything was flavorful and freshly made. Staff were very polite and welcoming. Definitely coming back again soon."</p>
                <h4>Martin Moon</h4>
              </div>
              <div className="item-img">
                <img src="/images/two.jpg" alt="Martin Moon" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="d-flex justify-content-center gap-2 mt-3">
      <button className="btn border-0" type="button" data-bs-target="#customerCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="btn border-0" type="button" data-bs-target="#customerCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</section>
    </>
  )
}
