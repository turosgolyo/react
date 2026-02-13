import { useEffect, useState } from "react";
import { Button, Card, Carousel, Col, Container, Row } from "react-bootstrap";
import type { Champion } from "../types/Champion";
import apiClient, { BACKEND_URL } from "../api/apiClient";
import { useNavigate, useParams } from "react-router-dom";

const OneChampion = () => {
  const [champion, setChampion] = useState<Champion>();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    apiClient
      .get(`/champions/${id}`)
      .then((res) => setChampion(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h1>{champion?.name}</h1>
          <p>{champion?.description}</p>
          <Button
            variant="primary"
            className="m-2 btn"
            onClick={() => navigate(`/champions/edit/${champion?.id}`)}
          >
            Szerkesztés
          </Button>
          <Button
            variant="warning"
            className="m-2 btn"
            onClick={() => navigate(-1)}
          >
            Vissza
          </Button>
        </Col>
        <Col>
          <ul className="mt-4">
            <li>Role: {champion?.role}</li>
            <li>Lane: {champion?.lane}</li>
            <li>Difficulty: {champion?.difficulty}</li>
            <li>Blue Essence: {champion?.blue_essence}</li>
            <li>Damage Type: {champion?.damage_type}</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default OneChampion;
