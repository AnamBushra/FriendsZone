import { useContext, useRef } from "react";
import React from "./login.css"
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
export default function Login() {
    const email= useRef();
    const password= useRef();
    const history=useNavigate();
    const {isFetching,dispatch} =useContext(AuthContext);
    const navigateRegister=()=> {
          history('/register')
    }
    const handleClick = (e) => {
        e.preventDefault();
        loginCall(
          { email: email.current.value, password: password.current.value },
          dispatch
        );
      };
  return (
    <div className="login1">
        <div className="loginWrapper1">
            <div className="loginLeft1">
                <h3 className="loginLogo1">FriendsZone</h3>
                <span className="loginDesc1">Spreading Happiness, Making Friends.</span>
            </div>
            <div className="loginRight1">
                <form className="loginBox1" onSubmit={handleClick}>
                    <input placeholder="Email" type="email"
                    required className="loginInput1" ref={email}/>
                    <input placeholder="Password" type="password" 
                    required className="loginInput1"
                    minLength="6" ref={password}/>
                    <button className="loginButton1" type="submit" disabled={isFetching}>{isFetching?<CircularProgress color="white" size="20px"/>:"Log In"}</button>
                    <span className="loginForget1">Forgot Password?</span>
                    <button className="loginRegisterButton1" onClick={navigateRegister}>{isFetching?<CircularProgress color="white" size="20px"/>:"Create a New Account"}</button>
                </form>
            </div>
        </div>
    </div>
  )
}
