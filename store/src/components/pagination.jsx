export default function Pagination(props) {
    const pages = []
    const length = props.length || 1
    for (let i = 0; i < length; i++) {
        pages.push(
            <div key={i}>

                {i + 1}
            </div>
        )
    }
    return (
        <div className="d-flex jus">
            {pages}
        </div>
    )
}