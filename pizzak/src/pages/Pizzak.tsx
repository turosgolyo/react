import { useEffect, useState } from "react";
import apiClient, { BACKEND_URL } from "../api/apiClient";
import type { Pizza } from "../types/Pizza";
import { useNavigate } from "react-router-dom";
import { Slide, toast, Zoom } from "react-toastify";

const Pizzak = () => {
  const navigate = useNavigate();
  const [pizzak, setPizzak] = useState<Pizza[]>([]);

  useEffect(() => {
    apiClient
      .get("/pizzak")
      .then((response) => setPizzak(response.data))
      .catch((reason) => console.error(reason));
  }, []);

  return (
    <>
      <h1>Pizzák</h1>
      <div className={"center"}>
        <button onClick={() => navigate("/pizzak/letrehoz")}>Feltöltés</button>
        <button onClick={() => toast.success("Success!")}>Toast</button>
      </div>
      {pizzak.map((p) => (
        <div className={"center"}>
          <img src={`${BACKEND_URL}/kepek/${p.imageUrl}`} onClick={() => navigate(`/pizzak/${p.id}`)} width={250} />
          <h2>{p.nev}</h2>
          <div>{p.leiras}</div>
        </div>
      ))}
    </>
  );
};

export default Pizzak;
