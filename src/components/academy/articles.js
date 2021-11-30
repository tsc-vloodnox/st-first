import React from "react";

const Articles = () => {
  return (
    <section className="articles">
      <div className="container py-4">
        <h3 id="pageHeaderTitle">Tous les articles</h3>

        <article className="postcard dark blue">
          <a className="postcard__img_link" href="/">
            <img
              className="postcard__img"
              src="https://picsum.photos/1000/1000"
              alt="Image Title"
            />
          </a>
          <div className="postcard__text">
            <h1 className="postcard__title blue">
              <a href="/">Podcast Title</a>
            </h1>
            <div className="postcard__subtitle small">
              <time datetime="2020-05-25 12:00:00">
                <i className="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2020
              </time>
            </div>
            <div className="postcard__bar"></div>
            <div className="postcard__preview-txt">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
              fugiat asperiores inventore beatae accusamus odit minima enim,
              commodi quia, doloribus eius! Ducimus nemo accusantium maiores
              velit corrupti tempora reiciendis molestiae repellat vero. Eveniet
              ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum
              dolores nobis enim quidem excepturi, illum quos!
            </div>
            <ul className="postcard__tagbox">
              <li className="tag__item">
                <i className="fas fa-thumbs-up mr-2"></i>Like
              </li>
              <li className="tag__item play blue">
                <a href="/">
                  <i className="fas fa-plus mr-2"></i>Suivre
                </a>
              </li>
              <li className="tag__item">
                <i className="fas fa-pen mr-2"></i>Nom de l'auteur
              </li>
            </ul>
          </div>
        </article>
        <article className="postcard dark blue">
          <a className="postcard__img_link" href="/">
            <img
              className="postcard__img"
              src="https://picsum.photos/501/500"
              alt="Image Title"
            />
          </a>
          <div className="postcard__text">
            <h1 className="postcard__title blue">
              <a href="/">Podcast Title</a>
            </h1>
            <div className="postcard__subtitle small">
              <time datetime="2020-05-25 12:00:00">
                <i className="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2020
              </time>
            </div>
            <div className="postcard__bar"></div>
            <div className="postcard__preview-txt">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
              fugiat asperiores inventore beatae accusamus odit minima enim,
              commodi quia, doloribus eius! Ducimus nemo accusantium maiores
              velit corrupti tempora reiciendis molestiae repellat vero. Eveniet
              ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum
              dolores nobis enim quidem excepturi, illum quos!
            </div>
            <ul className="postcard__tagbox">
              <li className="tag__item">
                <i className="fas fa-thumbs-up mr-2"></i>Like
              </li>
              <li className="tag__item play blue">
                <a href="/">
                  <i className="fas fa-plus mr-2"></i>Suivre
                </a>
              </li>
              <li className="tag__item">
                <i className="fas fa-pen mr-2"></i>Nom de l'auteur
              </li>
            </ul>
          </div>
        </article>
        <article className="postcard dark blue">
          <a className="postcard__img_link" href="/">
            <img
              className="postcard__img"
              src="https://picsum.photos/500/501"
              alt="Image Title"
            />
          </a>
          <div className="postcard__text">
            <h1 className="postcard__title blue">
              <a href="/">Podcast Title</a>
            </h1>
            <div className="postcard__subtitle small">
              <time datetime="2020-05-25 12:00:00">
                <i className="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2020
              </time>
            </div>
            <div className="postcard__bar"></div>
            <div className="postcard__preview-txt">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
              fugiat asperiores inventore beatae accusamus odit minima enim,
              commodi quia, doloribus eius! Ducimus nemo accusantium maiores
              velit corrupti tempora reiciendis molestiae repellat vero. Eveniet
              ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum
              dolores nobis enim quidem excepturi, illum quos!
            </div>
            <ul className="postcard__tagbox">
              <li className="tag__item">
                <i className="fas fa-thumbs-up mr-2"></i>Like
              </li>
              <li className="tag__item play blue">
                <a href="/">
                  <i className="fas fa-plus mr-2"></i>Suivre
                </a>
              </li>
              <li className="tag__item">
                <i className="fas fa-pen mr-2"></i>Nom de l'auteur
              </li>
            </ul>
          </div>
        </article>
        <article className="postcard dark blue">
          <a className="postcard__img_link" href="/">
            <img
              className="postcard__img"
              src="https://picsum.photos/501/501"
              alt="Image Title"
            />
          </a>
          <div className="postcard__text">
            <h1 className="postcard__title blue">
              <a href="/">Podcast Title</a>
            </h1>
            <div className="postcard__subtitle small">
              <time datetime="2020-05-25 12:00:00">
                <i className="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2020
              </time>
            </div>
            <div className="postcard__bar"></div>
            <div className="postcard__preview-txt">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
              fugiat asperiores inventore beatae accusamus odit minima enim,
              commodi quia, doloribus eius! Ducimus nemo accusantium maiores
              velit corrupti tempora reiciendis molestiae repellat vero. Eveniet
              ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum
              dolores nobis enim quidem excepturi, illum quos!
            </div>
            <ul className="postcard__tagbox">
              <li className="tag__item">
                <i className="fas fa-thumbs-up mr-2"></i>Like
              </li>
              <li className="tag__item play blue">
                <a href="/">
                  <i className="fas fa-plus mr-2"></i>Suivre
                </a>
              </li>
              <li className="tag__item">
                <i className="fas fa-pen mr-2"></i>Nom de l'auteur
              </li>
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Articles;
