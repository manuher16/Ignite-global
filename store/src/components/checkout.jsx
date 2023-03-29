import { Card, Container } from "react-bootstrap";
import Divider from "./divider";

export default function Checkout() {
    return (
        <Container>
            <Card className="my-3" bg="transparent" border="primary" >
                <Card.Body>
                    <div>

                    </div>
                    <Card.Title>Checkout (5)</Card.Title>


                    <div className="d-flex justify-content-around mt-3" >
                        <div>Subtotal</div>
                        <div>10,000 HNL</div>
                    </div>
                    <div className="d-flex justify-content-around" >
                        <div>Tax</div>
                        <div>10,000 HNL</div>
                    </div>
                    <div className="d-flex justify-content-around" >
                        <div>Shipping</div>
                        <div>500 HNL</div>
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