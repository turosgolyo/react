import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import apiClient, { BACKEND_URL } from "../api/apiClient";
import type { Pizza } from "../types/Pizza";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Card, Col } from "react-bootstrap";

const OnePizza = () => {
  const [pizza, setPizza] = useState<Pizza>();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    apiClient
      .get(`/pizzak/${id}`)
      .then((response) => setPizza(response.data))
      .catch((err) => {
        toast.error("vmi nem jo");
        console.error(err);
      });
  }, []);
  return (
    <>
      <Col>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src={`${BACKEND_URL}/kepek/${pizza?.imageUrl}`}
          />
          <Card.Body>
            <Card.Title>{pizza?.nev}</Card.Title>
            <Card.Text>{pizza?.leiras}</Card.Text>
            <Button variant="danger" onClick={() => navigate(`/pizzak`)}>
              Vissza
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default OnePizza;
