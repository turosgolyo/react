import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiClient, { BACKEND_URL } from "../api/apiClient.ts";
import type { Pizza } from "../types/Pizza.ts";
import { toast } from "react-toastify";

const CreatePizza = () => {
  const [nev, setNev] = useState("");
  const [leiras, setLeiras] = useState("");
  const [ar, setAr] = useState(0);
  const [imageUrl, setImageUrl] = useState("");

  return (
    <>
      <h1>Pizza feltöltés</h1>
      <table>
        <tbody>
          <tr>
            <td>Név</td>
            <td>
              <input
                type="text"
                value={nev}
                onChange={(e) => setNev(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>Leírás</td>
            <td>
              <input
                type="text"
                value={leiras}
                onChange={(e) => setLeiras(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>Ár</td>
            <td>
              <input
                type="number"
                value={ar}
                onChange={(e) => setAr(Number(e.target.value))}
              />
            </td>
          </tr>
          <tr>
            <td>Kép</td>
            <td>
              <input
                type="text"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <button
        onClick={() => {
          const p: Pizza = {
            nev,
            leiras,
            ar,
            imageUrl,
          }
          apiClient
            .post("/pizzak", p)
            .then((response) => {
              switch (response.status) {
                case 201:
                  toast.success("Sikeres létrehozás!")
                  break;
                case 400:
                  toast.error("Bad request!")
                  break;
                default:
                  toast.error("Hiba történt!")
                  break;
              }
            })
            .catch((reason) => console.error(reason));
        }}
      >
        Upload
      </button >
    </>
  );
};

export default CreatePizza;
