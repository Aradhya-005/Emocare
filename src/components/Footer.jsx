import React from 'react'
import '../css/Footer.css'

function Footer() {
  return (
    <>
       
    <section className='footer-section'>
    <section className="newLetter">
        <h1>Subscribe to Our Newsletter</h1>
        <p>Stay Updated with the Latest in Mental Health Care!</p>
        <div>
          <input
            type="text"
            aria-label="input field to enter email to subscribe newsLetter"
          />
          <button>Subscribe</button>
        </div>
      </section>
  
    <footer >
      <div className="footer-content">
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/therapist-help">Therapist Help</a></li>
            <li><a href="/chatroom">Chatroom</a></li>
            <li><a href="/contact-us">Contact Us</a></li>
            <li><a href="/faqs">FAQs</a></li>
           
          </ul>
        </div>

        <div className="footer-links">
          <h3>Legal Links</h3>
          <ul>
          <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/terms-of-service">Terms of Service</a></li>
            <li><a href="/cookie-policy">Cookie Policy</a></li>
          </ul>
        </div>
        <div className="footer-social">
          <h3>Follow Us</h3>
          <ul>
            <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Emocare. All Rights Reserved.</p>
      </div>
    </footer>

 
    </section>
    
    </>
  )
}

export default Footer