import React from 'react'
import '../css/Login.css'

function Login() {
  return (
    <>
    
    
    <div className="signin-container">
      {/* Left Side Content */}
      <div className="left-side">
        <h2>Welcome Back!</h2>
        <p>
          Join our community and get access to the best therapy services.
          Connect with professional therapists anytime, anywhere.
        </p>
      </div>

      {/* Right Side Form */}
      <div className="right-side">
        <h2>Sign In</h2>
        <form>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" placeholder="Enter your username" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" required />
          </div>
          <button type="submit" className="signin-btn">Sign In</button>
        </form>
        <div className="signin-options">
          <p>Don't have an account? <a href="/signup">Sign up here</a></p>
        </div>
      </div>
    </div></>
  )
}

export default Login
