import { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaPinterestP,
  FaSearch,
  FaTimes,
} from "react-icons/fa";

import { IoMenu } from "react-icons/io5";

import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav>
        <div className="container">
          <div className="nav_main">
            <div className="navbar_logo">
              <Link to="/">
                <span>Agrar Universitet</span>
              </Link>
            </div>
            <div
              className={isOpen ? "nav_main_links active" : "nav_main_links"}
            >
              <div className="navbar_links">
                <div className="navbar_links_items">
                  <Link to="/bimm">
                    <p>BIMM</p>
                  </Link>
                  <Link to="about">
                    <p>About</p>
                  </Link>
                  <div class="navbar_links_dropdown">
                    <button class="dropbtn">Resurslar</button>
                    <div class="dropdown-content">
                      <a href="#"> Bosh ilmiy-metodik markaz</a>
                      <a href="#"> Elektron Kutubxona</a>
                      <a href="#">Grafik Dizayn</a>
                      <a href="#">Digital Marketing</a>
                    </div>
                  </div>
                  <div class="navbar_links_dropdown">
                    <button class="dropbtn">Pricing</button>
                    <div class="dropdown-content">
                      <a href="#"> Raxbariyat</a>
                      <a href="#"> Elektron Kutubxona</a>
                      <a href="#">Grafik Dizayn</a>
                      <a href="#">Digital Marketing</a>
                    </div>
                  </div>
                  <Link to="/blog">
                    <p>Blog</p>
                  </Link>
                  <Link to="/contact">
                    <p>Contact</p>
                  </Link>
                </div>
              </div>
              <div className="navbar_contact_icon_links">
                <div className="navbar_search_input">
                  <form action="#" method="get">
                    <input
                      type="search"
                      hidden
                      name="navbar_search_input"
                      id=""
                    />
                    <FaSearch />
                    <input type="submit" value="" hidden />
                  </form>
                </div>
                <div className="navbar_link_icons">
                  <Link to="#">
                    <FaFacebookF />
                  </Link>
                  <Link to="#">
                    <FaTwitter />
                  </Link>
                  <Link to="#">
                    <FaGooglePlusG />
                  </Link>
                  <Link to="#">
                    <FaPinterestP />
                  </Link>
                </div>
              </div>
            </div>

            <div className="menubar">
              <div className="navbar-toggle" onClick={toggleMenu}>
                {isOpen ? <FaTimes /> : <IoMenu />}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
