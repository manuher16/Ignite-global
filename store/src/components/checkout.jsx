import { Card, Container } from "react-bootstrap";
import Divider from "./divider";

export default function Checkout() {
    return (
        <Container>
            <Card className="my-3" bg="transparent" border="primary" >
                <Card.Body>
                    <Card.Title>Checkout</Card.Title>

                    <Card.Text></Card.Text>
                    <Card.Text></Card.Text>
                    <div className="d-flex justify-content-around" >
                        <div>subtotal</div>
                        <div>10,000 HNL</div>
                    </div>
                    <div className="d-flex justify-content-around" >
                        <div>Tax</div>
                        <div>10,000 HNL</div>
                    </div>
                    <Divider />
                    <div className="d-flex justify-content-around" >
                        <div>Total</div>
                        <div>10,000 HNL</div>
                    </div>
                </Card.Body>
            </Card>
        </Container>
    )
}