import Articles from "../components/academy/articles";
import MedFlie from "../components/academy/fileManager/medFlie";
import Footer from "../components/footer";

const Academy = () => {
  return (
    <div className="academie">
      {/* <Navbar /> */}
      <h1>Academie</h1>
      <div className="academy-description container">
        <h2 className="ad-title">Description</h2>
        <p className="ad-content">
          Bienvenue dans la rubrique académique de notre site ! Ici vous avez la
          possibilité de consulter des articles en liens avec les sciences de la
          santé. Ces articles sont rédigés par des professionnels de la santé,
          aussi bien des docteurs que des professeurs. Mais aussi, il est
          possible pour les étudiants en médecine de télécharger gratuitement
          des cours, des résumer de cours, des exercices et bien d'autre dans
          notre large catalogue.
        </p>

        <button className="ad-close">X</button>
      </div>
      <Articles />
      <section>
        <h1 className="h1 text-center" id="pageHeaderTitle">
          Tous les documents
        </h1>
        <MedFlie />
      </section>

      <hr />
      <hr />
      <hr />

      <section>
        <h2>Espace Tutorat (en cours de dev)</h2>
      </section>
      <Footer />
    </div>
  );
};

export default Academy;
