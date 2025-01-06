import React from 'react';
import '../styles/HomePage.css'; // Ensure this path is correct

// Import images
import heroImage from '../images/hero-image.png';
import bitcoinImage from '../images/bitcoin.png';
import ethereumImage from '../images/ethereum.png';
import ethereumClassicImage from '../images/ethereum-classic.png';
import tronImage from '../images/tron.png';
import handshakeIcon from '../images/handshake-icon-white-line.svg';
import cartIcon from '../images/cart-icon-white-line.svg';
import chainProcessImage from '../images/chain-process-img.png';

const HomePage = () => {
  return (
      <div>

      {/* Hero Section */}
      <section className="gridSection">
        <div className="sectionDesc">
          <h1 className="headline">
            Most popular way to trade 
            <span className="cryptoText">CRYPTO</span>
          </h1>

          <p className="subHeadline">
            You can see a record of all your transactions 
            anytime you want and never have to worry about 
            someone erasing or stealing your money!
          </p>
        </div>

        <div className="sectionBouncepic" id="sectionPic">
          <img src={heroImage} alt="Hero" />
        </div>
      </section>

      {/* Cards Section */}
      <section className="cardsSection" id="trade">
        <div className="card">
          <img src={bitcoinImage} alt="Bitcoin" />
          <div className="cardDesc">
            <h1 className="cardTitle">Bitcoin</h1>
            <p className="cardPara">Bitcoin is an innovative payment network</p>
            <div className="cardPrice">
              <h3>₹24,00,000</h3>
            </div>
            <button className="btn btn-primary" onClick={() => window.location.href='/profile'}>Buy & Trade</button>
          </div>
        </div>

        <div className="card">
          <img src={ethereumImage} alt="Ethereum" />
          <div className="cardDesc">
            <h1 className="cardTitle">Ethereum</h1>
            <p className="cardPara">Ethereum is open-source blockchain currency</p>
            <div className="cardPrice">
              <h3>₹1,50,000</h3>
            </div>
            <button className="btn btn-primary" onClick={() => window.location.href='/profile'}>Buy & Trade</button>
          </div>
        </div>

        <div className="card">
          <img src={ethereumClassicImage} alt="Ethereum Classic" />
          <div className="cardDesc">
            <h1 className="cardTitle">Ethereum Classic</h1>
            <p className="cardPara">Preserving the original Ethereum protocol.</p>
            <div className="cardPrice">
              <h3>₹2,000</h3>
            </div>
            <button className="btn btn-primary" onClick={() => window.location.href='/profile'}>Buy & Trade</button>
          </div>
        </div>

        <div className="card">
          <img src={tronImage} alt="Tron" />
          <div className="cardDesc">
            <h1 className="cardTitle">Tron</h1>
            <p className="cardPara">Tron is a decentralized blockchain platform</p>
            <div className="cardPrice">
              <h3>₹50</h3>
            </div>
            <button className="btn btn-primary" onClick={() => window.location.href='/profile'}>Buy & Trade</button>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="gridSection" id="aboutus">
        <div className="processesContainer">
          <div className="sectionHeader">
            <h1 className="sectionTitle">Chain Process</h1>
            <p className="sectionPara">
              We do not charge any fees and we do not require 
              any registration. You keep your privacy and your 
              coins.
            </p>
          </div>

          {/* First process description */}
          <div className="processes">
            <img src={handshakeIcon} alt="Trading" />
            <div className="processesPara">
              <h1 className="processesTitle">Trading</h1>
              <p>
                The act of speculating on cryptocurrency price movements 
                via a CFD trading account, or buying and selling.
              </p>
            </div>
          </div>
      
          {/* Second process description */}
          <div className="processes">
            <img src={cartIcon} alt="Buying" />
            <div className="processesPara">
              <h1 className="processesTitle">Buying</h1>
              <p>
                The act of speculating on cryptocurrency price movements 
                via a CFD trading account, or buying and selling.
              </p>
            </div>
          </div>
        </div>
    
        <div className="sectionBouncepic" id="sectionPic">
          <img src={chainProcessImage} alt="Chain Process" />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
