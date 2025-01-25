import { assets } from "../../assets/assets";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>We are here to satisfy your cravings</p>
          <div className="footer-social-icons">
            <a href="https://www.facebook.com/shunkyzp" target="_blank">
              <img src={assets.facebook_icon} alt="" />
            </a>
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+254710418516</li>
            <li>shunkyzt@gmail.com</li>
          </ul>
        </div>
      </div>

      <a href="#navbar">
        <button className="return-button">Return To Menu</button>
      </a>

      <hr />
      <p className="footer-copyright">
        Copyright 2024 @tomato.com - All Right Reserved
      </p>
    </div>
  );
}
