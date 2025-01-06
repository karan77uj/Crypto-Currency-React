import React , {useEffect,useState}from 'react';
import '../styles/Login.css'; 
import axios from 'axios';
import LoginImg from '../images/contact-img.png';
import { Link , useNavigate} from 'react-router-dom';

function Login () {

  const history=useNavigate();

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    async function submit(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:8000/",{
                email,password
            })
            .then(res=>{
                if(res.data=="exist"){
                    history("/",{state:{id:email}})
                }
                else if(res.data=="notexist"){
                    alert("User have not sign up")
                }
            })
            .catch(e=>{
                alert("wrong details")
                console.log(e);
            })

        }
        catch(e){
            console.log(e);

        }

    }

    return (
      <div className="login-page">
        <div className="login-container">
          <div className="login-content">
            <div className="login-form-container">
              <h1 className="login-title">Login</h1>
              <p className="login-description">Please enter your credentials to login.</p>
              <form className="login-form" onSubmit={submit}>
                <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="you@example.com" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input 
                    type="password" 
                    id="password" 
                    placeholder="Your Password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                  />
                </div>
                <button type="submit" className="btn-primary">Login</button>
              </form>
              <p className="signup-link">
                Don't have an account? <Link to="/signup">Sign up</Link>
              </p>
            </div>
            <div className="login-image-container">
              <img src={LoginImg} alt="Login" className="login-image" />
            </div>
          </div>
        </div>
      </div>
    );
    
};

export default Login;
