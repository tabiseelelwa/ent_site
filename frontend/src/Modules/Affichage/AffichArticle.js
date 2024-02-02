import React from "react";
import { Link } from "react-router-dom";

const AffichArticle = () => {
  return (
    <div className="mainPart ">
      <header>
        <h1>Actualités</h1>
      </header>
      <div className="Actualite">
        <div className="contenuActualite">
          <article>
            <div className="titre">
              <h1>
                La formation des autorités municipales par l'Ecole Nationale de
                la Territoriale à la maison communale de Lemba
              </h1>
            </div>
            <div className="image">
              <img src="../image/webinar.svg" alt="" />
            </div>
            <div className="contenu">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis quibusdam iusto modi praesentium neque ut sit
                aliquid nobis quia commodi veniam excepturi animi recusandae
                deserunt quasi perspiciatis sed odit officia omnis, natus
                repudiandae aperiam fugit? Exercitationem ad autem, suscipit
                ipsam adipisci fugiat. Quisquam itaque quidem autem! Quaerat,
                amet rem dolorem pariatur ex et consequatur omnis itaque
                necessitatibus architecto quibusdam dignissimos recusandae odit
                eaque dicta aspernatur, deleniti dolor animi libero, ipsam
                aliquam inventore. Sunt dolorem saepe veniam commodi, deserunt
                officiis libero doloremque exercitationem aliquam tempore
                architecto quo aut sapiente ea culpa perspiciatis animi iure.
                Quod nihil sunt, unde quasi necessitatibus omnis!
              </p>
            </div>
          </article>
        </div>
        <div className="memeCateg">
          <h3>Dans la même catégorie : </h3>
          <div className="article">
            <Link to="/post/4">
              <article>
                <div className="image">
                  <img
                    src="../image/student.svg"
                    alt=""
                    height="100%"
                    width="70px"
                  />
                </div>
                <div className="texte">
                  <div className="titre">
                    <h4>
                      La formation de Ngiri-ngiri Lorem ipsum dolor sit amet
                      consectetur{" "}
                    </h4>
                  </div>
                  <div className="date">
                    <p>14/11/2023 -- 15 : 45 </p>
                  </div>
                </div>
              </article>
            </Link>
            <Link to="/post/10">
              <article>
                <div className="image">
                  <img
                    src="../image/student.svg"
                    alt=""
                    height="100%"
                    width="70px"
                  />
                </div>
                <div className="texte">
                  <div className="titre">
                    <h4>
                      La formation de Ngiri-ngiri Lorem ipsum dolor sit amet
                      consectetur{" "}
                    </h4>
                  </div>
                  <div className="date">
                    <p>14/11/2023 -- 15 : 45 </p>
                  </div>
                </div>
              </article>
            </Link>
            <Link to="/post/8">
              <article>
                <div className="image">
                  <img
                    src="../image/student.svg"
                    alt=""
                    height="100%"
                    width="70px"
                  />
                </div>
                <div className="texte">
                  <div className="titre">
                    <h4>
                      La formation de Ngiri-ngiri Lorem ipsum dolor sit amet
                      consectetur{" "}
                    </h4>
                  </div>
                  <div className="date">
                    <p>14/11/2023 -- 15 : 45 </p>
                  </div>
                </div>
              </article>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AffichArticle;
