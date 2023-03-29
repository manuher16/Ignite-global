export default function Divider() {
    const styles = {
        divider_container: {
            backgroundColor: "white",
            height: "0.004rem",
            width: "100%",
            borderRadius: "50%",
            marginTop: "8px",
            marginBottom: "15px",
        }
    }
    return (
        <div style={styles.divider_container}></div>
    )
}