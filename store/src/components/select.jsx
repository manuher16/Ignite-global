import React, { useState } from "react";


export default function Select(props) {
    const [selectedOption, setSelectedOption] = useState("");
    const items = props.items || [];
    const label = props.label || ''
    const options = items.map((e, i) => <option key={i} value={e.name}>{e.name}</option>)
    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div className="d-flex mx-3">
            <select id="select-options" value={options[0].name} onChange={handleSelectChange}>

                {options}
            </select>
        </div>
    );
}
