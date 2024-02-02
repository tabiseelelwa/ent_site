import React from "react";
import "../css/login.scss";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="log">
      <form>
        <h3>Enregistrez-vous</h3>
        <input type="text" placeholder="Entrez votre nom" />
        <input type="text" placeholder="Entrez votre prénom" />
        <input type="text" placeholder="Entrez votre email" />
        <input type="password" placeholder="Entrez votre mot de passe" />
        <input type="password" placeholder="Confirmez votre mot de passe" />
        <button>Valider</button>

        <p>
          Vous avez un compte ? <Link to="/login"> Se connecter</Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
