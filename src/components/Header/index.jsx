import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <Link to="/" className="logo">
            FLOR<span className="sub-logo">ELLO</span>
          </Link>
          <div className="header__right">
            <nav className="navbar">
              <ul className="navbar__list">
                <li className="navbar__item">Home</li>
                {/* <li className="navbar__item">Shop</li> */}
                <NavLink to='/shop'>Shop</NavLink>
                <NavLink to='/regis'>Admin</NavLink>
              </ul>
            </nav>
            <div className="header__icons">
              <button className="header__search-btn">
                <span class="material-symbols-outlined">search</span>
              </button>
              <button className="header__favorite-btn">
                <span class="material-symbols-outlined">favorite</span>
              </button>
              <button className="header__basket-btn">
                <span class="material-symbols-outlined">shopping_bag</span>
              </button>
              <span>CART $0</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
