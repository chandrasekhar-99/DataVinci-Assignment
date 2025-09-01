import './index.css'
import { Info } from "@phosphor-icons/react";
import './index.css'


const SubPage = () => {
  return (
    <div className="hover-card-container">
      <div className="product-info-container">
        <Info size={23}/>
        <p className="info-text">What is UMF and MGO?</p>
      </div>

      {/* Product card */}
      <div className="product-hover-card">
        <div className="mgo-section">
          <p className="mgo-description"><span className="umf-text-span">UMF</span> is the strength and purity rating of Manuka honey.</p>
          <div className="umf-scale-container">
            <div>
              <p className="umf-text-10">10+</p>
              <hr className="umf-10"/>
            </div>
            <div>
              <p className="umf-text-15">15+</p>
              <hr className="umf-15"/>
            </div>
            <div>
              <p className="umf-text-20">20+</p>
              <hr className="umf-20"/>
            </div>
            <div>
              <p className="umf-text-24">24+</p>
              <hr className="umf-24"/>
            </div>
            <div>
              <p className="umf-text-26">26+</p>
              <hr className="umf-26"/>
            </div>
            <div>
              <p className="umf-text-28">28+</p>
              <hr className="umf-28"/>
            </div>
            <div>
              <p className="umf-text-30">30+</p>
              <hr className="umf-30"/>
            </div>
          </div>
          <p className="mgo-description">The higher the number, the greater the potency and rarity of Manuka honey.</p>
        </div>
        <div className="mgo-section">
          <p className="mgo-description"><span className="umf-text-span">MGO</span> is the key natural compound that gives Manuka honey its special antibacterial strength.</p>
          <div className="umf-scale-container">
            <div>
              <p className="umf-text-10">263+</p>
              <hr className="umf-10"/>
            </div>
            <div>
              <p className="umf-text-15">514+</p>
              <hr className="umf-15"/>
            </div>
            <div>
              <p className="umf-text-20">829+</p>
              <hr className="umf-20"/>
            </div>
            <div>
              <p className="umf-text-24">1122+</p>
              <hr className="umf-24"/>
            </div>
            <div>
              <p className="umf-text-26">1282+</p>
              <hr className="umf-26"/>
            </div>
            <div>
              <p className="umf-text-28">1450+</p>
              <hr className="umf-28"/>
            </div>
            <div>
              <p className="umf-text-30">1620+</p>
              <hr className="umf-30"/>
            </div>
          </div>
          <p className="mgo-description">The higher the number, the higher the antibacterial properties in the honey.</p>
        </div>
      </div>
    </div>
  )
}

export default SubPage
