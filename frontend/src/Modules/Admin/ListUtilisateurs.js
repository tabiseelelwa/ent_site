import React from "react";
import { Link } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
const ListUtilisateurs = () => {
  return (
    <div className="main">
      <div className="btnAjoutUtilisateur titreUtilisateurs">
        <h5 className="">Les utilisateurs</h5>
        <Link to="/admin/creat-util">Ajouter un nouvel utilisateur</Link>
      </div>
      <table className="table table-borderless w-75 utilisateurs ">
        <thead>
          <tr>
            <th>#</th>
            <th>Nom</th>
            <th>Postnom</th>
            <th>Prénom</th>
            <th>Email</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>01</td>
            <td>TABISEELELWA</td>
            <td>ESUBE</td>
            <td>Léon</td>
            <td>esubetabiseelelwa@gmail.com</td>
            <td>
              <FaEdit className="text-primary" />{" "}
              <FaTrash className="text-danger" />
            </td>
          </tr>
          <tr>
            <td>02</td>
            <td>TABISEELELWA</td>
            <td>ESUBE</td>
            <td>Léon</td>
            <td>esubetabiseelelwa@gmail.com</td>
            <td>
              <FaEdit className="text-primary" />{" "}
              <FaTrash className="text-danger" />
            </td>
          </tr>
          <tr>
            <td>03</td>
            <td>TABISEELELWA</td>
            <td>ESUBE</td>
            <td>Léon</td>
            <td>esubetabiseelelwa@gmail.com</td>
            <td>
              <FaEdit className="text-primary" />{" "}
              <FaTrash className="text-danger" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ListUtilisateurs;
