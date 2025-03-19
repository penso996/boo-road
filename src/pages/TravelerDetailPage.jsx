// Import functions from React
import { useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

// Import context
import GlobalContext from "../contexts/GlobalContext";

export default function TravelerDetail() {

    // useNaviage to go back
    const navigate = useNavigate();

    const { trips } = useContext(GlobalContext);
    // Read URL from ID
    const { id } = useParams();

    const [traveler, setTraveler] = useState(null);

    useEffect(() => {
        // Find Trip and Traveler by ID
        const trip = trips.find(travel => travel.travelers.some(t => t.id === parseInt(id)));
        const travelerDetail = trip?.travelers.find(t => t.id === parseInt(id));
        setTraveler(travelerDetail);
    }, [id, trips]);

    // Wait to load a traveler
    if (!traveler) {
        return <p>Caricamento...</p>;
    }

    // RENDER
    return (
        <main>
            <div className="traveler-page">
                <h1>{traveler.name} {traveler.surname}</h1>
                <p>Codice Fiscale: <b>{traveler.fiscalCode}</b></p>
                <p>&nbsp;</p>
                <a href={`tel:${traveler.phone}`}>Chiama: <b>{traveler.phone}</b></a>
                {/* testing (phone formatting doesn't work*/}
                <a href={`https://wa.me/${traveler.phone}`} target="_blank" rel="noopener noreferrer">
                    <b>Chatta su WhatsApp</b>
                </a>
                {/* testing */}
                <a href={`mailto:${traveler.email}`}><b>Invia Email</b></a>
                <a className="back-button" onClick={() => navigate(-1)}>Indietro</a>
            </div>
        </main>
    );
}