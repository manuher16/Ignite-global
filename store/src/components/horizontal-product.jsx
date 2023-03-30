import { Button } from "react-bootstrap";
import TextField from "./input";
import Select from "./select";
import Link from "next/link";
export default function HorizontalProduct() {

    const styles = {
        stock: {
            display: "block",
            width: "80px",
            borderColor: "green",
            borderWidth: "2px",
            font: "18px ",
            fontWeight: "bold",
            color: "green",
            border: " 3px solid green",
            borderRadius: "50px"
        }
    }
    const methods_shipping = [{
        name: "Express",
    }, {
        name: "Premiun"
    }, {
        name: "Normal"
    }
    ]

    return (
        <div className="d-flex flex-column mx-3 my-3">
            <div className="d-flex flex-row ">
                <div>
                    <img variant="top" src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51uD1lmrV8L.jpg" width="100%" height="180"></img>
                </div>
                <div className="d-flex mx-3">
                    <div className="d-flex flex-column justify-content-between align-content-around">
                        <Link href='/'>
                            <h4 style={{
                                fontWeight: 'bold'
                            }}>Iphone 14 Pro Max 128GB 5G+</h4>
                        </Link>
                        <div style={styles.stock} className="d-flex justify-content-center">
                            In Stock
                        </div>
                        <div>Price  <span style={{ fontWeight: "bold" }}>
                            23,499HNL
                        </span>
                        </div>
                        <div className="d-flex justify-content-between mt-4" >
                            <Button>-</Button>
                            <TextField value={0} label="" />
                            <Button>+</Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="my-3">
                <div>

                </div>
                <div className="d-flex mr-3"><div>
                    Se envia por
                </div>
                    <Select label="Metodo de envio" items={methods_shipping} /> </div>
                <div>Costo de envio envio 250 HNL</div>
            </div>
        </div>
    )
}