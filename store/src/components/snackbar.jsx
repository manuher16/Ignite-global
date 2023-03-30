import { useState } from "react"
import { Button } from "react-bootstrap"

export default function Snackbar(props) {
    const [show, setShow] = useState(props.show || false)
    const styles = {
        snack_container: {
            position: 'fixed',
            width: "100%",
            minHeight: "50px",
            bottom: "15px",
            left: "0px",

        },
        snack_container_message: {
            background: "green",
            maxWidth: "auto",
            color: "white",
            height: "auto",
            borderRadius: "25px",
            padding: "10px",
        }
    }
    const [timeout, settimeout] = useState(props.timeout || 3000)
    const [message, setMessage] = useState(props.message || null)
    function handlerShow() {
        setShow(true)
        setTimeout(() => setShow(false), timeout)
    }
    return (
        <>
            <Button onClick={handlerShow}>Add</Button>
            {show ? (<div style={styles.snack_container} className="d-flex justify-content-center" >
                <div style={styles.snack_container_message} className="d-flex justify-content-center align-content-center">
                    <span className="text-center">
                        {props.message}
                    </span>
                </div>
            </div >) : null}
        </>
    )
}