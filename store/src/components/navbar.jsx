import { FaShoppingCart } from 'react-icons/fa';
import Badge from './badge';
import Link from 'next/link'
export default function Navbar(prps) {
    const styles = {
        navbar_container: {
            position: 'fixed',
            height: "60px",
            top: "0",
            left: "0",
            width: "100%",
            background: "green"
        },
        navbar_container_fixed: {
            top: "-10px",
            position: "relative",
            height: "70px",
            zIndex: "99",
            background: "",
            width: "100vw"
        },
        title_nav: {
            fontSize: "20px",
            fontWeight: "bold",
        }
    }

    return (
        <div style={styles.navbar_container_fixed}>
            <div style={styles.navbar_container} className="d-flex justify-content-between px-3 align-content-center pt-2 ">
                <div style={styles.title_nav}>Store Ignite 1</div>
                <div>
                    <Link href="/cart">
                        <Badge length={10}>
                            <FaShoppingCart size={30} />
                        </Badge>
                    </Link>
                </div>
            </div>
        </div>
    )
}