import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const linkStyles = ({ isActive }) => {
    return {
      backgroundColor: isActive ? "#050567" : null,
    };
  };

  const [navActif, setNavActif] = useState(
    window.innerWidth >= 1024 ? true : false
  );

  const closeNav = () => {
    if (window.innerWidth <= 1024) {
      setNavActif(false);
    } else {
      setNavActif(true);
    }
  };
  return (
    <nav>
      <div className="navbar">
        <div className="logo">
          <NavLink activeClassname="active-link" to="/">
            <img src="image/Logo.jpg" alt="" />
          </NavLink>
        </div>
        {navActif ? (
          <div className="menu">
            <NavLink
              style={linkStyles}
              onClick={closeNav}
              className="el-menu"
              to="/"
            >
              Accueil
            </NavLink>
            <NavLink
              style={linkStyles}
              onClick={closeNav}
              className="el-menu"
              to="blog"
            >
              Blog
            </NavLink>
            <NavLink
              style={linkStyles}
              onClick={closeNav}
              className="el-menu"
              to="mediatheque"
            >
              Médiathèque
            </NavLink>
            <NavLink
              style={linkStyles}
              onClick={closeNav}
              className="el-menu"
              to="about"
            >
              A propos de l'ENT
            </NavLink>
            {/* <NavLink
              style={linkStyles}
              onClick={closeNav}
              className="el-menu"
              to="articles"
            >
              Mes articles
            </NavLink>
            <NavLink
              style={linkStyles}
              onClick={closeNav}
              className="el-menu"
              to="dashboard"
            >
              Tableau de bord
            </NavLink>

            <Link to="/login">
              <button className="btn-conn">Connexion</button>
            </Link> */}
          </div>
        ) : null}
        <div className="nav__buttons" onClick={() => setNavActif(!navActif)}>
          {navActif ? <AiOutlineClose /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
