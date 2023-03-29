import { Col, Container, Row } from "react-bootstrap";
import Navbar from "@/components/navbar";
import Checkout from "@/components/checkout";
import styles from '@/styles/Home.module.css'
export default function Cart() {
    return (
        <Container>
            <h1>
                Carrito Compras
            </h1>
            <Row className="d-flex">
                <Col ></Col>
                <Col md="3"><Checkout /></Col>
            </Row>

        </Container>
    )
}