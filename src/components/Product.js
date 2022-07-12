import React from 'react';

export default function Product() {
  
  return (
    <div className='product-style'>
      <img className="small" />
      <h3>Name</h3>
      <div>&#x20B9;Price</div>
      <div>
        <button className='add-to-cart'>Add To Cart</button>
      </div>
    </div>
  );
}
