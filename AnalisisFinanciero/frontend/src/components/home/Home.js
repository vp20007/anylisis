import React, { Component } from "react";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <div className="home-title">
          <h1>Bienvenido</h1>
        </div>
        <div className="home-info">
          <h3 className="subtitle">Sistema Financiero</h3>
          <p className="description">
            Este sistema es una <b>implementación</b> de los diferentes informes financieros
            que una empresa puede efectuar para determinar su progreso anual. Aquí podrás
            generar los siguientes informes:
          </p>
          <ul className="list-info">
            <li><h3 className="list-item-title">Análisis vertical</h3></li>
            <li><h3 className="list-item-title">Análisis horizontal</h3></li>
            <li><h3 className="list-item-title">Informes de ratios</h3></li>
            <li><h3 className="list-item-title">Gráfico de variación de cuentas</h3></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Home;
