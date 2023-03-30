import Product from "@/components/product"
import { Container, Col, Row } from "react-bootstrap"
import { useEffect } from "react"
import { getCatalog } from "@/pages/api/product"
import Divider from "@/components/divider"
import Pagination from "@/components/pagination"
export default function CatalogProducts() {

    useEffect(() => {
        getCatalog().then(res => {
            console.log(res)
        })
    }, [])

    const products = []
    for (let i = 0; i < 8; i++) {
        products.push(
            <Col className="my-3" md="3" key={i}>
                <Product />
            </Col>
        )
    }
    return (<>
        <h4>Catalogo</h4>
        <div className="d-flex justify-content-between px-3">
            <div>Articules(14)</div>
            <div> page 1-4</div>
        </div>
        <Divider />
        <div className="px-4">
            <Row>
                {products}
            </Row>
            <Pagination length={5} />
        </div>
    </>)
}