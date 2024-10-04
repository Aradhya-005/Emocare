import React from 'react'
import '../css/Login.css'
function Signup() {
  return (
    <>
      <div className="signin-container">
        {/* Left Side Content */}
        <div className="left-side">
          <h2>Join Our Community!</h2>
          <p>
            Sign up and start your journey towards better mental well-being.
            Get connected to professional therapists, anywhere, anytime.
          </p>
        </div>

        {/* Right Side Form */}
        <div className="right-side">
          <h2>Sign Up</h2>
          <form>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" placeholder="Enter your username" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Enter your email" required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" placeholder="Enter your password" required />
            </div>
            <div className="form-group">
              <label htmlFor="confirm-password">Confirm Password</label>
              <input type="password" id="confirm-password" placeholder="Confirm your password" required />
            </div>
            <button type="submit" className="signin-btn">Sign Up</button>
          </form>
          <div className="signin-options">
            <p>Already have an account? <a href="/login">Sign in here</a></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup;
