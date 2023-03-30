export default function Pagination(props) {
    const styles = {
        card_page: {
            width: "35px",
            height: "35px",
            background: "blue",
            marginLeft: "10px",
            marginRight: "10px",
            borderRadius: "10px",
            fontSize: "22px"
        }
    }
    const pages = []

    const length = props.length || 1
    for (let i = 0; i < length; i++) {
        pages.push(
            <div key={i} style={styles.card_page} className="d-flex justify-content-center my-3">
                {i + 1}
            </div>
        )
    }
    return (
        <div className="d-flex justify-content-center">
            {pages}
        </div>
    )
}