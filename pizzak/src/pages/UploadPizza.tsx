import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiClient, { BACKEND_URL } from "../api/apiClient.ts";
import type { Pizza } from "../types/Pizza.ts";

const UploadPizza = () => {
  useEffect(() => {
    if (id!) {
      apiClient
        .get(`pizzak/${id}`)
        .then((response) => setPizza(response.data))
        .catch((reason) => alert(reason));
      console.log(pizza);
    }
  }, []);

  const [pizza, setPizza] = useState<Pizza>();
  const { id } = useParams();
  const [nev, setNev] = useState(pizza?.nev);
  const [leiras, setLeiras] = useState(pizza?.leiras);
  const [ar, setAr] = useState(pizza?.ar);
  const [imageUrl, setImageUrl] = useState(pizza?.imageUrl);

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
          apiClient
            .post("/pizzak", {
              nev: nev,
              leiras: leiras,
              ar: ar,
              imageUrl: imageUrl,
            })
            .then((response) => alert(response.status))
            .catch((reason) => alert(reason));
        }}
      >
        Upload
      </button>
    </>
  );
};

export default UploadPizza;
