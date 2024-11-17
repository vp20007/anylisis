import React, { Component } from "react";
import { Card, Container, Form, Button, FloatingLabel, Alert } from "react-bootstrap";
import LoginIcon from "@mui/icons-material/Login";
import { withRouter } from 'react-router-dom';
import "./Login.css";

const users = [
  { username: "wendy", password: "123456" },
  { username: "user2", password: "password2" },
  { username: "user3", password: "password3" }
];

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usuario: "",
      password: "",
      error: ""
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleLogin = () => {
    const { usuario, password } = this.state;

    
    const validUser = users.find(
      (user) => user.username === usuario && user.password === password
    );

    if (validUser) {
      
      this.props.history.push("/home"); 
    } else {
      
      this.setState({ error: "Usuario o contraseña incorrectos" });
    }
  };

  render() {
    return (
      <Container className="form-container">
        <Card className="login-form">
          <Card.Body>
            <Card.Title className="text-center titulo">Inicio sesión</Card.Title>
            <Card.Text>
              <Form className="formulario">
                <Form.Group>
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Usuario"
                    className="mb-4"
                  >
                    <Form.Control
                      type="text"
                      id="usuario"
                      name="usuario"
                      placeholder="Usuario"
                      value={this.state.usuario}
                      onChange={this.handleChange}
                    />
                  </FloatingLabel>
                </Form.Group>
                <Form.Group>
                  <FloatingLabel
                    controlId="floatingPassword"
                    label="Contraseña"
                  >
                    <Form.Control
                      type="password"
                      id="password"
                      name="password"
                      placeholder="*******"
                      value={this.state.password}
                      onChange={this.handleChange}
                    />
                  </FloatingLabel>
                </Form.Group>
                {this.state.error && (
                  <Alert variant="danger" className="mt-3">
                    {this.state.error}
                  </Alert>
                )}
              </Form>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <div className="d-flex justify-content-center">
              <Button className="boton d-flex justify-content-center" onClick={this.handleLogin}>
                <LoginIcon />
                <span className="texto-boton">Ingresar</span>
              </Button>
            </div>
          </Card.Footer>
        </Card>
      </Container>
    );
  }
}

export default withRouter(Login);
