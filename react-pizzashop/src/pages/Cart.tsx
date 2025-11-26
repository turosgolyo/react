import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import type { Pizza } from "../types/Pizza";
import { Button, Card, Col, Container, Row, Table } from "react-bootstrap";
import apiClient, { baseURL } from "../api/apiClient";
import { FaTrash } from "react-icons/fa";

const Cart = () => {
  const [pizzak, setPizzak] = useState<Array<Pizza>>([]);
  useEffect(() => {
    apiClient
      .get("/pizzak")
      .then((response) => setPizzak(response.data))
      .catch(() => toast.error("A pizzák betöltése sikertelen volt"));
  }, []);

  const [kosar, setKosar] = useState<Array<number>>(
    JSON.parse(localStorage.getItem("cart") ?? "[]")
  );
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(kosar));
  }, [kosar]);

  const removeItem = (searchedIndex: number) => {
    setKosar(kosar.filter((_, index) => index != searchedIndex));
    toast.success("Sikeres törlés!");
  };

  const generateCard = (p: Pizza) => {
    return (
      <Col>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={`${baseURL}/kepek/${p.imageUrl}`} />
          <Card.Body>
            <Card.Title>{p.nev}</Card.Title>
            <Card.Text>{p.leiras}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
  };

  return (
    <Table striped bordered>
      <thead>
        <th>Név</th>
        <th>Ár</th>
        <th>Törlés</th>
      </thead>
      <tbody>
        {kosar.map((value, index) => {
          const pizza = pizzak.find((p) => p?.id == value);
          return (
            <tr>
              <td>{pizza?.nev}</td>
              <td>{pizza?.ar} Ft</td>
              <td>
                <Button variant="danger" onClick={() => removeItem(index)}>
                  <FaTrash />
                </Button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};
export default Cart;
