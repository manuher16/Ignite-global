import Divider from "@/components/divider"
import TextField from "@/components/input"
import { Row, Col } from "react-bootstrap"
export default function Filters() {
    return (
        <div className="d-flex flex-column">
            <div>
                Filtros de busqueda
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


        </div>
    )
}