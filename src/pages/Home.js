
import React from 'react';
import './Home.css';
import { FaInstagram, FaSnapchat, FaPhoneAlt } from 'react-icons/fa';
import profilePic from './IMG_0444.jpg';

const Home = () => {
  return (
    <div className="container">
      <div className="profile">
        <img src={profilePic} alt="Profile" className="profile-pic" />
        <p className="profile-name">Oskar</p>
      </div>
      <h1>Social Media & Contact</h1>
      <div className="icon-container">
        <div className="icon-item">
          <a href="https://www.instagram.com/x_oski_s/" target="_blank" rel="noopener noreferrer" className="icon instagram">
            <FaInstagram />
            <span>Instagram</span>
          </a>
        </div>
        <div className="icon-item">
          <a href="https://www.snapchat.com/t/3smvgfuD" target="_blank" rel="noopener noreferrer" className="icon snapchat">
            <FaSnapchat />
            <span>Snapchat</span>
          </a>
        </div>
        <div className="icon-item">
          <a href="tel:+48791311119" className="icon phone">
            <FaPhoneAlt />
            <span>Telefon</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
