import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Main = () => {
    const navigate = useNavigate()

    return <>
        <Container fluid>
            <Row className="">
                <Col>
                    <h1>Főoldal</h1>
                </Col>
                <Row>
                    <Col>
                        <Button onClick={() => navigate("/pizzak")} variant="dark">Összes pizza megtekintése</Button>
                        <Button onClick={() => navigate("/pizzak/hozzaadas")}variant="dark">Pizza hozzáadása</Button>
                    </Col>
                </Row>

            </Row>
        </Container>
    </>
}

export default Main