import { useEffect, useState } from "react";
import type { Pizza } from "../types/Pizza";
import apiClient, { BACKEND_URL } from "../api/apiClient";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { toast } from "react-toastify";

const AllPizza = () => {
  const [pizzak, setPizzak] = useState<Array<Pizza>>([]);
  const [kosar, setKosar] = useState<Array<number>>(
    JSON.parse(localStorage.getItem("kosar") ?? "[]")
  );

  useEffect(() => {
    apiClient
      .get("/pizzak")
      .then((res) => setPizzak(res.data))
      .catch((err) => {
        toast.error("Hiba a betöltés során!");
        console.error(err);
      });
  }, []);

  useEffect(() => {
    localStorage.setItem("kosar", JSON.stringify(kosar));
  }, [kosar]);

  const generateCard = (pizza: Pizza) => {
    return (
      <Col>
        <Card style={{ width: "200px", margin: "5px" }}>
          <Card.Img
            variant="top"
            src={`${BACKEND_URL}/kepek/${pizza.imageUrl}`}
          />
          <Card.Body>
            <Card.Title>{pizza.nev}</Card.Title>
            <Card.Text>{pizza.leiras}</Card.Text>
            <Button
              onClick={() => addToCart(Number(pizza.id))}
              variant="primary"
            >
              Kosárba
            </Button>
          </Card.Body>
        </Card>
      </Col>
    );
  };

  const addToCart = (id: Number) => {
    setKosar([...kosar, Number(id)]);
    toast.success("Sikeres kosárba rakás!");
  };

  return (
    <Container>
      <Row>{pizzak.map((p) => generateCard(p))}</Row>
    </Container>
  );
};

export default AllPizza;
