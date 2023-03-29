export default function Badge(props) {
    const children = props.children
    const length = props.length || ''
    const color = props.color || ''

    const styles = {
        span_badge: {
            position: 'fixed',
            backgroundColor: "red",
            borderRadius: "50%",
            width: '20px',
            height: "20px",
            top: "5px",
            right: "5px",
            fontSize: "12px",
            fontWeight: "bold"
        },
        badge_container: {
            margin: "3px"
        }
    }
    return (
        <div style={styles.badge_container}>
            {children}
            <span style={styles.span_badge} className="d-flex justify-content-center align-content-center text-center">{length}</span>
        </div>
    )
}