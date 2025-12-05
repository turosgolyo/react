import { useEffect, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import type { Pizza } from "../types/Pizza";
import apiClient from "../api/apiClient";
import { toast } from "react-toastify";

const Cart = () => {
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

  const removePizza = (searchedIndex: number) => {
    setKosar(kosar.filter((_, index) => searchedIndex != index));
    toast.success("Törlés sikeres!");
  };

  return (
    <Container>
      <Table>
        <thead>
          <th>Név</th>
          <th>Ár</th>
          <th>Törlés</th>
        </thead>
        <tbody>
          {kosar.map((value, index) => {
            const pizza = pizzak.find((p) => p.id == value);
            return (
              <tr>
                <td>{pizza?.nev}</td>
                <td>{pizza?.ar}</td>
                <td>
                  <Button onClick={() => removePizza(index)} variant="danger">
                    Törlés
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};

export default Cart;
