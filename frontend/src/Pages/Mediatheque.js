import React from "react";
import { Link } from "react-router-dom";

const Formation = () => {
  return (
    <div className="contenuActu">
      <header>
        <h1>Médiathèque</h1>
      </header>
      <div id="contenuActu">
        <Link to="/actualite/5">
          <article className="actu">
            <div className="image">
              <img src="image/student.svg" alt="" />
            </div>
          </article>
        </Link>
        <Link to="/actualite/5">
          <article className="actu">
            <div className="image">
              <img src="image/student.svg" alt="" />
            </div>
          </article>
        </Link>
        <Link to="/actualite/5">
          <article className="actu">
            <div className="image">
              <img src="image/student.svg" alt="" />
            </div>
          </article>
        </Link>
        <Link to="/actualite/5">
          <article className="actu">
            <div className="image">
              <img src="image/student.svg" alt="" />
            </div>
          </article>
        </Link>
        <Link to="/actualite/5">
          <article className="actu">
            <div className="image">
              <img src="image/student.svg" alt="" />
            </div>
          </article>
        </Link>
        <Link to="/actualite/5">
          <article className="actu">
            <div className="image">
              <img src="image/student.svg" alt="" />
            </div>
          </article>
        </Link>
        <Link to="/actualite/5">
          <article className="actu">
            <div className="image">
              <img src="image/student.svg" alt="" />
            </div>
          </article>
        </Link>
        <Link to="/actualite/5">
          <article className="actu">
            <div className="image">
              <img src="image/student.svg" alt="" />
            </div>
          </article>
        </Link>
      </div>
    </div>
  );
};

export default Formation;
