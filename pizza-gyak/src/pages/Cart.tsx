import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import apiClient from "../api/apiClient";
import type { Pizza } from "../types/Pizza";
import { Button, Table } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";

const Cart = () => {
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

  const removeItem = (searchedIndex: number) => {
    setKosar(kosar.filter((_, index) => index !== searchedIndex));
  };

  return (
    <>
      <Table>
        <thead>
          <th>Nev</th>
          <th>Ar</th>
          <th>Törles</th>
        </thead>
        <tbody>
          {kosar.map((id, index) => {
            const pizza = pizzak.find((p) => p.id == id);
            return (
              <>
                <tr>
                  <td>{pizza?.nev}</td>
                  <td>{pizza?.ar} Ft</td>
                  <td>
                    <Button onClick={() => removeItem(index)} variant="danger">
                      <FaTrash />
                    </Button>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};
export default Cart;
