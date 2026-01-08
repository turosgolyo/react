import { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import apiClient from "../api/apiClient";
import type { Order } from "../types/Order";

const Orders = () => {
  const [orders, setOrders] = useState<Array<Order>>([]);

  useEffect(() => {
    apiClient
      .get("/rendelesek")
      .then((response) => setOrders(response.data))
      .catch((err) => {
        toast.error("vmi nem jo");
        console.error(err);
      });
  }, []);

  return (
    <>
      <Container>
        <Row>
          {orders.map((i) => (
            <h1>
              {i.pizzaId} - {i.mennyiseg}
            </h1>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Orders;
