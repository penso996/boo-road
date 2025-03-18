import { useParams } from "react-router-dom";
import { useContext } from "react";
import { TravelsContext } from "../contexts/TravelsContext";
import { Link } from "react-router-dom";

export default function TravelerDetailPage() {
    const { id } = useParams();
    const { travels } = useContext(TravelsContext);

    const traveler = travels
        .flatMap(travel => travel.travelers) 
        .find(traveler => traveler.id === parseInt(id));

    if (!traveler) {
        return <p>Viaggiatore non trovato.</p>;
    }

    return (
        <div className="traveler-detail">
            <h1>{traveler.name} {traveler.surname}</h1>
            <p><strong>Email:</strong> {traveler.email}</p>
            <p><strong>Telefono:</strong> {traveler.phone}</p>
            <p><strong>Codice Fiscale:</strong> {traveler.fiscalCode}</p>
            <Link to="/">Torna alla Home</Link>
        </div>
    );
}
