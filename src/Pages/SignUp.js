import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import '../styles/Login.css'; 
import SignupImg from '../images/contact-img.png'; 

function SignUp() {
  const history = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  async function submit(e) {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8000/signup", {
        name,  
        email,
        password
      })
      .then(res => {
        if (res.data === "exist") {
          alert("User already exists");
        } else if (res.data === "notexist") {
          history("/", { state: { id: email } });
          window.location.href = "/profile";
          alert("User Created...");
        }
      })
      .catch(e => {
        alert("Wrong details");
        console.log(e);
      });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-content">
          <div className="login-form-container">
            <h1 className="login-title">Sign Up</h1>
            <p className="login-description">Create your account by filling out the form below.</p>
            <form className="login-form" onSubmit={submit}>  
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" onChange={(e) => setName(e.target.value)} placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input type="email" id="email" onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" required />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" onChange={(e) => setPassword(e.target.value)} placeholder="Your Password" required />
              </div>
              <button type="submit" className="btn-primary">Sign Up</button>
            </form>
            <div className="signup-link">
              <p>Already have an account? <Link to="/profile">Login</Link></p>  
            </div>
          </div>
          <div className="login-image-container">
            <img src={SignupImg} alt="Sign Up" className="login-image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;  
