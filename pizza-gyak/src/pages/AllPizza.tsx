import { useEffect, useState } from "react";
import type { Pizza } from "../types/Pizza";
import apiClient, { BACKEND_URL } from "../api/apiClient";
import { toast } from "react-toastify";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const AllPizza = () => {
  const [pizzak, setPizzak] = useState<Array<Pizza>>([]);
  const [kosar, setKosar] = useState<Array<number>>(
    JSON.parse(localStorage.getItem("kosar") ?? "[]")
  );
  const navigate = useNavigate();

  useEffect(() => {
    apiClient
      .get("/pizzak")
      .then((response) => setPizzak(response.data))
      .catch((err) => {
        toast.error("vmi nem jo");
        console.error(err);
      });
  }, []);

  useEffect(() => {
    localStorage.setItem("kosar", JSON.stringify(kosar));
  }, [kosar]);

  const generateCard = (p: Pizza) => {
    return (
      <Col>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={`${BACKEND_URL}/kepek/${p.imageUrl}`} />
          <Card.Body>
            <Card.Title>{p.nev}</Card.Title>
            <Card.Text>
              {p.leiras} - {p.ar} Ft
            </Card.Text>
            <Button
              variant="primary"
              onClick={() => navigate(`/pizzak/${p.id}`)}
            >
              Megtekintés
            </Button>
            <Button
              variant="light"
              onClick={() => navigate(`/pizzak/szerkeszt/${p.id}`)}
            >
              Szerkeszt
            </Button>
            <Button
              variant="warning"
              onClick={() => {
                setKosar([...kosar, Number(p.id)]);
                toast.success("Kosárba tétel sikeres");
              }}
            >
              Kosárba
            </Button>
          </Card.Body>
        </Card>
      </Col>
    );
  };
  return (
    <>
      <Container>
        <Row>{pizzak.map((p) => generateCard(p))}</Row>
        <Button variant="primary" onClick={() => navigate("/pizzak/hozzaad")}>
          Hozzáad
        </Button>
        <Button variant="primary" onClick={() => navigate("/kosar")}>
          Kosár
        </Button>
      </Container>
    </>
  );
};
export default AllPizza;
