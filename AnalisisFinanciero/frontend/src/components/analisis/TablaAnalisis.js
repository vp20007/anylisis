import React, { Component } from "react";
import { Container, Table, Button } from "react-bootstrap";
import "./TablaAnalisis.css";  // Asegúrate de importar el CSS

export default class TablaAnalisis extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container className="pt-4">
        {/* Título de la tabla con estilo refinado */}
        <div className="text-center mb-4">
          <h3 className="font-weight-bold text-primary">{this.props.tituloTabla}</h3>
        </div>

        {/* Tabla con bordes sutiles y mejor visibilidad */}
        <div>
          <Table
            responsive="sm"
            className="text-center table-striped table-bordered table-hover"
            id="analisis"
            style={{ borderRadius: "10px", overflow: "hidden" }}
          >
            <thead className="table-dark">
              <tr>{this.props.columnas}</tr>
            </thead>
            <tbody>{this.props.filas}</tbody>
          </Table>
        </div>

        {/* Botón de acción con diseño más atractivo */}
        <div className="text-center mt-4">
          {this.props.boton && (
            <Button variant="primary" size="lg" className="px-4 py-2">
              {this.props.boton}
            </Button>
          )}
        </div>
      </Container>
    );
  }
}
