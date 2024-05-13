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
                <span>Bosh Ilmiy-Metodik Markaz</span>
              </Link>
            </div>
            <div
              className={isOpen ? "nav_main_links active" : "nav_main_links"}
            >
              <div className="navbar_links">
                <div className="navbar_links_items">
                  <Link to="https://pet-project-kappa.vercel.app/">
                    <p>Home</p>
                  </Link>
                  <div class="navbar_links_dropdown">
                    <button class="dropbtn">BIMM</button>
                    <div class="dropdown-content">
                    <Link to="/about">Markaz xaqida</Link>
                    <Link to="/raxbariyat">Raxbariyat</Link>
                    <Link to="#">Markaz Tuzilmasi</Link>
                    <Link to="#">Markaz Apparari</Link>
                    <Link to="#">Malaka oshirish markazi </Link>
                    <Link to="#">Gender tenglik</Link>
                    </div>
                  </div>
                  <div class="navbar_links_dropdown">
                    <button class="dropbtn">Axborot xizmati</button>
                    <div class="dropdown-content">
                    <Link to="#">Yangiliklar</Link>
                    <Link to="#">Ommaviy Tadbirlar</Link>
                    <Link to="#">Elonlar</Link>
                    <Link to="#">Savol va javob</Link>
                    </div>
                  </div>
                  <div class="navbar_links_dropdown">
                    <button class="dropbtn">Xujjatlar</button>
                    <div class="dropdown-content">
                    <Link to="#"> Qonunlar</Link>
                    <Link to="#"> Prezident farmon va namoyishlari</Link>
                    <Link to="#"> Xukumat qaror va farmonlari</Link>
                    <Link to="#"> Markaz maqolalari</Link>
                    </div>
                  </div>
                  <Link to="/kengash">
                    <p>Ilmiy Metodik Kengash</p>
                  </Link>
                  <Link to="/managment">
                    <p>Innovation Managment</p>
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
