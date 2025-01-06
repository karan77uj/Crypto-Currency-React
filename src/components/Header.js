import React from 'react';
import '../styles/Header.css'; // Adjusted path

const Header = ({ toggleCart }) => {
  return (
    <header className="header">
      <div className="logo">
        <h1>CryptoApp</h1>
      </div>
      <nav className="nav">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About US</a></li>
          <li><a href="/profile">Login</a></li>
          <li><a href="/trade">Trade</a></li>
          <li className="nav-link">
              <a href="#">
                  <i className="fa fa-wallet fa-xl" onClick={toggleCart}></i>
              </a>
            </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
