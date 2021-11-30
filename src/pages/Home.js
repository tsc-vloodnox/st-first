import Info from "../components/home/info";
import Even from "../components/home/even";

const Home = () => {
  return (
    <div className="home">
      <h1>Accueil</h1>
      <div className="slide-container">
        <img src="./img/cover.png" alt="hero" />
      </div>
      {/* <div className="actualité-santé py-4">
        <img />
        <h2>Covid 19</h2>
        <p>Content</p>
      </div> */}
      <main>
        <section className="activity-one">
          <header>
            <div className="zozo">
              <h2>Evènements</h2>
            </div>
          </header>
          <div className="even-main">
            <Even />
          </div>
        </section>

        <section className="activity-two">
          <header>
            <div className="zozo">
              <i className="fas fa-info"></i>
            </div>
          </header>
          <div className="info-main">
            <Info />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
