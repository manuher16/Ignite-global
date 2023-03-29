import { Row, Col } from "react-bootstrap"
import CatalogProducts from "./catalog"
import { getCatalog } from "@/pages/api/product"
import _axios from "@/common/axios"
import { useState, useEffect } from 'react'
import Filters from "./filters"
export default function HomeView() {
    const [products, setProducts] = useState()
    useEffect(() => {
        getCatalog().then(res => setProducts(res.data))
        console.log(products)
    }, [])
    return (
        <>
            <h1>Tienda ecomerce</h1>
            <Row>
                <Col>
                    <Filters /></Col>
                <Col md={10}>
                    <CatalogProducts />
                    {products}
                </Col>
            </Row>
        </>
    )
}