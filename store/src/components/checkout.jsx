import { Card } from "react-bootstrap";

export default function Checkout() {
    return (
        <>
            <Card className="ma-3">
                <Card.Body>
                    <Card.Title>Checkout</Card.Title>

                    <Card.Text></Card.Text>
                    <Card.Text></Card.Text>
                    <div className="d-flex" >
                        <div>Total</div>
                        <div>10,000 HNL</div>
                    </div>
                </Card.Body>
            </Card>
        </>
    )
}