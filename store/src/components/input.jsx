export default function TextField(props) {
    const styles = {
        input: {
            textDecoration: "none",
            boderWidth: "0",
            border: "none",
            background: "transparent",
            width: "100%",

        },
        input_container: {
            position: "relative",
            height: "auto",
            width: props.width || "70px",
            boderWidth: "2px",
            borderColor: props.bg || 'transparent',
            background: props.bg || 'transparent',
            border: "1px solid",
            borderColor: "white",
            borderRadius: "1px"
        },
        input_label: {
            fontSize: "12px",
        }
    }

    const label = props.label || null
    const value = props.value || null
    const placeholder = props.placeholder || null
    return (
        <div style={styles.input_container} className="d-flex  flex-column justify-content-center px-2 mx-2">
            {(label ? <span style={styles.input_label}>{label}</span> : '')}
            <input style={styles.input} className="mb-2" placeholder={placeholder} value={value}></input>
        </div>
    )
}