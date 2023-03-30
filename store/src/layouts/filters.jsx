import Divider from "@/components/divider"
import TextField from "@/components/input"
import { Row, Col } from "react-bootstrap"
import Checkbox from "@/components/checkbox"
export default function Filters() {
    return (
        <div className="d-flex flex-column mx-2">
            <div>
                Filtros
            </div>
            <Divider />
            Price
            <div className="d-flex">
                <TextField label="Min" placeholder="0" />
                <div>
                </div>
                <div>
                    <TextField label="Max" placeholder="10,000" />
                </div>
            </div>
            Brands
            <div className="d-flex flex-column">
                <Checkbox label="Samsung" />
                <Checkbox label="Sony" />
                <Checkbox label="Xiomi" />
            </div>


        </div>
    )
}