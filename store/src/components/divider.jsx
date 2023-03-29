export default function Divider(props) {
    const styles = {
        divider_container: {
            backgroundColor: "white",
            height: "1px",
            width: props.inset ? '90%' : '100%',
            borderRadius: "50px",
            marginTop: "8px",
            marginBottom: "15px",
        }
    }
    return (
        <div style={styles.divider_container}></div>
    )
}