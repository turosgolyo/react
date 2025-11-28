import { useEffect, useState } from "react";
import apiClient from "../api/apiClient";
import type { Car } from "../types/Car";
import { Card, Button, Col, Row } from "react-bootstrap";
import { toast } from "react-toastify";

const AllCars = () => {
  const [cars, setCars] = useState<Array<Car>>([]);
  const [cart, setCart] = useState<Array<Number>>([]);

  useEffect(() => {
    apiClient
      .get("/autok")
      .then((res) => setCars(res.data))
      .catch((err) => console.error(err));
  }, []);

  const generateCard = (car: Car) => (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>
          {car.marka} {car.modell}
        </Card.Title>
        <Card.Text>
          <ul>
            <li>{car.evjarat}</li>
            <li>{car.futas_km}</li>
            <li>{car.uzemanyag}</li>
            <li>{car.valto}</li>
            <li>{car.szin}</li>
            <li>{car.leiras}</li>
          </ul>
        </Card.Text>
        <Button onClick={() => {
            setCart([...cart, Number(car.id)])
            toast.success("Autó kosárba rakva!")
        }} variant="primary">Kosárba</Button>
      </Card.Body>
    </Card>
  );


  return (
    <>
      <Row>
        {cars.map((c) => generateCard(c))}
      </Row>
    </>
  );
};

export default AllCars;
