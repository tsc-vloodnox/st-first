import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [largeur, setLargeur] = useState(window.innerWidth);
  // const uid = useContext(UidContext);

  const toggleNavSmallScreen = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setLargeur(window.innerWidth);

      if (window.innerWidth > 825) {
        setToggleMenu(false);
      }
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <nav className="navigation">
      <label className="logo">Structure</label>
      {(toggleMenu || largeur > 825) && (
        <ul className="liste">
          <li className="items">
            <NavLink exact to="/">
              Accueil
            </NavLink>
          </li>
          <li className="items">
            <NavLink exact to="/communaute">
              Communauté
            </NavLink>
          </li>
          <li className="items">
            <NavLink exact to="/academie">
              Académie
            </NavLink>
          </li>
          <li className="items">
            <NavLink exact to="/profil">
              Profil
            </NavLink>
          </li>
          <li>
            <ul className="sec-liste">
              <li>
                <a href="/" target="_blank">
                  <i class="fab fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="/" target="_blank">
                  <i class="fab fa-whatsapp"></i>
                </a>
              </li>
              <li>
                <a href="/" target="_blank">
                  <i class="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      )}
      <button onClick={toggleNavSmallScreen} className="btn">
        <i class="fas fa-bars"></i>
      </button>
    </nav>
  );
};

export default Navbar;
