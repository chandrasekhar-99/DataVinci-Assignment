
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";


import Header from '../Header'
import MainProduct from '../../assets/product-desktop.png'
import MainProductBackground from '../../assets/product-background.png'
import ProductImage1 from '../../assets/1-product.png'
import ProductImage2 from '../../assets/2-product.png'
import ProductImage3 from '../../assets/3-product-person.jpg'
import ProductImage4 from '../../assets/4-product.png'
import ProductImage5 from '../../assets/5-product.png'
import ProductImage6 from '../../assets/6-product.png'
import ProductImage7 from '../../assets/7-product.png'
import Certification1 from '../../assets/p1.png'
import Certification2 from '../../assets/p2.png'
import Certification3 from '../../assets/p3.png'
import Certification4 from '../../assets/p4.png'
import Certification5 from '../../assets/p5.png'
import Certification6 from '../../assets/p6.png'
import ProductVariant1 from '../../assets/s1-product.png'
import ProductVariant2 from '../../assets/s2-product.png'
import ProductVariant3 from '../../assets/s3-product.png'
import ProductVariant4 from '../../assets/s4-product.png'
import ProductVariant5 from '../../assets/s5-product.png'
import ProductVariant6 from '../../assets/s6-product.png'
import BundleImage1 from '../../assets/b1.png'
import BundleImage2 from '../../assets/b2.png'
import BundleImage3 from '../../assets/b3.png'
import DeliveryImage from '../../assets/p7.png'

import { Info, Heart, ArrowClockwise, Plus, Minus, CaretLeft, CaretRight, CaretDown, CurrencyDollarSimple } from "@phosphor-icons/react";
import './index.css'


