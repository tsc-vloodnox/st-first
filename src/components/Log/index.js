import React, { useState } from "react";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";

const Log = (props) => {
  const [signUpModal, setsignUpModal] = useState(props.signup);
  const [signInModal, setsignInModal] = useState(props.signin);

  const handleModals = (e) => {
    if (e.target.id === "register") {
      setsignInModal(false);
      setsignUpModal(true);
    } else if (e.target.id === "login") {
      setsignUpModal(false);
      setsignInModal(true);
    }
  };

  return (
    <div className="connection-form">
      <div className="form-container">
        <ul>
          <li
            onClick={handleModals}
            id="register"
            className={signUpModal ? "active-btn" : null}
          >
            S'inscrire
          </li>
          <li
            onClick={handleModals}
            id="login"
            className={signInModal ? "active-btn" : null}
          >
            Se connecter
          </li>
        </ul>
        {signUpModal && <SignUpForm />}
        {signInModal && <SignInForm />}
      </div>
    </div>
  );
};

export default Log;
