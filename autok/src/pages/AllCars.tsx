import { useEffect, useState } from "react";
import apiClient, { BACKEND_URL } from "../api/apiClient";
import type { Car } from "../types/Car";
import { Card, Button, Col, Row, Carousel } from "react-bootstrap";
import { toast } from "react-toastify";

const AllCars = () => {
  const [cars, setCars] = useState<Array<Car>>([]);
  const [cart, setCart] = useState<Array<Number>>(JSON.parse(localStorage.getItem("cart") ?? "[]"));

  useEffect(() => {
    apiClient
      .get("/autok")
      .then((res) => setCars(res.data))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  const generateCard = (car: Car) => (
    <Card style={{ width: "30vw", margin: "10px"}}>
      <Card.Header>
        <Carousel>
          {car.images?.map((i: string)=> (
            <Carousel.Item style={{ height: "500px"}}>
            <img style={{ objectFit: "fill", width: "100%"}} src={`${BACKEND_URL}/kepek/${i}`} />
          </Carousel.Item>
          ))}
        </Carousel>
      </Card.Header>
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
        <Button
          onClick={() => {
            setCart([...cart, Number(car.id)]);
            toast.success("Autó kosárba rakva!")
          }}
          variant="primary"
        >
          Kosárba
        </Button>
      </Card.Body>
    </Card>
  );

  return (
    <>
      <Row className="justify-content-center">{cars.map((c) => generateCard(c))}</Row>
    </>
  );
};

export default AllCars;
