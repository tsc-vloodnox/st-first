import React, { Component } from "react";

export default class Footer extends Component {
  state = {
    nom: "",
    email: "",
    objet: "",
    message: "",
    items: [],
  };

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      nom: "",
      email: "",
      objet: "",
      message: "",
      items: [
        ...this.state.items,
        {
          nom: this.state.nom,
          email: this.state.email,
          objet: this.state.objet,
          message: this.state.message,
        },
      ],
    });
  };
  render() {
    return (
      <footer className="site-footer">
        <div className="footer-top">
          <section className="contact">
            <h2 className="footer-title">Contact</h2>
            <address>
              <a href="https://maps.google.com/">
                <i class="fas fa-map-marker-alt"></i>
                <p>Ratoma, R 535022</p>
              </a>
              <a href="mailto:contact@structure.gn">
                <i class="fas fa-envelope"></i>
                <p>contact@structure.gn</p>
              </a>
              <a href="tel:+225 00 00 00">
                <i class="fas fa-phone"></i>
                <p>+224 00 00 00</p>
              </a>
            </address>
          </section>
          <section className="nous-contacter">
            <h2 className="footer-title">Nous contacter</h2>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="nom"
                  placeholder="Votre Nom"
                  onChange={this.onChange}
                  value={this.state.nom}
                />
              </div>
              <div class="form-group">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Votre Email"
                  onChange={this.onChange}
                  value={this.state.email}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="objet"
                  placeholder="Objet (Question/Suggestion/...)"
                  onChange={this.onChange}
                  value={this.state.objet}
                />
              </div>
              <div className="form-group mt-3">
                <textarea
                  className="form-control"
                  name="message"
                  placeholder="Message"
                  rows="5"
                  onChange={this.onChange}
                  value={this.state.message}
                />
              </div>
              <div className="text-center">
                <button type="submit">Envoyer</button>
              </div>
            </form>
          </section>
          <section className="social">
            <h2 className="footer-title">Réseaux sociaux </h2>
            <div className="social-link">
              <a href="www.fb.com" target="_blank">
                <i className="fab fa-facebook"></i>
                <p>Accéder à la page Facebook</p>
              </a>
              <a href="www.fb.com" target="_blank">
                <i className="fab fa-whatsapp"></i>
                <p>Accéder au groupe WhatsApp</p>
              </a>
              <a href="www.fb.com" target="_blank">
                <i className="fab fa-instagram"></i>
                <p>Accéder à la page Instagram</p>
              </a>
            </div>
          </section>
        </div>

        <div className="footer-bottom">
          <p className="copyright-text">
            <strong>Structure </strong>© 2021 - Designed by{" "}
          </p>
          <a href="tsc.com" className="tsc">
            TSC - The Spectrum Company
          </a>
        </div>
      </footer>
    );
  }
}
