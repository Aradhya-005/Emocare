import React from 'react'
import Animation from '../assets/animated women.gif'
// import '../css/Contact.css'

function Contact() {
  return (
    <>
    
    <div className="contact-container">
      {/* Left side image */}
      <div className="contact-image-section">
        <img src={Animation} alt="Contact" />
      </div>

      {/* Right side contact form */}
      <div className="contact-form-section">
        <h2>Contact Us</h2>
        <form>
          <div className="contact-form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Enter your name" />
          </div>

          <div className="contact-form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" />
          </div>

          <div className="contact-form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" placeholder="Your message"></textarea>
          </div>

          <button type="submit" className="contact-submit-btn">Send Message</button>
        </form>
      </div>
    </div>
    </>
  )
}

export default Contact