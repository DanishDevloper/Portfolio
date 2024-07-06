import React from "react";
import { GiClawSlashes, GiPhone } from "react-icons/gi";
import { IoLocationSharp } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { IoIosMailOpen } from "react-icons/io";
import Img from "../../public/images/danish.jpg";
const Aside = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src={Img} alt="myImage" width="80" />
        </figure>
        <div className="info-content">
          <h1 className="name">Md Danish Alam</h1>
          <p className="title">Developer</p>
        </div>
        <button className="info_more-btn">
          <span>Show Contacts</span>
          <GiClawSlashes />
        </button>
      </div>
      {/* contact info */}
      <div className="sidebar-info_more">
        <hr className="separator2" />
        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <IoIosMailOpen />
            </div>
            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a
                href="mailto:mddanishfiroz98@gmail.com"
                className="contact-link"
              >
                mddanishfiroz98@gmail.com
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <GiPhone />
            </div>
            <div className="contact-info">
              <p className="contact-title">Phone</p>
              <a href="tel:+917979824408" className="contact-link">
                +91 7979824408
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <FaLinkedin />
            </div>
            <div className="contact-info">
              <p className="contact-title">linkedin</p>
              <a
                href="https://www.linkedin.com/in/mddanishalam98"
                className="contact-link"
              >
                mddanishalam98
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <IoLocationSharp />
            </div>
            <div className="contact-info">
              <p className="contact-title">location</p>
              <address>Jehanabad, Bihar 804427</address>
            </div>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Aside;
