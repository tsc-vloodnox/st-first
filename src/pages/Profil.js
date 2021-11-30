import React, { useContext } from "react";
import Log from "../components/Log";
import { UidContext } from "../components/AppContext";
import UpdateProfil from "../components/profil/UpdateProfil";
import Cota from "../components/profil/cota";

const Profil = () => {
  const uid = useContext(UidContext);

  return (
    <div className="profil-page">
      {/* <h1>Profil</h1> */}
      <p></p>
      <br />
      {uid ? (
        <>
          <UpdateProfil />
          <Cota />
        </>
      ) : (
        <div className="log-container">
          <Log signin={false} signup={true} />
          <div className="img-container">
            <img src="./img/log-img.jpg" alt="img-log" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Profil;
