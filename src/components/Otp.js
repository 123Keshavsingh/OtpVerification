import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";


const OtpScreen = ({ }) => {

    let [Otp,setOtp] = useState(0);
    let[Screen,setScreen] = useState(false);
    const history = useHistory();
    const handlesubmit = (e) =>{
      setOtp(e.target.value);
      
  
    }
    const check = () =>{
        if(Otp==1234){
          history.push("/home");
            

        }
        else{
            alert("You have entered wrong OTP");
        }
    }
  return (
    <div className="wrapper">
      <h1 style={{fontWeight:"400"}} className="main-heading">Please verify mobile number</h1>
      <p className="sub-text">An otp is sent to your mobile number</p>
      
      
        <div className="form-wrapper">
          <form id="loginForm">
            <div className="input-field">
              
              <input
                type="number"
                placeholder="Otp(1234)"
                name="otp"
                autoComplete="false"
                onChange={handlesubmit}
                maxLength = "4"

              />
            </div>
            
            <button className="main-button" type="submit" id="sign-in-button" onClick={check}> OTP VERIFICATION</button>
            
          </form>
        </div>
     
    </div>
  );
};

export default OtpScreen;
