import React from "react";

export default function Basket() {
  return (
    <aside className="block col-1">
      <h2>Cart Items</h2>
      <div>
        <div>Cart is empty</div>
        
          {/* <div className="row">
            <div className="col-2">Name</div>
            <div className="col-2">
              <button className="remove">-</button>{" "}
              <button className="add">+</button>
            </div>

            <div className="col-2 text-right"></div>
          </div> */}
        
        
        
          {/* <>
            <hr></hr>
            <div className="row">
              <div className="col-2">Items Price</div>
              <div className="col-1 text-right">&#x20B9;</div>
            </div>
            <div className="row">
              <div className="col-2">Tax Price</div>
              <div className="col-1 text-right">&#x20B9;</div>
            </div>
            <div className="row">
              <div className="col-2">Shipping Price</div>
              <div className="col-1 text-right">&#x20B9;</div>
            </div>
            <hr />
            <div className="row">
              <div className="col-2">
                <strong>Total Price</strong>
              </div>
              <div className="col-1 text-right">
                <strong>&#x20B9;</strong>
              </div>
            </div>

            <div>
              <button
                className="add-to-cart"
                onClick={() => alert("Implement Checkout!")}
              >
                Checkout
              </button>
            </div>
          </> */}
        
      </div>
    </aside>
  );
}
