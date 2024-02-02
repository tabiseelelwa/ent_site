import React from "react";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

const ListArticles = () => {
  return (
    <>
      <header>
        <h1>Mes articles</h1>
      </header>
      <div className="listarticles">
        <div className="btn-creation">
          <input
            type="search"
            placeholder="Recherhcer un article par son titre"
          />
          <Link to="/creat-article">
            <button>
              <span>
                <FaPlus />
              </span>
              Nouvel article
            </button>
          </Link>
        </div>
        <div className="liste">
          <article>
            <div className="img">
              <img src="image/webinar.svg" alt="" />
            </div>
            <div className="texte">
              <div className="titre">
                <h3>Titre de l'article</h3>
              </div>
              <div className="contenu">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur dolores nihil illo expedita aliquam atque ex tenetur
                neque suscipit necessitatibus aliquid labore, a quae quos itaque
                blanditiis, quisquam consequuntur, totam ab rerum reprehenderit
                quidem error! Qui, minima blanditiis? Nisi voluptas vitae
                corrupti amet sed debitis iste ut exercitationem nulla quam.
              </div>
              <div className="btn">
                <Link to="/articles/5">
                  <div className="btn-Aff">Lire plus</div>
                </Link>
                <Link>
                  <div className="btn-modif">Modifier</div>
                </Link>
                <Link>
                  <div className="btn-sup">Supprimer</div>
                </Link>
              </div>
            </div>
          </article>
          <article>
            <div className="img">
              <img src="image/student.svg" alt="" />
            </div>
            <div className="texte">
              <div className="titre">
                <h3>Titre de l'article</h3>
              </div>
              <div className="contenu">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic,
                id fugit distinctio atque esse iure excepturi sint est quod sit
                tenetur molestias aut, necessitatibus veniam autem voluptas
                quibusdam nisi rerum culpa accusantium magni minus modi! Eaque,
                autem mollitia fuga harum architecto natus voluptas consequatur
                labore. Tempora repellendus accusantium fugit illo.
              </div>
              <div className="btn">
                <Link to="/articles/5">
                  <div className="btn-Aff">Lire plus</div>
                </Link>
                <Link>
                  <div className="btn-modif">Modifier</div>
                </Link>
                <Link>
                  <div className="btn-sup">Supprimer</div>
                </Link>
              </div>
            </div>
          </article>
          <article>
            <div className="img">
              <img src="image/webinar.svg" alt="" />
            </div>
            <div className="texte">
              <div className="titre">
                <h3>Titre de l'article</h3>
              </div>
              <div className="contenu">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Reprehenderit, ipsa eum quibusdam quo quis quia officia
                laudantium asperiores provident vel iusto et rerum labore?
                Adipisci distinctio explicabo omnis, sunt modi laborum commodi
                ex fugiat, a consectetur qui cumque voluptates, quaerat nulla
                velit ut hic rerum quibusdam in placeat? Enim, fugit!
              </div>
              <div className="btn">
                <Link to="/articles/5">
                  <div className="btn-Aff">Lire plus</div>
                </Link>
                <Link>
                  <div className="btn-modif">Modifier</div>
                </Link>
                <Link>
                  <div className="btn-sup">Supprimer</div>
                </Link>
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default ListArticles;
