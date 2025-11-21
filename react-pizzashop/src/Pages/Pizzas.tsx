import { useEffect, useState } from "react";
import type { Pizza } from "../types/Pizza";
import apiClient from "../api/apiClient";
import { toast } from "react-toastify";
import { Container, Row, Col } from "react-bootstrap";

const Pizzas = () => {
  const [pizzak, setPizzak] = useState<Array<Pizza>>([]);
  useEffect(() => {
    apiClient
      .get("/pizzak")
      .then((res) => setPizzak(res.data))
      .catch((err) => toast.error(err));
  }, []);

  const generateCard = () => {};

  return (
    <>
      <Container></Container>
    </>
  );
};

export default Pizzas;
