import React from 'react';
import './App.scss';
import Container from '../components/Container';
import logo from './images/logo.jpg';
import call from './images/call.png';
//----------------------------
import beef from './images/categories/beef.png';
import mutton from './images/categories/mutton.png';
import chicken from './images/categories/chicken.png';
import duck from './images/categories/duck.png';
import buffalo from './images/categories/buffalo.png';
import turkey from './images/categories/turkey.png';
import pigeon from './images/categories/pigeon.png';
import quail from './images/categories/quail.png';
//----------------------------
import fourSlices from './images/products/fourSlices.png';


export default function App() {
  return (
    <div className="App">
      <div className="languageBar">
        <Container>
          <div className="inner-languageBar">
            <p className="welcome">Welcome you to MeatBazar store!</p>
            <p className="logIn">Corporate Login</p>
            <div className="buttons">
              <button className="lang active">En</button>
              <button className="lang">Ar</button>
              <button className="signIn">Sign In</button>
            </div>
          </div>
        </Container>
      </div>
      <div className="nav">
        <Container>
          <div className="inner-nav">
            <img className="logo" src={logo} alt="Logo"></img>
            <ul>
              <li>Home</li>
              <li>Shop</li>
              <li>About</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
            <div className="search">Search entire Store here ...</div>
            <div className="call-us">
              <img src={call} alt="call us"></img>
              <div>
                <p>Call us:</p>
                <h4>(+880)1863404110</h4>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="cover">
        <Container>
          <div className="inner-cover">
            <p className="natural">100% NATURAL</p>
            <div className="carrier-box">
              <h2 className="organic-fruits">Organic Fruits</h2>
              <h2 className="summer-drinks">Summer Drinks</h2>
              <p className="fresh">fresh New Pack Brusting Fruits</p>
            </div>
          </div>
        </Container>
      </div>
      <div className="categories">
        <Container>
          <div className="inner-categories">
          <button>
            <img src={beef} alt="beef"></img>
            <p className="title active">Beef</p>
          </button>
          <button>
            <img src={mutton} alt="mutton"></img>
            <p className="title">mutton</p>
          </button>
          <button>
            <img src={chicken} alt="chicken"></img>
            <p className="title">chicken</p>
          </button>
          <button>
            <img src={duck} alt="duck"></img>
            <p className="title">duck</p>
          </button>
          <button>
            <img src={buffalo} alt="buffalo"></img>
            <p className="title">buffalo</p>
          </button>
          <button>
            <img src={turkey} alt="turkey"></img>
            <p className="title">turkey</p>
          </button>
          <button>
            <img src={pigeon} alt="pigeon"></img>
            <p className="title">pigeon</p>
          </button>
          <button>
            <img src={quail} alt="quail"></img>
            <p className="title">quail</p>
          </button>
          <button>
            <img src={beef} alt="camel"></img>
            <p className="title">camel</p>
          </button>
          <button>
            <img src={mutton} alt="dumba"></img>
            <p className="title">dumba</p>
          </button>
          </div>
        </Container>
      </div>
      <div className="Ads">
        <Container>
          <div className="inner-Ads">
            <div className="hot-deals">
              <div className="titles-box">
                <h2>Hot Deals</h2>
                <h3>Add hot products to weekly line up</h3>
              </div>
              <div className="paging">
                right left
              </div>
              <div className="card">
                <img src={fourSlices} alt="product"></img>
                <div className="product-info">
                  <h3 className="product-name">studio design</h3>
                  <h2 className="product-description">Originals Kaval Windbreaker Winter Jacket</h2>
                  <div className="product-rate">stars</div>
                  <div className="product-price">
                    <span className="old-price">$18.90 </span>
                    <span className="new-price">$34.21 </span>
                    <span className="discount badge">-5%</span>
                  </div>
                  <p className="availability">Availability: <span className="amount">300 In Stock</span></p>
                  <div className="Offers-ends-in">
                    <p>Hurry Up! Offers ends in:</p>
                    <div className="down-timer">
                      <h2><span>176</span>:<span>13</span>:<span>24</span>:<span>52</span></h2>
                      <h3><span>days</span> <span>hours</span> <span>mins</span> <span>sec</span></h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="new-arrival">
              <h2>New Arrivals</h2>

            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};
