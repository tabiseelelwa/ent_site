import React from "react";
import { Link } from "react-router-dom";

const ListArticlesAdmin = () => {
  return (
    <div className="article-admin-container main">
      <div className="articles-admin">
        <article className="">
          <div className="article-admin-img">
            <img src="../image/student.svg" alt="" />
          </div>
          <div className="texte">
            <div className="article-admin-texte">
              <div className="admin-texte-titre">
                <h2>Titre de l'article</h2>
              </div>
              <div className="admin-texte-contenu">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa
                suscipit itaque adipisci quidem ea aliquam, laboriosam
                distinctio. Exercitationem commodi cum sunt veniam, adipisci non
                doloremque id?
              </div>
            </div>
            <div className="btns">
              <button>Lire</button>
              <button>Modifier</button>
              <button>Supprimer</button>
            </div>
          </div>
        </article>
        <article className="">
          <div className="article-admin-img">
            <img src="../image/student.svg" alt="" />
          </div>
          <div className="texte">
            <div className="article-admin-texte">
              <div className="admin-texte-titre">
                <h2>Titre de l'article</h2>
              </div>
              <div className="admin-texte-contenu">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa
                suscipit itaque adipisci quidem ea aliquam, laboriosam
                distinctio. Exercitationem commodi cum sunt veniam, adipisci non
                doloremque id?
              </div>
            </div>
            <div className="btns">
              <button>Lire</button>
              <button>Modifier</button>
              <button>Supprimer</button>
            </div>
          </div>
        </article>
        <article className="">
          <div className="article-admin-img">
            <img src="../image/student.svg" alt="" />
          </div>
          <div className="texte">
            <div className="article-admin-texte">
              <div className="admin-texte-titre">
                <h2>Titre de l'article</h2>
              </div>
              <div className="admin-texte-contenu">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa
                suscipit itaque adipisci quidem ea aliquam, laboriosam
                distinctio. Exercitationem commodi cum sunt veniam, adipisci non
                doloremque id?
              </div>
            </div>
            <div className="btns">
              <button>Lire</button>
              <button>Modifier</button>
              <button>Supprimer</button>
            </div>
          </div>
        </article>
        <article className="">
          <div className="article-admin-img">
            <img src="../image/student.svg" alt="" />
          </div>
          <div className="texte">
            <div className="article-admin-texte">
              <div className="admin-texte-titre">
                <h2>Titre de l'article</h2>
              </div>
              <div className="admin-texte-contenu">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa
                suscipit itaque adipisci quidem ea aliquam, laboriosam
                distinctio. Exercitationem commodi cum sunt veniam, adipisci non
                doloremque id?
              </div>
            </div>
            <div className="btns">
              <button>Lire</button>
              <button>Modifier</button>
              <button>Supprimer</button>
            </div>
          </div>
        </article>
        <article className="">
          <div className="article-admin-img">
            <img src="../image/student.svg" alt="" />
          </div>
          <div className="texte">
            <div className="article-admin-texte">
              <div className="admin-texte-titre">
                <h2>Titre de l'article</h2>
              </div>
              <div className="admin-texte-contenu">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa
                suscipit itaque adipisci quidem ea aliquam, laboriosam
                distinctio. Exercitationem commodi cum sunt veniam, adipisci non
                doloremque id?
              </div>
            </div>
            <div className="btns">
              <button>Lire</button>
              <button>Modifier</button>
              <button>Supprimer</button>
            </div>
          </div>
        </article>
      </div>

      <div className="control-articles-admin">
        <Link to="/creat-article">Nouvel article</Link>
      </div>
    </div>
  );
};

export default ListArticlesAdmin;
