import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import apiClient, { BACKEND_URL } from "../api/apiClient.ts";
import type { Pizza } from "../types/Pizza.ts";

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
      <div>
        <img src={`${BACKEND_URL}/kepek/${pizza?.imageUrl}`} width={250} />
        <h2>{pizza?.nev}</h2>
        <div>{pizza?.leiras}</div>
        <button onClick={() => navigate(`/pizzak/szerkeszt/${id}`)}>
          Szerkeszt
        </button>
      </div>
    </>
  );
};

export default PizzaId;
