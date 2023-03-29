import { Col, Container, Row } from "react-bootstrap";
import Navbar from "@/components/navbar";
import Checkout from "@/components/checkout";
export default function Cart() {
    return (
        <amin>

            <Container className="">
                Carrito Compras
                <Row>
                    <Col><Checkout /></Col>
                    <Col md="2"></Col>
                </Row>

            </Container>
        </amin>
    )
}