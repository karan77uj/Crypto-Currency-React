import React, { useState } from 'react';
import BitcoinImg from '../images/bitcoin-btc-logo.png';
import EthereumImg from '../images/ethereum-eth-logo.png';
import TetherImg from '../images/tether-usdt-logo.png';
import TronImg from '../images/tron-trx-logo.png';
import EthereumClassicImg from '../images/ethereum-classic-etc-logo.png';
import DogecoinImg from '../images/dogecoin-doge-logo.png';
import NearProtocolImg from '../images/near-protocol-near-logo.png';
import SolanaImg from '../images/solana-sol-logo.png';
import '../styles/TradePage.css';

function TradePage({toggleCart}) {
  const [cart, setCart] = useState([]);

  function addToCart(title, amount) {
    const existingItemIndex = cart.findIndex(item => item.title === title);
    if (existingItemIndex > -1) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      setCart([...cart, { title, amount, quantity: 1 }]);
    }
    alert(`${title} has been added to your cart at the price of ₹${amount.toLocaleString()}`);
  }

  function removeFromCart(index) {
    const item = cart[index];
    alert(`${item.title} has been traded at the price of ₹${(item.amount * item.quantity).toLocaleString()}`);
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
  }

  function toggleCart() {
    console.log('Cart toggled');
    const cartElement = document.getElementById('cart');
    cartElement.classList.toggle('open');
  }

  return (
    <div className="trade-page">
      <header>
        <h1>Trade Here</h1>

        <button className="success-btn" onClick={toggleCart}>Cart</button>

      </header>

      <div className="grid-container">
        <div className="card">
          <img src={BitcoinImg} alt="Bitcoin" />
          <div className="title">Bitcoin</div>
          <div className="amount">₹24,00,000</div>
          <button onClick={() => addToCart('Bitcoin', 2400000)}>Buy Now</button>
        </div>
        <div className="card">
          <img src={EthereumImg} alt="Ethereum" />
          <div className="title">Ethereum</div>
          <div className="amount">₹1,50,000</div>
          <button onClick={() => addToCart('Ethereum', 150000)}>Buy Now</button>
        </div>
        <div className="card">
          <img src={TetherImg} alt="Tether" />
          <div className="title">Tether</div>
          <div className="amount">₹80</div>
          <button onClick={() => addToCart('Tether', 80)}>Buy Now</button>
        </div>
        <div className="card">
          <img src={TronImg} alt="Tron" />
          <div className="title">Tron</div>
          <div className="amount">₹5</div>
          <button onClick={() => addToCart('Tron', 5)}>Buy Now</button>
        </div>
        <div className="card">
          <img src={EthereumClassicImg} alt="Ethereum Classic" />
          <div className="title">Ethereum Classic</div>
          <div className="amount">₹2,000</div>
          <button onClick={() => addToCart('Ethereum Classic', 2000)}>Buy Now</button>
        </div>
        <div className="card">
          <img src={DogecoinImg} alt="Dogecoin" />
          <div className="title">Dogecoin</div>
          <div className="amount">₹5</div>
          <button onClick={() => addToCart('Dogecoin', 5)}>Buy Now</button>
        </div>
        <div className="card">
          <img src={NearProtocolImg} alt="NEAR Protocol" />
          <div className="title">NEAR Protocol</div>
          <div className="amount">₹700</div>
          <button onClick={() => addToCart('NEAR Protocol', 700)}>Buy Now</button>
        </div>
        <div className="card">
          <img src={SolanaImg} alt="Solana" />
          <div className="title">Solana</div>
          <div className="amount">₹3,500</div>
          <button onClick={() => addToCart('Solana', 3500)}>Buy Now</button>
        </div>
      </div>


      {/* Cart Div */}
      <div className="cart" id="cart">
        <div className="cart-header">
          <h5>Your Cart</h5>
          <span className="close-btn" onClick={toggleCart}>&times;</span>
        </div>
        <div className="cart-body">
          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            cart.map((item, index) => (
              <div className="cart-item" key={index}>
                <span>{item.title} {item.quantity}</span>
                <span>₹{item.amount * item.quantity}</span>
                <button className="btn btn-danger btn-sm" onClick={() => removeFromCart(index)}>Trade</button>
              </div>
            ))
          )}
        </div>
        <div className="cart-footer">
          <div className="total">
            Total: ₹{cart.reduce((total, item) => total + item.amount * item.quantity, 0).toLocaleString()}
          </div>
          <button className="btn btn-danger" onClick={toggleCart}>Close</button>
        </div>
      </div>
    </div>
  );
}

export default TradePage;
