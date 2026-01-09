import { useState, useEffect } from "react";
import { Container, Row, Table } from "react-bootstrap";
import apiClient from "../api/apiClient";
import type { Order } from "../types/Order";
import type { Pizza } from "../types/Pizza";

const Orders = () => {
  const [orders, setOrders] = useState<Array<Order>>([]);
  const [pizzak, setPizzak] = useState<Array<Pizza>>([]);

  useEffect(() => {
    apiClient
      .get("/rendelesek")
      .then((response) => setOrders(response.data))
      .catch((err) => {
        console.error(err);
      });

    apiClient
      .get("/pizzak")
      .then((response) => setPizzak(response.data))
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return localStorage.getItem("credentials") ? (
    <Container>
      <Table>
        <thead>
          <th>Pizza</th>
          <th>Mennyiseg</th>
          <th>Ar</th>
        </thead>
        <tbody>
          {orders.map((i) => {
            const pizza = pizzak.find((p) => p.id == i.pizzaId);
            return (
              <tr>
                <td>{pizza?.nev}</td>
                <td>{i.mennyiseg} db</td>
                <td>{(pizza?.ar) * (i.mennyiseg)} Ft</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  ) : (
    <Container>
      <h1>Nem vagy bejelentkezve</h1>
    </Container>
  );
};

export default Orders;
