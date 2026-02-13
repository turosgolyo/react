import { useState } from "react";
import {
  Button,
  Col,
  Container,
  FloatingLabel,
  Form,
  Row,
} from "react-bootstrap";
import type { User } from "../types/User";
import apiClient from "../api/apiClient";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState<User>({ username: "", password: "" });

  const navigate = useNavigate();

  const submitLogin = () => {
    apiClient
      .post("/login", user)
      .then(() => {
        localStorage.setItem("credentials", JSON.stringify(user));
        toast.success("Sikeres bejelentkezés");
        navigate("/champions");
      })
      .catch((err) => {
        console.error(err);
        toast.error("Hibás felhasználónév vagy jelszó");
      });
  };
  return (
    <Container>
      <Row>
        <Col>
          <h1
            className="mt-5
          "
          >
            Login
          </h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <FloatingLabel label={"Username"}>
            <Form.Control
              className="mt-3"
              type="text"
              onChange={(e) => setUser({ ...user, username: e.target.value })}
            />
          </FloatingLabel>
        </Col>
      </Row>
      <Row>
        <Col>
          <FloatingLabel label={"Password"}>
            <Form.Control
              className="mt-3"
              type="password"
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </FloatingLabel>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button variant="primary" className="mt-3" onClick={submitLogin}>
            Submit
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
