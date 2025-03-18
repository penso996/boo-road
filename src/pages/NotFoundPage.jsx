// Import functions from React
import { useNavigate } from "react-router-dom";

// useNaviage to go back
export default function NotFoundPage() {
    const navigate = useNavigate();

    // RENDER
    return (
        <div className="notfound">
            <h1>Pagina non trovata</h1>
            <p>404 Not Found</p>
            <button className="return-home" onClick={() => navigate("/")}>
                Torna alla Home
            </button>
        </div>
    );
}