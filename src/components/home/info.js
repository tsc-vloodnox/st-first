import React, { useEffect, useState } from "react";
import Dots from "./Dots";
import Arrows from "./Arrows";

const sliderContent = [
  {
    id: 1,
    title: "A l'odre du jour",
    description:
      "• Remerciement • Présentation du bureau • Apport à l'avancement de la Structure • Insertion des 2e Années dans le bureau et dans les activités de la structures • Cotisation Annuel",
  },
  {
    id: 2,
    title: "Remerciement",
    description:
      "Le Président et son bureau tiennent à remercier tout le monde pour avoir accompagné cette vision commune qu'est la Structure. En effet la création de notre structure n'a pas été facile. Au début avec un petit nombre, nous avons commencé mais aujourd'hui l'apport de tous et des 1ere années a vraiment porté. 🙏",
  },
  {
    id: 3,
    title: "Présentation du Bureau",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dolor accusantium sint expedita ipsa! Dicta deleniti odit, dignissimos vero quae numquam nesciunt esse excepturi ducimus quos, harum fugit debitis voluptates.",
  },
  {
    id: 4,
    title: "Apport à l'avancement",
    description:
      "Nous avons une innovation en cours proposée par un membre de la structure. @The_Shadow nous propose un site internet pour la structure avec une banque d'infos et tout savoir sur la Structure. *Nous rappelons que nous sommes ouverts à toutes vos propositions pour l'avancée de la structure*",
  },
  {
    id: 5,
    title: "Insertion des 2e Année",
    description:
      "Le président informe que dans le bureau de la Structure, il n'y aura pas que des 3e Année. Ce sera un mélange de 2e et de 3e année. Alors nous attendons toujours les candidatures pour tous ceux qui veulent adhérer au bureau et faire part leurs idées. Après cela, nous vous ferons une liste définitive des membres du bureau.",
  },
];
const len = sliderContent.length - 1;

function Info() {
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    }, 8000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <ul className="all-info-list">
      <li className="itm info-type-slide">
        <div className="slider-container">
          <section
            className="ss"
            activeIndex={activeIndex}
            sliderContent={sliderContent}
          >
            <h1 className="slide-title">CR réunion 00/00/00</h1>
            {sliderContent.map((slide, index) => (
              <div
                key={index}
                className={index === activeIndex ? "slides active" : "inactive"}
              >
                <h2 className="slide-sub-title">{slide.title}</h2>
                <p className="slide-text">{slide.description}</p>
              </div>
            ))}
          </section>

          {/* -----------------------INDICATEUR-------------------- */}
          <Dots
            className="all-dots"
            activeIndex={activeIndex}
            sliderContent={sliderContent}
            onclick={(activeIndex) => setActiveIndex(activeIndex)}
          />

          {/* -----------------------ARROWS---------------------- */}
          <Arrows
            prevSlide={() =>
              setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
            }
            nextSlide={() =>
              setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
            }
          />
        </div>
      </li>
      <li className="itm size-info">
        <div>
          <h2 className="info-title ">Lorem</h2>
          <p className="info-content">Shadow viens en janvier lol!</p>
        </div>
      </li>
    </ul>
  );
}

export default Info;
