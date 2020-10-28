import React from 'react';
import './App.scss';
import Container from '../components/Container/Container';
import Card from './../components/Card/Card';
import HotDealCard from './../components/HotDealCard/HotDealCard';
import TitlesBox from '../components/TitlesBox/TitlesBox';
import Paging from '../components/Paging/Paging';
import TopCustomerCard from '../components/TopCustomerCard/TopCustomerCard';
import SellCard from '../components/SellCard/SellCard';
import NewsCard from '../components/NewsCard/NewsCard';
import TestimonialsCard from '../components/TestimonialsCard/TestimonialsCard';
import NeedHelp from '../components/NeedHelp/NeedHelp';
//----------------------------
import logo from './../Data/images/logo.jpg';
import call from './../Data/images/call.png';
//----------------------------
import beef from './../Data/images/categories/beef.png';
import mutton from './../Data/images/categories/mutton.png';
import chicken from './../Data/images/categories/chicken.png';
import duck from './../Data/images/categories/duck.png';
import buffalo from './../Data/images/categories/buffalo.png';
import turkey from './../Data/images/categories/turkey.png';
import pigeon from './../Data/images/categories/pigeon.png';
import quail from './../Data/images/categories/quail.png';
//----------------------------
import fourSlices from './../Data/images/products/fourSlices.png';
//----------------------------
import topCustomer from './../Data/images/customers/topCustomer.png';
import cutsOfBeef from './../Data/images/cutsOfBeef.png';
//----------------------------
import video from './../Data/images/news/video.png';
import ducks from './../Data/images/news/ducks.png';
import freshFood from './../Data/images/Ads/freshFood.png'
import roasted from './../Data/images/Ads/roasted.png'
import TRSFoods from './../Data/images/Ads/TRSFoods.png'
//----------------------------
import customer1 from './../Data/images/customers/customer1.png';
import customer2 from './../Data/images/customers/customer2.png';
import CallUs from '../components/CallUs/CallUs';

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
            <CallUs
              img={call}
              alt='call us'
              title='call us:'
            >
              <h2 className="phone">(+880)1863404110</h2>
            </CallUs>
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
              <TitlesBox
                title='Hot Deals'
                subTitle='Add hot products to weekly line up'
              />
              <Paging />
              <HotDealCard
                productImg={fourSlices}
                productAlt={fourSlices}
                productName='studio design'
                productDescription='originals kaval windbreaker winter jacket'
                productRate='stars'
                oldPrice='$18.90'
                newPrice='$34.21'
                discount='-5%'
                availability='300 in stock'
                countDown={true}
                days='176'
                hours='13'
                mins='24'
                sec='52'
              />
            </div>
            <div className="new-arrivals">
              <TitlesBox
                title='New arrivals'
                subTitle='Add hot products to weekly line up'
              />
              <Paging />
              <div className="cards">
                <Card
                  productImg={fourSlices}
                  productAlt={fourSlices}
                  productName='studio design'
                  productDescription='originals kaval windbreaker winter jacket'
                  productRate='stars'
                  oldPrice='$18.90'
                  newPrice='$34.21'
                  discount='-5%'
                />
                <Card
                  productImg={fourSlices}
                  productAlt={fourSlices}
                  productName='studio design'
                  productDescription='originals kaval windbreaker winter jacket'
                  productRate='stars'
                  oldPrice='$18.90'
                  newPrice='$34.21'
                  discount='-5%'
                />
                <Card
                  productImg={fourSlices}
                  productAlt={fourSlices}
                  productName='studio design'
                  productDescription='originals kaval windbreaker winter jacket'
                  productRate='stars'
                  oldPrice='$18.90'
                  newPrice='$34.21'
                  discount='-5%'
                />
                <Card
                  productImg={fourSlices}
                  productAlt={fourSlices}
                  productName='studio design'
                  productDescription='originals kaval windbreaker winter jacket'
                  productRate='stars'
                  oldPrice='$18.90'
                  newPrice='$34.21'
                  discount='-5%'
                />
                <Card
                  productImg={fourSlices}
                  productAlt={fourSlices}
                  productName='studio design'
                  productDescription='originals kaval windbreaker winter jacket'
                  productRate='stars'
                  oldPrice='$18.90'
                  newPrice='$34.21'
                  discount='-5%'
                />
                <Card
                  productImg={fourSlices}
                  productAlt={fourSlices}
                  productName='studio design'
                  productDescription='originals kaval windbreaker winter jacket'
                  productRate='stars'
                  oldPrice='$18.90'
                  newPrice='$34.21'
                  discount='-5%'
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="meat-on-demand">
        <Container>
          <div className="inner-meat-on-demand">
            <TitlesBox
              title='meat on demand'
              subTitle='dolor sit amet, consectetur adipiscing elit.'
            />
            <TopCustomerCard
              img={topCustomer}
              alt='customer'
              heSays='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium aliquam tincidunt. Cras fringilla augue lacus, non blandit erat vehicula sit amet.'
              name='Alamin Shisir'
              address='goran, dhaka.'
            />
            <img src={cutsOfBeef} alt="cuts of beef"></img>
          </div>
        </Container>
      </div>
      <div className="last-day-sell">
        <Container>
          <div className="inner-last-day-sell">
            <TitlesBox
              title='last day sell'
              subTitle='dolor sit amet, consectetur adipiscing elit.'
            />
            <SellCard
              img={beef}
              alt="beef"
              quantity="1250kg"
              product="beef sold"
            />
            <SellCard
              img={mutton}
              alt="mutton"
              quantity="550kg"
              product="mutton sold"
            />
            <SellCard
              img={chicken}
              alt="chicken"
              quantity="1850kg"
              product="chicken sold"
            />
            <SellCard
              img={beef}
              alt="beef"
              quantity="2050kg"
              product="beef sold"
            />
          </div>
        </Container>
      </div>
      <div className="latest-news">
        <Container>
          <div className="inner-latest-news">
            <TitlesBox
              title='latest news'
              subTitle='dolor sit amet, consectetur adipiscing elit.'
            />
            <NewsCard
              img={video}
              alt='image'
              newsTitle='Lorem ipsum dolor, consectetur adipiscing elit. Nulla pretium aliquam tincidunt.'
              poster='admin'
              date='24 april, 2020'
            />
            <NewsCard
              img={ducks}
              alt='image'
              newsTitle='This is third post for xipBlog'
              poster='admin'
              date='24 april, 2020'
            />
            <NewsCard
              img={ducks}
              alt='image'
              newsTitle='dolor sit amet, consectetur adipiscing elit. Nulla pretium aliquam tincidunt.'
              poster='admin'
              date='24 april, 2020'
            />
          </div>
        </Container>
      </div>
      <div className="Ads2">
        <Container>
          <div className="inner-Ads2">
            <img src={TRSFoods} alt=""></img>
            <img src={freshFood} alt=""></img>
            <img src={roasted} alt=""></img>
          </div>
        </Container>
      </div>
      <div className="testimonials">
        <Container>
          <div className="inner-testimonials">
            <TitlesBox
              title='client testimonials'
              subTitle='what our happy customers say !'
            />
            <TestimonialsCard
              img={customer1}
              alt='customer'
              name='san ratul'
              address='elephant road, dhaka'
              customerOpinion='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut sagittis nisl. Morbi ornare turpis eros, at dapibus augue suscipit tincidunt. In cursus nulla vel leo cursus feugiat.'
            />
            <TestimonialsCard
              img={customer2}
              alt='customer'
              name='san ratul'
              address='elephant road, dhaka'
              customerOpinion='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut sagittis nisl. Morbi ornare turpis eros, at dapibus augue suscipit tincidunt. In cursus nulla vel leo cursus feugiat.'
            />
            <TestimonialsCard
              img={customer1}
              alt='customer'
              name='san ratul'
              address='elephant road, dhaka'
              customerOpinion='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut sagittis nisl. Morbi ornare turpis eros, at dapibus augue suscipit tincidunt. In cursus nulla vel leo cursus feugiat.'
            />
          </div>
        </Container>
      </div>
      <footer className="footer">
        <Container>
          <footer className="inner-footer">
            <div className="contacts">
              <img src={logo} alt="logo"></img>
              <p>we are a team of designers and developers that create high quality HTML template</p>
              <NeedHelp
                icon='fas fa-phone-volume'
                title='need help?'
              >
                <h2 className="phone">(+880) 1863 404 110</h2>
                <h2 className="phone">(+880) 1863 404 110</h2>
              </NeedHelp>
              <div className="social">
                <i className="fa fa-facebook"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-youtube"></i>
                <i className="fab fa-google"></i>
                <i class="fab fa-instagram"></i>
              </div>
              <p>copyright &copy; meatbazar ltd. All Rights Reserved</p>
            </div>
            <div className="links">
              <div className="links-column">
                <h2 className="title">information <hr></hr></h2>
                <ul>
                  <li>delivery</li>
                  <li>about us</li>
                  <li>secure payment</li>
                  <li>contact us</li>
                  <li>sitemap</li>
                  <li>stores</li>
                </ul>
              </div>
              <div className="links-column">
                <h2 className="title">custom links</h2>
                <ul>
                  <li>legal notice</li>
                  <li>prices drop</li>
                  <li>new products</li>
                  <li>best sales</li>
                  <li>login</li>
                  <li>my account</li>
                </ul>
              </div>
              <div className="newsletter">
                <h2>newsletter</h2>
                <p>you may unsubscribe at any time. for that purpose, please find our contact info in legal notice</p>
                <div>enter your email here</div>
                <i class="fab fa-app-store"></i>
                <i class="fab fa-google-play"></i>
              </div>
            </div>
          </footer>
        </Container>
      </footer>
    </div>
  );
};
