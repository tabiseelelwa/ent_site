import React from "react";

const Apropos = () => {
  return (
    <div className="mainPart">
      <header>
        <h1>A propos</h1>
      </header>

      <div className="presentation">
        <h1>Présentation de l'Ecole Nationale de la Territoriale</h1>
        <ol type="circle">
          <li>
            <h3>De la création</h3>
            <p>
              La création de l'Ecole Nationale de la Territoriale remonte du 21
              juin 1971, par arrêté ministériel n°20645 et sous la dénomination
              d'Ecole Nationale de la Formation Territoriale, ENFT en sigle.
              Elle fonctionna pendant un moment à Likasi dans l'actuelle
              province du Haut-Katanga et fut par la suite mise aux oubliettes
              par le retrait de la banque mondiale dans le fincement des
              activités de formation des autorités territoriales
            </p>
          </li>
          <br />
          <li>
            <h3>Du fonctionnement</h3>
            <p>
              La création de l'Ecole Nationale de la Territoriale remonte du 21
              juin 1971, par arrêté ministériel n°20645 et sous la dénomination
              d'Ecole Nationale de la Formation Territoriale, ENFT en sigle.
              Elle fonctionna pendant un moment à Likasi dans l'actuelle
              province du Haut-Katanga et fut par la suite mise aux oubliettes
              par le retrait de la banque mondiale dans le fincement des
              activités de formation des autorités territoriales
            </p>
          </li>
        </ol>
      </div>

      <section className="documents">
        <div className="document">
          <div className="titre">
            <p>
              Les arrêtés portant création et rédynamisation de l'Ecole
              Nationale de la Territoriale
            </p>
          </div>
          <button>Télécharger</button>
        </div>
        <div className="document">
          <div className="titre">
            <p>
              Règlement d'ordre intérieur de l'Ecole Nationale de le
              Territoriale
            </p>
          </div>
          <button>Télécharger</button>
        </div>
        <div className="document">
          <div className="titre">
            <p>Dépliant de l'Ecole Nationale de la Territoriale</p>
          </div>
          <button>Télécharger</button>
        </div>
        <div className="document">
          <div className="titre">
            <p>Organigramme de l'Ecole Nationale de la Territoriale</p>
          </div>
          <button>Télécharger</button>
        </div>
      </section>
    </div>
  );
};

export default Apropos;
