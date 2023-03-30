import { Card, Row, Col, Button } from "react-bootstrap";
import Snackbar from "./snackbar";
export default function Product(props) {

    const styles = {
        with: "150px",
        height: "auto",
        marginBottom: "10px"
    }
    return (
        <div style={styles}>
            <Card bg="transparent" className="px-0" border="primary" style={styles}>
                <img variant="top" src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51uD1lmrV8L.jpg" width="100%" height="300"></img>
                <Card.Body>
                    <Card.Title>Titulo del producto</Card.Title>
                    <Row>
                        <Col>
                            Precio 13,000HNL
                        </Col>
                        <Col className="text-end">Rating 4.5</Col>
                    </Row>
                    <div className="text-end my-2">

                        <Snackbar message="Prodcuto agregado exitosamente" />
                    </div>
                </Card.Body>
                <Snackbar />
            </Card>
        </div>
    )
}