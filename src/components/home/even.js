import React from "react";

const Even = () => {
  return (
    <>
      <ul className="all-evens-liste">
        <li className="itm size-even">
          <article class="even">
            <div class="card-even">
              <a href="/">
                <img class="img-even" src="./img/bang_shop.png" alt="" />
              </a>
              <div class="even-content">
                <a href="/">
                  <h5 class="even-title">Nouveau ! Bang Shop.</h5>
                </a>
                <p class="even-sub-title">
                  Un site de vente en ligne voit le jour. Avec des articles en
                  tous genre, notamment des outils pour étudiant en science de
                  la santé
                </p>
                <a class="read-more" href="/">
                  Read more
                </a>
              </div>
            </div>
          </article>
        </li>
        <li className="itm size-even">
          <article class="even">
            <div class="card-even">
              <a href="/">
                <img class="img-even" src="./img/logement.jpg" alt="" />
              </a>
              <div class="even-content">
                <a href="/">
                  <h5 class="even-title">Occasion à saisir ! </h5>
                </a>
                <p class="even-sub-title">
                  Soucieux du problème de logement, la structure met en place un
                  système pour proposer aux étudiants une situation sûr et
                  stable.
                </p>
                <a class="read-more" href="/">
                  Read more
                </a>
              </div>
            </div>
          </article>
        </li>
      </ul>
    </>
  );
};

export default Even;
