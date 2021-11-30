import React, { Component } from "react";
import ReactHTMLTableToExcel from "react-html-table-to-excel";

const data = [
  {
    id: 1,
    nom: "kouinto",
    statut: "membre du bureau: pr",
    univ: "la source",
    cota: "Solder",
  },
  {
    id: 2,
    nom: "alassko",
    statut: "membre du bureau: sg",
    univ: "la source",
    cota: "Solder",
  },
  {
    id: 3,
    nom: "shadow",
    statut: "membre du bureau: shadow",
    univ: "la source",
    cota: "Non solder",
  },
  {
    id: 4,
    nom: "folocho",
    statut: "etudiant: 2e annee",
    univ: "la source",
    cota: "Non solder",
  },
  {
    id: 5,
    nom: "peniel",
    statut: "etudiant: 2e annee",
    univ: "kofi anad",
    cota: "Solder",
  },
  {
    id: 6,
    nom: "katia",
    statut: "etudiant: 2e annee",
    univ: "universite la source",
    cota: "Non solder",
  },
  {
    id: 7,
    nom: "alphonso",
    statut: "etudiant: 2e annee",
    univ: "kofi anad",
    cota: "Solder",
  },
  {
    id: 8,
    nom: "diallo",
    statut: "etudiant: 5e annee",
    univ: "gamal",
    cota: "Solder",
  },
];

export default class Cota extends Component {
  render() {
    return (
      <section className="container">
        <h2 className="cota-title">Cota</h2>
        <div>
          <p>
            Dans cette section, vous avez la possibilité de vérifier si vous
            êtes à jour aux cotisations du groupe avec la possibilité de solder
            directement sur l'application.
          </p>
        </div>
        <div className="cota row justify-content-center">
          <table className="table table-striped" id="table">
            <thead>
              <td>ID</td>
              <td>Nom</td>
              <td>Statut</td>
              <td>Université</td>
              <td>Cota</td>
            </thead>
            <tbody>
              {data.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.nom}</td>
                    <td>{item.statut}</td>
                    <td>{item.univ}</td>
                    <td>{item.cota}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <ReactHTMLTableToExcel
            className="btn btn-info"
            table="table"
            filename="cota"
            sheet="Sheet"
            buttonText="Telecharger au format Excel"
          />
        </div>
        <div className="kkt">
          <button className="btn btn-info">SOLDER</button>
        </div>
      </section>
    );
  }
}
