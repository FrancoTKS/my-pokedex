import React, { useState, useEffect } from "react";
import { useForm } from "@formspree/react";
import srmoustach from "../../images/srMostacho.png";
import "../../styles/Contact.css";

export const Contact = () => {
  const [state, handleSubmit] = useForm("xvojjzzp");
  const [validation, setValidation] = useState(false);
  const [cont, setCont] = useState("");

  const [email, setEmail] = useState("");
  const [asunto, setAsunto] = useState("");
  const [comment, setComment] = useState("");
  const [vote, setVote] = useState("");

  const [emailval, setEmailval] = useState(true);
  const [asuntoval, setAsuntoval] = useState(true);
  const [commentval, setCommentval] = useState(true);
  const [voteval, setVoteval] = useState(true);

  const handleChange = (event) => {
    event.preventDefault();
    setValidation(Validations());
    if (validation) {
      setCont(jsonContact(email, asunto, comment, vote));
      console.log(cont);
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
    let val = true;

    let as = document.querySelector("#affairs").value;
    if (!as.trim()) {
      document.querySelector("#affairs").classList.add("error-input");
      setAsuntoval(false);
      val = false;
    } else {
      setAsuntoval(true);
      setAsunto(as);
    }

    let em = document.querySelector("#mail").value;
    if (!em.trim() || !emailValid(em)) {
      document.querySelector("#mail").classList.add("error-input");
      setEmailval(false);
      val = false;
    } else {
      setEmailval(true);
      setEmail(em);
    }

    let vt = document.querySelector("#vote").value;
    if (!vt.trim()) {
      document.querySelector("#vote").classList.add("error-input");
      setVoteval(false);
      val = false;
    } else {
      setVoteval(true);
      setVote(vt);
    }

    let cmt = document.querySelector("#comment").value;
    if (!cmt.trim()) {
      document.querySelector("#comment").classList.add("error-input");
      setCommentval(false);
      val = false;
    } else {
      setCommentval(true);
      setComment(cmt);
    }
    AddError_Remove();
    return val;
  }

  function AddError_Remove() {
    if (asuntoval) {
      document.querySelector("#error-affairs").textContent = "";
      document.querySelector("#affairs").classList.remove("error-input");
    } else {
      document.querySelector("#error-affairs").textContent =
        "Debe completar el campo Asunto";
    }

    if (emailval) {
      document.querySelector("#error-emailAddress").textContent = "";
      document.querySelector("#mail").classList.remove("error-input");
    } else {
      document.querySelector("#error-emailAddress").textContent =
        "Complete correctamente : example@mail.com";
    }

    if (voteval) {
      document.querySelector("#error-vote").textContent = "";
      document.querySelector("#vote").classList.remove("error-input");
    } else {
      document.querySelector("#error-vote").textContent =
        "Debe completar el campo Vote";
    }

    if (commentval) {
      document.querySelector("#error-comment").textContent = "";
      document.querySelector("#comment").classList.remove("error-input");
    } else {
      document.querySelector("#error-comment").textContent =
        "Debe completar el campo de Comentario";
    }
  }

  function jsonContact(email, asunto, comment, vote) {
    const contact = {
      Email: email,
      Affair: asunto,
      Rank: vote,
      Comment: comment,
    };
    return contact;
  }

  return (
    <div className="contact">
      <h3 className="title-contact">Se amable y califícanos</h3>

      <form className="form-contact" onSubmit={handleSubmit} method="POST">
        <input
          type="text"
          id="affairs"
          name="affairs"
          placeholder="Affairs"
          autoComplete="off"
        />
        <div className="error" id="error-affairs" />
        <input
          type="email"
          id="mail"
          name="mail"
          placeholder=" Email Address"
          autoComplete="off"
        />
        <div className="error" id="error-emailAddress" />

        <div className="form-vote">
          <select name="vote" id="vote" className="form-select-vote">
            <option value="">Vote for us</option>
            <option value="0">@</option>
            <option value="1">❤</option>
            <option value="2">❤❤</option>
            <option value="3">❤❤❤</option>
            <option value="4">❤❤❤❤</option>
            <option value="5">❤❤❤❤❤</option>
          </select>
        </div>

        <div className="error" id="error-vote" />

        <textarea
          id="comment"
          name="comment"
          rows="4"
          cols="35"
          placeholder="write your review"
        ></textarea>

        <div className="error" id="error-comment" />

        {validation ? (
          <div className="div-form-submit-contact">
            <button className="btn-submit-contact" type="submit">
              submit
            </button>
            <span className="valid">Puede enviar el Formulario</span>
          </div>
        ) : (
          <div className="div-form-submit-contact">
            <button className="btn-submit-contact" onClick={handleChange}>
              submit
            </button>
            {/* <span className="error">Debe de completar todos los Campos</span> */}
          </div>
        )}
      </form>

      <div className="contain-img-contact">
        <img
          className="contact-img"
          src={srmoustach}
          alt="imagen del sr Moustache"
        />
      </div>
    </div>
  );
};

{
  /* <div className="form-vote">
          <select name="vote" id="vote" className="form-select-vote">
            <option value="">Vote for us</option>
            <option value="0">(⑉⊙ȏ⊙)</option>
            <option value="1">(⁠｡⁠•́⁠︿⁠•̀⁠｡⁠)*❤</option>
            <option value="2">( • - •)*❤❤</option>
            <option value="3">（╯°□°）╯*❤❤❤</option>
            <option value="4">(っ ˘ω˘ς)*❤❤❤❤</option>
            <option value="5">(づ｡◕‿‿◕｡)づ*❤❤❤❤❤</option>
          </select>
        </div> */
}
