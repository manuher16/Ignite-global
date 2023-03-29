import Product from "@/components/product"
import { Container, Col, Row } from "react-bootstrap"
export default function CatalogProducts() {

    const products = []
    for (let i = 0; i < 10; i++) {
        products.push(
            <Col className="my-3" md="3" key={i}>
                <Product />
            </Col>
        )
    }
    return (<>
        <h4>Catalogo</h4>
        <Container>
            <Row>
                {products}
            </Row>
        </Container>
    </>)
}