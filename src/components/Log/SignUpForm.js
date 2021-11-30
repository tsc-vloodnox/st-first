import React, { useState } from "react";
import axios from "axios";
import SignInForm from "./SignInForm";

const SignUpForm = () => {
  const [formSubmit, setFormSubmit] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [controlPassword, setControlPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    const terms = document.getElementById("terms");
    const nameError = document.querySelector(".name.error");
    const emailError = document.querySelector(".email.error");
    const passwordError = document.querySelector(".password.error");
    const passwordConfirmError = document.querySelector(
      ".password-confirm.error"
    );
    const termsError = document.querySelector(".terms.error");

    passwordConfirmError.innerHTML = "";
    termsError.innerHTML = "";

    if (password !== controlPassword || !terms.checked) {
      if (password !== controlPassword)
        passwordConfirmError.innerHTML =
          "Les mots de passe ne correspondent pas";

      if (!terms.checked)
        termsError.innerHTML = "Veuillez valider les conditions générales";
    } else {
      await axios({
        method: "post",
        url: `${process.env.REACT_APP_API_URL}api/user/register`,
        data: {
          name,
          email,
          password,
        },
      })
        .then((res) => {
          console.log(res);
          if (res.data.errors) {
            nameError.innerHTML = res.data.errors.name;
            emailError.innerHTML = res.data.errors.email;
            passwordError.innerHTML = res.data.errors.password;
          } else {
            setFormSubmit(true);
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      {formSubmit ? (
        <>
          <SignInForm />
          <span></span>
          <h4 className="success">
            Enregistrement réussi, veuillez-vous connecter
          </h4>
        </>
      ) : (
        <div className="sign-up">
          <div className="log-form-header">
            <h1 className="st">Structure</h1>
            <h2 className="log-title">S'inscrire !</h2>
          </div>

          <form
            action=""
            onSubmit={handleRegister}
            id="sign-up-form"
            className="user"
          >
            <div className="form-group">
              <input
                className="form-control form-control-user"
                placeholder="Nom complet"
                type="text"
                name="name"
                id=""
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control form-control-user"
                placeholder="Addresse Email"
                type="email"
                name="email"
                id=""
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div className="form-group row">
              <div className="col-sm-6">
                <input
                  className="form-control form-control-user"
                  placeholder="Mot de passe"
                  name="password"
                  type="password"
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </div>
              <div className="col-sm-6">
                <input
                  className="form-control form-control-user"
                  placeholder="Confirmer le Mot de passe"
                  type="password"
                  name="password"
                  id="password-conf"
                  onChange={(e) => setControlPassword(e.target.value)}
                  value={controlPassword}
                />
              </div>
            </div>
            <input type="checkbox" id="terms" />
            <label htmlFor="terms">
              J'accepte les{" "}
              <a href="/" target="_blank" rel="noopener noreferrer">
                conditions générales
              </a>
            </label>
            <div className="terms error"></div>
            <input
              className="btn login-btn"
              type="submit"
              value="Valider inscription"
            ></input>
          </form>
          <hr />
          <div className="text-center forgot-password-div">
            <a
              className="small forgot-password-link"
              href="forgot-password.html"
            >
              Mot de passe oublier ?
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default SignUpForm;
