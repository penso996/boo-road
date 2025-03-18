// Import functions from React
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <header>
            <Link to="/"><img src="./public/BuRoad SVG-01.svg" alt="booroad logo" /></Link>
        </header>
    )
}

export default Header;