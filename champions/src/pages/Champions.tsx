import { useEffect, useState } from "react";
import { Button, Card, Carousel, Col, Container, Row } from "react-bootstrap";
import type { Champion } from "../types/Champion";
import apiClient, { BACKEND_URL } from "../api/apiClient";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Champions = () => {
  const [champions, setChampions] = useState<Array<Champion>>([]);
  const navigate = useNavigate();

  const deleteChampion = (id: number) => {
    apiClient
      .delete(`/champions/${id}`)
      .then(() => toast.success("Sikeres törlés"))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    apiClient
      .get("/champions")
      .then((res) => setChampions(res.data))
      .catch((err) => console.error(err));
  }, [deleteChampion]);

  const generateCard = (c: Champion) => {
    return (
      <Col xl={3}>
        <Card style={{ margin: "20px" }}>
          <Card.Header>
            <Carousel>
              {c.images?.map((i) => {
                return (
                  <Carousel.Item>
                    <img
                      src={`${BACKEND_URL}/images/${i}`}
                      style={{ width: "100%" }}
                    />
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </Card.Header>
          <Card.Body>
            <Card.Title>
              <h2>{c.name}</h2>
            </Card.Title>
            <Card.Text>
              <p>{c.description}</p>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button
              variant="warning"
              className="m-1 btn"
              onClick={() => navigate(`/champions/${c.id}`)}
            >
              Megtekintés
            </Button>
            <Button
              onClick={() => deleteChampion(Number(c.id))}
              variant="danger"
              className="m-1 btn"
            >
              Törlés
            </Button>
          </Card.Footer>
        </Card>
      </Col>
    );
  };

  return (
    <Container fluid>
      <Row>
        <Col>
          <h1>Champions</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button
            variant="primary"
            onClick={() => navigate("/champions/create")}
            className="m-2 btn"
          >
            Létrehozás
          </Button>
        </Col>
      </Row>
      <Row>{champions.map((c) => generateCard(c))}</Row>
    </Container>
  );
};

export default Champions;
