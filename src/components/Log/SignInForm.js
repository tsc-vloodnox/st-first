import React, { useState } from "react";
import axios from "axios";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const emailError = document.querySelector(".email.error");
    const passwordError = document.querySelector(".password.error");

    axios({
      method: "post",
      url: `http://localhost:5000/api/user/login`,
      withCredentials: true,
      data: {
        email,
        password,
      },
    })
      .then((res) => {
        console.log(res);
        if (res.data.errors) {
          emailError.innerHTML = res.data.errors.email;
          passwordError.innerHTML = res.data.errors.password;
        } else {
          window.location = "/profil";
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="sign-in">
      <div className="log-form-header">
        <h1 className="st">Structure</h1>
        <h2 className="log-title">Connexion</h2>
      </div>

      <form action="" onSubmit={handleLogin} id="sign-in-form" className="user">
        <div className="form-group">
          <input
            className="form-control form-control-user"
            placeholder="Adresse Email..."
            type="email"
            name="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <div className="email error"></div>
        </div>
        <div className="form-group">
          <input
            className="form-control form-control-user"
            placeholder="Mot de passe..."
            type="password"
            name="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <div className="password error"></div>
        </div>
        <input
          className="btn login-btn"
          type="submit"
          value="Se connecter"
        ></input>
      </form>

      <hr />
      <div className="forgot-password-div">
        <a className="forgot-password-link" href="forgot-password.html">
          Mot de passe oublier ?
        </a>
      </div>
      <div className="register-div">
        <a className="small register-link" href="/register">
          Créer un Compte !
        </a>
      </div>
    </div>
  );
};

export default SignInForm;
