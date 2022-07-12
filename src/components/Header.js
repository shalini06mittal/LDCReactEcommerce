import React from 'react';

export default function Header() {
  return (
    <header className="block row center">
      <div>
        <a href="#/">
          <h1>Shopping Cart</h1>
        </a>
      </div>
      <div>
        <a href="#/cart">
          Cart{' '}
         
            <button className="badge">0</button>
         
        </a>{' '}
        <a href="#/signin"> Welcome</a>
      </div>
    </header>
  );
}
