import{ useState } from 'react';
import { List, X , User, MagnifyingGlass, BagSimple} from "@phosphor-icons/react";
import './index.css'

const Header = () => {
const [isOpen, setIsOpen] = useState(false);

const toggleMenu = () => {
  setIsOpen(!isOpen);
};

const renderMobileNav = () => {
  return(
    <div className = "nav-mobile-container"> 
      <div className="dropdown-container">
        <button className="icon-button" onClick={toggleMenu}>
          {isOpen ? (
            <X size={24} weight="bold" />
          ) : (
            <List size={24} weight="bold" />
          )}
        </button>

        {isOpen && (
          <ul className="dropdown-menu">
            <li className="menu-item">Shop</li>
            <li className="menu-item">Explore</li>
            <li className="menu-item">About</li>
            <li className="menu-item">Rewards</li>
            <li className="menu-item">Contact</li>
          </ul>
        )}
      </div>
      <div>
        <h1 className="nav-logo-heading">NEW ZEALAND <br /> HONEY CO.</h1>
      </div>
      <div className="nav-icon-container">
        <User size={24} />
        <MagnifyingGlass size={24} />
        <BagSimple size={24} />
      </div>
    </div>
  )
}

  return(
    <nav className='navbar'>
      {renderMobileNav()}
      <div className='navbar-container'>
         
         <div className="desktop-nav-heading-container">
          <h2 className="desktop-nav-heading">WHICH MANUKA IS FOR ME?</h2>
         </div>
         
         <ul className='nav-links-container'>
          <li className="nav-list-items">Shop</li>
          <li className="nav-list-items">Explore</li>
        </ul>
        <div>
          <h1 className="desktop-nav-logo-heading">NEW ZEALAND <br /> HONEY CO.</h1>
        </div>
        <ul className='nav-links-container'>
          <li className="nav-list-items">About</li>
          <li className="nav-list-items">Rewards</li>
          <li className="nav-list-items">Contact</li>
        </ul>
        <div className="desktop-nav-icon-container">
          <User size={32} weight="light"/>
          <MagnifyingGlass size={32} weight="light"/>
          <BagSimple size={32} weight="light"/>
        </div>
      </div>
    </nav>
  )
}

export default Header;