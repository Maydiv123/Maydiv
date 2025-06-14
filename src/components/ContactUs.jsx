'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaInstagram, FaFacebook, FaTwitter, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

import './ContactUs.css';
import Discuss from './Discuss';
import Footer from './Footer';

export default function ContactUs() {
  const [showPhone, setShowPhone] = useState(false);
  const handleFieldFocus = () => {
    if (!showPhone) setShowPhone(true);
  };

  return (
    <>
      <nav className="header-nav">
        <div className="header-logo">
          <Image src="/logo.png" alt="MayDiv Logo" width={150} height={50} />
        </div>
        <ul className="header-links">
          <li><Link href="/">Home</Link></li>
          <li className="dropdown">
            <span className="dropdown-toggle">Services</span>
            <ul className="dropdown-menu">
              <li><Link href="/real-projects">Web Development</Link></li>
              <li><Link href="/real-services">UI/UX Design</Link></li>
              <li><Link href="/real-testimonials">Social Media and Marketing</Link></li>
              <li><Link href="/real-apps">App Development</Link></li>
              <li><Link href="/real-ai">AI</Link></li>
            </ul>
          </li>
          <li><Link href="/projects">Projects</Link></li>
         
          <li><Link href="/contact">Contact</Link></li>
        </ul>
        <div className="header-socials">
          <a href="#" aria-label="GitHub"><FaGithub /></a>
          <a href="#" aria-label="Instagram"><FaInstagram /></a>
          <a href="#" aria-label="Facebook"><FaFacebook /></a>
        </div>
      </nav>
      <div className="contactus-main">
        <div className="contactus-form-card">
          <h1 className="contactus-heading"><span className="wave-text">Get in Touch</span></h1>
          <form className="contactus-form-modern">
            <div className="contactus-row">
              <div className="contactus-field">
                <label>Name</label>
                <input type="text" placeholder="" />
              </div>
              <div className="contactus-field">
                <label>Phone</label>
                <input type="text" placeholder="" />
              </div>
            </div>
            <div className="contactus-field">
              <label>Email</label>
              <input type="email" placeholder="" />
            </div>
            <div className="contactus-field">
              <label>Message...</label>
              <textarea rows={2} placeholder="" />
            </div>
            <button type="submit" className="contactus-submit-btn">SUBMIT</button>
          </form>
        </div>

        <div className="contactus-info-card">
          <h2 className="contactus-info-heading">Contact info</h2>
          <div className="contactus-info-list">
            <div className="contactus-info-item"><FaPhone /> 91+ 9220438999</div>
            <div className="contactus-info-item"><FaEnvelope /> operations@maydiv.com</div>
            <div className="contactus-info-item"><FaMapMarkerAlt /> SCO-105 Second floor world street, Faridabad , HR 121004</div>
          </div>
          <div className="contactus-info-socials">
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaTwitter /></a>
          </div>
          <img src="/MAYDIV.png" alt="MAYDIV" className="maydiv-watermark" />
        </div>
      </div>

      <img src="/star3.png" alt="star" className="contactus-star-img" />
      <Discuss />
      <Footer />
    </>
  );
}
