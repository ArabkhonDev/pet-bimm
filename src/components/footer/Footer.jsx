import {
  FaTelegramPlane,
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaLinkedinIn,
  FaInstagram,
  FaMapMarkedAlt,
} from "react-icons/fa";

import { BsTelephoneOutbound } from "react-icons/bs";

import "./footer.css";

import Logo from "../../assets/logo.avif";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer_main">
          <div className="footer_top">
            <div className="footer_social_info">
              <div className="footer_social_info_logo">
                <a href="#">
                  <img
                    src={Logo}
                    alt="footer_logo"
                    className="footer_social_info_logo_img"
                  />
                </a>
              </div>
              <div className="footer_social_info_content">
                <p className="footer_social_info_content_text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore eaque fugit sequi dolor, dicta officia.
                </p>
              </div>
              <div className="footer_social_info_icons">
                <h2 className="footer_social_info_icons_title">Follow Us</h2>
                <div className="footer_social_info_icons_items">
                  <a href="#" className="footer_social_info_icon_item icon-f">
                    <FaFacebookF />
                  </a>
                  <a href="#" className="footer_social_info_icon_item icon-g">
                    <FaGooglePlusG />
                  </a>
                  <a href="#" className="footer_social_info_icon_item icon-in">
                    <FaInstagram />
                  </a>
                  <a href="#" className="footer_social_info_icon_item icon-ln">
                    <FaLinkedinIn />
                  </a>
                  <a href="#" className="footer_social_info_icon_item icon-tw">
                    <FaTwitter />
                  </a>
                </div>
              </div>
            </div>
            <div className="footer_top_links">
              <div className="footer_top_links_pages">
                <p className="footer_top_links_title">Useful links</p>
                <div className="footer_top_links_item">
                  <a href="#">Home</a>
                  <a href="#">About</a>
                  <a href="#">Contact</a>
                  <a href="#">Service</a>
                  <a href="#">Policy</a>
                  <a href="#">Resourses</a>
                  <a href="#">FAQ</a>
                  <a href="#">News</a>
                </div>
              </div>
            </div>
            <div className="footer_contact_info">
              <div className="footer_contact_info_address">
                <a href="https://www.google.com/maps/place/Tashkent+State+Agrarian+University/@41.3624981,69.3395614,17z/data=!3m1!4b1!4m6!3m5!1s0x38aef3840f7be271:0xdb32d0828ee7ab8c!8m2!3d41.3624941!4d69.3421363!16s%2Fm%2F0130_k_d?entry=ttu" target="_blank">
                <FaMapMarkedAlt />
                  <span className="footer_contact_info_address">Manzil: 100140, Toshkent vil. Qibray tumani, Universitet
                  ko‘chasi, 2-uy</span>
                </a>
              </div>
              <div className="footer_contact_info_tel">
                <a href="tel:+998771000089">
                  <BsTelephoneOutbound />
                  <span className="footer_contact_info_tel_number">998 77 100 00 89</span>
                </a>
              </div>
              <form action="#" method="get">
                <input type="email" name="send_email_info" placeholder="Email Address" className="send_email_info_input" />
                <li className="footer_contact_info_icon">
                  <FaTelegramPlane className="footer_contact_info_icon_svg"/>
                </li>
                <input type="submit" hidden />
              </form>
            </div>
          </div>
          <div className="footer_bottom">
            <div className="footer_bottom_section">
              <div className="footer_bottom_section_title">
                All Right Reserved By{" "}
                <a href="#">
                  <b>MDIS Group</b>
                </a>
              </div>
              <div className="footer_bottom_section_links">
                <div className="footer_bottom_section_link_item">
                  <a href="#">Home</a>
                  <a href="#">Terms</a>
                  <a href="#">Policy</a>
                  <a href="#">Contact</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
