import { Button, Table } from "react-bootstrap";
import type { Champion } from "../types/Champion";
import { useEffect, useState } from "react";
import apiClient from "../api/apiClient";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

const CreateChampion = () => {
  const [champion, setChampion] = useState<Champion>({
    name: "",
    role: "",
    lane: "",
    difficulty: 1,
    blue_essence: 0,
    damage_type: "",
    description: "",
  });

  const navigate = useNavigate();

  const { id } = useParams();

  const editChampion = (c: Champion) => {
    apiClient
      .put(`/champions/${id}`, c)
      .then(() => toast.success("Sikeres létrehozás"))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    apiClient
      .get(`/champions/${id}`)
      .then((res) => setChampion(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  return (
    <Table>
      <tbody>
        <tr>
          <th>Name</th>
          <td>
            <input
              type="text"
              value={champion.name}
              onChange={(e) =>
                setChampion({ ...champion, name: e.target.value })
              }
            />
          </td>
        </tr>
        <tr>
          <th>Description</th>
          <td>
            <input
              type="text"
              value={champion.description}
              onChange={(e) =>
                setChampion({ ...champion, description: e.target.value })
              }
            />
          </td>
        </tr>
        <tr>
          <th>Role</th>
          <td>
            <input
              type="text"
              value={champion.role}
              onChange={(e) =>
                setChampion({ ...champion, role: e.target.value })
              }
            />
          </td>
        </tr>
        <tr>
          <th>Lane</th>
          <td>
            <input
              type="text"
              value={champion.lane}
              onChange={(e) =>
                setChampion({ ...champion, lane: e.target.value })
              }
            />
          </td>
        </tr>
        <tr>
          <th>Difficulty</th>
          <td>
            <input
              type="number"
              value={champion.difficulty}
              onChange={(e) =>
                setChampion({ ...champion, difficulty: Number(e.target.value) })
              }
            />
          </td>
        </tr>
        <tr>
          <th>Blue Essence</th>
          <td>
            <input
              type="number"
              value={champion.blue_essence}
              onChange={(e) =>
                setChampion({
                  ...champion,
                  blue_essence: Number(e.target.value),
                })
              }
            />
          </td>
        </tr>
        <tr>
          <th>Damage Type</th>
          <td>
            <input
              type="text"
              value={champion.damage_type}
              onChange={(e) =>
                setChampion({ ...champion, damage_type: e.target.value })
              }
            />
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colSpan={2}>
            <Button
              variant="danger"
              className="m-2"
              onClick={() => editChampion(champion)}
            >
              Szerkeszt
            </Button>
            <Button
              variant="warning"
              className="m-2"
              onClick={() => navigate(-1)}
            >
              Vissza
            </Button>
          </td>
        </tr>
      </tfoot>
    </Table>
  );
};

export default CreateChampion;
