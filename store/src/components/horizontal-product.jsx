import TextField from "./input";
import Select from "./select";
export default function HorizontalProduct() {
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
                    <img variant="top" src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51uD1lmrV8L.jpg" width="100%" height="150"></img>
                </div>
                <div className="mx-3">
                    <div className="d-flex flex-column">
                        <div>Titulo del articulo</div>
                        <TextField value={0} label="Quantity" />
                        <div>Precio  10,000HNL</div>
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