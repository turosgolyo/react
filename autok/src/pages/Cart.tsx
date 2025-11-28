import { useState, useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import apiClient from "../api/apiClient";
import type { Car } from "../types/Car";
import { toast } from "react-toastify";
import { FaTrash } from "react-icons/fa";

const Cart = () => {
  const [cars, setCars] = useState<Array<Car>>([]);
  const [cart, setCart] = useState<Array<Number>>(JSON.parse(localStorage.getItem("cart") ?? "[]"));

  useEffect(() => {
    apiClient
      .get("/autok")
      .then((res) => setCars(res.data))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const removeItem = (searchedIndex: number) => {
    setCart(cart.filter((_, index) => index != searchedIndex));
    toast.success("Sikeres törlés!");
  };
  return (
    <>
      <Table>
        <thead>
          <tr>
            <th>Márka</th>
            <th>Modell</th>
            <th>Ár</th>
            <th>Törlés</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((value, index) => {
            const car = cars.find((c) => c.id == value);
            return (
              <tr>
                <td>{car?.marka}</td>
                <td>{car?.modell}</td>
                <td>{car?.ar} Ft</td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => removeItem(index)}
                  >
                    <FaTrash/>
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <Button onClick={() => {
        setCart([]);
      }} variant="warning">Kosár kiürítése</Button>
    </>
  );
};

export default Cart;