const Home = () => {
  const hearts = Array(5).fill(<Heart size={32} color="#F1B434" weight="fill" />);
  const productImages = [
    MainProduct,
    ProductImage1,
    ProductImage2,
    ProductImage3,
    ProductImage4,
    ProductImage5,
    ProductImage6,
    ProductImage7
  ];

const renderDeliveryUpdate = () => {
  return (
    <div className="delivery-update-container">
      <div className="delivery-update-content">
        <img src={DeliveryImage} alt="Delivery Update" className="delivery-update-image" /> 
        <p>Colourclub members earn up to</p>
        <p className="delivery-update-points">56</p>
        <p>reward points when buy this item.</p>
        <p>Sign up or log in</p>
      </div>
      <div className="delivery-update-info">
        <p>DELIVERY <br />FREE DELIVERY ON ORDERS OVER $30</p>
        <p>ESTIMATED DELIVERY DATE:<br />Jun 9 - Jun 13 to </p>
      </div>
      <hr/>
      <div>
        <p>AFTER PAY <br/>or 4 interest-free payments of $13.97 with <CurrencyDollarSimple size={32} weight="fill" color="#00D633" /> <span>Afterpay <Info size={18} color="#666666" weight="fill" /></span></p>
      </div>
      <hr/>
      <div>
        <p>UMF™ scale</p>
        <div className="umf-scale-container">
          <div>
            <p>UMF™ 10+</p>
            <hr className="umf-divider-10"/>
          </div>
          <div>
            <p>UMF™ 15+</p>
            <hr className="umf-divider-15"/>
          </div>
          <div>
            <p>UMF™ 20+</p>
            <hr className="umf-divider-20"/>
          </div>
          <div>
            <p>UMF™ 24+</p>
            <hr className="umf-divider-24"/>
          </div>
          <div>
            <p>UMF™ 26+</p>
            <hr className="umf-divider-26"/>
          </div>
          <div>
            <p>UMF™ 28+</p>
            <hr className="umf-divider-28"/>
          </div>
          <div>
            <p>UMF™ 30+</p>
            <hr className="umf-divider-30"/>
          </div>
        </div>
      </div>
      <div>
        <p>Taste Profile</p>
        <hr className="taste-profile-divider"/>
      </div>
      <div className="taste-profile-container">
        <p>Clean & Intense</p>
        <p>Bold & Intense</p>
      </div>
    </div>
  );
};

  const renderHomeTopContainer = () => {
    return(
      <div className="home-top-container">
          <div className="product-image-carousel-container">
            <img src={MainProductBackground} alt="Main Product Background" className="home-product-background-image" />
            <Swiper
              modules={[Navigation]}
              navigation
              slidesPerView={1}
              loop={true}
               spaceBetween={20}
              className="home-product-carousel"
            >
              {productImages.map((img, index) => (
                <SwiperSlide key={index}>
                  <img src={img} alt={`Product ${index}`} className="home-product-image" />
                </SwiperSlide>
              ))}
            </Swiper>
            
          </div>
          <div className="product-details-container">
            <p className="product-title">Manuka Honey</p>
            <h1 className="product-umf">UMF<span className="tm">TM</span> <span className="product-span-value">24+</span></h1>
            <h1 className="product-umf">MGO <span className="product-span-value">1122+</span></h1>
            <div className="product-info-container">
              <Info size={23}/>
              <p className="info-text">What is UMF and MGO?</p>
            </div>
            <div className="reviews-container">
              <p className="review-text">The Optimiser</p>
              <div className="heart-container">
                {hearts}
                <p className="review-number">825 REVIEWS</p>
              </div>
            </div>
            <p>For those times in life when quality comes first. This pure UMF™ 24+ Manuka
                Honey is powerfully active, sourced from wild and rugged locations around
                Aotearoa New Zealand and great for almost all uses. It has a full, delicious
                flavour and your body will love you for it.
            </p>
            <div className="certifications-container">
              <img src={Certification1} alt="Certification 1"  className="certification-image"/>
              <img src={Certification2} alt="Certification 2" className="certification-image"/>
              <img src={Certification3} alt="Certification 3" className="certification-image"/>
              <img src={Certification4} alt="Certification 4" className="certification-image"/>
              <img src={Certification5} alt="Certification 5" className="certification-image"/>
              <img src={Certification6} alt="Certification 6" className="certification-image"/>
            </div>
          </div>
        </div>
    )
  }

  const renderBottomContainer = () => {
    return(
      <div className="home-bottom-container">
        <div>
          <div>
            <img src={ProductImage1} alt="Product 1"  className="product-sub-images"/>
          <img src={ProductImage2} alt="Product 2"  className="product-sub-images"/>
          </div>
          
          <img src={ProductImage3} alt="Product 3"  className="product-person-sub-images"/>

          <div>
            <img src={ProductImage4} alt="Product 4"  className="product-sub-images"/>
            <img src={ProductImage5} alt="Product 5"  className="product-sub-images"/>
          </div>
          <div>
            <img src={ProductImage6} alt="Product 6"  className="product-sub-images"/>
            <img src={ProductImage7} alt="Product 7"  className="product-sub-images"/>
          </div>
        </div>
        <div className="size-selection-container">
          <p>SIZE (SELECT ONE)</p>
          <p>Variant: 125g | 4.4oz</p>
          <div>
            <img src={ProductVariant1} alt="Product Variant 1"  className="product-variant-image"/>
            <img src={ProductVariant2} alt="Product Variant 2" className="product-variant-image"/>
            <img src={ProductVariant3} alt="Product Variant 3" className="product-variant-image"/>
            <img src={ProductVariant4} alt="Product Variant 4" className="product-variant-image"/>
            <img src={ProductVariant5} alt="Product Variant 5" className="product-variant-image"/>
            <img src={ProductVariant6} alt="Product Variant 6" className="product-variant-image"/>
          </div>
          <div>
            <p>PAYMENT OPTIONS (SELECT ONE)</p>
            <div className="payment-options-container">
              <div className="payment-button-container">
                <div className="payment-option-1">
                  <p>One-time <br/>purchase</p>
                  <p>$55.88 <br/> USD</p>
                </div>
                <div className="payment-option-2">
                  <p>Subscribe & save <br/> 20%</p>
                  <p>$44.70 <br/> USD</p>
                </div>
              </div>
              <div className="subscribe-info-container">
                <ArrowClockwise size={32} weight="light" />
                <p>What is Subscription?</p>
              </div>
            </div>
          </div>
          <div className="add-to-cart-section">
            SELECT QUANTITY
            <div className="add-to-cart-container">
              <div className="quantity-button-container">
                <Plus size={18} weight="light" />
                <p>1</p>
                <Minus size={18} weight="light" />
              </div>
              <button type="button" className="add-to-cart-button">Add to Cart</button>
            </div>
          </div>
          <div className="bundle-selection-container">
            <div className="bundle-header-container">
              <CaretLeft size={32} />
              <p>Beauty Bundle</p>
              <CaretRight size={32} />
            </div>
            <div className="bundle-offer-section">
              <div className="bundle-offer-container">
                <img src={BundleImage1} alt="Bundle 1" className="bundle-image"/>
                <p>UMF 20+</p>
                <p className="bundle-weight">250g <CaretDown size={15} weight="fill" /></p>
              </div>
              <Plus size={24} weight="light" className="bundle-plus-icon"/>
              <div className="bundle-offer-container">
                <img src={BundleImage2} alt="Bundle 2" className="bundle-image"/>
                <p>UMF 42+</p>
                <p className="bundle-weight">250g <CaretDown size={15} weight="fill" /></p>
              </div>
              <Plus size={24} weight="light" className="bundle-plus-icon"/>
              <div className="bundle-offer-container">
                <img src={BundleImage3} alt="Bundle 3" className="bundle-image"/>
                <p>Wooden<br/>Spoon</p>
              </div>
              <div>
                <p className="bundle-price"><span className="original-price">$478.75 USD</span>$430.88 USD<span className="discount">Save 10%</span></p>
                <button className="add-bundle-button" type="button">ADD BUNDLE TO CART</button>
              </div>
            </div>
          </div>
          <div>
            {renderDeliveryUpdate()}
          </div>
        </div>
        </div>
      )
  }


  return (
    <>
      <Header />
      <div className="home-container">
        {renderHomeTopContainer()}
        {renderBottomContainer()}
      </div>
    </>
  )
}

export default Home
