import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useHistory } from "react-router";




const SignIn = ({ loginSubmit, otpSubmit, viewOtpForm }) => {
  let [Num,setNum] = useState(" ");
  let[Show,setShow] = useState(false);
  const history = useHistory();

  const handlesubmit = (e) =>{
    setNum(e.target.value);
    

  }
  const check = () =>{
    if(Num.length===10){
    history.push("/signin");
    }
    else{
      alert("PLEASE ENTER TEN DIGITS MOBILE NUMBER");
    }
  }
  

  return (
    <div className="wrapper">
      <h1 style={{fontWeight:"600"}}className="main-heading">Welcome Back</h1>
      <p className="sub-text">Please sign in to your account</p>
      
        <div className="form-wrapper">
          <form id="loginForm" onSubmit={loginSubmit}>
            <div className="input-field">
              <label>Phone Number</label>
            
              <input
              
               type="number"
               placeholder="number"
               autoComplete="false"
               value={Num}
               onChange={handlesubmit}
               


              />
               
        
            </div>
          <p className="sub-text1" >We will send you a one time SMS message charges may apply</p>
            
            <button   className="main-button" type="submit" id="sign-in-button" onClick={check}>SignIn</button>
            
          </form>
        </div>
     
    </div>
  );
};

export default SignIn;
