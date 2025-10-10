import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import type { Pizza } from "../types/Pizza";
import apiClient, { BACKEND_URL } from "../api/apiClient";

const Param = () => {
  const { id } = useParams();
  const [pizza, setPizzak] = useState<Pizza>();

  useEffect(() => {
    apiClient
      .get(`/pizzak/${Number(id)}`)
      .then((response) => setPizzak(response.data))
      .catch((reason) => alert(reason));
  }, []);

  return (
    <>
      <div>
        <h1>{pizza?.nev}</h1>
        <img src={`${BACKEND_URL}/kepek/${pizza?.imageUrl}`} width={300} />
      </div>
    </>
  );
};

export default Param;
