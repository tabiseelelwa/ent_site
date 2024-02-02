import React, { useState } from "react";
import { Link } from "react-router-dom";

const Accueil = () => {
  const [modal, setModal] = useState(false);

  const affichModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  let dateActuelle = new Date();
  let dateFormat = dateActuelle.toLocaleString("fr-FR");
  return (
    <div>
      <div className="hero">
        <h1>Ecole Nationale de la Territoriale</h1>
        <p>Au coeur de la formation territoriale !</p>
        {modal ? (
          <div className="modal">
            <div className="overlay"></div>
            <div className="modal-content">
              <button className="close-modal" onClick={affichModal}>
                Fermer
              </button>
              Modal
            </div>
          </div>
        ) : null}
        <div className="rech">
          <input type="text" placeholder="Recherchez un article" />
          <button onClick={affichModal}>Rechercher</button>
        </div>
      </div>

      <section className="Actu">
        <div className="Actualite">
          <div className="articles">
            <Link to="post/1">
              <article>
                <div className="img-article">
                  <img src="image/webinar.svg" alt="" id="img" />
                </div>
                <div className="slug-article">
                  <h2>Titre de l'article</h2>
                  <p>
                    La formation des agents et cadres de la commune de Barumbu
                    s'est passée dans un climat de paix La formation des agents
                    et cadres de la commun
                  </p>
                </div>

                <div className="date">
                  <hr />
                  <small>{dateFormat}</small>
                </div>
              </article>
            </Link>
            <Link to="post/2">
              <article>
                <div className="img-article">
                  <img src="image/webinar.svg" alt="" id="img" />
                </div>
                <div className="slug-article">
                  <h2>Titre de l'article</h2>
                  <p>
                    La formation des agents et cadres de la commune de Barumbu
                    s'est passée dans un climat de paix La formation des agents
                    et cadres de la commun
                  </p>
                </div>
                <div className="date">
                  <hr />
                  <small>{dateFormat}</small>
                </div>
              </article>
            </Link>
            <Link to="post/3">
              <article>
                <div className="img-article">
                  <img src="image/students.svg" alt="" id="img" />
                </div>
                <div className="slug-article">
                  <h2>Titre de l'article</h2>
                  <p>
                    La formation des agents et cadres de la commune de Barumbu
                    s'est passée dans un climat de paix La formation des agents
                    et cadres de la commun
                  </p>
                </div>
                <div className="date">
                  <hr />
                  <small>{dateFormat}</small>
                </div>
              </article>
            </Link>
            <Link to="post/3">
              <article>
                <div className="img-article">
                  <img src="image/students.svg" alt="" id="img" />
                </div>
                <div className="slug-article">
                  <h2>Titre de l'article</h2>
                  <p>
                    La formation des agents et cadres de la commune de Barumbu
                    s'est passée dans un climat de paix La formation des agents
                    et cadres de la commun
                  </p>
                </div>
                <div className="date">
                  <hr />
                  <small>{dateFormat}</small>
                </div>
              </article>
            </Link>
          </div>
          <div className="affTout">
            <Link to="/blog">
              <button>
                {" "}
                <span>Affichez toute l'actualité </span>
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section className="form_abonnement">
        <h2>Abonnez-vous à notre news letter</h2>
        <p>
          Restez toujours à jour et informés sur nos actualités, nos formations
          et nos différentes activités en vous abonnant à notre news letter. Il
          suffit d'indiquer votre adresse mail dans le formulaire ci-dessous !!
        </p>

        <form>
          <input type="text" placeholder="Votre adresse e-mail" />
          <button>S'inscrire</button>
        </form>
      </section>
      <section className="directGen">
        <div className="dg-comp">
          <div className="img-dg">
            <img src="image/student.svg" alt="" />
          </div>
          <div className="msg-dg">
            <h2>Le Directeur Général</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              laborum iusto dignissimos voluptatem! Quia, iure. Eveniet culpa
              sunt quae repellendus quisquam omnis eaque itaque nam, nemo velit
              inventore, aut saepe vero, deserunt obcaecati qui hic corporis
              illum ut repudiandae consectetur sequi libero! Delectus facilis
              neque, nemo esse dolorum non. Similique!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Accueil;
