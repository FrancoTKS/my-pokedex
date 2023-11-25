import React, { useState } from "react";
import eyeOn from "../../images/icons/Icons-Ocultos/eye-fill.png";
import eyeOff from "../../images/icons/Icons-Ocultos/eye-off-fill.png";
import snorlax from "../../images/snorlaxZZZ.png";
import "../../styles/Register.css";

export const Register = () => {
  const day = new Date();
  const [pasw, setpasw] = useState(false);
  const [validation, setvalidation] = useState(true);
  const [pasw2, setpasw2] = useState(false);
  const [User, setUser] = useState();

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState("");

  const [emailval, setEmailval] = useState(true);
  const [firstNameval, setFirstNameval] = useState(true);
  const [lastNameval, setLastNameval] = useState(true);
  const [birthdateval, setBirthdateval] = useState(true);
  const [countryval, setCountryval] = useState(true);
  const [equalspsw, setequalspsw] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    setvalidation(Validations());

    if (validation) {
      setUser(
        jsonUser(email, lastName, firstName, country, birthdate, password)
      );
      console.log(User);
      AddError_Remove();
    } else {
      AddError_Remove();
    }
  };

  function emailValid(em) {
    const arr = em.includes("@");
    const com = em.includes(".com");

    if (arr && com) {
      return true;
    } else {
      return false;
    }
  }

  function Validations() {
    let v = true;

    let em = document.querySelector("#mail").value;
    if (!em.trim() || !emailValid(em)) {
      document.querySelector("#mail").classList.add("error-input");
      setEmailval(false);
      v = false;
    } else {
      setEmailval(true);
      setEmail(em);
    }

    let ln = document.querySelector("#last-name").value;
    if (!ln.trim()) {
      document.querySelector("#last-name").classList.add("error-input");
      setLastNameval(false);
      v = false;
    } else {
      setLastNameval(true);
      setLastName(ln);
    }

    let fn = document.querySelector("#trainer-name").value;
    if (!fn.trim()) {
      document.querySelector("#trainer-name").classList.add("error-input");
      setFirstNameval(false);
      v = false;
    } else {
      setFirstNameval(true);
      setFirstName(fn);
    }

    let ct = document.querySelector("#country").value;
    if (!ct.trim()) {
      document.querySelector("#country").classList.add("error-input");
      setCountryval(false);
      v = false;
    } else {
      setCountryval(true);
      setCountry(ct);
    }

    let bd = document.querySelector("#birthdate").value;
    let bdDate = new Date(bd);
    if (!bd.trim() || bdDate > day) {
      document.querySelector("#birthdate").classList.add("error-input");
      setBirthdateval(false);
      v = false;
    } else {
      setBirthdateval(true);
      setBirthdate(bd);
    }

    let ps1 = document.querySelector("#password").value;
    let ps2 = document.querySelector("#password2").value;
    setequalspsw(ps1 === ps2 && ps1 !== "" && ps2 !== "");

    if (equalspsw) {
      setPassword(ps1);
    } else {
      v = false;
    }

    return v;
  }

  function AddError_Remove() {
    if (!emailval) {
      document.querySelector("#error-emailAddress").textContent =
        "Complete correctamente : example@mail.com";
    } else {
      document.querySelector("#error-emailAddress").textContent = "";
      document.querySelector("#mail").classList.remove("error-input");
    }
    if (!firstNameval) {
      document.querySelector("#error-firstName").textContent =
        "Debe completar el campo firstName";
    } else {
      document.querySelector("#error-firstName").textContent = "";
      document.querySelector("#trainer-name").classList.remove("error-input");
    }
    if (!lastNameval) {
      document.querySelector("#error-lastName").textContent =
        "Debe completar el campo lastName";
    } else {
      document.querySelector("#error-lastName").textContent = "";
      document.querySelector("#last-name").classList.remove("error-input");
    }
    if (!birthdateval) {
      document.querySelector("#error-birthdate").textContent =
        "Debe completar el campo de birthdate correctamente";
    } else {
      document.querySelector("#error-birthdate").textContent = "";
      document.querySelector("#birthdate").classList.remove("error-input");
    }
    if (!countryval) {
      document.querySelector("#error-country").textContent =
        "Debe completar el campo country";
    } else {
      document.querySelector("#error-country").textContent = "";
      document.querySelector("#country").classList.remove("error-input");
    }
    if (!equalspsw) {
      document.querySelector("#error-password").textContent =
        "Error de Contraseña/s";
    } else {
      document.querySelector("#error-password").textContent = "";
    }
  }

  function jsonUser(email, lastN, firstN, country, birthdate, password) {
    const user = {
      Email: email,
      LastName: lastN,
      FirstName: firstN,
      Country: country,
      Birthdate: birthdate,
      Password: password,
    };
    return user;
  }

  return (
    <div className="register">
      <h1 className="title-register">Pokemon new Trainer Sign Up !!</h1>
      <form
        action="#"
        className="form-register"
        onSubmit={handleSubmit}
        method="POST"
        noValidate
      >

        <input
          type="email"
          id="mail"
          name="mail"
          placeholder=" Email Address"
          autoComplete="off"
        />

        <div className="error" id="error-emailAddress" />

        <input
          type="text"
          id="trainer-name"
          name="trainer-name"
          placeholder=" First Name, Trainer"
          autoComplete="off"
        />

        <div className="error" id="error-firstName" />

        <input
          type="text"
          id="last-name"
          name="last-name"
          placeholder=" Last Name, Trainer"
          autoComplete="off"
        />

        <div className="error" id="error-lastName" />

        <input type="date" name="birthdate" id="birthdate" autoComplete="off" />

        <div className="error" id="error-birthdate" />

        <div className="form-country">
          <select name="country" id="country" className="form-select-country">
            <option value="">Country</option>
            <option value="AR">Argentina</option>
            <option value="BO">Bolivia</option>
            <option value="BR">Brasil</option>
            <option value="CH">Chile</option>
            <option value="CO">Colombia</option>
            <option value="EC">Ecuador</option>
            <option value="MX">Mexico</option>
            <option value="PY">Paraguay</option>
            <option value="PE">Perú</option>
            <option value="UY">Uruguay</option>
            <option value="VE">Venezuela</option>
          </select>
        </div>

        <div className="error" id="error-country" />

        <div className="div-pass-1">
          <input
            type={pasw ? "text" : "password"}
            id="password"
            name="password"
            placeholder=" Password"
            autoComplete="off"
          />
          <div className="toggle-password" onClick={() => setpasw(!pasw)}>
            {pasw ? (
              <img src={eyeOn} className="eye-icon" alt="Show Password" />
            ) : (
              <img src={eyeOff} className="eye-icon" alt="Hide Password" />
            )}
          </div>
        </div>

        <div className="div-pass-2">
          <input
            type={pasw2 ? "text" : "password"}
            id="password2"
            name="password2"
            placeholder=" Password Confirmation"
            autoComplete="off"
          />

          <div className="toggle-password" onClick={() => setpasw2(!pasw2)}>
            {pasw2 ? (
              <img src={eyeOn} className="eye-icon" alt="Show Password" />
            ) : (
              <img src={eyeOff} className="eye-icon" alt="Hide Password" />
            )}
          </div>
        </div>

        <div className="error" id="error-password" />

        <div className="div-form-submit">
          <button className="btn-submit-register" type="submit">
            submit
          </button>
        </div>
      </form>

      <div className="img-register">
        <img src={snorlax} className="snorlax-img" alt="img snorlax zzz" />
      </div>
    </div>
  );
};
