import React, { useState } from "react";
import eyeOn from "../../images/icons/Icons-Ocultos/eye-fill.png";
import eyeOff from "../../images/icons/Icons-Ocultos/eye-off-fill.png";
import srmostacho from "../../images/srMostacho2.png";
import "../../styles/Login.css";

export const Login = () => {
  const [pasw, setpasw] = useState(false);
  return (
    <div className="login">
      <h3 className="title-login">coach login</h3>
      <div className="contain-login">
        <form className="form-login" >
        <label htmlFor="mail">Email address</label>
        <div className="div-login-mail">
        <input type="email" id="mail" name="mail" placeholder=" Email Address" />
        </div>
        <label htmlFor="password">Password</label>

        <div className="div-login-pass">
          <input
            type={pasw ? "text" : "password"}
            id="password"
            name="password"
            placeholder=" Password"
          />
          <div className="toggle-pass" onClick={() => setpasw(!pasw)}>
            {pasw ? (
              <img src={eyeOn} className="eye-icon" alt="Show Password" />
            ) : (
              <img src={eyeOff} className="eye-icon" alt="Hide Password" />
            )}
          </div>
        </div>
          <p>
            y en algun momento de mi vida agregar el coso de no soy un robot
           <span>(˵ •̀ ᴗ - ˵ )</span>.
          </p>
        </form>
      </div>
      <div className="div-submit-login">
        <button className="btn-submit-login">login</button>
      </div>

      <div className="contain-img-login">
        <img className="login-img" src={srmostacho} alt="imagen del login" />
      </div>
    </div>
  );
};
