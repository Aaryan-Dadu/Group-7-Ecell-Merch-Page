import './App.css';
import React, { useState } from 'react';

function App() {
  const [amount,setAmount] = useState(0);
  const [itemCount,setItemCount] = useState(0);
  let item1Price=1200;
  let item2Price=900;
  let cartItem = (itemNumber) => {
    setItemCount(prevState => prevState + 1);
    if (itemNumber==1){
      setAmount(prevState=> prevState + item1Price);
      alert(`Limited Edition T-Shirt added to cart. Total = ${amount}`);
    }
    if (itemNumber==2){
      setAmount(prevState=> prevState + item2Price);
      alert(`Black T-Shirt added to cart. Total = ${amount}`);
    }
}
  return (
  <>
    <div>
    <header>

<div class="logo"><a href="https://iiitl.ac.in/" target="_blank"><img src="images/IIITL.png" alt="IIITL Logo"></img></a>
</div>
<nav>
  <ul>
    <li><a class="nav-item" href="#">Home</a></li>
    <li><a class="nav-item" href="#">About Us</a></li>
    <li><a id="ecell_logo" href="https://e-cell-iiitl.netlify.app/"><img src="images/ecell_logo.png" alt="E-cell Logo"></img></a></li>
    <li><a class="nav-item" href="#">Gallery</a></li>
    <li><a class="nav-item" href="#">Contact Us</a></li>
  </ul>
</nav>
<div class="cart"><a href="#">
    <img src="images/cart_icon.png" alt="Cart"></img>
    <div id="cart-item-number"><p>{itemCount}</p></div>
  </a>
</div>
</header>

<div class="categories">
<div class="category">
  <img id="hoodie" src="images/hoodies1.png" alt="T-Shirts & Hoodies"></img>
  <p class="category-p">T-Shirts & Hoodies</p>
</div>
<div class="category">
  <img src="images/shirt1Front.jpeg" alt="Caps"></img>
  <p class="category-p">Caps</p>
</div>
<div class="category">
  <img src="images/shirt3.jpeg" alt="Accessories"></img>
  <p class="category-p">Accessories</p>
</div>
</div>

<div class="featured-products">
<h2>Featured Products</h2>
<div class="product-grid">
  <div class="product-card">
    <img src="images/shirt1Front.jpeg" alt="T-Shirt"></img>
    <h3>Limited Edition T-Shirt</h3>
    <p>₹1200</p>
    <button id = "limitedTshirt" onClick={() => {cartItem(1)}}>Add to Cart</button>
  </div>
  <div class="product-card">
    <img src="images/shirt1.jpeg" alt="Hat"></img>
    <h3>Black T-Shirt</h3>
    <p>₹900</p>
    <button id = "blackTshirt" onClick={() => {cartItem(2)}}>Add to Cart</button>
  </div>
</div>
</div>

<footer>
<div class="footer-links">
  <ul>
    <li><a href="#">About Us</a></li>
    <li><a href="#">Terms & Conditions</a></li>
    <li><a href="#">Privacy Policy</a></li>
    <li><a href="#">FAQ</a></li>
    <li><a href="#"></a></li>
  </ul>
</div>
<div class="social-media">
  <a href="#"><img src="images/facebook.png" alt="Facebook"></img></a>
  <a href="#"><img src="images/instagram.jpeg" alt="Instagram"></img></a>
  <a href="#"><img src="images/twitter.png" alt="Twitter"></img></a>
</div>
</footer>
    </div>
  </>
  );
}

export default App;
