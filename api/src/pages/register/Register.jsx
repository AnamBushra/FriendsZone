import React from "./register.css"
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function Register() {
    const username= useRef();
    const email= useRef();
    const password= useRef();
    const passwordAgain= useRef();
    const history=useNavigate();
    const navigateLogin = () => {
        // 👇️ navigate to /
        history('/Login');
      };
    const handleClick = async (e) => {
        e.preventDefault();
        if(passwordAgain.current.value !== password.current.value){
            password.current.setCustomValidity("Passwords don't match!")
        }
        else{
            
            const user={
                username : username.current.value,
                email : email.current.value,
                password : password.current.value,
            };
            try{
                history("/login");
                await axios.post("/auth/register",user);
                
            }
            catch(err){
                console.log(err)
            }
           
        }
    
    };
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">FriendsZone</h3>
                <span className="loginDesc">Spreading Happiness, Making Friends.</span>
            </div>
            <div className="loginRight">
                <form className="loginBox" onSubmit={handleClick}>
                    <input placeholder="Email" required ref={email} type="email" className="loginInput" />
                    <input placeholder="Username" required ref={username} className="loginInput" />
                    <input placeholder="Password" minLength={6} required ref={password} type="password" className="loginInput" />
                    <input placeholder="Re-Enter Password" required ref={passwordAgain} type="password" className="loginInput" />
                    <button className="loginButton" type="submit">Sign Up</button>
                    <span className="loginForget">Forgot Password?</span>
                    <button className="loginRegisterButton" onClick={navigateLogin} >Already have an account?</button>
                </form>
            </div>
        </div>
    </div>
  )
}