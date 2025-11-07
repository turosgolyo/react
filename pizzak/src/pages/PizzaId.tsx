import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import apiClient, { BACKEND_URL } from "../api/apiClient.ts";
import type { Pizza } from "../types/Pizza.ts";
import { toast } from "react-toastify";

const PizzaId = () => {
  const { id } = useParams();
  const [pizza, setPizza] = useState<Pizza>();
  const navigate = useNavigate();

  useEffect(() => {
    apiClient
      .get(`/pizzak/${id}`)
      .then((response) => setPizza(response.data))
      .catch((reason) => alert(reason));
  }, []);
  return (
    <>
      <div className="center">
        <img src={`${BACKEND_URL}/kepek/${pizza?.imageUrl}`} width={250} />
        <h2>{pizza?.nev}</h2>
        <div>{pizza?.leiras}</div>
        <button onClick={() => navigate(`/pizzak/szerkeszt/${id}`)}>
          Szerkeszt
        </button>
        <button onClick={() => {
          apiClient.delete(`/pizzak/${id}`).then((response) => {
            switch (response.status) {
              case 200:
                toast.success("Sikeres törlés!")
                break;
              case 400:
                toast.error("Bad request!")
                break;
              default:
                toast.error("Hiba történt!")
                break
            }
          })
            .catch((reason) => console.error(reason));
        }}>
          Törlés
        </button>
      </div>
    </>
  );
};

export default PizzaId;
