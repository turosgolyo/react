import { useEffect, useState } from "react";
import type { Pizza } from "../types/Pizza";
import apiClient, { BACKEND_URL } from "../api/apiClient";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

const AllPizza = () => {
  const [pizzak, setPizzak] = useState<Array<Pizza>>([]);

  useEffect(() => {
    apiClient
      .get("/pizzak")
      .then((res) => setPizzak(res.data))
      .catch((err) => console.error(err));
  }, []);

  const generateCard = (pizza: Pizza) => {
    return (
      <Col>
        <Card style={{ width: "15 rem", margin: "5px" }}>
          <Card.Img
            variant="top"
            src={`${BACKEND_URL}/kepek/${pizza.imageUrl}`}
          />
          <Card.Body>
            <Card.Title>{pizza.nev}</Card.Title>
            <Card.Text>{pizza.leiras}</Card.Text>
                      <Button variant="primary">Kosárba</Button>
          </Card.Body>

        </Card>
      </Col>
    );
  };

  return (
    <Container>
      <Row>{pizzak.map((p) => generateCard(p))}</Row>
    </Container>
  );
};

export default AllPizza;
