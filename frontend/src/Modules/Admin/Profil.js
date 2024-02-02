import React from "react";
import { FaCamera } from "react-icons/fa";

const Profil = () => {
  return (
    <div className="main">
      <div className="profil">
        <div className="profil_photo">
          <img src="iiii.jpg" alt="" />
          <button>
            <FaCamera />
          </button>
        </div>

        <div className="donnee_agent">
          <form action="">
            <label htmlFor="">Nom</label>
            <input htmlFor value="Tabiseelelwa" disabled />
            <label htmlFor="">Postnom</label>
            <input value="Esube" disabled />
            <label htmlFor="">Prénom</label>
            <input value="Léon" disabled />
            <label htmlFor="">Statut</label>
            <input value="Administrateur" disabled />
            <button>Modifier</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profil;
