import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiClient, { BACKEND_URL } from "../api/apiClient";
import { toast } from "react-toastify";
import type { Car } from "../types/Car";
import { Carousel, Container } from "react-bootstrap";

const OneCar = () => {
  const { id } = useParams();
  const [car, setCar] = useState<Car>();

  useEffect(() => {
    apiClient
      .get(`/autok/${id}`)
      .then((res) => setCar(res.data))
      .catch((err) => toast.error(err));
  }, []);
  return (
    <>
      <Container>
        <Carousel>
          {car?.images.map((url) => (
            <Carousel.Item>
              <img src={`${BACKEND_URL}/kepek/${url}`} height={500} />
              <Carousel.Caption>
                <h3>Szia</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </>
  );
};

export default OneCar;
