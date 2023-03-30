import { useState } from "react"


export default function Checkbox(props) {
    const label = props.label || ""
    const [value, setValue] = useState(props.value || true)
    const handlerChangeValue = (e) => {
        console.log(e)
        setValue(!e.target.value);
    }
    return (
        <>
            <div className="d-flex justify-content-start align-end" onClick={handlerChangeValue}>
                <input type="checkbox" value={value} />
                <label className="mx-3">{label}</label>
            </div>
        </>
    )
}