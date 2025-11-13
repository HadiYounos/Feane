import React, { useState, useMemo } from 'react';
import './Menu.css'
const MENU_ITEMS = [
  { id: 1, name: 'Delicious Pizza', desc: 'Delicious seafood pizza topped with shrimp, calamari, and mozzarella, baked to perfection for ocean-inspired flavor.', price: 20, img: '/images/f1.png', category: 'pizza' },
  { id: 2, name: 'Double Burger', desc: 'Juicy beef burger with melted cheese, fresh lettuce, tomatoes, pickles, and signature sauce in a soft bun.', price: 15, img: '/images/f2.png', category: 'burger' },
  { id: 3, name: 'Delicious Pizza', desc: 'Classic Margherita pizza with fresh tomatoes, creamy mozzarella, and fragrant basil, baked for perfect simplicity.', price: 17, img: '/images/f3.png', category: 'pizza' },
  { id: 4, name: 'Delicious Pasta', desc: 'Delicious pasta tossed with fresh vegetables, light seasoning, and olive oil for a healthy flavorful meal.', price: 18, img: '/images/f4.png', category: 'pasta' },
  { id: 5, name: 'French Fries', desc: 'Golden crispy fries, perfectly seasoned and fried to a crunchy outside with a soft, fluffy inside.', price: 10, img: '/images/f5.png', category: 'fries' },
  { id: 6, name: 'Delicious Pizza', desc: 'Fresh vegetable pizza loaded with bell peppers, olives, mushrooms, onions, and mozzarella, baked to perfection.', price: 15, img: '/images/f6.png', category: 'pizza' },
  { id: 7, name: 'Tasty Burger', desc: 'Juicy beef burger with melted cheese, fresh lettuce, tomatoes, pickles, and signature sauce in a soft bun.', price: 12, img: '/images/f7.png', category: 'burger' },
  { id: 8, name: 'Tasty Burger', desc: 'Tender grilled chicken burger topped with lettuce, tomato, pickles, and special sauce for irresistible flavor.', price: 14, img: '/images/f8.png', category: 'burger' },
  { id: 9, name: 'Pasta Special', desc: 'Creamy cheese pasta with rich, melted cheese sauce coating every bite for ultimate comfort and flavor.', price: 10, img: '/images/f9.png', category: 'pasta' },
];

const CATEGORIES = [
  { id: 'all', label: 'All', filter: '*' },
  { id: 'burger', label: 'Burger', filter: 'burger' },
  { id: 'pizza', label: 'Pizza', filter: 'pizza' },
  { id: 'pasta', label: 'Pasta', filter: 'pasta' },
  { id: 'fries', label: 'Fries', filter: 'fries' },
];

export default function Menu() {
  const [activeFilter, setActiveFilter] = useState('*');

  const filteredItems = useMemo(() => {
    if (activeFilter === '*') return MENU_ITEMS;
    return MENU_ITEMS.filter(item => item.category === activeFilter);
  }, [activeFilter]);

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <section className="menu text-center container mt-5 pt-5 mb-5 pb-5 active" aria-labelledby="menu-heading">
      <h2 id="menu-heading">Our Menu</h2>

      <div role="tablist" aria-label="Food categories">
        <ul className="menu-ul d-flex justify-content-center list-unstyled p-0 mb-4 flex-wrap">
          {CATEGORIES.map(cat => (
            <li
              key={cat.id}
              role="tab"
              tabIndex="0"
              className={`pointer ${cat.filter === activeFilter ? 'active' : ''}`}
              onClick={() => handleFilterChange(cat.filter)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleFilterChange(cat.filter);
                }
              }}
              style={{ cursor: 'pointer' }}
              aria-selected={cat.filter === activeFilter}
              aria-controls={`${cat.id}-tabpanel`}
              id={`${cat.id}-tab`}
            >
              {cat.label}
            </li>
          ))}
        </ul>
      </div>

      <div 
        id="menu-items-container" 
        className="row g-4"
        role="region"
        aria-live="polite"
        aria-atomic="true"
      >
        {filteredItems.length > 0 ? (
          filteredItems.map(item => (
            <div 
              key={item.id} 
              className="col-lg-4 col-md-6 col-sm-12"
              role="article"
              aria-labelledby={`item-${item.id}-title`}
            >
              <div className="box-details h-100 d-flex flex-column">
                <div className="img-box flex-grow-1">
                  <img
                    src={item.img}
                    alt={item.name}
                    loading="lazy"
                  />
                </div>
                <div className="details">
                  <h5 id={`item-${item.id}-title`}>{item.name}</h5>
                  <p>{item.desc}</p>
                </div>
                <div className="options d-flex justify-content-between align-items-center">
                  <h6>${item.price.toFixed(2)}</h6>
                  <button 
                    className="btn btn-link p-0 border-0 bg-transparent"
                    aria-label={`Add ${item.name} to cart`}
                    onClick={() => console.log('Add to cart', item.id)}
                  >
                    <i className="fa-solid fa-cart-shopping icon-" aria-hidden="true"></i>
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-12">
            <p className="text-muted"></p>
          </div>
        )}
      </div>

      <button className="order mt-5 ps-5 pe-5 fs-5">
        View More
      </button>
    </section>
  );
}