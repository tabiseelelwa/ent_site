import React from "react";
import { FaHome, FaPowerOff } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside>
      <div className="sidebar">
        <div className="haut">
          <Link to="/">
            <li>
              <FaHome />
            </li>
          </Link>
          <h3>
            <Link to="/admin">Tableau de bord</Link>
          </h3>
        </div>
        <ul>
          <Link to="list-article">
            <li>Articles</li>
          </Link>
          <Link to="list-uti">
            <li>Utilisateurs</li>
          </Link>
          <Link to="profil">
            <li>Mon profil</li>
          </Link>
          <Link to="parametres" id="dropdown">
            <li>Paramètres</li>
          </Link>
        </ul>
        <div className="button">
          <button>
            <FaPowerOff />
            Déconnexion
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
