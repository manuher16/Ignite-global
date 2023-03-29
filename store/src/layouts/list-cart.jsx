import Divider from "@/components/divider"
import Product from "@/components/horizontal-product"
import { Col, Row } from "react-bootstrap"
export default function ListCart(props) {
    const products = []
    for (let i = 0; i < 8; i++) {
        products.push(<>
            <Row key={i}>
                <Col>
                    <Product />
                </Col>
            </Row>
            <div className="d-flex justify-content-center">
                <Divider inset={true} />
            </div>
        </>
        )
    }
    return (
        <div className="d-flex flex-column" >
            <div className="d-flex justify-content-between">
                <div>Total articulos</div>
                <div>(6)</div>
            </div>
            <Divider />
            <div>
                {products}
            </div>
        </div>
    )
}