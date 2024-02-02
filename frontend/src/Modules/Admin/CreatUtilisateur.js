import React from "react";

const CreatUtilisateur = () => {
  return (
    <div className="createUser main ">
      <h4>Création d'un nouvel utilisateur</h4>
      <form>
        <input type="text" placeholder="Nom utilisateur" />
        <input type="text" placeholder="Postnom utilisateur" />
        <input type="text" placeholder="Prénom utilisateur" />
        <input type="text" placeholder="email utilisateur" />
        <select name="" id="">
          <option>-- Role de l'utilisateur --</option>
          <option value="Lecteur">Lecteur</option>
          <option value="Rédacteur">Rédacteur</option>
          <option value="Administrateur">Administrateur</option>
        </select>
        <input type="text" placeholder="Mot de passe" />
        <button>Enregistrer</button>
      </form>
    </div>
  );
};

export default CreatUtilisateur;
