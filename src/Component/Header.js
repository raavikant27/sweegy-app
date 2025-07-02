import React from 'react';

function Header() {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://tse3.mm.bing.net/th/id/OIP.HWlMKbYsrTioDJ3Os7eZyQAAAA?pid=Api&P=0&h=220"
          alt="Logo"
        />
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Card</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
