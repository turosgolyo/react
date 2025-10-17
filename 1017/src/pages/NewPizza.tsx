import { useState } from "react";
import type { Pizza } from "../types/Pizza";
import apiClient from "../api/apiClient.ts";

const NewPizza = () => {
  const [nev, setNev] = useState<string>("");
  const [leiras, setLeiras] = useState<string>("");
  const [ar, setAr] = useState<number>(0);
  const [imageUrl, setImageUrl] = useState<string>("");

  const addPizza = () => {
    const p: Pizza = {
      nev,
      leiras,
      ar,
      imageUrl,
    };

    if (p.ar < 1) {
      alert("Az ár nem lehet kisebb mint 1 Ft!");
    } else {
      apiClient
        .post("/pizzak", p)
        .then((response) => alert(response.status))
        .catch((reason) => alert(reason));
    }
  };

  return (
    <>
      <h1>Új pizza</h1>
      <table>
        <tr>
          <td>Név</td>
          <td>
            <input type="text" onChange={(e) => setNev(e.target.value)} />
          </td>
        </tr>
        <tr>
          <td>Leírás</td>
          <td>
            <input type="text" onChange={(e) => setLeiras(e.target.value)} />
          </td>
        </tr>
        <tr>
          <td>Ár (Ft)</td>
          <td>
            <input
              type="number"
              onChange={(e) => setAr(Number(e.target.value))}
            />
          </td>
        </tr>
        <tr>
          <td>Kép url</td>
          <td>
            <input type="text" onChange={(e) => setImageUrl(e.target.value)} />
          </td>
        </tr>
      </table>
      <button onClick={addPizza}>Hozzáadás</button>
    </>
  );
};

export default NewPizza;
